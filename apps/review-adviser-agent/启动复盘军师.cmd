@echo off
set "APP_ROOT=%~dp0"
set "npm_config_cache=%APP_ROOT%runtime\cache\npm"
cd /d "%APP_ROOT%"
if not exist "node_modules\electron\dist\electron.exe" (
  echo [首次启动] 正在安装桌面程序依赖...
  call npm install
)
if not exist "vendor\vinaya-journal\desktop\node_modules\vite\bin\vite.js" (
  echo [首次启动] 正在安装军师界面依赖...
  pushd "vendor\vinaya-journal\desktop"
  call npm install
  popd
)
call npm run desktop
