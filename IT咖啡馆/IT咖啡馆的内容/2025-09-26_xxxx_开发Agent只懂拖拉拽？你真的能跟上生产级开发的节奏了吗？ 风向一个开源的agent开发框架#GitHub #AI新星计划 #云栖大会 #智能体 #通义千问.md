---
title: "开发Agent只懂拖拉拽？你真的能跟上生产级开发的节奏了吗？ 风向一个开源的agent开发框架
#GitHub #AI新星计划  #云栖大会 #智能体 #通义千问"
source: "getnote"
platform: "video"
author: "IT咖啡馆"
post_id: ""
post_link: "https://www.iesdouyin.com/share/video/7554350451219582260/?region=CN&mid=7554350481166879497&u_code=1k66jf8bghe4&did=MS4wLjABAAAAyVj7hpZ6z2Puu6jD4jy66FPY-W4yxbLltauut67L1rg&iid=MS4wLjABAAAANwkJuWIRFOzg5uCpDRpMj4OX-QryoDgn-yYlXQnRwQQ&with_sec_did=1&video_share_track_ver=&titleType=title&share_sign=PKvH82HZ0Of2Y8wejSVgBxuld8.U0T.ZCnnP15i8sYo-&share_version=220900&ts=1758902636&from_aid=1128&from_ssr=1&share_track_info=%7B%22link_description_type%22%3A%22%22%7D"
published_at: "2025-09-26 18:58:06"
created: "2026-07-24"
tags: ["clippings", "getnote", "IT咖啡馆"]
---

# 开发Agent只懂拖拉拽？你真的能跟上生产级开发的节奏了吗？ 风向一个开源的agent开发框架
#GitHub #AI新星计划  #云栖大会 #智能体 #通义千问

