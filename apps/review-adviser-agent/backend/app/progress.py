from __future__ import annotations

import json
from datetime import datetime, timezone
from pathlib import Path
from uuid import uuid4

from .config import Settings


def _path(settings: Settings) -> Path:
    return settings.vault_path / "系统" / "3-方向盘" / "复盘系统" / "进度" / "项目进度.json"


def list_projects(settings: Settings) -> list[dict]:
    path = _path(settings)
    if not path.exists():
        return []
    try:
        data = json.loads(path.read_text(encoding="utf-8"))
    except json.JSONDecodeError:
        return []
    return data if isinstance(data, list) else data.get("projects", [])


def _save(settings: Settings, projects: list[dict]) -> None:
    path = _path(settings)
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(json.dumps(projects, ensure_ascii=False, indent=2), encoding="utf-8")


def create_project(settings: Settings, values: dict) -> dict:
    project = {
        "id": f"prj_{uuid4().hex[:12]}", "name": values["name"], "goal": values.get("goal", ""),
        "deadline": values.get("deadline"), "stage": values.get("stage", "未拆分"),
        "next_action": values.get("next_action", ""), "estimate_days": values.get("estimate_days"),
        "status": "active", "blocker": None, "current_question": values.get("current_question", ""),
        "evidence": [],
    }
    projects = list_projects(settings)
    projects.append(project)
    _save(settings, projects)
    return project


def update_project(settings: Settings, project_id: str, values: dict) -> dict | None:
    projects = list_projects(settings)
    for project in projects:
        if project["id"] == project_id:
            for key, value in values.items():
                if value is not None:
                    project[key] = value
            _save(settings, projects)
            return project
    return None


def sync_review_mentions(settings: Settings, review_date: str, raw_text: str) -> str | None:
    projects = list_projects(settings)
    active = [p for p in projects if p.get("status") == "active"]
    mentioned = [p for p in active if p.get("name") and p["name"].lower() in raw_text.lower()]
    completion_words = ("完成", "做完", "写完", "提交", "解决", "独立完成")
    if not mentioned:
        if active:
            names = "、".join(p["name"] for p in active[:3])
            return f"本次复盘没有提到近期项目（{names}）。完成复盘后，请同步其中需要更新的进度。"
        return "还没有项目进度。完成复盘后可新增一个近期真正推进的项目。"
    changed = []
    if any(word in raw_text for word in completion_words):
        for project in mentioned:
            project.setdefault("evidence", []).append(
                {"date": review_date, "source": "daily_review", "text": raw_text[:500], "recorded_at": datetime.now(timezone.utc).isoformat()}
            )
            changed.append(project["name"])
        _save(settings, projects)
    names = "、".join(p["name"] for p in mentioned)
    if changed:
        return f"已从本次复盘为 {names} 追加完成证据；请在进度面板确认当前小阶段与下一步。"
    return f"本次提到 {names}，但完成情况不够明确；请在进度面板补充当前小阶段或阻塞点。"
