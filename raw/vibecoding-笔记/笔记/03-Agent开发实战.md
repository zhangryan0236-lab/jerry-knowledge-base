---
tags: [vibecoding, Agent开发, 学习笔记]
created: 2026-07-19
---

# Agent 开发实战笔记

---

## 第一部分：Subagent 基础

### 1. 什么是 Subagent

**一句话**：Subagent（子代理）是主 Agent 在运行时**按需动态创建**的临时 AI Agent，专门负责某一块子任务。

- 主 Agent = **总经理**（拆解任务、调度指挥）
- Subagent = **部门经理**（领到具体任务，独立执行，返回结果）
- Subagent 用完即焚，不是常驻的进程

### 2. 什么时候用 / 不用

| 该用 | 不该用 |
|------|--------|
| 任务可以独立拆解，子任务之间依赖少 | 简单任务（改个文件名、查个字段）——杀鸡不用牛刀 |
| 需要并行执行（同时查 5 份资料、审 10 个文件） | 任务严重依赖完整对话上下文——Subagent 看不到全局 |
| 需要特定专业视角（安全、性能、可维护性） | 顺藤摸瓜式任务，上一步结果决定下一步方向 |

**判断原则**：启动 Subagent 有成本（上下文加载、通信开销）。收益大于成本时再用。

### 3. 怎么创建（实操）

#### 方式一：Workflow 脚本（批量编排）

```javascript
// 用 agent() 函数派发 Subagent
const results = await pipeline(
  files,  // 要处理的文件列表
  (file) => agent(`审查 ${file}，找出 bug`, {
    label: `审查:${file}`,
    phase: '审查',
    schema: FINDINGS_SCHEMA  // 要求结构化输出
  })
)
```

#### 方式二：Agent 工具（即兴派发）

```
Agent 工具参数：
{
  "description": "安全审查",
  "prompt": "审查这三个文件的安全漏洞...",
  "subagent_type": "general-purpose"
}
```

#### 方式三：LangChain 等框架

```python
subagent = create_agent(
    llm=model,
    tools=[search_tool, read_tool],
    system_prompt="你是一个安全专家"
)
result = subagent.run("审查这份代码")
```

**核心模式**：主 Agent 决定 → 派发 Subagent → Subagent 独立执行 → 返回结果。

### 4. Subagent 和 Skill 的关系

| | Skill（技能） | Subagent（子代理） |
|--|-------------|-------------------|
| 本质 | 磁盘上的操作手册（`.md` 文件） | 内存中的 Agent 实例 |
| 创建者 | **你**（提前写好） | **主 Agent**（运行时自动创建） |
| 生命周期 | 永久存在 | 用完即焚 |
| 类比 | 一本《电工操作规程》 | 临时叫来的电工 |

**关系**：Subagent 执行任务时也需要读 Skill——Skill 是"工作指南"，Subagent 是"执行者"。两者不是一个层面的东西，但配合使用。

---

> 关联：[[wiki/AI学习/Agent.md]] | [[wiki/AI学习/Subagent.md]]

---

## 第二部分：Hook（钩子）机制

### 1. 什么是 Hook（一句话）

**Hook 是"事件感应器"**——你告诉系统："当 X 发生时，自动帮我做 Y"。它不参与业务逻辑，只在工具调用的"水管"上装了传感器，谁流过它都能感知到。

> 💡 **来自一次理解检测的自我提炼**：Hook 是一个检测到 A 就执行 B 的机制。它只是在 A 和 B 中间充当一个**感应器**，感应到 A 就执行 B，不对 A 和 B 这两块的内容有所改变，只做一个**微小的连接**。

### 2. Hook 与 Subagent 的本质区别

