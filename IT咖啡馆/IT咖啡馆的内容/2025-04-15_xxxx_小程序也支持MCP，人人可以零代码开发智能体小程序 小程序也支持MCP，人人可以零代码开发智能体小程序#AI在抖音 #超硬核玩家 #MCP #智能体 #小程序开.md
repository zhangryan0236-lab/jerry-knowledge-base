---
title: "小程序也支持MCP，人人可以零代码开发智能体小程序 小程序也支持MCP，人人可以零代码开发智能体小程序
#AI在抖音 #超硬核玩家 #MCP #智能体 #小程序开发"
source: "getnote"
platform: "video"
author: "IT咖啡馆"
post_id: ""
post_link: "https://www.iesdouyin.com/share/video/7493388855756852516/?region=CN&mid=7493389231939783475&u_code=0&did=MS4wLjABAAAACZI1IzTfOBcqs4CpKO6xtkWTEtMXb8XzCn7CQIm-Qn8&iid=MS4wLjABAAAANwkJuWIRFOzg5uCpDRpMj4OX-QryoDgn-yYlXQnRwQQ&with_sec_did=1&video_share_track_ver=&titleType=title&share_sign=yzQI8UEAnAFHHYmjVBiBRdBUzxGWPdo20tqzHh0EfoM-&share_version=250700&ts=1744733834&from_aid=1128&from_ssr=1"
published_at: "2025-04-15 12:17:30"
created: "2026-07-24"
tags: ["clippings", "getnote", "IT咖啡馆"]
---

# 小程序也支持MCP，人人可以零代码开发智能体小程序 小程序也支持MCP，人人可以零代码开发智能体小程序
#AI在抖音 #超硬核玩家 #MCP #智能体 #小程序开发

