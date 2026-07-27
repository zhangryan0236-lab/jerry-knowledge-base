from __future__ import annotations

from .config import Settings
from .schemas import QuestionTurn


SYSTEM_PROMPT = """你是 Jerry 的复盘军师。只基于用户提供的事实回应。
规则：先简短回应事实与感受；一次只问一个信息增益最高的问题；
不要提前诊断、不要下人格结论、不要一次给多个建议。若信息已经足够或用户说“整理吧”，ready_to_organize=true。"""


def _fallback_turn(raw_text: str, dialogue: list[dict[str, str]], reply: str | None = None) -> QuestionTurn:
    source = reply or raw_text
    response = "我先把这段经历记下来了。现在我不急着解释原因，先补一个会改变理解的事实。"
    question = "在你刚提到的事情里，哪一个具体时刻最影响你明天能否顺利开始？"
    if dialogue:
        response = "我明白了，这让当天的关键变化更具体了一些。"
        question = "这个变化发生前，你当时在做什么、在哪里，身体或情绪有什么明显信号？"
    if "整理吧" in source or "整理" == source.strip():
        return QuestionTurn(response="好，停止追问，先把本次已确认内容归档。", next_question=None, ready_to_organize=True)
    return QuestionTurn(response=response, next_question=question, ready_to_organize=False)


def ask_one_question(settings: Settings, raw_text: str, dialogue: list[dict[str, str]], reply: str | None = None) -> QuestionTurn:
    if reply and (reply.strip() == "整理吧" or "整理吧" in reply):
        return QuestionTurn(response="好，停止追问，先把本次已确认内容归档。", next_question=None, ready_to_organize=True)
    if not settings.openai_api_key or not settings.openai_model:
        return _fallback_turn(raw_text, dialogue, reply)

    from langchain_openai import ChatOpenAI

    history = "\n\n".join(
        f"军师：{item['question']}\nJerry：{item['answer']}" for item in dialogue
    ) or "（尚无追问）"
    message = (
        f"日期复盘原文：\n{raw_text}\n\n已确认问答：\n{history}\n\n"
        f"Jerry 最新回答：\n{reply or '（首次阅读原文）'}"
    )
    model = ChatOpenAI(model=settings.openai_model, api_key=settings.openai_api_key, temperature=0.2)
    structured = model.with_structured_output(QuestionTurn)
    return structured.invoke([("system", SYSTEM_PROMPT), ("human", message)])
