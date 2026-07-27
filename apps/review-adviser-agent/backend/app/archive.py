from __future__ import annotations

from pathlib import Path

from .config import Settings


def _write_without_overwrite(folder: Path, preferred_name: str, fallback_suffix: str, content: str) -> Path:
    folder.mkdir(parents=True, exist_ok=True)
    target = folder / preferred_name
    if target.exists():
        target = folder / f"{target.stem}-{fallback_suffix}{target.suffix}"
    target.write_text(content, encoding="utf-8")
    return target


def archive_raw(settings: Settings, review_date: str, thread_id: str, raw_text: str) -> Path:
    content = f"---\ntags: [每日复盘, 原始记录]\ncreated: {review_date}\nthread_id: {thread_id}\n---\n\n# {review_date} 原始复盘\n\n{raw_text}\n"
    return _write_without_overwrite(
        settings.reviews_root / "原始记录", f"{review_date}-原始.md", thread_id[-8:], content
    )


def archive_organized(settings: Settings, thread: dict) -> Path:
    dialogue = "\n\n".join(
        f"### 军师问题 {index + 1}\n{item['question']}\n\n### 我的回答\n{item['answer']}"
        for index, item in enumerate(thread["dialogue"])
    ) or "（本次无需追问。）"
    content = (
        f"---\ntags: [每日复盘, 整理记录]\ncreated: {thread['review_date']}\n"
        f"thread_id: {thread['id']}\nstatus: 待后续诊断\n---\n\n"
        f"# {thread['review_date']} 每日复盘\n\n## 原始叙述\n{thread['raw_text']}\n\n"
        f"## 军师追问与回答\n\n{dialogue}\n\n"
        "## 待观察或待诊断\n\n- 本次内容已归档；后续诊断必须基于事实、反证与跨期证据。\n"
    )
    return _write_without_overwrite(
        settings.reviews_root / "整理记录", f"{thread['review_date']}-每日复盘.md", thread["id"][-8:], content
    )
