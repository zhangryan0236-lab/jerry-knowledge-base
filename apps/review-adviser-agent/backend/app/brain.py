from __future__ import annotations

from .config import Settings
from .schemas import QuestionTurn


QUESTION_PROMPT = """你是 Jerry 的复盘军师。根据复盘内容提出一个唯一、具体、能改变后续判断的问题。
只基于用户已经写下的事实；不得解释、不得给建议、不得下结论、不得问多个问题。
只输出这个问题本身，必须以中文问号“？”结尾。"""


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
    model_options = {
        "model": settings.openai_model,
        "api_key": settings.openai_api_key,
        "temperature": 0.2,
        "timeout": 90,
        "max_retries": 0,
        "max_tokens": 120,
    }
    if settings.llm_base_url:
        model_options["base_url"] = settings.llm_base_url
    model = ChatOpenAI(**model_options)
    try:
        result = model.invoke([("system", QUESTION_PROMPT), ("human", message)])
        content = result.content if isinstance(result.content, str) else ""
        question = content.strip().strip('“”"')
        if question.endswith("？") and question.count("？") == 1 and len(question) <= 160:
            response = "我先不急着解释原因。下面这个问题会决定后面该从哪里入手。"
            if dialogue:
                response = "我把刚才的线索接住了。再确认这一点，后面的分析才不会靠猜。"
            return QuestionTurn(response=response, next_question=question, ready_to_organize=False)
    except Exception:
        pass
    return _fallback_turn(raw_text, dialogue, reply)