| | Subagent | Hook |
|--|----------|------|
| 角色 | **执行者**——领任务、干活、返回结果 | **旁观者**——拦截事件、做检查/做决策 |
| 是否有状态 | 有——知道自己在执行什么任务 | **无状态**——来一条事件处理一条 |
| 谁控制 | 主 Agent **主动**派发 | 事件 **自动**触发 |
| 拦截能力 | 无——它负责执行，不负责拦截 | **有**——可以阻止某动作继续执行 |
| 类比 | 临时叫来的电工 | 公司门口的安检闸机 |

**容易犯的错**：不是 Hook 收到两个 Subagent 的完成日志后进入下一阶段——是 **pipeline() / 主 Agent** 等待两个 Subagent 都返回后才继续。Hook 只是这过程中顺带做了检查。

### 3. Hook 的核心模式

```
[事件发生] → [检查是否有 Hook 注册] → [有 → 执行检查/拦截逻辑]
                                        [没有 → 放行]
```

Hook 的三种拦截时机：
- **工具调用前**（pre-tool-use）：在工具执行前拦截，最常用
- **工具调用后**（post-tool-use）：在工具执行后拦截，可用于记录结果
- **工具调用失败时**：在工具出错时触发，可用于异常处理

### 4. 软件开发中最常见的 4 种 Hook

| 种类 | 事件例子 | 用途 |
|------|---------|------|
| **Git Hook** | `git commit` → 自动跑 `npm run lint` | 提交前卡代码质量 |
| **Webhook** | GitHub 收到 Issue → 自动通知微信群 | 跨系统自动通知 |
| **框架生命周期 Hook** | Vue 组件挂载完 → 自动请求数据 | 在组件"出生/活着/死去"时插入代码 |
| **CI/CD Hook** | 推代码到 main → 自动跑测试+部署 | 自动化流水线 |

---

### 5. Claude Code Hook 实战：代码提交质量门

以下是一个完整的实战案例，来自 [[Clippings/Bilibili/黑马Vibe Coding零基础入门，vibecoding项目，涵盖Claude Code、Cursor、Codex、SDD、LangChain、Agent开发-P21-20-Agent-自定义Hook钩子拦截工具调用]]。

#### 5.1 需求场景

每次通过 Claude Code 提交代码（`git commit`）前，**必须先通过单元测试和质量检查**，否则禁止提交。

**核心思路**：
- 测试/质检通过 → 生成**通行证文件**（标记文件）
- Hook 拦截 `git commit` → 检查通行证是否存在且为 pass
- 有则放行，无则拒绝
- 提交成功后 → **立即销毁通行证**，防止下次蒙混过关

#### 5.2 架构设计

```
用户说"帮我提交代码"
        ↓
Git Commit Agent（编排者/质量守门员）
    ├─ ① 清理旧的通行证
    ├─ ② 并行执行：
    │     ├─ Tester Agent → 通过 → 写入 test_pass 文件
    │     └─ Quality Agent → 通过 → 写入 quality_pass 文件
    ├─ ③ 读取两个通行证文件
    ├─ ④ Hook 拦截 git commit → 检查通行证
    │     ├─ 两个都是 pass → ✅ 放行提交
    │     └─ 任一不是 pass → ❌ 拒绝
    └─ ⑤ 提交成功 → 立刻删除通行证
```

#### 5.3 实现步骤

**第一步：配置 Hook（写在 `.claude/settings.json` 中）**

```json
{
  "hooks": {
    "pre-tool-use": {
      "if": "*git commit*",
      "action": "agent",
      "prompt": "你是一个 git 提交质量门。请检查 .claude/ 目录下的 test_result.txt 和 quality_result.txt 文件，如果两个文件第一行都是 pass，则返回通过，否则返回拒绝。"
    }
  }
}
```

> **⚠️ 匹配规则陷阱**：初始配置写的是 `"git commit*"`（以 git commit 开头），但 Claude Code 实际执行的组合命令是 `git add ... && git commit ...`，不是以 git commit 开头，导致 Hook 从未触发。正确做法是用通配符 `*git commit*`，只要命令包含 git commit 就拦截。

**第二步：改造已有 Subagent，增加"发放通行证"功能**

