---
title: "2分钟老网站加装AI助手？用开源项目打通AI最后一公里 今天我们 用开源项目给网站快速增加AI助手。
#AI新星计划  #Github #AI助手 #Copilot #程序员"
source: "getnote"
platform: "video"
author: "IT咖啡馆"
post_id: ""
post_link: "https://www.iesdouyin.com/share/video/7510531005283978530/?region=CN&mid=7510532080657353498&u_code=0&did=MS4wLjABAAAAmEVkMbarRSMV5bAcFy-BqlEFq_X64_Pgf29dBSkLaoo&iid=MS4wLjABAAAANwkJuWIRFOzg5uCpDRpMj4OX-QryoDgn-yYlXQnRwQQ&with_sec_did=1&video_share_track_ver=v0&titleType=title&share_sign=UJNwX4HwaJ65EskvR7_FfztMabIHwVRit_9M.u4PHBc-&share_version=250200&ts=1748708301&from_aid=1128&from_ssr=1"
published_at: "2025-05-31 17:00:24"
created: "2026-07-24"
tags: ["clippings", "getnote", "IT咖啡馆"]
---

# 2分钟老网站加装AI助手？用开源项目打通AI最后一公里 今天我们 用开源项目给网站快速增加AI助手。
#AI新星计划  #Github #AI助手 #Copilot #程序员

