---
tags:
  - 编程
  - Node.js
  - 概念
created: 2026-07-16
aliases:
  - Node.js
  - JavaScript运行时
  - node
---

## 一句话定义

Node.js 是一个 JavaScript **运行时环境（runtime）**，让 JavaScript 能在浏览器之外的地方运行（服务器、命令行、桌面软件）。

## 核心要点

1. **Node.js 不是编程语言**，它是运行 JavaScript 的环境。底层使用 Google V8 引擎（和 Chrome 浏览器同一个引擎）。
2. **npm** 是 Node.js 的包管理器（类似应用商店），用来安装第三方库和命令行工具
3. **npx** 是 npm 的兄弟，用来直接运行包而不需要先安装
4. **版本号**：偶数版本号表示 LTS（长期支持），如 v22.x

## 在本知识库中的作用

```
Obsidian 插件（TypeScript/JavaScript）
  ↓ 需要运行 JavaScript 代码
Node.js（运行时环境）
  ↓ 启动并运行
ACP 适配器（JavaScript 程序）
  ↓ 通过网络通信
AI 模型服务（远程服务器）
```

## 实际例子

| 用过的东西 | 底层靠什么跑的 |
|------------|---------------|
| VS Code | Node.js（Electron 框架） |
| Obsidian | Node.js（Electron 框架） |
| Claude Code CLI | Node.js |
| npm install | Node.js 的包管理器 |

## 延伸概念

- [[wiki/概念/API与API密钥|API 与 API 密钥]] — Node.js 通过 API 与 AI 模型通信
- [[wiki/概念/调试方法论|调试方法论]] — 排查 Node.js 问题的分层方法
- [[wiki/AI学习/Agent]] — AI Agent 工具依赖于 Node.js 运行环境

## 来源

- [[raw/学习日志/AI编程工具学习日志-从问题到精通]]