> **来源**: [IT咖啡馆 · 得到大脑](https://www.iesdouyin.com/share/video/7493388855756852516/?region=CN&mid=7493389231939783475&u_code=0&did=MS4wLjABAAAACZI1IzTfOBcqs4CpKO6xtkWTEtMXb8XzCn7CQIm-Qn8&iid=MS4wLjABAAAANwkJuWIRFOzg5uCpDRpMj4OX-QryoDgn-yYlXQnRwQQ&with_sec_did=1&video_share_track_ver=&titleType=title&share_sign=yzQI8UEAnAFHHYmjVBiBRdBUzxGWPdo20tqzHh0EfoM-&share_version=250700&ts=1744733834&from_aid=1128&from_ssr=1)
> **发布时间**: 2025-04-15 12:17:30
> **博主主页**: https://www.iesdouyin.com/share/video/7493388855756852516/?region=CN&mid=7493389231939783475&u_code=0&did=MS4wLjABAAAACZI1IzTfOBcqs4CpKO6xtkWTEtMXb8XzCn7CQIm-Qn8&iid=MS4wLjABAAAANwkJuWIRFOzg5uCpDRpMj4OX-QryoDgn-yYlXQnRwQQ&with_sec_did=1&video_share_track_ver=&titleType=title&share_sign=yzQI8UEAnAFHHYmjVBiBRdBUzxGWPdo20tqzHh0EfoM-&share_version=250700&ts=1744733834&from_aid=1128&from_ssr=1

## AI 摘要

📱 **微信小程序与MCP**
- 微信小程序现在支持MCP，MCP让AI有更多应用可能，如搜新闻、操作浏览器等。

📐 **架构关系梳理**
- 大模型只能思考，需通过MCP连接外部应用扩展能力，再由智能体对外提供服务，小程序是常见入口。
- MCP相较于之前扩展方式最大优势是标准化，只要软件提供MCP server，开发者就能在不同程序中集成。

💻 **实战操作步骤**
- 创建MCP server：在腾讯云开发平台点击“AI+”，进入MCP市场，通过模板创建所需MCP。
- 创建agent：进入agent页面，选择会员的top latics模型（实测效果更好）。
- 添加MCP server：添加trendinghab（提供豆瓣电视剧热榜）、云开发的search web（上网搜索信息）、party tear（打开浏览器截图配图）、元气的writing assistant（写小红书文案）。
- 写提示词：让大模型知道如何执行任务，执行测试，模型规划步骤并调用MCP server完成任务，保存生成的小红书文案。
- 接入智能体：回到首页选小程序，选可触化构件，接入智能体，选择刚创建的智能体，点击agnt应用。
- 预览与发布：点击可触化开发预览小程序，可点击发布按钮一键发布或集成到现有小程序，官方提供小程序算法备案指引和材料。

🌟 **未来展望**
- 云开发支持自己开发和托管MCP sol，MCP市场会持续上架更多MCP sol，将有更多开发玩法。

## 原文

这是你手机里的微信小程序，现在他们也能支持mcp了。想象一下，能自己搜新闻，

操作浏览器、查地图、写代码，mcp让ai有了太多的想象力。

那今天呢，我也第一时间带来一期实操教程，手把手教你做一个a i智能题小程序，

让纸上谈兵的a i呢可以用mcp下地干活，而且我会用零代码的方式，

不会编程也别担心，可以放心使用。先来看一下成品哈，

我要做一个使用mcp自己去搜热门电视剧，然后生成小红书文案，

并且呢自己去配图的agent。在开始之前，我想先来梳理一下大模型、scp、智能体以及小程序之间的架构关系。

然后呢，我们再到腾讯云开发的平台上去动手。这样呢，没有基础的同学也能更好的理解。

首先啊，大家应该知道，大模型只能思考，他是不能实际动手的。

让他从纸上谈兵变成下地干活，我们就需要通过mcp来去连接外部应用，

扩展了能力之后就可以通过智能体来对外提供使用。最后呢，还需要一个入口，

那小程序呢就是一个常见的入口。那mcp相较于之前对于大模型的扩展方式呢，

最大的优势就是标准化。也就是说啊，只要某一个软件提供了他的mcp server，

你就可以在任何知识的程序当中去对它做集成。这样的话呢，

所有的开发者都可以在同一个频道当中去工作了。感兴趣的同学呢可以去深入研究一下。

接下来呢，我们就进入实战的部分，进入腾。讯云开发我们点击这个ai加，

在上面呢可以看到有mcp。进入之后呢，这是一个mcp的市场，

这里有目前提供的全部mcp server模板，通过这些模板，

你可以快速的创建自己的mcp server。第一步呢，我们先创建mcp server，

我要把今天用到的几个mcp先创建出来，这里啊，就是一点一点的点击，

最终呢我会用到这几个。第二步进入agent页面，创建一个agent，

然后呢选择模型，这里啊，建议选择会员的top latics，

实测的效果更好。第三步呢，添加mcp server，首先是trendinghab，

用来提供豆瓣的电视剧热榜。然后呢是云开发的search web，用来上网去搜索相关的信息。

接下来是party tear，用来打开浏览器，然后再截图做配图。

最后呢是元气的writing assistant，用来写小红书的文案。

第四步啊，写提示词，让大模型知道该如何去执行任务。

准备好了之后呢，我们就可以在右侧去执行测试了，可以看到啊，模型会规划出执行的步骤，

然后呢，一步一步的去调用mcp server来去完成具体的任务。

ok，现在我们就拿到了小红书的完整文案，

别忘了保存一下。第五步呢，我们再回到首页，

选小程序，选可触化构件，然后呢接入智能体，选择刚刚的智能体，

点击agnt应用。第六步呢，我们点击可触化开发，

这里呢就可以预览使用aiagent的小程序了，如果想发布出去，可以点击发布按钮，

一键发布或者集成到自己现有的小程序官。方呢，也提供了小程序算法备案的指引和具体的材料，

可以参考文档啊，我就不多讲了。好了，这个就是我们今天的整个教程，

云开发呢，还支持自己去开发和托管mcp sol，

云开发的mcp市场呢，也会持续上架更多的mcp sol，

后续呢，应该会有更多的开发玩法。那么好了，我们今天就到这里，下次再见。
