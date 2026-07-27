from __future__ import annotations

from contextlib import asynccontextmanager
from pathlib import Path
from uuid import uuid4

from fastapi import FastAPI, HTTPException
from fastapi.responses import FileResponse
from fastapi.staticfiles import StaticFiles

from .archive import archive_organized, archive_raw
from .config import get_settings
from .graph import build_review_graph
from .progress import create_project, list_projects, sync_review_mentions, update_project
from .schemas import CreateReviewRequest, ProjectCreate, ProjectUpdate, ProjectView, ReplyRequest, ThreadView
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
app.mount("/assets", StaticFiles(directory=FRONTEND_DIR), name="assets")


def to_view(thread: dict) -> ThreadView:
    return ThreadView(
        thread_id=thread["id"], review_date=thread["review_date"], phase=thread["phase"],
        response=thread["response"], question=thread["question"],
        raw_archive_path=thread["raw_archive_path"], organized_archive_path=thread["organized_archive_path"],
        progress_note=thread.get("progress_note"),
        dialogue=thread["dialogue"],
    )


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
