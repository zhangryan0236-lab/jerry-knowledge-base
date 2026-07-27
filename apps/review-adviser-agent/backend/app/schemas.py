from __future__ import annotations

from typing import Literal

from pydantic import BaseModel, Field


class CreateReviewRequest(BaseModel):
    date: str = Field(pattern=r"^\d{4}-\d{2}-\d{2}$")
    raw_text: str = Field(min_length=1, max_length=20000)


class ReplyRequest(BaseModel):
    text: str = Field(min_length=1, max_length=10000)


class QuestionTurn(BaseModel):
    response: str = Field(description="对用户事实与感受的简短回应")
    next_question: str | None = Field(default=None, description="一次只允许一个问题")
    ready_to_organize: bool = False


class ThreadView(BaseModel):
    thread_id: str
    review_date: str
    phase: Literal["awaiting_reply", "organized"]
    response: str
    question: str | None
    raw_archive_path: str
    organized_archive_path: str | None = None
    progress_note: str | None = None
    dialogue: list[dict[str, str]]


class ReviewSummary(BaseModel):
    thread_id: str
    review_date: str
    phase: str
    summary: str


class ProjectCreate(BaseModel):
    name: str = Field(min_length=1, max_length=120)
    goal: str = ""
    deadline: str | None = None
    stage: str = "未拆分"
    next_action: str = ""
    estimate_days: int | None = Field(default=None, ge=1, le=365)
    current_question: str = ""


class ProjectUpdate(BaseModel):
    goal: str | None = None
    deadline: str | None = None
    stage: str | None = None
    next_action: str | None = None
    estimate_days: int | None = Field(default=None, ge=1, le=365)
    status: Literal["active", "blocked", "delayed", "done"] | None = None
    blocker: str | None = None
    current_question: str | None = None


class ProjectView(BaseModel):
    id: str
    name: str
    goal: str
    deadline: str | None
    stage: str
    next_action: str
    estimate_days: int | None
    status: Literal["active", "blocked", "delayed", "done"]
    blocker: str | None
    current_question: str
    evidence: list[dict[str, str]]
