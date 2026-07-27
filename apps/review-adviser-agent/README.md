# 复盘军师 Agent（开发准备）

这是 Jerry 的本地个人诊断军师项目准备目录。当前只包含需求、运行目录约定和 D 盘缓存策略；尚未安装依赖、创建数据库或启动服务。

## 启动前先读

- [启动规格](开发启动规格.md)
- [受约束 RAG 设计](../../系统/3-方向盘/复盘系统/复盘军师需求共识-2026-07-26.md)
- [Agent 实施手册](../../系统/3-方向盘/复盘系统/复盘军师Agent实施手册.md)

## 目录约定

```text
apps/review-adviser-agent/
├─ backend/        # FastAPI + LangGraph（正式开始后创建代码）
├─ frontend/       # 驾驶舱界面（正式开始后创建代码）
├─ runtime/        # 数据库、缓存、临时文件；不提交 Git
├─ scripts/        # 本地开发辅助脚本
├─ .env.example
└─ 开发启动规格.md
```

## C 盘约束

项目文件、虚拟环境、依赖缓存、模型缓存、数据库和临时文件均放在 `D:\Jerry的知识库\apps\review-adviser-agent\runtime`。

正式安装前，在 PowerShell 执行：

```powershell
.\scripts\use-d-drive.ps1
```

该脚本只配置当前 PowerShell 会话的环境变量。它不会移动 Windows、Python 或 Node.js 本体；这些程序若安装于 C 盘仍会从那里运行，但项目不会向 C 盘写入运行数据或包缓存。

## 作为桌面程序启动

双击 [启动复盘军师.cmd](启动复盘军师.cmd)，会打开独立桌面窗口，并自动启动本地服务。

首次使用前，需要在此目录运行一次 `npm install` 安装桌面壳依赖；依赖会安装在本项目的 `node_modules/`，缓存由启动脚本指向 D 盘。

## 仅启动本地服务（调试）

```powershell
.\scripts\start-local.ps1
```

然后在浏览器打开 `http://127.0.0.1:8766`。服务只监听本机，不会暴露到公网。

未填写 `.env` 中的模型 API Key 时，系统会使用本地降级追问，以便验证归档和线程恢复；填写 Key 后，追问自动改为 LLM 结构化输出。
