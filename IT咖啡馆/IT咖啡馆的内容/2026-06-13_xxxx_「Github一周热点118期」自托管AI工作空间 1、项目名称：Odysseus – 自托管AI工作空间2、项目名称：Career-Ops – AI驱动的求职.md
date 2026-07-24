---
title: "「Github一周热点118期」自托管AI工作空间 1、项目名称：Odysseus – 自托管AI工作空间
2、项目名称：Career-Ops – AI驱动的求职系统
3、项目名称：Tolaria – Markdown 知识库桌面应用
4、项目名称：Planning-with-Files – AI Agent 持久化规划工具
5、项目名称：Heretic – 大模型自动解禁工具
#AI新星计划  #Github #智能体 #obsidian #IT咖啡馆"
source: "getnote"
platform: "video"
author: "IT咖啡馆"
post_id: ""
post_link: "https://www.iesdouyin.com/share/video/7650508845415959858/?region=CN&mid=7650509115663338250&u_code=162kce2dj&did=MS4wLjABAAAAvC2P_NbBdq-WakkzUfphNspdtog_U2mQ-LfgFpW3YIk&iid=MS4wLjABAAAANwkJuWIRFOzg5uCpDRpMj4OX-QryoDgn-yYlXQnRwQQ&with_sec_did=1&video_share_track_ver=&titleType=title&share_sign=7mc03KXCNDx6MA9lj7s1VE6scb2eoGLWA6jdjNoH2yM-&share_version=220800&ts=1781366726&from_aid=1128&from_ssr=1&share_track_info=%7B%22link_description_type%22%3A%22%22%7D"
published_at: "2026-06-13 10:00:00"
created: "2026-07-24"
tags: ["clippings", "getnote", "IT咖啡馆"]
---

# 「Github一周热点118期」自托管AI工作空间 1、项目名称：Odysseus – 自托管AI工作空间
2、项目名称：Career-Ops – AI驱动的求职系统
3、项目名称：Tolaria – Markdown 知识库桌面应用
4、项目名称：Planning-with-Files – AI Agent 持久化规划工具
5、项目名称：Heretic – 大模型自动解禁工具
#AI新星计划  #Github #智能体 #obsidian #IT咖啡馆

