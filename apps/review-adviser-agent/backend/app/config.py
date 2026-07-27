from __future__ import annotations

import os
from dataclasses import dataclass
from pathlib import Path

from dotenv import load_dotenv


APP_ROOT = Path(__file__).resolve().parents[2]
load_dotenv(APP_ROOT / ".env")


@dataclass(frozen=True)
class Settings:
    vault_path: Path
    data_dir: Path
    openai_api_key: str | None
    openai_model: str | None

    @property
    def database_path(self) -> Path:
        return self.data_dir / "review_agent.db"

    @property
    def reviews_root(self) -> Path:
        return self.vault_path / "系统" / "3-方向盘" / "复盘系统" / "每日复盘"


def get_settings() -> Settings:
    vault = Path(os.getenv("VAULT_PATH", APP_ROOT.parents[1])).resolve()
    data = Path(os.getenv("APP_DATA_DIR", APP_ROOT / "runtime" / "data")).resolve()
    data.mkdir(parents=True, exist_ok=True)
    return Settings(
        vault_path=vault,
        data_dir=data,
        openai_api_key=os.getenv("OPENAI_API_KEY") or None,
        openai_model=os.getenv("OPENAI_MODEL") or None,
    )
