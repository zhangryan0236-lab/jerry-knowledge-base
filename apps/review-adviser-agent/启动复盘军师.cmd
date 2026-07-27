@echo off
set "APP_ROOT=%~dp0"
set "npm_config_cache=%APP_ROOT%runtime\cache\npm"
cd /d "%APP_ROOT%"
if not exist "node_modules\electron\dist\electron.exe" (
  echo [首次启动] 正在安装桌面程序依赖...
  call npm install
)
if not exist "vendor\charlietlamb-calendar\node_modules\next\dist\bin\next" (
  echo [首次启动] 正在安装日历模板依赖...
  pushd "vendor\charlietlamb-calendar"
  call npm install --legacy-peer-deps
  popd
)
call npm run desktop
