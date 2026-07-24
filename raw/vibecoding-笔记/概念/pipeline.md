---
tags: [vibecoding, 概念, pipeline]
created: 2026-07-20
aliases: [pipeline函数, 流水线, 并行编排]
knowledge_check:
  last_detected: null
  mastery: 0.55
  weak_points: ["与 Hook 的分工不清晰"]
---

# pipeline() 函数

## 一句话定义

pipeline() 是 Workflow 脚本中的**并行任务编排器**——把多个 Subagent 派发出去，等它们全部返回结果后才继续执行下一步。

## 核心要点

_待学习后补充_

## 与 Hook 的关键区别

| | pipeline() | Hook |
|--|-----------|------|
| 做什么 | 等待多个 Subagent 全部完成 | 拦截单个事件并执行检查 |
| 有状态吗 | 有——知道发出了几个、回来几个 | 无——来一条处理一条 |
| 谁调用 | Workflow 脚本中显式调用 | 事件自动触发 |

## 关联概念

- [[Hook]] — Hook 是感应器，pipeline 是调度器
- [[Subagent]] — pipeline 派发的就是 Subagent

## 检测记录

### [2026-07-20] ⚠️ 间接评估 (55%)
在 Hook 检测中间接触及：能说出 pipeline() 是等 Subagent 的机制，但理解深度不够。需要专门学习。

## 学习待办

- [ ] 看 B站 P24
- [ ] 用自己话写：pipeline() 到底做了什么、和 Hook 的分工
- [ ] 说「检测我 pipeline」做微检测