> **来源**: [IT咖啡馆 · 得到大脑](https://www.iesdouyin.com/share/video/7650508845415959858/?region=CN&mid=7650509115663338250&u_code=162kce2dj&did=MS4wLjABAAAAvC2P_NbBdq-WakkzUfphNspdtog_U2mQ-LfgFpW3YIk&iid=MS4wLjABAAAANwkJuWIRFOzg5uCpDRpMj4OX-QryoDgn-yYlXQnRwQQ&with_sec_did=1&video_share_track_ver=&titleType=title&share_sign=7mc03KXCNDx6MA9lj7s1VE6scb2eoGLWA6jdjNoH2yM-&share_version=220800&ts=1781366726&from_aid=1128&from_ssr=1&share_track_info=%7B%22link_description_type%22%3A%22%22%7D)
> **发布时间**: 2026-06-13 10:00:00
> **博主主页**: https://www.iesdouyin.com/share/video/7650508845415959858/?region=CN&mid=7650509115663338250&u_code=162kce2dj&did=MS4wLjABAAAAvC2P_NbBdq-WakkzUfphNspdtog_U2mQ-LfgFpW3YIk&iid=MS4wLjABAAAANwkJuWIRFOzg5uCpDRpMj4OX-QryoDgn-yYlXQnRwQQ&with_sec_did=1&video_share_track_ver=&titleType=title&share_sign=7mc03KXCNDx6MA9lj7s1VE6scb2eoGLWA6jdjNoH2yM-&share_version=220800&ts=1781366726&from_aid=1128&from_ssr=1&share_track_info=%7B%22link_description_type%22%3A%22%22%7D

## AI 摘要

🤖 **自托管AI工作空间**
- 目标是成为自托管的ChatGPT或Cloud替代品，本地/隐私优先，无后门
- 功能全面：聊天、Agent、Cookbook、深度研究文档编辑器、邮件、笔记、任务、持久记忆、日历同步、移动端PWA
- 安装方式：推荐Docker一键部署，Mac用户有专用启动脚本并适配苹果芯片
- 特色功能：Cookbook扫描硬件配置推荐合适模型，Compare功能支持模型盲测
- 项目现状：超6.5万Star，增长迅猛；作者为瑞典YouTube前顶流创作者，代码多由AI生成

💼 **AI求职系统Mark Dong**
- 基于Cloud Code构建，核心是反向筛选公司，打造全功能求职指挥中心
- 核心功能：A-F评分系统（10维度加权评估职位匹配度）、自动生成ATS优化简历、扫描海外招聘门户、批量评估、面试故事库
- 安装启动：一条命令安装，首次运行对话式引导配置简历
- 设计理念：作为过滤器筛选高价值岗位，评分低于4.0不建议投入时间

📚 **知识库应用（UpCity替代）**
- 核心概念：文件优先、Key优先、离线优先，笔记为普通Markdown文件，知识库即Key仓库
- 跨平台支持：Mac OS、Linux、Windows，Mac用户可通过Homebrew一键安装
- 技术栈：Tauri+React+TypeScript，体积比Electron打包更轻量
- AI友好性：笔记结构适合AI Agent上下文，支持Cloud Code、Codex、Claude CLI集成
- 现状：热度不错但小众，建议观望（知识库变更成本高）

📝 **基于文件的持久规划Skill**
- 核心思路借鉴被Mita收购的Minus公司，用持久化Markdown文件做任务规划、进度追踪、知识存储
- 解决痛点：避免大模型上下文窗口满后丢失进度，信息存于本地task_plan.md
- 版本更新：v3.0加入自制模式和门控模式，支持主流AI Agent工具（Cloud Code、Claude、Drama CLI等）
- 注意事项：与Super Powers等工具可能存在冲突，不建议同时开启

🔓 **大模型解禁工具Heretik**
- 全自动大模型审核移除工具，核心技术为“方向消融”（切除模型拒绝回答的特定向量）
- 效果：拒绝率从90%降至接近0，基本不损伤模型智商，无需重新训练/微调
- 安装使用：pip install安装，一条命令运行，需几十分钟完成处理
- 硬件要求：依赖N卡，Mac芯片适配不完全
- 风险提示：仅用于学术用途，需正规使用

📄 **资料分享**
- 第一份：2026 Web3行业深度洞察（Web3重塑代码编写与软件创建者群体）
- 第二份：2026年飞行汽车发展报告（产业处于早期，受政策影响大）

## 原文

kithab一楼热点汇总第一百一十八期本期的内容呢，包括了自托管ai工作空间，ai求知系统mark dong，知识库应用基于文件的持久规划skill，以及呢大模型解禁工具。最后呢，还是分享两份资料，那如果觉得内容不错啊，也别忘了点赞和关注。本项目呢，是一个自托管的ai工作空间，那这个名字我也不是太会读。目标呢，就是做一个自托管的叉的gpt，或者是cloud的替代品，那跑在你自己的硬件上，用自己的数据，本地优先，隐私优先，没有后门。功能上呢，算是比较全面，包括了像聊天呢agent， cookbook，深度研究文档的编辑器，邮件，还有笔记和任务，以及呢持久的记忆，同时呢，还有日历的同步支持啊移动端的p w a。那安装上呢，推荐啊刀客的一键部署，mac用户呢也有专门的启动脚本，对苹果的芯片呢，也做了适配。那它的这些功能呢，其实我觉得算是中规中矩。这当中呢，我觉得比较有特色的是cookbook，它会扫描你的硬件配置，看你的gpu呢是什么，然后呢，显存有多大，然后呢，给你推荐合适的模型。那选好模型之后啊，一键下载，一键部署，就不需要你再去手动啊算你的显存够多少，可以呢用什么样的模型了。再有呢，就是compare的功能，你可以用它呢来去对模型啊做一下盲测。那项目呢，目前啊，已经超过了六万五千的star，增长的速度呢，是非常猛，但是呢，你可能也好奇啊，对比cloudcode或者是hammers的话，他并没看出有什么明显的优势，那为什么就这么火呢？那这个事呢，就要说到他的作者了，但是这名字我还是不会读啊，一个瑞典人，他是youtube历史上最成功的创作者之一，巅峰的时期呢，订阅数量超过了一点一亿，长期呢占据着youtube订阅第一的位置。那本项目呢，大部分代码其实也是ai写的，所以呢，很多人呢也就质疑啊，这个是不是就是靠网红的效应来去刷star呢？其实如果换了别人的话，这个项目可能就不太行了。那这个观点呢，我觉得还是有一些道理的。不过这个呢，其实也提醒啊，所有的开源作者，想要运营好自己的开源项目呢，也要学会合理的营销，不能啊单纯的是酒香不怕巷子深。career ops呢是一个基于cloud code构建的a i求职系统，现在呢，大公司啊都会用a i呢来去筛选简历，那求职者呢，能不能也用a i来去反向筛选公司呢，那本项目呢，就是干这么一个事，他把ai编成a镇呢，变成一个全功能的求职指挥中心。那不知道大家有没有看最近的新闻啊，拉钩网呢，已经申请破产了。在我刚毕业的时候呢，拉钩啊可是互联网人求职的一个大平台，那现在呢，已经被ai啊狠狠的淘汰了，时代的浪潮啊，真是滚滚而过。那它的核心功能呢，包括了像a到f的平分系统，通过十个维度的加权呢来去评估职位的匹配度。在。自动的呢生成ats优化的简历，会针对每一个岗位呢来去定制化。pd还会自动的去扫描招聘的门户，当然了，这里面主要针对的是海外的招聘门户。还有呢就是批量的进行评估，还有面试的故事库，那作者啊说那使用上呢，可以一条命令来去安装和启动，那首次运行呢，会通过对话式的引导啊来去让你配置些简历和编号。不过有一点要提醒一下啊，这和很多人目前在用的那种海头工具是不同的，项目也明确说了，它是一个过滤器，帮助你从几百个机会里面去筛选出真正有价值，值得你花时间的那些岗位。那评分低于四点零的呢，你就别浪费时间了。那这个设计理念呢，我还是挺赞同的。那本项目呢是一个跨平台的桌面应用，用来呢管理macdon知识库。同样啊，这个名字还是太难念了，那当然用一句更简单的话来描述它的话呢，它就是一个upcity的替代。如果你用过offcd的话呢，其实很容易理解它的功能，它的核心概念呢，就是文件优先，key优先，离线优先。你的笔记呢，都是普通的market文件，那每一个知识库呢，就是一个key的仓库，你不需要额外的账号，也不需要订阅，那也不依赖云端，数据呢都在你本地。那项目呢，支持mac os，linux和windows。mac用户啊，可以通过比如像pro来去一键安装，那同时呢，他的技术站用的是tory加react加typescript，所以呢，它的体积啊，会比election的打。包的要清亮很多，那比较有亮点的呢，是它强调a i的友好，那笔记结构啊，天然适合a i a镇的。作为上下文官方呢也提供了color code codex或者是专卖cli的一个集成方案。换句话来说呢，它不只是给人用的一个笔记工具，那也是一个给a i a镇的知识库。虽然这个项目最近的热度很不错，但是呢它毕竟还是比较小众，那可以呢尝试一下，但是呢，我觉得目前项目处在初期，还是建议呢以观望为主，毕竟呢，变更知识库其实是一个比较大的工程。planning with files呢是一个skill，经常呢可以在一些啊推荐好用skill的文章里看到它，那它的核心思路呢，其实借鉴了minus，就是呢之前那个被mita收购的a i a智能公司，我相信很多朋友都很熟悉，那做法呢，其实很简单啊，就是用持久化的marketing文件来去做任务的规划，还有呢进度的最终还有就是知识的存储。当你在没有用任何插件和scale的时候呢，比如像cloud code在执行复杂任务的时候，如果上下文创和满了，那传统的方式呢就是clear一下，然后呢就会丢失掉以前的进度。但是planning with fails呢，就是把所有规划的信息啊，都存到本地磁盘上的market文件里，这样的话呢，a镇他就有了工作的记忆，他使用的时候呢，会创建一个task plan点md，用来呢记录目标啊，还有步骤啊，还有进度那每。一次a镇呢自动执行的时候都会重新的去加载，那完成任务的时候呢也会有专门的这种控制和验证，那最新的v三点零版本当中啊还加入了自制模式和门控模式，那它呢也是支持了目前主流的各种a振能工具，比如像cloud code closer啊还有drama cla等等。但是呢在使用planning with files的时候呢要注意一下冲突的问题，那比如呢像我之前在试用的时候就发现呢它和super powers呢会有一些冲突，所以呢不建议啊同时开启heretik呢是一个全自动的大模型审核移出工具，能够呢帮你解除啊大模型的审查限制，那它的核心技术呢叫方向消融，就是找到模型内部啊负责拒绝回答的特定方向的项量，然后呢直接把它们呢从模型的全动当中啊给它切除掉，从而呢永久的移除掉拒绝的行为不是呢需要重新去训练或者做昂贵的微调，那使用上呢一条pip in store就可以安装了，然后再执行一条命令就能跑起来，那他呢会用大概几十分钟的时间啊，在零人工干预的情况下把主流的开元大模型的拒绝机制给去除掉，拒绝率呢可以从百分之九十降到接近于零，同时呢也基本不太损伤模型的智商。那这里如果想上手玩的话呢还是需要恩卡的，因为我在本地试了一下啊，他对麦克芯片的适配呢还不是太完全，我本地没有测试成功，那这个项目当然非常具有争议，请注意啊仅用于。学术使用要用在正规用途，千万不要跑偏哦。那最后呢，还是分享两份资料，那第一份呢是二零二六外部抠定行业深度洞察。那外部抠定啊，现在真是越来越火了，越来越多的非程序员人群呢，开始尝试啊，去外部抠定，那他呢不单是重塑了如何去写代码，而且呢也在改变啊，到底谁可以去创建软件这件事情。那第二份呢，是二零二六年飞行汽车发展报告，那我还记得啊，小时候在看科幻片里的时候，这种飞行汽车感觉很酷，那现在呢，已经逐渐发展成了产业那像小鹏啊，很久之前就已经出了概念车，但这个产业呢，还是在很早期，而且呢，也很受政策方面的因素的影响。以上就是本期的全部内容，下次再见。
