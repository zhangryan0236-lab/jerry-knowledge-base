from __future__ import annotations

from contextlib import asynccontextmanager
from pathlib import Path
from uuid import uuid4

from fastapi import FastAPI, HTTPException
from fastapi.responses import FileResponse
from fastapi.staticfiles import StaticFiles
from fastapi.middleware.cors import CORSMiddleware

from .archive import archive_chat, archive_organized, archive_raw
from .brain import reply_as_adviser
from .config import get_settings
from .graph import build_review_graph
from .progress import create_project, list_projects, sync_review_mentions, update_project
from .schemas import ChatCreateRequest, ChatMessageRequest, ChatSummary, ChatView, CreateReviewRequest, ProjectCreate, ProjectUpdate, ProjectView, ReplyRequest, ReviewSummary, ThreadView
from .store import ThreadStore


settings = get_settings()
store = ThreadStore(settings.database_path)
graph = build_review_graph(settings)
FRONTEND_DIR = Path(__file__).resolve().parents[2] / "frontend"


@asynccontextmanager
async def lifespan(_: FastAPI):
    store.initialize()
    yield


app = FastAPI(title="复盘军师 Agent", version="0.1.0", lifespan=lifespan)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://127.0.0.1:3000", "http://localhost:3000", "http://127.0.0.1:5173", "http://localhost:5173"],
    allow_methods=["*"],
    allow_headers=["*"],
)
app.mount("/assets", StaticFiles(directory=FRONTEND_DIR), name="assets")


def to_view(thread: dict) -> ThreadView:
    return ThreadView(
        thread_id=thread["id"], review_date=thread["review_date"], phase=thread["phase"],
        raw_text=thread["raw_text"],
        response=thread["response"], question=thread["question"],
        raw_archive_path=thread["raw_archive_path"], organized_archive_path=thread["organized_archive_path"],
        progress_note=thread.get("progress_note"),
        dialogue=thread["dialogue"],
    )


def chat_context() -> str:
    review_lines = [f"- {item['review_date']}：{item['raw_text'].replace(chr(10), ' ')[:180]}" for item in store.list_recent(7)]
    project_lines = [f"- {item['name']}：下一步 {item.get('next_action') or '未拆分'}" for item in list_projects(settings)[:5]]
    return "近期复盘：\n" + ("\n".join(review_lines) or "（暂无）") + "\n\n近期项目：\n" + ("\n".join(project_lines) or "（暂无）")


@app.get("/health")
def health() -> dict[str, str]:
    return {"status": "ok", "storage": str(settings.data_dir)}


@app.get("/")
def dashboard() -> FileResponse:
    return FileResponse(FRONTEND_DIR / "index.html")


@app.post("/api/reviews", response_model=ThreadView)
def create_review(payload: CreateReviewRequest) -> ThreadView:
    thread_id = f"rvw_{uuid4().hex}"
    raw_path = archive_raw(settings, payload.date, thread_id, payload.raw_text)
    progress_note = sync_review_mentions(settings, payload.date, payload.raw_text)
    thread = store.create(payload.date, payload.raw_text, str(raw_path), thread_id, progress_note)
    state = graph.invoke({"raw_text": thread["raw_text"], "dialogue": [], "phase": "new", "reply": None})
    thread = store.update(
        thread["id"], response=state["response"], question=state["question"], dialogue=state["dialogue"]
    )
    return to_view(thread)


@app.post("/api/reviews/{thread_id}/reply", response_model=ThreadView)
def reply_to_review(thread_id: str, payload: ReplyRequest) -> ThreadView:
    thread = store.get(thread_id)
    if thread is None:
        raise HTTPException(status_code=404, detail="复盘线程不存在")
    if thread["phase"] == "organized":
        raise HTTPException(status_code=409, detail="这份复盘已整理归档，请新建复盘线程")
    state = graph.invoke(
        {
            "raw_text": thread["raw_text"], "dialogue": thread["dialogue"], "phase": "awaiting_reply",
            "question": thread["question"], "reply": payload.text,
        }
    )
    changes = {"response": state["response"], "question": state["question"], "dialogue": state["dialogue"]}
    if state["ready_to_organize"]:
        changes["phase"] = "organized"
        draft = dict(thread)
        draft.update(changes)
        changes["organized_archive_path"] = str(archive_organized(settings, draft))
    thread = store.update(thread_id, **changes)
    return to_view(thread)


@app.get("/api/reviews/{thread_id}", response_model=ThreadView)
def get_review(thread_id: str) -> ThreadView:
    thread = store.get(thread_id)
    if thread is None:
        raise HTTPException(status_code=404, detail="复盘线程不存在")
    return to_view(thread)


@app.get("/api/reviews", response_model=list[ReviewSummary])
def list_reviews() -> list[dict]:
    return [
        {
            "thread_id": item["id"],
            "review_date": item["review_date"],
            "phase": item["phase"],
            "summary": item["raw_text"].replace("\n", " ")[:96],
        }
        for item in store.list_recent()
    ]


@app.get("/api/chats", response_model=list[ChatSummary])
def list_chats() -> list[dict]:
    return store.list_chats()


@app.get("/api/chats/{chat_id}", response_model=ChatView)
def get_chat(chat_id: str) -> dict:
    chat = store.get_chat(chat_id)
    if chat is None:
        raise HTTPException(status_code=404, detail="军师对话不存在")
    return chat


@app.post("/api/chats", response_model=ChatView)
def create_chat(payload: ChatCreateRequest) -> dict:
    chat = store.create_chat(payload.text)
    store.append_chat_message(chat["id"], "user", payload.text)
    current = store.get_chat(chat["id"])
    assert current is not None
    store.append_chat_message(chat["id"], "assistant", reply_as_adviser(settings, current["messages"], chat_context()))
    current = store.get_chat(chat["id"])
    assert current is not None
    archive_chat(settings, current)
    return current


@app.post("/api/chats/{chat_id}/messages", response_model=ChatView)
def send_chat_message(chat_id: str, payload: ChatMessageRequest) -> dict:
    chat = store.get_chat(chat_id)
    if chat is None:
        raise HTTPException(status_code=404, detail="军师对话不存在")
    store.append_chat_message(chat_id, "user", payload.text)
    current = store.get_chat(chat_id)
    assert current is not None
    store.append_chat_message(chat_id, "assistant", reply_as_adviser(settings, current["messages"], chat_context()))
    current = store.get_chat(chat_id)
    assert current is not None
    archive_chat(settings, current)
    return current


@app.get("/api/projects", response_model=list[ProjectView])
def get_projects() -> list[dict]:
    return list_projects(settings)


@app.post("/api/projects", response_model=ProjectView)
def add_project(payload: ProjectCreate) -> dict:
    return create_project(settings, payload.model_dump())


@app.patch("/api/projects/{project_id}", response_model=ProjectView)
def patch_project(project_id: str, payload: ProjectUpdate) -> dict:
    project = update_project(settings, project_id, payload.model_dump())
    if project is None:
        raise HTTPException(status_code=404, detail="项目不存在")
    return project
