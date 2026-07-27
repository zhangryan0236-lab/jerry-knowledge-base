from __future__ import annotations

from typing import Literal, TypedDict

from langgraph.graph import END, START, StateGraph

from .brain import ask_one_question
from .config import Settings


class ReviewState(TypedDict, total=False):
    raw_text: str
    dialogue: list[dict[str, str]]
    reply: str | None
    phase: Literal["new", "awaiting_reply"]
    response: str
    question: str | None
    ready_to_organize: bool


def build_review_graph(settings: Settings):
    def run_turn(state: ReviewState) -> ReviewState:
        dialogue = list(state.get("dialogue", []))
        reply = state.get("reply")
        if state.get("phase") == "awaiting_reply" and reply:
            previous_question = state.get("question") or "（未保存的问题）"
            dialogue.append({"question": previous_question, "answer": reply})
        turn = ask_one_question(settings, state["raw_text"], dialogue, reply)
        return {
            "dialogue": dialogue,
            "response": turn.response,
            "question": turn.next_question,
            "ready_to_organize": turn.ready_to_organize,
        }

    graph = StateGraph(ReviewState)
    graph.add_node("run_turn", run_turn)
    graph.add_edge(START, "run_turn")
    graph.add_edge("run_turn", END)
    return graph.compile()
