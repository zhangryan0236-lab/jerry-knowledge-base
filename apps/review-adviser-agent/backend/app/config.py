from __future__ import annotations

import os
from dataclasses import dataclass
from pathlib import Path

from dotenv import load_dotenv


APP_ROOT = Path(__file__).resolve().parents[2]
load_dotenv(APP_ROOT / ".env")
load_dotenv(APP_ROOT / "投放给军师" / "大模型的API.env", override=True)


@dataclass(frozen=True)
class Settings:
    vault_path: Path
    data_dir: Path
    openai_api_key: str | None
    openai_model: str | None
    llm_base_url: str | None

    @property
    def database_path(self) -> Path:
        return self.data_dir / "review_agent.db"

    @property
    def reviews_root(self) -> Path:
        return self.vault_path / "系统" / "3-方向盘" / "复盘系统" / "每日复盘"

    @property
    def chats_root(self) -> Path:
        return self.vault_path / "系统" / "3-方向盘" / "复盘系统" / "军师对话"


def get_settings() -> Settings:
    vault = Path(os.getenv("VAULT_PATH", APP_ROOT.parents[1])).resolve()
    data = Path(os.getenv("APP_DATA_DIR", APP_ROOT / "runtime" / "data")).resolve()
    data.mkdir(parents=True, exist_ok=True)
    return Settings(
        vault_path=vault,
        data_dir=data,
        openai_api_key=os.getenv("LLM_API_KEY") or os.getenv("OPENAI_API_KEY") or None,
        openai_model=os.getenv("LLM_MODEL") or os.getenv("OPENAI_MODEL") or None,
        llm_base_url=os.getenv("LLM_BASE_URL") or None,
    )
