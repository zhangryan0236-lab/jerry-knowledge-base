---
title: "实用教程，小程序接入腾讯地图MCP，开发AI旅游助手 实用教程，小程序接入腾讯地图MCP，开发AI旅游助手 #AI新星计划  #小程序开发 #MCP #程序员 #智能体"
source: "getnote"
platform: "video"
author: "IT咖啡馆"
post_id: ""
post_link: "https://www.iesdouyin.com/share/video/7504636008890223887/?region=CN&mid=7504637488225471283&u_code=0&did=MS4wLjABAAAApbTf0FGEwxrZ9izhPfT-ZL2KKtAOKlSP6E6s9_QPH_M&iid=MS4wLjABAAAANwkJuWIRFOzg5uCpDRpMj4OX-QryoDgn-yYlXQnRwQQ&with_sec_did=1&video_share_track_ver=&titleType=title&share_sign=nVKsMIQ8xolWF0ZDEDCecqds9PGQzHZ6Q7bGEXjI3jI-&share_version=230600&ts=1747325810&from_aid=1128&from_ssr=1"
published_at: "2025-05-15 19:46:18"
created: "2026-07-24"
tags: ["clippings", "getnote", "IT咖啡馆"]
---

# 实用教程，小程序接入腾讯地图MCP，开发AI旅游助手 实用教程，小程序接入腾讯地图MCP，开发AI旅游助手 #AI新星计划  #小程序开发 #MCP #程序员 #智能体

