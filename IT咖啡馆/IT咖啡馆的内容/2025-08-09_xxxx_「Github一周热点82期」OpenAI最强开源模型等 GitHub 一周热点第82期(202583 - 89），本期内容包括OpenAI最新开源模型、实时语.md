---
title: "「Github一周热点82期」OpenAI最强开源模型等 GitHub 一周热点第82期(2025/8/3 - 8/9），本期内容包括OpenAI最新开源模型、实时语音活动检测工具、团队知识库工具、 本地 AI 应用开发工具和命令行工具的帮助集合。#AI新星计划  #Github #OpenAI #gpt5 #程序员"
source: "getnote"
platform: "video"
author: "IT咖啡馆"
post_id: ""
post_link: "https://www.iesdouyin.com/share/video/7536421242123930895/?region=CN&mid=7536421439721736986&u_code=0&did=MS4wLjABAAAAfP24hqp855jlIZGHBXh3l82jauT23GfnmlS8ffBryhE&iid=MS4wLjABAAAANwkJuWIRFOzg5uCpDRpMj4OX-QryoDgn-yYlXQnRwQQ&with_sec_did=1&video_share_track_ver=&titleType=title&share_sign=dzK57m1SWjbHLaE8vpzsZNYGk4NuYCdlvOQq5Y7rYxM-&share_version=220600&ts=1754755454&from_aid=1128&from_ssr=1"
published_at: "2025-08-09 11:23:40"
created: "2026-07-24"
tags: ["clippings", "getnote", "IT咖啡馆"]
---

# 「Github一周热点82期」OpenAI最强开源模型等 GitHub 一周热点第82期(2025/8/3 - 8/9），本期内容包括OpenAI最新开源模型、实时语音活动检测工具、团队知识库工具、 本地 AI 应用开发工具和命令行工具的帮助集合。#AI新星计划  #Github #OpenAI #gpt5 #程序员

> **来源**: [IT咖啡馆 · 得到大脑](https://www.iesdouyin.com/share/video/7536421242123930895/?region=CN&mid=7536421439721736986&u_code=0&did=MS4wLjABAAAAfP24hqp855jlIZGHBXh3l82jauT23GfnmlS8ffBryhE&iid=MS4wLjABAAAANwkJuWIRFOzg5uCpDRpMj4OX-QryoDgn-yYlXQnRwQQ&with_sec_did=1&video_share_track_ver=&titleType=title&share_sign=dzK57m1SWjbHLaE8vpzsZNYGk4NuYCdlvOQq5Y7rYxM-&share_version=220600&ts=1754755454&from_aid=1128&from_ssr=1)
> **发布时间**: 2025-08-09 11:23:40
> **博主主页**: https://www.iesdouyin.com/share/video/7536421242123930895/?region=CN&mid=7536421439721736986&u_code=0&did=MS4wLjABAAAAfP24hqp855jlIZGHBXh3l82jauT23GfnmlS8ffBryhE&iid=MS4wLjABAAAANwkJuWIRFOzg5uCpDRpMj4OX-QryoDgn-yYlXQnRwQQ&with_sec_did=1&video_share_track_ver=&titleType=title&share_sign=dzK57m1SWjbHLaE8vpzsZNYGk4NuYCdlvOQq5Y7rYxM-&share_version=220600&ts=1754755454&from_aid=1128&from_ssr=1

## AI 摘要

📦 **OpenAI开源模型GPT-OSS**
- 时隔六年OpenAI发布GPT-OSS，开源120B和20B两个版本，为moe纯文本非多模态推理模型，协议为阿帕奇2协议。
- 120B实际参数117B，激活参数5.1B；20B参数209亿，激活参数3.6B，上下文长度均为128K。
- 跑分整体略低于O3和O4MINI，相比尺寸接近的模型分数更高。
- 本地运行友好，原生支持4比特量化，20B版本16g显存可跑，欧拉玛LM499可运行，未出现崩溃等问题，但代码表现不如千分3CODE.30B 。

🎙️ **Ten VAD语音活动检测工具**
- 轻量、低延迟、低功耗、高准确率，用于语音输入大模型前预处理。
- 可识别音频中是否有人声、判断语句起止、过滤无关音频，提升语音识别准确性。
- 已开源ons模型及预处理代码，提供多平台二进制文件和设计代码，语音识别框架QD已支持，所属开源系列还有ten framework等开发工具。

📚 **奥特莱团队知识库工具**
- 提供现代化直观文档管理和协作体验，支持实时协作、灵活权限管理和第三方工具深度集成。
- 核心功能包括文档管理组织（层级式文件结构、拖放排序、全文搜索）、实时协作（多人同时编辑、团队权限控制、单点登录）、集成扩展（与select notion github等集成）。
- 项目前后端用TS写，前端是white编译的react应用，后端是KOA驱动的API服务。

💻 **DYD本地AI应用开发工具**
- 目标成为DE50LOVEABLE boat替代品，提供多平台安装包，可本地使用，不限制AI选择。
- 能读取本地运行模型，创建项目时自动创建技术文件，HUB有官方模板。开发时在线API更好用，一体化开发和所见即所得做得不错，但开发体验因人而异。

📖 **TLDRR命令行帮助实体集合**
- 由社区维护，为常见Linux命令提供简洁示例驱动的帮助，可通过npm、apt或Bo安装。
- 与默认命令帮助对比，有示例更直观。

📄 **资料分享**
- 《RTE和AI融合的生态洞察报告》：由RTE开发者社区和info q研究中心联合推出。
- 北京大学内部的deep sick研讨系列资料 。

## 原文

T upb一周热点汇总第82期本期的内容呢，包括open AI最新的开源模型、实时语音活动检测工具、团队知识库工具、本地AI应用开发工具和命令行空工具的帮助集合，最后呢，还有两份资料分享，如果觉得内容不错呢，别忘了点赞关注我们进入正式的内容。时隔六年啊，Open AI终于兑现了开源大模型的承诺，发布了GP to oss, 详细的测评呢，可以翻一下我之前发的这个视频，网上很多人已经把它捧上了开源新房的位置，那你怎么看呢？PP to oss呢？一共开源了两个版本，120B和20B，都是moe纯文本非多摩泰的推理模型，协议呢，是阿帕奇2协议方面呢，还是非常友好和宽松的120B的版本呢？实际参数是117B，激活参数是5.1B 20B的版本是209亿参数，激活参数是3.6B，上下文的长度都是128K，跑分方面呢，根据open AI给出的数据可以看到啊，整体是略低于O3和O4MINI。如果我把。

尺寸接近的千万三放进来呢，就可以看到更直观的一个对比，这里分数上要高出不少，当然呢，现在的跑分很多时候仅供参考，并不能完全可信。本地运行方面呢，是比较友好的，原生支持了4比特的量化，20B的版本呢，16g的显存就可以跑了。工具方面呢，欧拉玛LM499都可以运行，持续运行的效果呢，我觉得还是不错的，尤其没有遇到出现崩溃死循环bug的情况啊，是值得表扬的，但是很多网友也反馈啊，代码方面的表现呢，不如千分3CODE点30B，这点我也是同意的，个人觉得呢，Openi这次开源呢，应该还是前代技术的一个下放，那现在啊，人们对于open AI来说呢，最关注的还是刚刚发布的GPT5，那它的后续表现到底如何？Ten VAD呢，是一个轻量的、低延迟、低功耗、高准确率的语音活动检测工具，AI语音呢，一直是构建多模态智能体的重要组成部分，我们一直期望voice agent呢，可以像真人一样交谈，要达到这个目标呢，AI首先要先听懂再回答。Ten VD呢，就。

就是解决这个问题的工具，它通常用于语音输入大模型前的预处理步骤，比如识别音频当中是否有人声，判断一句话的开始和结束位置，过滤到无关的音频。举个例子啊，比如我们要开发一个声音唤醒的机器人，那就需要先用VAD来去判别是否有人声，然后再去做声纹的识别和ASR。通过Ten va ad的预处理可以提升语音识别的准确性，避免将无意义的声音送入到STG的流程当中，从而产生额外的开销。Hey I'm ten agent I can speak c and reason for knowledge base ask me anything, 目前呢，Ten VAD已经开源了ons模型以及预处理的代码，并且提供了Linux Windows等多个平台可调用的二进制文件和设计代码。同时啊，语音界的大佬，语音识别框架QD呢，已经支持了ten VAD, 可以看出对它的认可。还有一点呢，Ten是一个开源系列，它还包含了ten framework ten turn detection, 都是非常优秀的voice agent的开发工具。

去关注音频方面的朋友啊，可以去尝试奥特莱是一款开源的团队知识库工具，它提供了现代化直观的文档管理和协作体验，帮助团队高效组织管理和共享知识。奥特莱的核心特点是支持实时协作，灵活的权限管理以及第三方工具的深度集成。核心功能上来说呢，首先是文档的管理与组织，支持层级式的文件结构、拖放排序和全文搜索，其次是实施协作，支持多人同时编辑啊，还支持团队的权限控制和单点登录。在集成与扩展方面呢，支持与select notion github等常见工具的集成，方便信息的同步与连同。项目的结构上来说是前后端两部分都是用TS写的，前端是一个white编译的react应用，后端是API服务，由KOA驱动使用centralize作为or RM关注这方面开发的朋友啊，可以去深入研究一下。DYD呢，是免费本地的AI应语程序构建开发工具，目标是成为DE50LOVEABLE boat的替代品D。

Ad呢，提供了多个平台的安装包，可以直接下载使用，它的好处就是完全可以本地使用，并且不限制使用哪家AI，可以根据自己的情况来去做选择，比如呢，我在本地用LM studio启动了一个千分3CODEDER a30B的模型，然后可以在DYAD里直接读取到本地运行的模型，开始项目的时候会自动的去创建所需的技术文件，在HUB里呢，官方也提供了模板的选择，可以理解为去选择用哪个开发的技术站，虽然可以通过本地的模型来去使用啊，但是说实话啊，开发的时候呢，还是比较追求速度和效果的，所以还是在线的API更好用一些，整体用下来的感觉呢，它的一体化开发和所见技术德还是做的不错的，但是我个人觉得啊，他没有科ER tree之类的IDE里去开发的体验好，也可能呢，我是更习惯使用IDE，也许对于非开发人员来说呢，这种体验方式会更好一些。TLDRR的意思呢，是too long didn't read, 意思就是啊，太长了，不想看。它是一个由社区维护的类Linux命令的简。

话和实用的命令行帮助实体集合，你有没有这种感觉啊，终端里很多的命令啊，虽然有帮助手册，但是看了似乎又没看，都是废话。TLDRR呢，为常见的命令啊，提供了简洁的由视力驱动的帮助，而不是那种详细而冗长的手册，可以通过n PM apt或者是Bo来去安装，根据自己的台来选择啊。我们可以来做一个直观的对比，这个是默认的套的命令，然后呢，我们再用TLDRR来去执行一下啊，执行TLDRR套我们再来对比一下，两者就可以看出明显的差距，有例子的呢，就明显直观了很多，这个其实就和很多工具呢，明明有说明文档，但是大家都很喜欢来找视频教程是一个道理的。最后呢，还是分享两个资料，第一份呢，是一个报告，RTE和AI融合的生态洞察报告，是RTE开发者社区和info q研究中心联合推出的一份报告，是一个关于实时互动和AI融合的不错资料，如果关注voices agent呢，可以来看一看。第二个呢，是北京大学内部的deep sick研讨系列资料。

上周呢，分享了其中两个，很多朋友呢，觉得这个东西不错，所以呢，我特意去找了一下，找到了一个完整的系列，就一块儿分享出来，那么好了，以上就是本周的全部内容，我们下次再见。
