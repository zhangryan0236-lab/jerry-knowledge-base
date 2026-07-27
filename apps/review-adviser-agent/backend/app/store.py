from __future__ import annotations

import json
import sqlite3
from datetime import datetime, timezone
from pathlib import Path
from uuid import uuid4


class ThreadStore:
    def __init__(self, database_path: Path) -> None:
        self.database_path = database_path

    def initialize(self) -> None:
        with sqlite3.connect(self.database_path) as conn:
            conn.execute(
                """
                CREATE TABLE IF NOT EXISTS review_threads (
                  id TEXT PRIMARY KEY,
                  review_date TEXT NOT NULL,
                  phase TEXT NOT NULL,
                  raw_text TEXT NOT NULL,
                  dialogue_json TEXT NOT NULL,
                  response TEXT NOT NULL,
                  question TEXT,
                  raw_archive_path TEXT NOT NULL,
                  organized_archive_path TEXT,
                  progress_note TEXT,
                  created_at TEXT NOT NULL,
                  updated_at TEXT NOT NULL
                )
                """
            )
            columns = {row[1] for row in conn.execute("PRAGMA table_info(review_threads)")}
            if "progress_note" not in columns:
                conn.execute("ALTER TABLE review_threads ADD COLUMN progress_note TEXT")

    def create(self, review_date: str, raw_text: str, raw_archive_path: str, thread_id: str | None = None, progress_note: str | None = None) -> dict:
        now = datetime.now(timezone.utc).isoformat()
        record = {
            "id": thread_id or f"rvw_{uuid4().hex}",
            "review_date": review_date,
            "phase": "awaiting_reply",
            "raw_text": raw_text,
            "dialogue": [],
            "response": "",
            "question": None,
            "raw_archive_path": raw_archive_path,
            "organized_archive_path": None,
            "progress_note": progress_note,
            "created_at": now,
            "updated_at": now,
        }
        with sqlite3.connect(self.database_path) as conn:
            conn.execute(
                """
                INSERT INTO review_threads (
                  id, review_date, phase, raw_text, dialogue_json, response, question,
                  raw_archive_path, organized_archive_path, progress_note, created_at, updated_at
                ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
                """,
                (
                    record["id"], record["review_date"], record["phase"], record["raw_text"],
                    json.dumps(record["dialogue"], ensure_ascii=False), record["response"],
                    record["question"], record["raw_archive_path"], record["organized_archive_path"], record["progress_note"],
                    record["created_at"], record["updated_at"],
                ),
            )
        return record

    def get(self, thread_id: str) -> dict | None:
        with sqlite3.connect(self.database_path) as conn:
            conn.row_factory = sqlite3.Row
            row = conn.execute("SELECT * FROM review_threads WHERE id = ?", (thread_id,)).fetchone()
        if row is None:
            return None
        result = dict(row)
        result["dialogue"] = json.loads(result.pop("dialogue_json"))
        return result

    def list_recent(self, limit: int = 90) -> list[dict]:
        with sqlite3.connect(self.database_path) as conn:
            conn.row_factory = sqlite3.Row
            rows = conn.execute(
                """
                SELECT id, review_date, phase, raw_text
                FROM review_threads
                ORDER BY review_date DESC, created_at DESC
                LIMIT ?
                """,
                (limit,),
            ).fetchall()
        return [dict(row) for row in rows]

    def update(self, thread_id: str, **changes: object) -> dict:
        current = self.get(thread_id)
        if current is None:
            raise KeyError(thread_id)
        current.update(changes)
        current["updated_at"] = datetime.now(timezone.utc).isoformat()
        with sqlite3.connect(self.database_path) as conn:
            conn.execute(
                """
                UPDATE review_threads
                SET phase=?, dialogue_json=?, response=?, question=?, organized_archive_path=?, progress_note=?, updated_at=?
                WHERE id=?
                """,
                (
                    current["phase"], json.dumps(current["dialogue"], ensure_ascii=False),
                    current["response"], current["question"], current["organized_archive_path"], current["progress_note"],
                    current["updated_at"], thread_id,
                ),
            )
        return current