在 Tester Agent 和 Quality Agent 的描述文件中增加规则：工作完成后，如果检查通过，写入对应的标记文件（通行证）。

```
// 测试工程师工作完成后：
如果所有测试通过 → 写入 .claude/test_result.txt 内容为 "pass"
如果有失败 → 写入 .claude/test_result.txt 内容为 "fail"

// 质量检查工程师工作完成后：
如果没有高危/中危问题，且注释覆盖率 >= 阈值 → 写入 .claude/quality_result.txt 内容为 "pass"
否则 → 写入 .claude/quality_result.txt 内容为 "fail"
```

**第三步：创建 Git Commit Agent（编排型 Subagent）**

新建一个 Subagent，负责编排完整提交流程：
1. 清理旧的通行证文件
2. 确保通行证目录存在
3. **并行**启动 Tester Agent 和 Quality Agent
4. 等待两者完成
5. 读取并判定两个通行证
6. 全部 pass → 执行 git add / commit / push
7. 提交成功后 → 立即删除通行证

#### 5.4 Hook 的两种执行方式

| 方式 | 配置 `action` | 原理 | 适用场景 |
|------|-------------|------|---------|
| **Command** | `"command"` | 执行操作系统脚本（Bash/PowerShell） | Linux/Mac 环境，轻量快速 |
| **Agent** | `"agent"` | 把文件交给模型推理判断 | Windows 环境，跨平台兼容 |

> **Windows 用户特别注意**：Windows 的命令行环境和 Linux/Mac 差距较大，Bash 脚本支持差、PowerShell 转译常有坑。**强烈建议 Windows 下使用 Agent 模式**——让模型去读文件内容做判断，而不是依赖脚本。

#### 5.5 验证效果

| 场景 | 行为 | 结果 |
|------|------|------|
| 直接说"执行 git 命令提交代码" | Hook 拦截 → 检查无通行证 | ❌ 拒绝提交 |
| 说"帮我提交代码"（走正常流程） | Git Commit Agent → 并行跑测试+质检 → 生成通行证 → Hook 检查通过 → 提交 → 删除通行证 | ✅ 成功提交 |
| 提交成功后立刻再提交 | 旧通行证已被删除，需重新跑测试+质检 | ❌ 拒绝，需重新获取通行证 |

#### 5.6 关键经验

1. **先规划再执行**：在 Claude Code 中用计划模式（Plan Mode）先讨论方案，AI 生成规划文档，人工审核确认后再干活
2. **AI 方案需要人工把关**：AI 的方案约 80% 符合需求，细节（如通行证清理时机、是否修改现有技能）需要人工调整
3. **通配符匹配**：Hook 的条件匹配用 `*git commit*` 而非 `git commit*`，因为实际命令往往是组合命令
4. **通行证一次性**：提交成功后必须立即销毁，防止下次不带检查直接蒙混过关
5. **Human-in-the-Loop**：关键操作（写文件、执行命令）需要用户授权确认，不是完全黑盒自动

---

### 6. 给初学者的建议

1. **有痛点时再配 Hook**——等你觉得"总是忘记跑测试"时，再去配 Hook
2. **从最简单的一个开始**——比如先配一个拦截 `git commit` 检查文件是否存在的简单规则
3. **核心思维**：Hook 不是为了少写代码，而是为了**不用记住要做什么**——把规范交给机制

### 7. Hook 对你的开发价值

| 作用 | 说明 |
|------|------|
| **质量门** | 给 AI 的行为加上硬性约束，不过关就不让过 |
| **规范落地** | 把"应该做"的事变成"必须做"的事，不靠自觉靠机制 |
| **自动化流水线** | 一次编排，反复复用，每次提交都自动走完整流程 |
| **防手滑** | 拦截不经意的错误操作（如直接提交未测试的代码） |
| **隐性知识固化** | 把团队规范、个人开发纪律写进 Hook，让 AI 替你执行 |
