---
tags:
  - AI
  - 概念
  - Agent
created: 2026-07-14
updated: 2026-07-16
aliases:
  - AI Agent
  - AI代理
  - Agent
---

## 一句话定义

AI Agent（AI 代理）是一个能**自主理解目标、规划步骤、调用工具、执行任务**的智能程序，而不仅仅是回答问题的聊天机器人。

## 核心概念

### LLM（大语言模型）
LLM（Large Language Model）是 AI Agent 的"大脑"——一个在海量文本上训练出来的神经网络，能理解和生成自然语言。常见的 LLM 包括 Claude、GPT、DeepSeek、GLM 等。

### Token（令牌）
Token 是 LLM 处理文本的基本单位。1 个 Token ≈ 0.7-1 个汉字 或 0.3-0.5 个英文单词。LLM 的收费和上下文限制都以 Token 为单位计量。
- **输入 Token**：你发给模型的内容
- **输出 Token**：模型生成的内容
- **上下文窗口**：模型一次能处理的 Token 数量上限（如 Claude 支持 200K tokens）

### Context（上下文）
Context 是模型在当前对话中"看到"的全部信息。包括：
- 你的问题/指令
- 之前对话的历史
- 系统提示词（System Prompt，如 CLAUDE.md）
- 工具调用结果

上下文越大，模型理解越准确，但消耗的 Token 也越多。

## AI Agent 如何工作

```
用户输入目标 → LLM 理解意图 → 拆解为步骤
  → 调用工具（读文件/搜网页/写代码...）
  → 观察结果 → 决定下一步
  → 直到目标完成 → 输出最终结果
```

### Agent vs 聊天机器人
| 特性 | 聊天机器人 | AI Agent |
|------|-----------|----------|
| 能力 | 回答问题 | 自主完成任务 |
| 记忆 | 当前对话 | 可以保存到文件/知识库 |
| 工具 | 无 | 可调用工具（读/写/搜索/编程） |
| 规划 | 无 | 能拆解任务，多步执行 |
| 持久化 | 对话结束即消失 | 可以持续积累知识 |

## 本知识库中的 Agent 实践

你正在使用的就是 **Agent 模式**——我（Claude）根据 CLAUDE.md 中的指令，调用工具读取你的笔记、分析内容、创建/更新文件，帮你维护知识维基。

## 延伸概念

- [[wiki/概念/调试方法论|调试方法论]] — 排查 AI Agent 工具连接问题的方法
- [[wiki/概念/Node.js运行时|Node.js 运行时]] — 运行 AI Agent CLI 工具的基础环境
- [[wiki/概念/API与API密钥|API 与 API 密钥]] — Agent 调用模型服务的身份凭证

## 来源

- [[raw/学习日志/AI编程工具学习日志-从问题到精通]]

## 关联的外部概念

- **MCP（Model Context Protocol）**：让 AI Agent 与外部工具/数据源连接的标准协议
- **ACP（Agent Client Protocol）**：编辑器和 AI Agent 之间的通信协议
