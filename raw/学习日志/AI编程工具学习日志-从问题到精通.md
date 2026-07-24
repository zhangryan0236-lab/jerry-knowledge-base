# AI 编程工具学习日志：从踩坑到精通

> **文档定位**：这是一份「问题日志 + 技术教程 + 学习指南」三合一文档。  
> **适合人群**：计算机零基础，但想用 AI 编程工具提升效率的人。  
> **撰写视角**：计算机领域头部专家，用最通俗的语言教你弄懂每一个概念。  
> **使用方法**：可以自己复习、可以扔给其他 AI 让它快速了解你的情况、可以当教材教别人。

---

## 目录

- [第一章：这份文档是怎么来的](#第一章这份文档是怎么来的)
- [第二章：问题全记录（按时间线）](#第二章问题全记录按时间线)
  - [问题 1：Claude Code 启动失败](#问题-1claude-code-启动失败)
  - [问题 2：OpenCode 和 Claude Code 有什么区别](#问题-2opencode-和-claude-code-有什么区别)
  - [问题 3：API 密钥是什么，为什么要创建](#问题-3api-密钥是什么为什么要创建)
  - [问题 4：Obsidian 插件的 Node.js path 填什么](#问题-4obsidian-插件的-nodejs-path-填什么)
  - [问题 5：电脑上的 Node.js 在哪](#问题-5电脑上的-nodejs-在哪)
  - [问题 6：为什么 Node.js 是 WorkBuddy 管理的](#问题-6为什么-nodejs-是-workbuddy-管理的)
  - [问题 7：能不能再装一个 Node.js](#问题-7能不能再装一个-nodejs)
  - [问题 8：Node.js 到底是干什么的](#问题-8nodejs-到底是干什么的)
  - [问题 9：Node.js 安装修复后还是找不到](#问题-9nodejs-安装修复后还是找不到)
  - [问题 10：ACP 连接失败](#问题-10acp-连接失败)
  - [问题 11：OpenCode 自定义 Agent 配置](#问题-11opencode-自定义-agent-配置)
  - [问题 12：where.exe opencode 返回三条路径](#问题-12whereexe-opencode-返回三条路径)
  - [问题 13：配置文件拼写错误和格式问题](#问题-13配置文件拼写错误和格式问题)
  - [问题 14：聊天面板选错 Agent](#问题-14聊天面板选错-agent)
- [第三章：核心概念详解（小白版）](#第三章核心概念详解小白版)
  - [3.1 Node.js —— 让 JavaScript 走出浏览器](#31-nodejs--让-javascript-走出浏览器)
  - [3.2 API 和 API 密钥 —— 数字世界的门禁卡](#32-api-和-api-密钥--数字世界的门禁卡)
  - [3.3 ACP 协议 —— AI 和编辑器之间的翻译官](#33-acp-协议--ai-和编辑器之间的翻译官)
  - [3.4 环境变量和 PATH —— 系统的通讯录](#34-环境变量和-path--系统的通讯录)
  - [3.5 包管理器 npm —— 应用商店的命令行版](#35-包管理器-npm--应用商店的命令行版)
  - [3.6 JSON 配置文件 —— 软件的"说明书"](#36-json-配置文件--软件的说明书)
  - [3.7 客户端-服务器架构 —— 你和远方的关系](#37-客户端-服务器架构--你和远方的关系)
- [第四章：工具对比深度解析](#第四章工具对比深度解析)
  - [4.1 Claude Code vs OpenCode](#41-claude-code-vs-opencode)
  - [4.2 Obsidian Agent Client Plugin](#42-obsidian-agent-client-plugin)
- [第五章：完整的配置教程（可复制给任何人）](#第五章完整的配置教程可复制给任何人)
- [第六章：调试方法论 —— 遇到问题该怎么想](#第六章调试方法论--遇到问题该怎么想)
- [第七章：学习方法论拓展](#第七章学习方法论拓展)
- [第八章：知识图谱与进阶路线](#第八章知识图谱与进阶路线)
- [附录 A：所有涉及到的命令速查表](#附录-a所有涉及到的命令速查表)
- [附录 B：常见报错及解决方案](#附录-b常见报错及解决方案)
- [附录 C：术语表](#附录-c术语表)

---

## 第一章：这份文档是怎么来的

### 背景

我是一个计算机小白，想在 Obsidian 笔记软件里安装一个 AI 编程助手插件（Agent Client Plugin），这样就能在写笔记的时候直接和 AI 对话，让 AI 帮我读笔记、写笔记、做分析。

在这个过程中，我遇到了一连串的技术问题：网络连接失败、找不到 Node.js、配置文件写错、ACP 连接不上……每一个问题都卡了很久。

在一位计算机专家的远程指导下，我一步步解决了所有问题。这份文档记录了**每一个问题是什么、为什么会出现、怎么解决的**，以及背后的**技术原理**。

### 为什么要写这份文档

1. **给自己留档**：以后再遇到类似问题，不用从头查
2. **给其他 AI 看**：把这份文档扔给任何 AI，它就能快速了解我的技术栈和配置情况
3. **教别人**：如果有朋友也想配同样的环境，照着这份文档一步步做就行
4. **系统学习**：不只是解决问题，更要理解背后的原理，举一反三

### 涉及的技术栈

```
Obsidian（笔记软件）
  └── Agent Client Plugin（AI 对话插件）
        └── Node.js（运行环境）
        └── OpenCode CLI（AI 编程助手）
              └── ACP 协议（通信协议）
              └── OpenCode Zen 服务（AI 模型服务）
                    └── DeepSeek / GLM / Kimi / MiMo（底层 AI 模型）
```

---

## 第二章：问题全记录（按时间线）

> 每个问题都按「现象 → 原因 → 解决方案 → 学到了什么」四段式记录。

---

### 问题 1：Claude Code 启动失败

**现象**：打开 Claude Code，弹出错误：

> Failed to start Claude workspace.  
> net::ERR_CONNECTION_TIMED_OUT

**原因**：电脑在规定时间内没能连上 Anthropic 的服务器。可能是网络不通、被防火墙拦截、代理没配好、或 Anthropic 服务本身异常。

**解决方案**：
1. 重启 Claude Code
2. 检查网络：浏览器打开 `https://status.anthropic.com` 确认服务正常
3. 如果在国内：需要配置代理（设置环境变量 `HTTPS_PROXY` / `HTTP_PROXY`）
4. 重启电脑
5. 最后手段：重装 Claude Code
   ```bash
   npm uninstall -g @anthropic-ai/claude-code
   npm install -g @anthropic-ai/claude-code
   ```

**判断方法**：
- 浏览器能上 Google 但 Claude Code 报错 → 代理没配到 Claude Code
- 浏览器也上不了 Google → 网络/代理本身的问题
- 别人也用不了 → 查 Anthropic 状态页

**💡 学到了什么**：
- `net::ERR_CONNECTION_TIMED_OUT` 是一个通用的网络错误，意思是"连接超时"
- 在国内使用境外服务，代理配置是常见痛点
- 环境变量 `HTTPS_PROXY` 和 `HTTP_PROXY` 可以让命令行工具走代理

---

### 问题 2：OpenCode 和 Claude Code 有什么区别

**现象**：想知道两个终端 AI 编程助手的区别，不知道选哪个。

**原因**：两个工具定位不同，适合不同人群。

**核心对比**：

| 维度 | OpenCode | Claude Code |
|------|----------|-------------|
| 理念 | 开源自由，不做厂商锁 | 垂直整合，体验为王 |
| 许可证 | MIT 开源 | 闭源专有 |
| 模型支持 | 75+ 家提供商（Claude/GPT/Gemini/DeepSeek/本地 Ollama） | 仅 Anthropic Claude 系列 |
| 价格 | 工具免费 + 自己付模型 API 费 | $20-$200/月（Pro/Max 订阅） |
| 架构 | Go 二进制 + TUI | Node.js CLI |
| LSP 集成 | 原生内置 | 不支持 |
| 离线使用 | 支持（Ollama 本地模型） | 不支持 |
| 企业合规 | 自托管自审计 | SOC2 Type II / HIPAA |

**选择建议**：
- 选 OpenCode：想灵活切换模型、预算敏感、数据隐私要求高、需要离线使用、喜欢开源
- 选 Claude Code：重度依赖 Claude 推理能力、想要开箱即用、需要企业级合规、看重多代理协作

**💡 学到了什么**：
- "开源" vs "闭源"是软件世界最根本的分野之一
- "厂商锁定"（vendor lock-in）是一个重要的商业概念
- LSP（Language Server Protocol）是代码编辑器的核心基础设施
- 同一类工具可能有完全不同的设计哲学

---

### 问题 3：API 密钥是什么，为什么要创建

**现象**：在 OpenCode 的 API 密钥管理页面看到一个已有的密钥（`sk-YnAf...edGe`），不知道为什么需要它，也不知道「创建 API 密钥」按钮是干嘛的。

**原因**：API 密钥是调用 API 服务的身份凭证，没有它服务器会拒绝你的请求。

**API 密钥的三大作用**：

| 作用 | 通俗解释 | 生活类比 |
|------|----------|----------|
| 身份识别 | 告诉服务器"是谁在发起请求" | 身份证 |
| 权限控制 | 决定你能调用哪些接口、访问哪些数据 | 门禁卡权限 |
| 计费追踪 | 记录使用量，按量扣费或限制额度 | 手机话费账单 |

**创建 API 密钥的步骤**：
1. 点击「创建 API 密钥」按钮
2. 填写名称（如 `macbook-local`、`jenkins-ci`）
3. 选择权限范围（可选）
4. **立刻复制并保存**（只显示一次！）
5. 配置到工具中（环境变量或配置文件）

**💡 学到了什么**：
- API 密钥类似于密码，但比密码更灵活（可以创建多个、可以设权限、可以随时删除）
- 密钥格式通常是 `sk-` 开头的长字符串
- 安全原则：永远不要把密钥 push 到 GitHub、不要截图发群里

---

### 问题 4：Obsidian 插件的 Node.js path 填什么

**现象**：在 Obsidian 里安装了 Agent Client Plugin，设置里有个 "Node.js path" 输入框，不知道填什么。

**原因**：这个插件需要 Node.js 来运行 ACP 适配器，插件需要知道 Node.js 装在哪。

**解决方案**：在命令行运行 `where.exe node` 找到路径，填进去。但当时发现系统里找不到 node。

**💡 学到了什么**：
- 很多软件的"依赖"概念：A 软件 需要 B 软件 才能运行
- `where.exe` 是 Windows 用来查找命令路径的工具（类似 Linux 的 `which`）
- 插件的设置项不是摆设，每一项都需要正确配置

---

### 问题 5：电脑上的 Node.js 在哪

**现象**：`where.exe node` 找不到 Node.js，但 WorkBuddy 明显在用 Node.js。

**排查过程**：

用了多种方法查找：
```bash
where.exe node                    # 没找到
where.exe node 2>/dev/null        # 没找到
cmd //c "where node"              # 没找到
Get-Command node                  # PowerShell 没找到
```

检查常见安装位置：
- `C:\Program Files\nodejs\node.exe` → 不存在
- `C:\Program Files (x86)\nodejs\node.exe` → 不存在
- `C:\Users\jerry\AppData\` 下搜索 → 找到！

最终找到：
```
C:\Users\jerry\.workbuddy\binaries\node\versions\22.22.2\node.exe
```

**原因**：WorkBuddy 自带了 Node.js，但只装在自己管理的目录里，没有加到系统 PATH 中。

**💡 学到了什么**：
- Windows 上找程序的方法：`where.exe 命令名`、`Get-Command 命令名`（PowerShell）、直接去安装目录看
- 程序不一定装在 `Program Files` 里，也可能装在用户目录下
- `PATH` 环境变量决定了系统能不能"找到"一个命令

---

### 问题 6：为什么 Node.js 是 WorkBuddy 管理的

**现象**：找到的 Node.js 在 `C:\Users\jerry\.workbuddy\` 目录下，为什么不在系统目录？

**原因**：WorkBuddy 需要自己的 Node.js 来运行，但不想污染用户系统。

| 原因 | 说明 |
|------|------|
| 不污染系统 | 不往 `C:\Program Files\` 装东西，不改系统 PATH |
| 不冲突 | 用户自己装的 Node 版本和 WorkBuddy 的各用各的 |
| 不需管理员权限 | 装在用户目录，不需要 UAC 弹窗 |
| 版本自控 | WorkBuddy 知道自己用的版本，不依赖系统 |

**生活类比**：就像租了带厨房的民宿，厨房有炊具但只供民宿里用。回家想做饭还得自己买一套。

**💡 学到了什么**：
- 软件的"沙箱化"（sandboxing）设计思想
- "用户级安装" vs "系统级安装"的区别
- 为什么很多现代工具选择装在用户目录而不是系统目录

---

### 问题 7：能不能再装一个 Node.js

**现象**：想装一个系统级的 Node.js，怕和 WorkBuddy 的冲突。

**原因**：不冲突，两个完全独立。

**解决方案**：去 [nodejs.org](https://nodejs.org) 下载 LTS 版本，默认装到 `C:\Program Files\nodejs\`。两个 Node.js 各过各的，版本也可以不一样。

**💡 学到了什么**：
- 同一个软件可以有多个版本共存
- 安装位置不同 = 独立运行
- LTS（Long Term Support）= 长期支持版，比最新版更稳定

---

### 问题 8：Node.js 到底是干什么的

**现象**：不知道 Node.js 是什么，为什么要装它。

**核心概念**：**Node.js 让 JavaScript 脱离浏览器，能在电脑上直接运行。**

以前 JavaScript 只能在浏览器里跑（做网页动画、表单验证），Node.js 出现后，JavaScript 变成了通用编程语言，可以：
- 读写电脑上的文件
- 启动后端服务器
- 操作数据库
- 跑命令行工具
- 自动化处理任务

**在本次场景中的作用**：
```
Obsidian 插件 → 调用 Node.js → 运行 ACP 适配器 → 和 AI 通信
```
Node.js 扮演"翻译官 + 跑腿"的角色。

**现实中的例子**：

| 你用过的东西 | 底层靠什么跑的 |
|-------------|---------------|
| VS Code | Node.js（Electron） |
| Obsidian 本身 | Node.js（Electron） |
| Claude Code CLI | Node.js |
| OpenCode CLI | Go（不靠 Node.js） |
| 各种 `npm install xxx` | Node.js 的包管理器 |

**💡 学到了什么**：
- Node.js = JavaScript 运行时（runtime），不是编程语言本身
- Electron 框架让网页技术能做桌面软件（VS Code、Obsidian 都是基于它）
- "运行时"（runtime）的概念：程序运行所需要的Environment

---

### 问题 9：Node.js 安装修复后还是找不到

**现象**：之前装过 Node.js，运行安装包出现 Repair/Remove 选项，选了 Repair，但修完 `where.exe node` 还是找不到。

**排查过程**：
```bash
# 检查 Program Files 下有没有 nodejs 文件夹
ls -la "C:\Program Files\nodejs"        # 不存在！
ls -la "C:\Program Files (x86)\nodejs"  # 也不存在！
```

**原因**：之前残留的只是注册表里的安装记录，程序文件早没了。Repair 修复了注册表但没有文件可以修复。

**解决方案**：
1. 点 Remove 彻底卸载干净
2. 重新去 [nodejs.org](https://nodejs.org) 下载 LTS 版本
3. 双击安装，一路 Next
4. 装完**关掉所有命令行窗口**，重新打开新的
5. 运行 `node -v` 确认

**💡 学到了什么**：
- Windows 的"修复"功能依赖原始文件还在，文件没了修复也没用
- 注册表残留 ≠ 程序还在
- 安装/卸载后要**重开命令行窗口**，因为环境变量是窗口启动时加载的
- 遇到"修不好"的情况，"卸载 → 重装"是最彻底的方案

---

### 问题 10：ACP 连接失败

**现象**：Obsidian 插件里 Node.js path 配好了，但发消息报 "ACP connection closed" 错误。

**原因**：Node.js 只是"启动器"，真正和 AI 通信的是 ACP 适配器，还没装/配好。

**💡 学到了什么**：
- 一个系统可能有多个组件，每个组件都要单独配置
- 报错信息要仔细读："ACP connection closed" 说明 ACP 层有问题，不是 Node.js 层
- 排查问题要分层：网络层 → Node.js 层 → ACP 层 → AI 服务层

---

### 问题 11：OpenCode 自定义 Agent 配置

**现象**：不用 Claude Code，用 OpenCode 套餐，需要完整配置步骤。

**完整步骤**：

**Step 1：安装 OpenCode CLI**
```bash
npm install -g opencode-ai
# 国内下载慢可以用镜像：
npm install -g opencode-ai --registry https://registry.npmmirror.com
```

**Step 2：找到安装路径**
```bash
where.exe opencode
```

**Step 3：确认 OpenCode 已登录**
```bash
opencode
# 进入交互界面说明登录正常，Ctrl+C 退出
```

**Step 4：在 Obsidian 中配置 Custom Agent**

| 配置项 | 填什么 |
|--------|--------|
| Agent ID | `opencode` |
| Display name | `OpenCode` |
| Path | `C:\Users\jerry\AppData\Roaming\npm\opencode.cmd` |
| Arguments | `acp` |
| Environment variables | 留空（套餐已登录） |

**Step 5：测试**
1. 点 Obsidian 左侧机器人图标
2. 聊天面板顶部下拉菜单选 **OpenCode**
3. 发消息测试

**💡 学到了什么**：
- `npm install -g` 的 `-g` 表示全局安装（所有项目都能用）
- `--registry` 可以临时指定镜像源（国内常用 `registry.npmmirror.com`）
- 自定义 Agent 的核心是告诉插件：用哪个程序、传什么参数、设什么环境变量

---

### 问题 12：where.exe opencode 返回三条路径

**现象**：`where.exe opencode` 返回了三个不同的路径，不知道用哪个。

```
C:\Users\jerry\.bun\bin\opencode.exe       ← Bun 安装的
C:\Users\jerry\AppData\Roaming\npm\opencode       ← npm 安装的无后缀脚本
C:\Users\jerry\AppData\Roaming\npm\opencode.cmd  ← npm 安装的 Windows 批处理
```

**原因**：之前通过 Bun 装过一次，后来又通过 npm 装了一次。`where.exe` 把 PATH 中所有匹配的都列出来了。

**选哪个**：用 `.cmd` 那个最稳妥：
```
C:\Users\jerry\AppData\Roaming\npm\opencode.cmd
```

**💡 学到了什么**：
- `where.exe` 会列出 PATH 中所有匹配项，按优先级排序
- Windows 上同一个命令可能有 `.exe`、`.cmd`、`.bat`、无后缀等多种形式
- `.cmd` 是 Windows 批处理脚本，`.exe` 是可执行文件
- Bun 是另一个 JavaScript 运行时（比 Node.js 快），也可以装 npm 包
- 多个包管理器安装同一个东西会产生重复，建议定期清理

---

### 问题 13：配置文件拼写错误和格式问题

**现象**：OpenCode 配置文件有两个问题导致无法正常工作。

**问题 A：拼写错误**
```json
"opecode": {   ← 少了个 'n'，应该是 "opencode"
```

**问题 B：model 字段格式错误**
```json
// 错误写法（对象）：
"model": {
  "provider": "opencode",
  "model": "deepseek-v4-pro"
}

// 正确写法（字符串）：
"model": "opencode/deepseek-v4-pro"
```

**原因**：
1. 拼写错误是手写配置文件时常见的失误
2. model 字段的格式查阅了官方文档才知道是字符串，不是对象

**解决方案**：修正拼写，改成正确的字符串格式。

**💡 学到了什么**：
- 配置文件的每一个字符都要正确，一个字母错了整个文件就失效
- JSON 格式严格要求：键名加引号、不能有多余逗号、不能有注释
- 遇到格式不确定时，**查官方文档**比猜更靠谱
- 配置文件的 schema（结构定义）决定了每个字段的类型
- `$schema` 字段可以告诉编辑器配置文件的格式，提供自动补全

---

### 问题 14：聊天面板选错 Agent

**现象**：所有配置都做好了，但发消息还是报 ACP 连接错误。

**原因**：聊天面板顶部显示 "Message Claude Code"，说明选的还是 Claude Code，不是 OpenCode。配置了 OpenCode 但没有在实际使用时切换过去。

**解决方案**：点聊天面板顶部的下拉菜单，从 "Claude Code" 切换成 "OpenCode"。

**💡 学到了什么**：
- 配置 ≠ 使用，配好了还要在正确的地方选用
- 报错时要看清楚报错的是哪个组件
- "最终一步"往往是最低级的错误：选错选项

---

## 第三章：核心概念详解（小白版）

> 这些概念是理解整个配置流程的基础。如果你能把这些概念给别人讲明白，说明你真的懂了。

---

### 3.1 Node.js —— 让 JavaScript 走出浏览器

#### 是什么

Node.js 是一个**运行时环境**（runtime），它让 JavaScript 这门编程语言能够在浏览器之外的地方运行。

#### 为什么需要它

想象 JavaScript 是一个只会说"浏览器语"的翻译官，只能在浏览器里工作。Node.js 给他配了一个"通用语翻译器"，让他到了任何地方（服务器、命令行、桌面软件）都能干活。

#### 在本项目中的作用

```
Obsidian 插件（TypeScript/JavaScript）
      ↓ 需要运行 JavaScript 代码
Node.js（运行时环境）
      ↓ 启动并运行
ACP 适配器（JavaScript 程序）
      ↓ 通过网络通信
AI 模型服务（远程服务器）
```

#### 关键知识点

- **Node.js 不是编程语言**，它是运行 JavaScript 的环境
- **npm** 是 Node.js 的包管理器（类似应用商店），用来安装第三方库
- **npx** 是 npm 的兄弟，用来直接运行包而不需要先安装
- **版本号**：Node.js 用偶数版本号表示 LTS（长期支持），如 v22.x

#### 延伸阅读

- Node.js 由 Ryan Dahl 在 2009 年创建
- 底层使用 Google 的 V8 引擎（和 Chrome 浏览器同一个引擎）
- 后来 Ryan Dahl 觉得 Node.js 有些设计缺陷，又做了 Deno
- Bun 是另一个更快的 JavaScript 运行时（本项目中也出现过）

---

### 3.2 API 和 API 密钥 —— 数字世界的门禁卡

#### API 是什么

API（Application Programming Interface，应用程序编程接口）是软件之间沟通的"接口"。

**生活类比**：你去餐厅吃饭——
- 你（客户端） → 菜单（API） → 厨房（服务器）
- 你不需要知道菜怎么做的，只需要按菜单点菜
- 菜单就是 API，它定义了你能点什么、怎么点、点完会得到什么

#### API 密钥是什么

API 密钥（API Key）是一串字符，用来证明"我是谁"，类似门禁卡。

**三个作用**：
1. **身份识别**：告诉服务器是谁在请求
2. **权限控制**：决定你能访问什么
3. **计费追踪**：记录你用了多少，该扣多少钱

#### 格式

通常是 `sk-` 开头的长字符串，例如：
```
sk-YnAfa9DQSt03zoG0a2QLS9iPgR8QQRN2RMpc6lt5hr7CcX7ceA7ozc9u2Rd3edGe
```

#### 安全须知

| 该做 | 不该做 |
|------|--------|
| 存在密码管理器里 | push 到 GitHub |
| 存在环境变量里 | 截图发到群里 |
| 定期轮换（换新的） | 写在博客文章里 |
| 不同环境用不同密钥 | 多个项目共用一个 |

#### 延伸阅读

- API 还分 RESTful API、GraphQL、gRPC 等不同风格
- 除了 API Key，还有 OAuth、JWT 等认证方式
- OpenAPI（原 Swagger）是描述 API 的标准格式

---

### 3.3 ACP 协议 —— AI 和编辑器之间的翻译官

#### 是什么

ACP（Agent Client Protocol，代理客户端协议）是一种通信协议，让编辑器（如 Obsidian）和 AI 助手（如 OpenCode）能够"对话"。

#### 为什么需要它

Obsidian 插件本身不懂怎么和 AI 聊天，OpenCode 也不懂怎么和 Obsidian 通信。ACP 就是它们之间的"翻译官"：

```
Obsidian 插件  ←ACP协议→  ACP 适配器  ←网络→  AI 模型
  "帮我读笔记"              翻译请求           处理并返回
```

#### 工作原理

1. Obsidian 插件通过 ACP 协议发送请求
2. ACP 适配器（一个 Node.js 程序）接收请求
3. 适配器把请求转发给 AI 模型服务
4. AI 模型处理并返回结果
5. 适配器把结果通过 ACP 协议传回 Obsidian

#### 为什么 `opencode acp` 会"卡住"

`opencode acp` 启动的是一个**服务器进程**，它不会自动退出，而是在后台等待连接。这就像开了家餐厅，门开了等着客人来——没有客人时就"卡住不动"，这其实是正常的。

#### 延伸阅读

- ACP 是一个较新的协议，类似 LSP（Language Server Protocol）
- LSP 让编辑器和语言服务器通信（代码补全、错误提示等）
- ACP 让编辑器和 AI 助手通信
- 两者思路一样：用标准协议解耦，让不同工具能互操作

---

### 3.4 环境变量和 PATH —— 系统的通讯录

#### 环境变量是什么

环境变量是操作系统级别的"全局变量"，所有程序都能读到。

**生活类比**：环境变量就像办公室的公告板，上面写着公司名称、地址、WiFi 密码等信息，每个人（每个程序）进来都能看到。

#### PATH 是什么

PATH 是最重要的环境变量之一，它是一个**路径列表**，告诉系统"去哪里找命令"。

**生活类比**：PATH 就像你的通讯录。当你在终端输入 `node`，系统会翻通讯录（PATH），从上到下找谁叫 `node`，找到第一个就用它。

#### 为什么 `where.exe node` 找不到

因为 `C:\Program Files\nodejs\` 没有被写进 PATH 通讯录。系统翻遍了通讯录也没找到叫 `node` 的人。

#### 为什么装完软件要重开命令行

环境变量是窗口启动时加载的。你在旧窗口里安装了软件，旧窗口的"通讯录"还是旧的。必须开新窗口才能看到更新后的 PATH。

#### Windows 上查看/修改环境变量

```bash
# 查看所有环境变量
echo $PATH          # Git Bash
$env:PATH           # PowerShell

# 查看某个命令的位置
where.exe 命令名    # CMD / Git Bash
Get-Command 命令名  # PowerShell

# 永久修改环境变量：
# 设置 → 系统 → 关于 → 高级系统设置 → 环境变量
```

---

### 3.5 包管理器 npm —— 应用商店的命令行版

#### 是什么

npm（Node Package Manager）是 Node.js 的包管理器，用来安装、管理、发布 JavaScript 包。

**生活类比**：npm 就是"应用商店的命令行版"。你在手机上点"安装"来装 App，在命令行里用 `npm install` 来装包。

#### 常用命令

| 命令 | 作用 | 类比 |
|------|------|------|
| `npm install xxx` | 安装一个包到当前项目 | 在某项目里装个工具 |
| `npm install -g xxx` | 全局安装，所有项目都能用 | 给电脑装个系统级软件 |
| `npm uninstall xxx` | 卸载包 | 卸载 App |
| `npm update xxx` | 更新包 | 更新 App |
| `npm list -g` | 查看所有全局安装的包 | 查看所有已装软件 |
| `npm run dev` | 运行项目中定义的脚本 | 启动项目 |

#### 全局安装 vs 本地安装

```
npm install opencode-ai        ← 本地安装，只在当前目录的项目的里能用
npm install -g opencode-ai     ← 全局安装，到处都能用
```

全局安装的位置：`C:\Users\你的用户名\AppData\Roaming\npm\`

#### 国内加速

默认从国外的 npm 仓库下载，国内很慢。可以临时用镜像：
```bash
npm install -g xxx --registry https://registry.npmmirror.com
```

或永久设置镜像：
```bash
npm config set registry https://registry.npmmirror.com
```

#### 延伸阅读

- npm 不是唯一的包管理器，还有 yarn、pnpm、bun 等
- Go 语言有自己的包管理（go mod），Python 有 pip，Rust 有 cargo
- package.json 是项目的"依赖清单"，记录了需要哪些包

---

### 3.6 JSON 配置文件 —— 软件的"说明书"

#### 是什么

JSON（JavaScript Object Notation）是一种轻量级的数据格式，用纯文本存储结构化数据。大多数软件都用 JSON 来做配置文件。

#### 基本语法

```json
{
  "名字": "值",
  "数组": ["元素1", "元素2"],
  "嵌套对象": {
    "子键": "子值"
  },
  "布尔值": true,
  "数字": 42,
  "空值": null
}
```

#### 规则（容易踩的坑）

| 规则 | 正确 | 错误 |
|------|------|------|
| 键名必须加双引号 | `"name": "Jerry"` | `name: "Jerry"` |
| 字符串只能用双引号 | `"hello"` | `'hello'` |
| 不能有注释 | 无 | `// 这是注释` |
| 不能有多余逗号 | `{"a": 1}` | `{"a": 1,}` |
| 布尔值小写 | `true` / `false` | `True` / `False` |

#### 在本项目中的应用

OpenCode 的配置文件 `C:\Users\jerry\.config\opencode\opencode.json` 就是一个 JSON 文件，里面定义了：
- 使用哪些 AI 模型提供商
- 每个提供商有哪些模型
- API 密钥和服务器地址
- 默认使用哪个模型

#### `$schema` 字段

```json
{
  "$schema": "https://opencode.ai/config.json"
}
```
这个字段告诉编辑器配置文件的格式定义在哪，编辑器就能提供**自动补全和错误提示**。

---

### 3.7 客户端-服务器架构 —— 你和远方的关系

#### 是什么

客户端-服务器（Client-Server）是互联网最基本的架构模式。

```
客户端（你）  →  发送请求  →  服务器（远方）  →  返回响应  →  客户端
```

**生活类比**：点外卖——
- 你（客户端）在手机上下单 → 餐厅（服务器）收到订单做好菜 → 外卖员把菜送到你手上

#### 在本项目中的体现

```
Obsidian 插件（客户端）
    ↓ 发送 API 请求
OpenCode ACP 适配器（中间层）
    ↓ 转发请求
OpenCode Zen 服务（服务器）
    ↓ 调用 AI 模型
DeepSeek / GLM / Kimi（AI 模型）
    ↓ 返回结果
原路返回 → Obsidian 显示结果
```

#### 关键概念

- **请求（Request）**：客户端发给服务器的消息
- **响应（Response）**：服务器返回给客户端的消息
- **HTTP/HTTPS**：最常用的通信协议（HTTPS 是加密版）
- **状态码**：200=成功，404=找不到，500=服务器错误，502=网关错误
- **超时（Timeout）**：等太久没响应就放弃

---

## 第四章：工具对比深度解析

---

### 4.1 Claude Code vs OpenCode

#### 设计哲学的根本差异

```
Claude Code 的哲学：
  "我们做最好的模型 + 最好的工具，你只需要付钱，其他都不用管"
  → 垂直整合，闭门打造精品

OpenCode 的哲学：
  "我们做最好的工具，模型你自己选，不想付钱可以用免费的"
  → 开放生态，社区驱动
```

#### 技术架构对比

| 方面 | Claude Code | OpenCode |
|------|-------------|----------|
| 语言 | Node.js（JavaScript） | Go |
| 界面 | CLI（命令行） | TUI（终端用户界面） |
| 启动速度 | 较慢（Node.js） | 很快（Go 编译为原生二进制） |
| 内存占用 | 较高 | 较低 |
| 扩展方式 | MCP + Hooks | 插件系统 |
| 多模型 | ❌ | ✅ 75+ 提供商 |
| 离线 | ❌ | ✅ Ollama 本地模型 |

#### 2026 年 1 月的重要事件

Anthropic 从服务端封禁了 OpenCode 通过 OAuth 登录 Claude 订阅账号的通道。现在想在 OpenCode 里用 Claude 模型，只能通过 API Key。

#### 实用建议

```
如果你是个人开发者，预算有限：
  → OpenCode + DeepSeek/GLM/Kimi（便宜或免费）

如果你是企业团队，预算充足：
  → Claude Code（开箱即用，合规认证齐全）

如果你是全栈极客：
  → 两个都装，按场景切换
```

---

### 4.2 Obsidian Agent Client Plugin

#### 是什么

Obsidian 的第三方插件，让你在 Obsidian 笔记软件里直接和 AI 编程助手对话。

#### 工作原理

```
Obsidian（笔记软件，基于 Electron）
  └── Agent Client Plugin（插件）
        ├── Node.js path → 告诉插件 Node.js 在哪
        ├── Built-in Agents → 预置的 AI 助手（如 Claude Code）
        ├── Custom Agents → 自定义 AI 助手（如 OpenCode）
        │     ├── Agent ID → 唯一标识
        │     ├── Display name → 显示名称
        │     ├── Path → AI 助手程序的路径
        │     ├── Arguments → 启动参数（如 "acp"）
        │     └── Environment variables → 环境变量
        └── 通过 ACP 协议与 AI 助手通信
```

#### 配置要点

1. **Node.js path**：必须是系统级 Node.js 的完整路径
2. **Custom Agent Path**：用 `.cmd` 后缀的路径最稳妥（Windows）
3. **Arguments**：OpenCode 填 `acp`，表示启动 ACP 模式
4. **选对 Agent**：配置好之后，在聊天面板里要手动切换

---

## 第五章：完整的配置教程（可复制给任何人）

> 照着这个做，从零开始，一步步配好 Obsidian + OpenCode 的 AI 对话环境。

### 前置条件

- Windows 电脑
- 已安装 Obsidian
- 有 OpenCode 套餐账号（或其他 AI 模型的 API Key）

---

### Step 1：安装系统级 Node.js

1. 打开 [https://nodejs.org](https://nodejs.org)
2. 下载 **LTS 版本**（左边绿色按钮），选择 Windows Installer (.msi)
3. 双击安装包，一路 Next 到底
4. **关闭所有命令行窗口**
5. 打开新的命令行，验证：
   ```bash
   node -v
   # 应该输出类似 v22.x.x
   ```

### Step 2：安装 OpenCode CLI

打开命令行（cmd 或 PowerShell），运行：

```bash
npm install -g opencode-ai
```

如果下载慢，加镜像：
```bash
npm install -g opencode-ai --registry https://registry.npmmirror.com
```

### Step 3：确认 OpenCode 安装路径

```bash
where.exe opencode
```

找到 `.cmd` 结尾的那条路径，例如：
```
C:\Users\你的用户名\AppData\Roaming\npm\opencode.cmd
```

### Step 4：首次登录 OpenCode

```bash
opencode
```

按提示完成登录（用你的 OpenCode 套餐账号）。登录成功后按 `Ctrl+C` 退出。

### Step 5：配置 OpenCode 配置文件（可选）

如果需要自定义模型，编辑配置文件：

**文件位置**：`C:\Users\你的用户名\.config\opencode\opencode.json`

**模板**：
```json
{
  "$schema": "https://opencode.ai/config.json",
  "provider": {
    "opencode": {
      "models": {
        "deepseek-v4-pro": { "name": "DeepSeek V4 Pro" },
        "glm-5.2": { "name": "GLM 5.2" },
        "kimi-k2.7-code": { "name": "Kimi K2.7 Code" }
      },
      "name": "OpenCode Zen",
      "npm": "@ai-sdk/openai-compatible",
      "options": {
        "apiKey": "你的API密钥",
        "baseURL": "https://opencode.ai/zen/go/v1"
      }
    }
  },
  "model": "opencode/deepseek-v4-pro"
}
```

**注意事项**：
- `"provider"` 里的键名必须拼写正确（`"opencode"` 不是 `"opecode"`）
- `"model"` 是字符串格式：`"提供商名/模型名"`
- JSON 不能有注释、不能有多余逗号

### Step 6：在 Obsidian 中安装 Agent Client Plugin

1. Obsidian → 设置 → 社区插件 → 浏览
2. 搜索 "Agent Client"
3. 安装并启用

### Step 7：配置 Node.js path

1. 设置 → Agent Client
2. **Node.js path** 填入：
   ```
   C:\Program Files\nodejs\node.exe
   ```

### Step 8：添加 Custom Agent

1. 在 Agent Client 设置中找到 **Custom Agents**
2. 点 **Add custom agent**
3. 填写：

| 配置项 | 值 |
|--------|-----|
| Agent ID | `opencode` |
| Display name | `OpenCode` |
| Path | `C:\Users\你的用户名\AppData\Roaming\npm\opencode.cmd` |
| Arguments | `acp` |
| Environment variables | 留空 |

4. 关闭设置（Obsidian 自动保存）

### Step 9：重新加载插件

1. 设置 → 社区插件
2. 找到 Agent Client，关掉开关再打开

### Step 10：测试

1. 点 Obsidian 左侧边栏的**机器人图标**
2. 聊天面板顶部下拉菜单选择 **OpenCode**（不是 Claude Code！）
3. 发一条消息测试：`你好，能读到我的笔记吗？`

### 如果遇到问题

- 参考第六章的调试方法论
- 参考附录 B 的常见报错解决方案

---

## 第六章：调试方法论 —— 遇到问题该怎么想

> 授人以鱼不如授人以渔。这一章教你的是"怎么排查问题"，比记住具体解决方案更重要。

---

### 6.1 分层排查法

遇到问题时，从下往上逐层排查：

```
第 4 层：AI 模型服务（远程服务器是否正常？）
     ↑
第 3 层：ACP 协议（适配器是否正确启动？）
     ↑
第 2 层：Node.js（运行环境是否正常？）
     ↑
第 1 层：操作系统（文件存不存在？路径对不对？环境变量配了没？）
```

**具体做法**：每一层单独测试，确认没问题再往上走。

#### 第 1 层测试
```bash
# 文件存不存在？
ls "C:\Program Files\nodejs\node.exe"

# 命令能不能找到？
where.exe node
where.exe opencode

# 环境变量对不对？
echo $PATH
```

#### 第 2 层测试
```bash
# Node.js 能不能运行？
node -v
node -e "console.log('hello')"

# npm 能不能用？
npm -v
```

#### 第 3 层测试
```bash
# OpenCode 能不能启动？
opencode --version
opencode

# ACP 模式能不能启动？
opencode acp
# （卡住不动是正常的，说明在等待连接）
```

#### 第 4 层测试
```bash
# 网络通不通？
curl https://opencode.ai

# API 密钥对不对？
# （在 OpenCode 交互界面里发消息看有没有响应）
```

---

### 6.2 二分法定位

当不确定问题出在哪时，用"二分法"快速缩小范围：

```
问题：Obsidian 里发消息没有响应

把流程分成两半：
  前半段：Obsidian → Node.js → ACP 适配器
  后半段：ACP 适配器 → OpenCode → AI 模型

先测后半段：直接在命令行运行 opencode，看能不能和 AI 对话
  → 如果能：问题在前半段（Obsidian 配置）
  → 如果不能：问题在后半段（OpenCode 或网络）
```

---

### 6.3 看日志和报错信息

**黄金法则：仔细读报错信息！**

报错信息通常包含：
- **什么**出错了（What）
- **为什么**出错（Why）
- **在哪**出错的（Where）

例如：
```
ACP connection closed
```
- What：ACP 连接被关闭了
- Why：可能是适配器没启动、路径不对、参数不对
- Where：ACP 层（不是 Node.js 层、不是网络层）

---

### 6.4 消除变量法

每次只改一个东西，然后测试。如果一次改多个，就不知道是哪个改動起了作用。

```
❌ 错误做法：同时改了路径、改了参数、改了环境变量 → 好了 → 但不知道是哪个改对了
✅ 正确做法：先只改路径 → 测试 → 不行 → 再改参数 → 测试 → 好了 → 知道是参数的问题
```

---

### 6.5 搜索和求助

当自己排查不出来时：

1. **先搜索报错信息**：把完整的报错文字复制到 Google/AI 搜索
2. **查官方文档**：很多问题文档里都有答案
3. **查 GitHub Issues**：别人可能遇到过同样的问题
4. **问 AI**：把完整的报错信息、你的操作系统、你做过的操作都告诉 AI
5. **问社区**：Discord、论坛、Stack Overflow

**提问模板**：
```
环境：Windows 11
工具：Obsidian + Agent Client Plugin + OpenCode
操作：[你做了什么]
期望：[你想达到什么效果]
实际：[实际发生了什么]
报错信息：[完整的报错文字]
已尝试：[你已经试过什么]
```

---

## 第七章：学习方法论拓展

> 根据当前最热门的学习方法，帮你从"解决问题"升级为"系统学习"。

---

### 7.1 费曼学习法（Feynman Technique）

**核心理念**：如果你不能用简单的语言把一个概念讲清楚，说明你还没真正理解它。

**四个步骤**：

1. **选一个概念**：比如"Node.js 是什么"
2. **用大白话讲出来**：假装教一个完全不懂电脑的人
3. **发现盲点**：讲到卡壳的地方，就是你还不够懂的地方
4. **回顾和简化**：回去查资料，然后重新讲，直到能流畅讲完

**实践建议**：把这份文档里的每个概念，尝试不看文档、用自己的话讲一遍。讲不出来的地方就是你还需要补的。

---

### 7.2 项目驱动学习（Project-Based Learning）

**核心理念**：不要孤立地学知识点，而是通过做一个完整项目来串联所有知识。

**本项目就是一个完美的例子**：

```
项目：在 Obsidian 里配置 AI 助手

涉及的知识点：
  ├── 操作系统基础（文件路径、环境变量、PATH）
  ├── 命令行操作（where、ls、npm）
  ├── 网络基础（客户端-服务器、API、超时）
  ├── 软件工程（依赖管理、配置文件、JSON）
  ├── 通信协议（ACP、HTTP）
  └── 调试方法（分层排查、二分法、看日志）
```

**实践建议**：不要只看这份文档，自己动手从零配一遍。遇到问题先自己排查，实在不行再看文档对照。

---

### 7.3 刻意练习（Deliberate Practice）

**核心理念**：不是重复做已经会的事，而是挑战刚好超出能力范围的难题。

**练习建议**：

| 难度 | 任务 |
|------|------|
| ⭐ 入门 | 按文档配好 Obsidian + OpenCode |
| ⭐⭐ 初级 | 换一个 AI 模型试试（比如 GLM 或 Kimi） |
| ⭐⭐⭐ 中级 | 尝试在 VS Code 里也配一个 AI 助手 |
| ⭐⭐⭐⭐ 高级 | 用命令行写一个脚本，自动检查 Node.js 和 OpenCode 是否安装 |
| ⭐⭐⭐⭐⭐ 专家 | 阅读 OpenCode 的开源代码，理解 ACP 协议的实现细节 |

---

### 7.4 知识图谱法（Mind Mapping）

**核心理念**：把零散的知识点连成网络，而不是孤立记忆。

这份文档涉及的知识图谱：

```
                    ┌─── JavaScript（编程语言）
                    │
           ┌── Node.js（运行时）──┼─── npm（包管理器）
           │                      │
           │                      └─── Electron（桌面框架）
           │                               │
操作系统 ──┤                      ┌─── VS Code
           │                      │
           ├── PATH（环境变量）     └─── Obsidian
           │
           ├── 命令行 ─── where.exe / ls / echo
           │
           └── 文件系统 ── 路径 / 目录结构

                    ┌─── API（接口）
网络 ────────┤
           │    ┌─── API Key（密钥）
           └───┤
                └─── HTTP/HTTPS（协议）
                       │
                ┌─── 客户端-服务器架构
                │
           ┌─── ACP（AI 通信协议）
           │
AI 工具 ───┼─── OpenCode（开源 AI 助手）
           │
           └─── Claude Code（闭源 AI 助手）
```

**实践建议**：自己画一张知识图谱，把这份文档里的所有概念连起来。

---

### 7.5 间隔重复（Spaced Repetition）

**核心理念**：在快要忘记的时候复习，记忆效果最好。

**复习计划**：

| 时间 | 复习内容 |
|------|----------|
| 1 天后 | 回顾所有问题的现象和解决方案 |
| 3 天后 | 尝试不看文档，自己配一遍 |
| 1 周后 | 给别人讲一遍整个配置流程 |
| 2 周后 | 尝试在另一台电脑上配置 |
| 1 个月后 | 尝试配置一个不同的 AI 工具 |

**工具推荐**：Anki（间隔重复卡片软件），把关键概念做成卡片。

---

### 7.6 教学法（Learn by Teaching）

**核心理念**：教别人是最好的学习方式（费曼学习法的延伸）。

**实践建议**：
1. 找一个朋友，把这份文档的内容讲给他听
2. 如果他听懂了并能自己操作，说明你真的学会了
3. 如果他听不懂，你就知道哪里还需要补
4. 根据教学反馈更新这份文档

---

## 第八章：知识图谱与进阶路线

### 你现在的位置

```
                        ┌── 计算机科学基础 ──→ 数据结构、算法、操作系统
                        │
你在这里 ─── AI 工具使用 ─┼── 编程入门 ────────→ JavaScript / Python
                        │
                        ├── Web 开发 ────────→ HTML / CSS / 后端框架
                        │
                        ├── DevOps ─────────→ Docker / CI/CD / 云服务
                        │
                        └── AI 深度学习 ─────→ 机器学习 / 大语言模型 / Prompt 工程
```

### 建议的进阶路线

#### 阶段 1：巩固基础（1-2 周）

- [ ] 熟练使用命令行基本命令（cd、ls、mkdir、rm、cp）
- [ ] 理解环境变量和 PATH 的原理
- [ ] 学会看报错信息并搜索解决方案
- [ ] 了解 JSON 格式，能手动编写和修改配置文件
- [ ] 理解客户端-服务器架构

#### 阶段 2：深入 AI 工具（2-4 周）

- [ ] 尝试不同的 AI 模型（DeepSeek、GLM、Kimi、GPT），感受差异
- [ ] 学习 Prompt Engineering（提示词工程）
- [ ] 了解 MCP（Model Context Protocol），尝试配置 MCP 服务器
- [ ] 尝试用 AI 助手写一个简单项目（如个人博客、待办清单）
- [ ] 了解 AI 助手的 Agent 能力（自主完成任务）

#### 阶段 3：编程入门（1-3 个月）

- [ ] 学 JavaScript（因为你的工具链都基于它）
- [ ] 学 HTML/CSS（理解网页是怎么工作的）
- [ ] 用 Node.js 写一个简单的命令行工具
- [ ] 了解 Git 版本控制（clone、commit、push、pull）
- [ ] 在 GitHub 上创建自己的第一个仓库

#### 阶段 4：Web 开发（3-6 个月）

- [ ] 学一个前端框架（React 或 Vue）
- [ ] 学一个后端框架（Express.js 或 FastAPI）
- [ ] 理解数据库（SQL 基础）
- [ ] 部署一个网站到云端
- [ ] 用 AI 助手辅助开发一个完整项目

#### 阶段 5：AI 深度探索（持续）

- [ ] 了解大语言模型的原理（Transformer 架构）
- [ ] 学习如何微调模型
- [ ] 了解 RAG（检索增强生成）
- [ ] 尝试本地部署开源模型（Ollama）
- [ ] 探索 AI Agent 的设计和实现

---

## 附录 A：所有涉及到的命令速查表

### 系统查询命令

| 命令 | 作用 | 示例 |
|------|------|------|
| `where.exe 名称` | 查找命令的路径 | `where.exe node` |
| `Get-Command 名称` | PowerShell 查找命令 | `Get-Command node` |
| `echo $PATH` | 查看环境变量 PATH | - |
| `$env:PATH` | PowerShell 查看 PATH | - |
| `ls` | 列出目录内容 | `ls "C:\Program Files"` |

### Node.js / npm 命令

| 命令 | 作用 |
|------|------|
| `node -v` | 查看 Node.js 版本 |
| `npm -v` | 查看 npm 版本 |
| `npm install -g 包名` | 全局安装一个包 |
| `npm install -g 包名 --registry URL` | 用镜像源安装 |
| `npm uninstall -g 包名` | 全局卸载一个包 |
| `npm list -g` | 查看所有全局安装的包 |
| `npm config set registry URL` | 永久设置镜像源 |

### OpenCode 命令

| 命令 | 作用 |
|------|------|
| `opencode --version` | 查看版本 |
| `opencode` | 启动交互界面 |
| `opencode acp` | 启动 ACP 模式（会"卡住"等待连接，正常现象） |

### 网络排查命令

| 命令 | 作用 |
|------|------|
| `curl URL` | 测试能否访问某个网址 |
| `ping 域名` | 测试网络连通性 |
| `nslookup 域名` | 查看域名解析 |

---

## 附录 B：常见报错及解决方案

### 1. `net::ERR_CONNECTION_TIMED_OUT`

**含义**：网络连接超时  
**原因**：网络不通、被防火墙拦截、代理没配好  
**解决**：检查网络、配置代理、检查服务状态

### 2. `where.exe node` 没有输出

**含义**：系统 PATH 中找不到 node  
**原因**：没装 Node.js、或安装后没重开命令行  
**解决**：安装 Node.js → 关闭所有命令行 → 重新打开

### 3. `ACP connection closed`

**含义**：ACP 适配器连接被关闭  
**原因**：
- 没装 ACP 适配器
- Agent 路径配错了
- 聊天面板选错了 Agent（选了 Claude Code 而不是 OpenCode）  
**解决**：检查配置、切换正确的 Agent

### 4. `opencode acp` 卡住不动

**含义**：ACP 服务器在等待连接  
**是否正常**：✅ 正常，不是报错  
**说明**：ACP 是服务器进程，启动后等待客户端连接，没有输出是正常的

### 5. JSON 配置文件报错（如 `Expected string, got object`）

**含义**：JSON 字段类型不对  
**原因**：字段格式和 schema 要求不一致  
**解决**：查官方文档确认正确格式，或看 `$schema` 定义

### 6. `npm install` 很慢或失败

**含义**：从国外仓库下载太慢  
**解决**：使用国内镜像
```bash
npm install -g xxx --registry https://registry.npmmirror.com
```

### 7. 安装修复（Repair）后还是找不到程序

**含义**：程序文件已丢失，注册表残留  
**解决**：先 Remove 卸载干净 → 重新下载安装

---

## 附录 C：术语表

| 术语 | 通俗解释 |
|------|----------|
| **API** | 软件之间沟通的接口，类似餐厅的菜单 |
| **API Key** | 调用 API 的身份凭证，类似门禁卡 |
| **ACP** | Agent Client Protocol，AI 和编辑器之间的通信协议 |
| **CLI** | Command Line Interface，命令行界面 |
| **TUI** | Terminal User Interface，终端用户界面（比 CLI 更好看） |
| **Node.js** | JavaScript 运行时环境，让 JS 能在浏览器外运行 |
| **npm** | Node.js 的包管理器，类似应用商店 |
| **JSON** | 一种轻量级数据格式，常用于配置文件 |
| **PATH** | 环境变量，告诉系统去哪里找命令 |
| **LTS** | Long Term Support，长期支持版（更稳定） |
| **MCP** | Model Context Protocol，模型上下文协议 |
| **LSP** | Language Server Protocol，语言服务器协议 |
| **Runtime** | 运行时，程序运行所需的环境 |
| **Electron** | 用网页技术做桌面软件的框架 |
| **Bun** | 另一个更快的 JavaScript 运行时 |
| **Ollama** | 本地运行 AI 大模型的开源工具 |
| **环境变量** | 操作系统级的全局变量，所有程序都能读 |
| **全局安装** | `-g` 参数，安装后所有项目都能用 |
| **本地安装** | 不加 `-g`，只在当前项目目录可用 |
| **Schema** | 数据结构定义，描述配置文件的格式 |

---

## 结语

这份文档记录了从"完全不懂"到"成功配置"的完整过程。但更重要的是过程中学到的**思维方式**：

1. **不怕报错**：报错信息是帮你定位问题的线索，不是惩罚
2. **分层思考**：复杂问题拆成小问题，逐个击破
3. **查文档**：官方文档永远比猜测靠谱
4. **动手实践**：看十遍不如做一遍
5. **教会别人**：能教会别人才是真正学会了

> "任何足够先进的技术，都与魔法无异。" —— 阿瑟·克拉克  
> 但当你理解了原理，魔法就变成了工具。

---

*本文档创建于 2026 年 7 月 14 日，基于一次完整的 Obsidian + OpenCode 配置实战经历。*  
*随技术发展，部分内容可能需要更新。*
