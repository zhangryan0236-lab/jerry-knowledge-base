@echo off
cd /d "D:\Jerry的知识库"
start /B python -m http.server 8765 --bind 127.0.0.1 > nul 2>&1
echo 看板服务器已启动：http://localhost:8765
echo 可以关闭此窗口，打开 Obsidian 即可
