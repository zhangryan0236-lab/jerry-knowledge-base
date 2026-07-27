# 在 D 盘运行环境中启动本地复盘军师。按 Ctrl+C 停止服务。
. "$PSScriptRoot\use-d-drive.ps1"

$env:PYTHONPYCACHEPREFIX = 'D:\Jerry的知识库\apps\review-adviser-agent\runtime\pycache'
$env:VAULT_PATH = 'D:\Jerry的知识库'
$env:APP_DATA_DIR = 'D:\Jerry的知识库\apps\review-adviser-agent\runtime\data'
$python = 'D:\Jerry的知识库\apps\review-adviser-agent\runtime\venv\Scripts\python.exe'
$backend = 'D:\Jerry的知识库\apps\review-adviser-agent\backend'

if (-not (Test-Path $python)) {
  throw '找不到 D 盘虚拟环境。请先完成依赖安装。'
}

& $python -m uvicorn app.main:app --app-dir $backend --host 127.0.0.1 --port 8766
