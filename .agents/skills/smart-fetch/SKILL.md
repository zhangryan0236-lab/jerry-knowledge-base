---
name: smart-fetch
description: >
  四层自动降级的智能网页抓取。触发场景：(1) 需要抓取网页内容，(2) 普通抓取失败（403/空白/JS渲染），
  (3) 需要登录态页面内容。自动选择最优抓取方式。
---

# Smart Fetch — 四层降级网页抓取

当需要抓取网页内容时，按以下顺序尝试，每层失败自动降级：

## Layer 1: web_fetch（最快）

直接 HTTP 请求，适合静态页面和大部分网站。

```bash
# 使用 Agent 内置的 web_fetch 工具
# 或 curl
curl -s "URL" -H "User-Agent: Mozilla/5.0"
```

- 成功标志：返回内容 > 200 字符
- 失败条件：error / 内容为空 / 403/404

## Layer 2: Jina Reader（JS 渲染）

适合需要 JavaScript 渲染的页面。

```bash
curl -s "https://r.jina.ai/URL" -H "Accept: text/markdown"
```

- 成功标志：返回 markdown 内容 > 200 字符
- 失败条件：内容为空 / 超时

## Layer 3: Browser Snapshot（需要登录态/交互）

使用浏览器工具的 snapshot 模式。

```
browser(action=navigate, targetUrl=URL, profile=openclaw)
browser(action=snapshot, compact=true, profile=openclaw)
```

- 成功标志：snapshot 包含有意义的文本
- 失败条件：页面空白 / 需要验证码

## Layer 4: Browser Full Render（最后手段）

完整浏览器渲染，包括等待、滚动、点击展开。仅在前三层全部失败时使用。

## 决策逻辑

```
URL 输入
  ├─ 已知需要登录的域名 → 直接 Layer 3
  ├─ 已知 Jina Reader 效果好的域名 → 直接 Layer 2
  └─ 其他 → Layer 1 开始，逐层降级
```

## 域名路由表

| 域名模式 | 推荐层级 | 原因 |
|----------|---------|------|
| *.feishu.cn/wiki/* | Layer 3 | 需要登录态 |
| *.feishu.cn/docx/* | Layer 3 | 需要登录态 |
| arxiv.org | Layer 1 | 静态页面 |
| github.com | Layer 1 | 静态页面 |
| x.com / twitter.com | Layer 2 | JS 渲染 |
| mp.weixin.qq.com | Layer 2 | JS 渲染 |

随着使用不断补充此表。Agent 可以自行维护路由表，记录哪些域名在哪一层成功。
