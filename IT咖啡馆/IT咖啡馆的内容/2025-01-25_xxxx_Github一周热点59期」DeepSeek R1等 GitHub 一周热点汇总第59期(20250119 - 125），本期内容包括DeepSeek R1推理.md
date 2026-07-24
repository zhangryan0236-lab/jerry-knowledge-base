---
title: "Github一周热点59期」DeepSeek R1等 GitHub 一周热点汇总第59期(2025/01/19 - 1/25），本期内容包括DeepSeek R1推理模型、实时语音转文字、自托管PaaS平台、轻量监控工具和终端文件管理工具，一起来看具体内容吧。#人工智能 #ai #DeepSeek #内容启发搜索 #Github"
source: "getnote"
platform: "video"
author: "IT咖啡馆"
post_id: ""
post_link: "https://www.iesdouyin.com/share/video/7463486748794948873/?region=CN&mid=7463488150019525414&u_code=0&did=MS4wLjABAAAAc7eKDhsNHn319deydVccRyUKResBFByieWK7ZPBk5NI&iid=MS4wLjABAAAANwkJuWIRFOzg5uCpDRpMj4OX-QryoDgn-yYlXQnRwQQ&with_sec_did=1&titleType=title&share_sign=uxKvRWUwQWbHz2JjRFxnaIYm4zwDQ_FtT2LJlO3vW8o-&share_version=240100&ts=1737844001&from_aid=1128&from_ssr=1"
published_at: "2025-01-25 12:00:01"
created: "2026-07-24"
tags: ["clippings", "getnote", "IT咖啡馆"]
---

# Github一周热点59期」DeepSeek R1等 GitHub 一周热点汇总第59期(2025/01/19 - 1/25），本期内容包括DeepSeek R1推理模型、实时语音转文字、自托管PaaS平台、轻量监控工具和终端文件管理工具，一起来看具体内容吧。#人工智能 #ai #DeepSeek #内容启发搜索 #Github

> **来源**: [IT咖啡馆 · 得到大脑](https://www.iesdouyin.com/share/video/7463486748794948873/?region=CN&mid=7463488150019525414&u_code=0&did=MS4wLjABAAAAc7eKDhsNHn319deydVccRyUKResBFByieWK7ZPBk5NI&iid=MS4wLjABAAAANwkJuWIRFOzg5uCpDRpMj4OX-QryoDgn-yYlXQnRwQQ&with_sec_did=1&titleType=title&share_sign=uxKvRWUwQWbHz2JjRFxnaIYm4zwDQ_FtT2LJlO3vW8o-&share_version=240100&ts=1737844001&from_aid=1128&from_ssr=1)
> **发布时间**: 2025-01-25 12:00:01
> **博主主页**: https://www.iesdouyin.com/share/video/7463486748794948873/?region=CN&mid=7463488150019525414&u_code=0&did=MS4wLjABAAAAc7eKDhsNHn319deydVccRyUKResBFByieWK7ZPBk5NI&iid=MS4wLjABAAAANwkJuWIRFOzg5uCpDRpMj4OX-QryoDgn-yYlXQnRwQQ&with_sec_did=1&titleType=title&share_sign=uxKvRWUwQWbHz2JjRFxnaIYm4zwDQ_FtT2LJlO3vW8o-&share_version=240100&ts=1737844001&from_aid=1128&from_ssr=1

## AI 摘要

📦 **DeepSeek R1推理模型**
- 2025年1月20日DeepSeek发布，对标OpenAI的OE模型，同步开源模型权重
- 发布内容包括DeepSeek R1Zero（通过强化学习、无监督微调获取）和DeepSeek R1（基于R1Zero用少量人工标注数据冷启动微调后强化学习得到）
- 遵循开源MIT协议，允许用户通过蒸馏技术借助R1训练小模型，在Hugging Face上放出多个蒸馏小模型
- 发布同时上线API服务，价格为每百万token输入1元，是OpenAI OE1的1/50

🎙️ **Real Time ST**
- 简单易用低延迟的实时语音转文字项目，能实时监听麦克风将语音转为文本，适用于语音助手等
- 支持语音活动检测，可自动检测说话起止，能实时转录，可设置唤醒词启动服务
- 基于Whisper做成流式输出，语音唤醒、活动检测用成熟库
- 新增audio text recorder client，重写CLI接口，通过pip安装（Mac用户先安装port audio），项目test文件夹有测试样例

🛠️ **DocPlay**
- 免费的自托管PaaS平台，简化应用和数据库部署，让用户专注核心业务
- 支持多种编程语言部署，如Node.js、PHP、Python等，支持创建和管理多种数据库，如MySQL、PostgreSQL等
- 支持自动备份、docker compose、多节点扩展、模板部署、实时监控，提供CY工具和API
- 适合中小企业、个人开发者及教育培训场景，提供一键安装脚本

💡 **白奏**
- 开源轻量级服务器资源监控工具，实时监控服务器关键资源，记录历史数据
- 直观界面展示CPU、内存等关键指标，支持监控Docker容器运行状态，具备告警功能
- 基于客户端和服务器模型，由HUB（聚合展示监控数据）和Agent（收集资源使用情况并发送数据给HUB）组成
- 适合中小型服务器日常监控，执行docker compose文件快速部署HUB和Agent

📂 **Super File**
- 现代化终端文件管理工具，由Go语言和BBT框架打造，速度快、界面简洁、操作直观
- 可在Mac、Linux和Windows上安装使用（Windows需用PowerShell命令），安装后执行SPF启动
- 界面分为文件区、侧边栏区等区域，通过按键切换区域，按问号查看快捷键

## 原文

**标题：**Github一周热点59期」DeepSeek R1等 GitHub 一周热点汇总第59期(2025/01/19 - 1/25），本期内容包括DeepSeek R1推理模型、实时语音转文字、自托管PaaS平台、轻量监控工具和终端文件管理工具，一起来看具体内容吧。#人工智能 #ai #DeepSeek #内容启发搜索 #Github

Gith哈B一周热点汇总第59期本期的内容会包括deep sick re1推理模型，实时语音转文字，自托管pass平台，轻量监控工具和终端文件管理工具。这期呢，就是年前的最后一期了，提前祝大家新年快乐，一起来看具体内容吧，还是别忘了点赞啊。没错，这一周的首位呢，又属于deep sick, 就在北京时间2025年1月20日，Deep sick正式发布了deep sick re1模型，也是自家的深度思考推理模型，直接对标的就是open。AI的OE模型，并且呢，同步开源了模型权重。本次的发布内容呢，包括了deep sick r1zero和deep sick r1。R1ZERO呢，是纯粹的通过强化学习，在无监督微调的情况下获取的模型，而R1呢，则是基于R1ZERO利用少量人工标注的高质量数据进行冷启动微调，然后再进行强化学习得到的最终模型。那DCR1呢，依然是遵循了开源的MIT协议，并且呢，允许用户通过蒸馏技术借助R1。

来去训练其他的小模型，在哈根face上，Deep sick也放出了多个通过R1蒸馏的小模型，这点就非常的方便，因为之前的V3啊，由于规模过大，很难在本地运行。这下呢，有了蒸馏的小模型，我们就可以在自己的电脑上去尝试一下deep sick模型的运行效果了。Deep sick re1发布的同时呢，也上线了API服务，就是deep sick reason的模型，它的价格呢，是每百万token输入一块钱，基本上啊，这个价格是open io1的1/50。可以说啊，这一次deep sick又把模型的价格打下去了。你有病，那我也在考虑啊，要做一期deep sick r1的深度试用和解析视频。但是由于快过年了，不知道大家是不是有时间来看，所以啊，请大家在弹幕和留言里告诉我，你是不是想看这个视频，如果大家想看的话，我会抽时间来做一期专门的视频石油times dt呢，是一个简单易用低延迟的实时语音转文字项目。

它能实时的监听麦克风，将语音转为文本，适用于语音助手等需要快速精准转换的应用。Real times dt支持语音活动检测，能够自动的检测你何时开始和停止说话，同时呢，可以实时转录，实时的将语音转为文本。你可以设置一个唤醒词，当系统检测到你说了这个唤醒词的时候就会启动服务。本项目呢，实际上也是在whsper的基础上做的，把whsper做成了流式的输出速度很快，而且其他的像语音唤醒啊，活动检测这些呢，它也是用了一些比较成熟的库。Real time s dt呢，还新增了audio text recorder client, 可以自动的启动并连接服务器。C Li的接口也经过重写。具体的内容呢，在项目当中也有给出，想要使用real times dt呢，只需要通过pip来安装，如果你是Mac用户的话，那在安装之前首先要先安装好pod audio, 这个通过B来安装就可以。

可以了，安装完成之后呢，你可以通过示例代码来去试用。Real times dt在项目的test文件夹下带了很多的测试样例，你可以基于项目给出的测试示例，来去实现自己程序使用real times dt的实际方法。Doc play也是一款免费的自托管pass平台，专为简化应用和数据库的部署而设计。无论是开发人员还是企业用户啊，Doc play都可以提供高效便捷的解决方案，帮助用户专注在核心业务而非基础设施的管理上。如果你还是不理解它到底是做什么的，你可以把它理解成open shift或者是hele。简单来说啊，就是帮你更方便的部署系统。Doc py呢，支持多种编程语言的部署，包括note，JS, PHP, Python, go, Ruby等。用户呢，可以根据项目的需要来去选择合适的技术站，灵活部署应用，也支持创建和管理多种数据库，比如像MYSQ、postg circle、mango、DB等，另外呢，它还支持自动备份docker comp.

多节点扩展模板部署实时监控，并且提供了CY工具和API。在使用场景上，Doc PRO也比较适合中小企业快速部署上线产品，或者是个人开发者来去管理自己的项目，以及在教育和培训场景中作为部署的辅助工具。项目提供了一键安装脚本，只需要在虚拟机上执行就可以快速的安装和部署了改造，是一款开源的轻量级服务器资源监控工具，支持对服务器的关键资源进行实时的监控，并记录历史数据。它通过直观的界面展示CPU、内存、磁盘、IO等关键的指标，还支持监控刀客容器的运行状态，帮助用户更好的了解容器的性能表现。除此之外呢，白奏还具备告警功能，能在系统出现异常时及时的提醒管理员，确保系统运行的稳定。白奏的架构呢，是一个基于客户端和服务器模型的监控平台，由哈B和agent组成。哈B呢，作为白奏的中心服务器，用于聚合和展示监控数据，Agent是。

是安装在被监控系统上的轻量级程序，它负责收集服务器的资源使用情况，并将数据发送给哈B白走，非常适合中小型服务器的日常监控需要。只需要执行项目给出的docker compose文件就可以快速的部署HUB，然后呢，再根据HUB当中给出的这个docker compose内容，在要监控的服务器上运行，就可以启动agent，然后呢，你就可以通过BS奏去监控这台服务器了。Super file是一款现代化的终端文件管理工具，它由go语言和BBT框架打造，不仅速度快，而且界面简洁，操作直观。如果你一直觉得你的终端里的文件管理太过平庸的话，那可以试试superf，它不仅能够让你更高效的管理文件，还能让你的终端看起来非常的酷。你可以在麦C、Linux和Windows上安装和使用superf。麦C和Linux可以直接运行脚本安装就可以了。Windows的话还没有完全支持需要使用powerce的命令。安装完成以后呢，执行SPF就可以启动superf。打开Superf之后，我们可以看到。

到界面分为文件区、侧边栏区、处理区、原数据区等区域。通过不同的按键可以在区域之间切换，然后呢，通过快捷键就可以执行文件管理的相关操作了。只需要按问号就可以查看相关的快捷键。更多的具体操作呢，我觉得还是自己安装之后去亲自尝试一下吧。那好了，本周的内容就到这里了，我们下次再见。
