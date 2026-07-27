@echo off
set "APP_ROOT=%~dp0"
set "npm_config_cache=%APP_ROOT%runtime\cache\npm"
cd /d "%APP_ROOT%"
call npm run desktop