> **来源**: [IT咖啡馆 · 得到大脑](https://www.iesdouyin.com/share/video/7554350451219582260/?region=CN&mid=7554350481166879497&u_code=1k66jf8bghe4&did=MS4wLjABAAAAyVj7hpZ6z2Puu6jD4jy66FPY-W4yxbLltauut67L1rg&iid=MS4wLjABAAAANwkJuWIRFOzg5uCpDRpMj4OX-QryoDgn-yYlXQnRwQQ&with_sec_did=1&video_share_track_ver=&titleType=title&share_sign=PKvH82HZ0Of2Y8wejSVgBxuld8.U0T.ZCnnP15i8sYo-&share_version=220900&ts=1758902636&from_aid=1128&from_ssr=1&share_track_info=%7B%22link_description_type%22%3A%22%22%7D)
> **发布时间**: 2025-09-26 18:58:06
> **博主主页**: https://www.iesdouyin.com/share/video/7554350451219582260/?region=CN&mid=7554350481166879497&u_code=1k66jf8bghe4&did=MS4wLjABAAAAyVj7hpZ6z2Puu6jD4jy66FPY-W4yxbLltauut67L1rg&iid=MS4wLjABAAAANwkJuWIRFOzg5uCpDRpMj4OX-QryoDgn-yYlXQnRwQQ&with_sec_did=1&video_share_track_ver=&titleType=title&share_sign=PKvH82HZ0Of2Y8wejSVgBxuld8.U0T.ZCnnP15i8sYo-&share_version=220900&ts=1758902636&from_aid=1128&from_ssr=1&share_track_info=%7B%22link_description_type%22%3A%22%22%7D

## AI 摘要

🤔 **开发选择困境**
- 开发AI智能体面临选择，是用三分钟拼一个的拖拽式工具，还是手敲代码调接口自行开发。
- 新手使用拖拽式工具更友好，但实现复杂个性化功能受限；随便找代码开发框架也不行，还需考虑逻辑流程管理、长期记忆、多智能体协同和可观测性等问题 。

🌟 **AgentScope框架亮点**
- 由同一实验室推出，在github上已超一万两千star，前不久升级到1.0版本后star从七千快速涨到一万二，登上Get Uptraining榜单第五，被不少开发者称为“Best”。
- 同步发布的技术报告多日霸榜Hacking Face的Training Paper。

📐 **框架架构分层**
- AgentScope核心框架：负责智能体的构建与编排。
- AgentScope run time：提供安全可靠的部署与运行环境。
- AgentScope studio：提供开发中的可筹划工具。

💪 **1.0版本强化能力**
- 实时介入控制：开发者可随时暂停和调整流程，实现人机共管复杂任务。
- 高效记忆管理：分别优化长短期记忆，保证多轮对话准确性。
- 并行工具调用优化：支持标准化注册接口，提升批量效率。

🚀 **快速上手实操**
- 安装：一条pip命令可搞定基本安装，还支持for和dev版本，安装for版本包含所有内容。
- 实现简单agent：配置大模型api key（如阿里云的key放到.env文件），编写基本react agent代码，在终端运行可测试实时介入能力。
- 安装AgentScope studio：用npm命令安装，执行ass studio启动，在代码中增加一行配置后，可用可视化方式调试和监控开发中的agent。

📰 **实际应用示例**
- 做新闻助手：先定义抓取新闻工具（示例用mock代码），再建调用工具获取新闻的agent，以及根据获取内容做提炼总结的agent。
- 支持并行：定义多个抓取工具可同时并行抓取不同来源，提高效率，输出可定义自定义结构做结构化输出。

🎯 **框架优势总结**
- 作为面向开发者的智能体开发框架，解决了智能体开发的构建难、运行乱和管理苦三大难题，作为开源工具整体不错。

## 原文

你有没有过这种困扰啊，使用拖拽式的工具，三分钟拼一个ai小助理，还是手敲代码

调接口自己开发aen？那aen开发啊，到底应该怎么搞呢？

是拼积木还是撸代码？对于新手来说呢，拖拽式肯定更友好，

但是用过的朋友都知道啊，真正想实现更复杂更个性化的功能就会数时受限，

那是不是随便找一个代码开发框架就可以了？当然也不是，我们还需要考虑一些问题，

比如呢，怎么样去管理逻辑流程，长期记忆多智能体协同

还有可观测性，都是让开发者非常头疼的问题。今天呢，和大家分享一个热门的开元a镇的开发框架。

a镇的scope由同一实验室推出，

目前呢，在github上已经超过了一万两千star，前不久呢，也是升级到一点零版本，

star呢从七千快速涨到了一万二，登上get uptraining榜单的第五，

被不少开发者称为是best。a镇的freemook。同步发布的技术报告呢也是多日霸榜hacking face的training paper。

那我们就来看一下啊，它在a镇的开发上有哪些特点，

以及呢如何快速上手。

首先呢，我们来看一下它的架构，分成了三层a genoscope核心框架负责的是智能体的构建与编排

a genoscope run time提供了安全可靠的部署与运行环境

a genoscope studio提供开发中的可筹划工具。

最近呢，aden scope升级到的一点零版本，能力呢强化了很多，也是啊，一波暴涨超五千多。

star爆火的背后呢，是他在v一点零当中强化了三个实用的能力。

首先呢，是实时的介入控制，开发者呢可以随时去暂停和调整流程，

对复杂的任务呢实现了人机共管。其次呢，是高效记忆管理，

分别优化长短期的记忆，保证了多轮对话的准确性。

最后呢，是并行工具调用的优化，支持了标准化注册接口，提升批量效率。

接下来呢，我们就进入实操，来看一下如何快速上手。

那首先呢，我们先进行一下安装，最基本的安装啊，一条pick命令就可以搞定了，

还支持一些额外的选项，分别是for和代我的版本。那我们这里呢，

可以安装一下for版本，包含所有的内容。那我们接下来呢，就先实现一个最简单的agent。

那第一步啊，我们先要配置一下要使用大模型的api key，

那我这里呢用的是阿里云的key，把它呢放到点emv文件里就可以了。

那第二步呢，我们就来实现这个基本agent的功能，那代码呢，

大致就是这个样子，基本上来说呢，就是一个最基本的react agent，

现在呢，我们就可以到终端里来去运行一下，比如呢，我们可以让他做一些事情，像让他讲一个故事，

那在他说的过程当中啊，我们可以直接去打断他，这个就是前面我们说到的实时介入的一个能力。

当然这样调试啊，其实还是感觉不是太方便。

那我们再来做第三步，来安装一下agent scope studio，其实也是一条npm命令就可以了。

然后呢，我们就执行这个ass studio，

就可以启动agent scope studio了，现在呢，我们就可以用可视化的方式来去调试和监控开发当中的agent，

那我们还需要到代码当中来去增加一行配置，

那现在呢，就可以通过网页上的这个界面来去做调试和监控了，

这样的感觉啊，是不是就好了很多呢？那其实呢，agent scope啊，

分装了很多的内容和功能，所以在上手上呢，就会给我们比较容易的感觉。那我们再来举一个实际的例子啊，

假设呢，我要做一个新闻的助手，自动呢抓取当天的热点新闻，

然后呢，去做整理和提炼。那用agent scope呢，我们需要做的就是先定义一个工具

用来呢抓取新闻，但是这里呢，我做一些这个moc的代码，

并不实际去抓取，然后呢，我们再来建一个agent，会调用这个工具去获取新闻，

之后呢，我们再建一个agent，它呢可以根据获取的内容做提炼和总结。

那这里呢，其实有一些有意思的地方啊，比如啊，agent scope呢，

是可以开启并行的，也就是说啊，我们抓取的时候，如果说定义多个抓取工具，

那可以让他们呢，同时并行的去抓取不同的来源，那这样呢，

效率就会高很多。那输出方面呢，也可以定义自己的自定义结构，用来呢做结构化的输出。

当然开发的过程当中啊，其实有很多的细节，根据你自己的需要啊，

你可以去参考文档，自己上手一下，大概有个半天的时间呢，基本就能玩起来了。

agent scope呢？作为一个面向开发者的智能体开发框架，它解决了智能体开发的三大难题构建难、运行乱和管理苦。

作为开源工具呢，整体是非常不错的，

如果你也在选择a镇的开发框架呢，可以去试一下。那好了，这里是it咖啡馆，

我们下次再见。