> **来源**: [IT咖啡馆 · 得到大脑](https://www.iesdouyin.com/share/video/7504636008890223887/?region=CN&mid=7504637488225471283&u_code=0&did=MS4wLjABAAAApbTf0FGEwxrZ9izhPfT-ZL2KKtAOKlSP6E6s9_QPH_M&iid=MS4wLjABAAAANwkJuWIRFOzg5uCpDRpMj4OX-QryoDgn-yYlXQnRwQQ&with_sec_did=1&video_share_track_ver=&titleType=title&share_sign=nVKsMIQ8xolWF0ZDEDCecqds9PGQzHZ6Q7bGEXjI3jI-&share_version=230600&ts=1747325810&from_aid=1128&from_ssr=1)
> **发布时间**: 2025-05-15 19:46:18
> **博主主页**: https://www.iesdouyin.com/share/video/7504636008890223887/?region=CN&mid=7504637488225471283&u_code=0&did=MS4wLjABAAAApbTf0FGEwxrZ9izhPfT-ZL2KKtAOKlSP6E6s9_QPH_M&iid=MS4wLjABAAAANwkJuWIRFOzg5uCpDRpMj4OX-QryoDgn-yYlXQnRwQQ&with_sec_did=1&video_share_track_ver=&titleType=title&share_sign=nVKsMIQ8xolWF0ZDEDCecqds9PGQzHZ6Q7bGEXjI3jI-&share_version=230600&ts=1747325810&from_aid=1128&from_ssr=1

## AI 摘要

📱 **开发准备**
- 注册自己的小程序，按说明填写信息
- 用小程序账号登录腾讯云开发平台
- 准备微信开发者工具
- 注册腾讯地图开发者账号

💻 **腾讯云开发配置**
- 创建agint和配置mcp：进入腾讯云开发平台，点击ai，再点击mcp找到腾讯地图，安装模板。需传两个参数，到腾讯地图开发者平台创建新的apikey并勾选websites api，复制key到mcp配置；jc formate参数填1以json格式返回内容
- 调用测试：mcp服务启动后，点击tos选择地理位置测试获取数据格式

🤖 **创建agent**
- 选择支持mcp的模型，建议用会员特别latest
- 添加mcp，编写提示词和欢迎词并测试

🎯 **集成到小程序**
- 打开微信开发者工具新建项目，选ui agent模板项目，按说明修改，将疑问换成自己的，bolt换成agent id
- 运行小程序，ui agent是开源项目，提供多种自定义卡片，可通过代码控制实现自定义

📈 **其他应用与注意事项**
- 已有小程序可拷贝component里agent ui部分引入ai agent，如搭建基于知识库的客服
- 运行后可通过托管服务日志监控查看情况，云开发支持自行开发部署mc
- 云开发mcp资源收费，不用时到云托管删除，不上线可将云托管实例调整为零

## 原文

这是微信小程序，一个人人都会经常用的东西，今天呢带来一期超实用的小程序开发教程，

手把手教你如何把aiagin的强大能力融入到微信小程序中。

我们呢做一个这样的旅行助手小程序，通过mcp接入腾讯地图，

帮助用户智能的规划吃喝玩乐，安排行程。话不多说啊，我们开始上手开发微信小程序呢，

需要做一些准备，首先呢要注册一个自己的小程序，

这个过程呢我就跳过了，大家可以按照说明呢去填写信息，然后注册完成就可以了。

然后呢我们再登录一下腾讯云开发的平台，这里呢建议用小程序的账号来登录会方便一些。

另外呢还需要提前准备好微信开发者工具，因为要用到腾讯地图的能力啊，

所以还要提前注册一个腾讯地图的开发者账号。那准备好了这几样以后呢，

我们就可以开始了，因为我们要把aiagint的能力啊加入小程序，所以我们要先在腾讯云开发当中去创建agint和配置mcp。

进入平台以后呢，我们点击ai加ai开发的套件呢都在这里，

我们点击mcp，然后找到腾讯地图，

点击安装模板，这里呢有两个参数需要传，一个是腾讯地图的apike，

我们需要到腾讯地图的开发者平台，在我的应用里创建一个新的key启用产品，

这里啊要勾选websites api就可以了。然后呢我们把生成的key复制到mcp的配置当中，

第二个jc formate呢，这里要注意啊，这里面的填写的是。零和一说明一下啊，

填一的话呢，重新地图会返回json格式的内容，填零的话呢，

它会做一个语义的转换，以自然语言的形式呢去返回内容，因为我后面呢还要做一些处理，

所以呢我就选择填一，用json的格式来返回，那这样就可以了。

确认以后呢稍微等一会儿，mcp服务启动以后啊，我们先来调用一下，点击这个tos，

然后呢选择最简单的地理位置就可以做一下测试，这个呢其实非常有用，

因为现在的mcp的说明文档啊不是很全面，比如你想看一下数据的具体返回格式，

那就需要用这种调试的方式来获取数据。有了mcp以后呢，我们就迈出了第一步，

接下来呢我们再创建一个agent，然后呢要选择模型，注意啊要选择支持mcp的，

建议呢用这个会员特别latest的我感觉呢效果好一些。然后呢我们先把macp添加上，

之后呢再写一下提示词，

这里呢我就是告诉他作为旅行助手要干的几件事情，然后啊再加一个欢迎词。

那接下来呢我们就可以测试一下了，

我们可以看到agent目前已经可以正常的工作了，

当然呢现在看起来有点简陋，那接下来呢我们就把它放到小程序当中，我们打开微信开发者工具，

新建一个项目，这里呢我就选择ui agent的模板项目，

然后呢选择一下之前注册的小程序进入项目呢可以看到模板给我们带了非常详细的说明，

其实啊就算你不太会用的话可以直。接按照这里的描述来，我们就按他的说明啊，

把这个疑问再换成自己的，

然后呢再把bolt换成我们的agent id。

修改完了以后啊，就可以把agent加入到小程序了。

那既然配置好了呢，我们就来运行一下，你有没有发现啊，效果比之前要好了，

有了地图的卡片，还有一些商家的信息卡片，不只是文字了，这个uiatan呢，

其实是专门为小程序用的ai智能对话的ui组件。那这个agent ui呢，

其实也是一个开源项目，可以直接去get up上看到它的全部源码。除了基本的对话ui结构以外啊，

还提供了一些势力的custom的card，比如呢，地图的卡片，天气的卡片，

还有一些信息的卡片，相当于呢，在基本的对话智能体上做了一些扩展。如果你也想要实现一些类似的自定义呢，

那就需要通过代码来去控制，这也算是有代码和无代码的一个结合。

我们可以查看一下原码当中的托卡的，这里面呢包含了几个简单的工具，

其实呢，实现起来呢，就是获取一下aj的数据，然后呢去做一些对应的处理，

然后呢再结合一些小程序提供的组件，就可以实现最终的效果了。

因为啊，这里已经把原码全部都给出来了，所以呢，如果你觉得效果不是很满意的话呢，

其实完全可以自己去修改。另外呢，如果是你已经有自己的小程序，

那可以直接把component里面相关的这个agent ui的部分啊，拷贝到新的项目当中

这样。呢就可以直接引入ai agent了，就比如呢，比较常见的基于知识库的客服，

这个是很多小程序都现在喜欢加的一个功能。那想要实现这个能力呢，你只需要在云开发上搭建一个agent，

然后添加知识库，

最后呢再把a镇的id配置好就可以使用了。

运行起来之后呢，

可以通过托管服务的日志监控服务具体的去查看运行的情况。云开发呢，

目前也支持开发者自行的去开发和部署自己的mc，有兴趣的呢，

可以自己去尝试一下。最后提醒一句啊，云开发上的mcp资源是收费的，

如果不用了呢，一定要到云托管当中去删除，光删除mcp是不行的。

或者呢，暂时不上线的话，可以把云托管的实例调整为零。如果你也想开发自己的小程序呢，

那就赶快去试一试吧。好了，那我们今天的内容呢就到这里，下次再见。
