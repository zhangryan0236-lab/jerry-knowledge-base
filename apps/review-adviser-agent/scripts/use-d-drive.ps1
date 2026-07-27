# 仅为当前 PowerShell 会话设置项目运行目录；在正式安装依赖前执行。
$agentHome = 'D:\Jerry的知识库\apps\review-adviser-agent\runtime'
$folders = @(
  "$agentHome\tmp",
  "$agentHome\data",
  "$agentHome\cache\pip",
  "$agentHome\cache\uv",
  "$agentHome\cache\npm",
  "$agentHome\cache\huggingface",
  "$agentHome\qdrant"
)

foreach ($folder in $folders) {
  New-Item -ItemType Directory -Force -Path $folder | Out-Null
}

$env:TEMP = "$agentHome\tmp"
$env:TMP = "$agentHome\tmp"
$env:PIP_CACHE_DIR = "$agentHome\cache\pip"
$env:UV_CACHE_DIR = "$agentHome\cache\uv"
$env:npm_config_cache = "$agentHome\cache\npm"
$env:HF_HOME = "$agentHome\cache\huggingface"
$env:QDRANT_PATH = "$agentHome\qdrant"

Write-Host "复盘军师的运行数据和缓存已定向到 D 盘：$agentHome"