> **来源**: [IT咖啡馆 · 得到大脑](https://www.iesdouyin.com/share/video/7510531005283978530/?region=CN&mid=7510532080657353498&u_code=0&did=MS4wLjABAAAAmEVkMbarRSMV5bAcFy-BqlEFq_X64_Pgf29dBSkLaoo&iid=MS4wLjABAAAANwkJuWIRFOzg5uCpDRpMj4OX-QryoDgn-yYlXQnRwQQ&with_sec_did=1&video_share_track_ver=v0&titleType=title&share_sign=UJNwX4HwaJ65EskvR7_FfztMabIHwVRit_9M.u4PHBc-&share_version=250200&ts=1748708301&from_aid=1128&from_ssr=1)
> **发布时间**: 2025-05-31 17:00:24
> **博主主页**: https://www.iesdouyin.com/share/video/7510531005283978530/?region=CN&mid=7510532080657353498&u_code=0&did=MS4wLjABAAAAmEVkMbarRSMV5bAcFy-BqlEFq_X64_Pgf29dBSkLaoo&iid=MS4wLjABAAAANwkJuWIRFOzg5uCpDRpMj4OX-QryoDgn-yYlXQnRwQQ&with_sec_did=1&video_share_track_ver=v0&titleType=title&share_sign=UJNwX4HwaJ65EskvR7_FfztMabIHwVRit_9M.u4PHBc-&share_version=250200&ts=1748708301&from_aid=1128&from_ssr=1

## AI 摘要

🎯 **项目目标**
- 用开源项目coalatet kit给老网站增加AI助手，实现智能问答并与网站内容互动，对新手友好且以实操为主。

📦 **所需项目与准备**
- 用到开源项目coalatet kit，它是构建自定义AI coalatet的框架，可用于构建应用内聊天机器人等。
- 准备一个简单的todo list页面，其为NEXGS小应用，代码逻辑包含与task相关的react组件和处理状态的hook。

💻 **安装与配置**
- 用NPM安装coalatet kit相关依赖，在页面添加coalatet kit和coalate pop up。
- 初始化coalatet kit时需配置大模型项目，默认用其自家云服务，也可接入其他大模型服务API，如open AI、deepp sick、千问、AWS的bedrock等，可根据习惯准备API key。
- 创建调用模型的服务，创建root处理对应endpoint请求，安装coalate kit的run time ，创建.env配置文件放入密钥和reason配置，用long Cha AWS包调用Bedrock的API。
- 在页面中填写coalate kit的run time为刚刚的endpoint，保存并测试，可弹出AI助手，在bedrock中配置好知识库可当AI客服。

📝 **实现互动与操作**
- 在todo list操作任务通过use task hook完成，引入use cot readable hook加到里面，在task provider里添加并传任务数据，AI助手可根据页面内容回答问题。
- 引用use completeate action增加操作能力，新建at task增加任务，配置描述、参数和handler，调用实际执行方法，可通过自然语言描述在页面增加新任务，还可扩展修改、删除等动作。

🌟 **项目其他能力**
- coalate kit还有对接自己的agent、自定义UI、渲染自定义UI组件等能力，项目带有很多DEMO和示例，使用方便。

## 原文

最近和朋友们交流发现啊，怎么给老网站增加AI的能力非常受到关注，今天呢，我们就用开源项目来演示，给网站增加一个AI助手，不仅可以智能问答，还可以和网站的内容互动。本期的内容呢，新手比较友好，实操为主，那么一起来动手吧。另外呢，如果觉得视频不错，别忘了点个赞。这次呢，我们要用到的开源项目是coalatet kit, 这个项目最近热度非常不错，它是一个用于构建自定义AI coalatet的框架，比如应用内的聊天机器人，应用内的AI agentt和AI驱动的文本区域。首先呢，我还要准备一个这样的简单的todo list的页面，在这个上面呢，去增加AI助手，在这里啊，我们先简单看一下代码，这是一个NEXGS的小应用代码的逻辑呢，其实很简单，几个和task相关的react组件，还有呢，就是一个处理状态的hook，那首先啊，我们要在这里加一个coalate kit的弹出AI助手，先用NPM来安装一下相关的依赖，然后呢，在页面当中来添加一下coalatet kit和coalate pop up.那在初始化口派类的kit的时候呢，我们是需要给它配置大模型的项目，默认推荐的使用它自家的一个云服务，我主要演示啊，更普遍的接入大模型服务的API，这里啊，你可以根据自己的习惯来去准备API的key。具体的AI provider呢，没有什么限制，可以是open AI, 也可以是像deepp sick、千问这一类的国产模型，我自己用的是AWS的bedrock，你可以根据自己的情况随意选择，我们再回到todo list的项目当中来完成coalate kit的配置。首先要创建一个调用模型的服务，我们首先要创建一个root来处理这个对应endpoint的请求，这里有一个报错啊，是没有安装coalate kit的run time, 我们n PM install一下，现在可以了，然后呢，我们再建一个点en nv的配置文件在里面呢，把刚刚的密钥，还有这个reason的配置都放进去，大家可以参考我的这个内容，我暂时不加什么其他的特殊处理，就是用long Cha AWS这个包来去调用一下。

Bedrock的API大概就是这个样子就可以了，那root创建完了以后啊，我们再进到之前的页面当中，那coalate kit的这个run time呢，我们就填写刚刚的那个end point这样就可以了，那我们就可以来保存，然后测试一下，可以看到啊，现在已经可以弹出AI助手了，那这个时候呢，如果我们在bedrock当中去配置好对应的知识库，其实就可以当一个AI客服来使用了，那在接下来呢，我们要再进一步让copyelatet kit可以和页面有互动，我们回到代码当中啊，其实啊，可以看到在todo list的操作任务的时候呢，是通过use task这个hook来完成的，我们可以把coalt k的一个hook来加到这里面去，这里我就引入一个use cot readable, 然后呢，在task provider里面去添加它，然后我再给它加一下描述，然后再传一下任务的数据过来就可以了，那我们再回到页面，我们再来试用一下有哪些任务还没有完成，AI助手呢？现在就可以根据页面的内容来给我做回答了，是不是？

更好玩的一点儿呢，那接下来呢，我们就再增加一下操作的能力，我引用一个use completeate action, 这样就可以增加操作了，这里呢，我新建一个at task, 用来增加一个任务，还是啊，我要加一下描述，然后去配置一下这里面的参数，最后是配置一下这个handler，在这里面呢，我要调用实际执行的方法，那好了，现在呢，我们再回到页面来测试一下我们的AI助手的效果，可以看到啊，我可以通过这个自然语言描述，它就能够帮我们在页面上去增加新的任务了，那类似的呢，你还可以再去增加一些像修改的，删除的之类的动作，其实啊，都是比较方便的，那我这里就不逐一演示了，大家可以作为一个扩展自己去试一下coalate kit呢，还有很多其他的能力，比如对接自己的agent，自定义的UI，渲染自定义的UI组件。如果你也希望在自己的以前的网站去增加一些AI的能力，那么可以来试一下这个项目，而且啊，这个项目里面还带了很多DEMO和示例，整体用。

起来呢，还是比较方便的，那今天的内容呢，就到这里，希望可以对你有所帮助，我们下次再见。
