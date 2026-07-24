---
title: "更适合中国宝宝的clawdbot玩法 云上部署+钉钉接入实操教程
#AI新星计划 #clawdbot #moltbot #IT咖啡馆 #阿里云"
source: "getnote"
platform: "video"
author: "IT咖啡馆"
post_id: ""
post_link: "https://www.iesdouyin.com/share/video/7600795819960274210/?region=CN&mid=7600796007575964442&u_code=37508ca5130f&did=MS4wLjABAAAA7_72sU-iriyiVStPWHdh0MWJY-sqT2P_G2FtvHXQgvc&iid=MS4wLjABAAAANwkJuWIRFOzg5uCpDRpMj4OX-QryoDgn-yYlXQnRwQQ&with_sec_did=1&video_share_track_ver=&titleType=title&share_sign=1CqUQ6RcZYYnV49vdkjXSSLinmkmeRPt_lov_AT1Yjw-&share_version=240200&ts=1769702795&from_aid=1128&from_ssr=1&share_track_info=%7B%22link_description_type%22%3A%22%22%7D"
published_at: "2026-01-29 22:50:04"
created: "2026-07-24"
tags: ["clippings", "getnote", "IT咖啡馆"]
---

# 更适合中国宝宝的clawdbot玩法 云上部署+钉钉接入实操教程
#AI新星计划 #clawdbot #moltbot #IT咖啡馆 #阿里云

> **来源**: [IT咖啡馆 · 得到大脑](https://www.iesdouyin.com/share/video/7600795819960274210/?region=CN&mid=7600796007575964442&u_code=37508ca5130f&did=MS4wLjABAAAA7_72sU-iriyiVStPWHdh0MWJY-sqT2P_G2FtvHXQgvc&iid=MS4wLjABAAAANwkJuWIRFOzg5uCpDRpMj4OX-QryoDgn-yYlXQnRwQQ&with_sec_did=1&video_share_track_ver=&titleType=title&share_sign=1CqUQ6RcZYYnV49vdkjXSSLinmkmeRPt_lov_AT1Yjw-&share_version=240200&ts=1769702795&from_aid=1128&from_ssr=1&share_track_info=%7B%22link_description_type%22%3A%22%22%7D)
> **发布时间**: 2026-01-29 22:50:04
> **博主主页**: https://www.iesdouyin.com/share/video/7600795819960274210/?region=CN&mid=7600796007575964442&u_code=37508ca5130f&did=MS4wLjABAAAA7_72sU-iriyiVStPWHdh0MWJY-sqT2P_G2FtvHXQgvc&iid=MS4wLjABAAAANwkJuWIRFOzg5uCpDRpMj4OX-QryoDgn-yYlXQnRwQQ&with_sec_did=1&video_share_track_ver=&titleType=title&share_sign=1CqUQ6RcZYYnV49vdkjXSSLinmkmeRPt_lov_AT1Yjw-&share_version=240200&ts=1769702795&from_aid=1128&from_ssr=1&share_track_info=%7B%22link_description_type%22%3A%22%22%7D

## AI 摘要

☁️ **阿里云部署方案优势**
- 解决国内用户使用痛点（替代Mac Mini降低成本）
- 支持集成钉钉等国内主流IM工具
- 提供安全沙盒环境，降低本地部署风险
- 轻量服务器套餐价格优惠（含八五折券）

📝 **部署流程概览**
- 核心步骤：创建Bot→配置服务器→集成钉钉（共6步）
- 非钉钉用户可在第5步更换其他IM工具配置
- 提供流程图辅助理解操作逻辑

🖥️ **服务器配置步骤**
- 购买轻量服务器时直接选择ModelBot镜像
- 初始化配置需完成：开放端口→配置大模型API→生成Token→打开Web UI
- 需从百炼平台获取API密钥并完成写入操作

🔌 **钉钉集成配置**
- 在钉钉开放平台创建应用并获取Client ID/Secret
- 需创建AI卡片模板并获取模板ID
- 需为应用授予Card Streaming Right和Card Instance Right权限
- 通过App Flow配置双凭证（ModelBot Token+钉钉凭证）

⚙️ **关键配置要点**
- 需在ModelBot中开启Response API访问权限
- 服务器公网地址需带端口号配置
- 模型默认使用千万VRPlus（可自定义修改）
- 机器人消息接收模式需选择HTTP并填写Web Hook地址

💡 **使用场景建议**
- 网络场景（信息采集/系统互动）推荐云上部署
- 本地工具操作需求建议保留本地部署
- 短期试用推荐购买最低配置月套餐（成本更低）

## 原文

上个视频啊，我刚分享了怎么上手玩转cloudbot，哦对啊，现在应该叫motobot了，

但是呢很多朋友啊都反馈几个问题，有没有更适合国内的使用方式？

不想买mac mini，有什么更便宜的设备在本地呢，会不会有安全问题？这些呢都是非常实际的问题啊，

刚好呢我看到啊阿里云推出了部署model bottle套餐，

可以呢很好的解决前面的问题，并且呢还能集成到钉钉，飞出戚薇等国内的im。

那今天呢我就来实操测试一下效果，看看这套更适合中国宝宝体质的方案呢效果到底怎么样。

因为步骤蛮多的啊，所以我先做了一个流程图，

方便大家理解。那大致来说呢就是创建bot， bot，然后配置，最后呢再集成一下钉钉，

如果你不使用钉钉啊，想换用其他的，只需要在第五步进行更换就可以了。

那接下来呢，我们进入实操的环节。首先啊，第一步，

我们先要买一台轻量服务器，在镜像这里呢我们直接选择motobot就可以了，

如果是简单体验的话呢，那就买最少的一个月，我这里啊不知道为什么还有一个八五折的券，

还挺便宜的，比买mac mini啊那肯定要便宜多了。那第二步啊，服务器启动好以后，

进入详情页面，点这个应用详情，需要呢做几个初始化的配置，

这里呢阿里云很体贴啊，已经都准备好了，逐一呢点过去就可以了，

先是开放端口，然后呢是配置大模型的apik，这里呢需要进入到百炼平台，

点密钥管理，如果你之前没有密钥呢需要新建一个，

然后呢复制密钥的内容贴到这里的配置当中，再执行一下写入apik。

接下来呢是生成token，这里呢稍微等一下会显示出token的内容，

保存下来，我们后面会用到。最后呢点打开网站页面，

复制生成的链接就可以使用motobot的web ui了。第三步啊，在motobot里面我们需要打开response api的访问，

这样呢后面的集成啊才能进行，进入config找到get位，

点这个http，然后呢打开response开关，

注意啊一定要保存一下才可以生效。到这啊motobot的部分呢其实就可以了。

现在呢我们已经有了一个云上的ai助理，可以通过外部ui呢来去使用。

接下来呢我们再来啊，让它更适合中国宝宝来集成到钉钉里。

第四步呢我们先要在钉钉的开放平台当中去创建一个应用，这里啊只需要填写名称描述，

然后传一个图标就可以了。创建好以后呢我们进入到这个应用的详情，

首先呢这里可以看到凭证和基础的信息，

把这里的可兰台id和可兰的secret保存一下，后面呢我们要用到。接下来呢我们要创建一个卡片消息

进入卡片平台，然后呢创建一个模板，这里的类型啊是消息卡片，

场景呢是a i卡片，然后啊关联的应用就选择我们前面创建好的应用，

其他的呢都不用改，直接保存再发布就可以了。我们简单一点啊，

再回到列表呢就能看到模板的id了，这个也。保存下来，

后面呢，我们也会用到。然后呢，回到应用里面，这里呢要给应用去授予卡片消息的权限，

权限的管理里面啊，我们搜一下card，注意啊，这个c要大写，

那前面的两个啊，card streaming right和card instance right都要授权一下。

到这儿啊，我们就完成了钉钉应用的配置。接下来呢，第五步，我们要创建一个app flow，

app flow里面呢，有很多的模板，如果你想要集成其他的应用，可以改用其他的配置模板，

那我呢，就用钉钉的模板。首先啊，要配置两个凭证，

第一个呢，是motobot的这个token呢，就是前面我们在轻量服务器里面咱们保存的。

而丁丁的这个凭证啊，就是前面丁丁的应用里面的client id和client secret。

配置好这两个凭证以后啊，下一步呢，我们要配置动作，这里呢要填写一下模型，

这个默认呢是千万vrplus，如果你修改过的话呢，可以到modebot的配置里来去查看一下。

确认一下啊，你当前使用的模型，那这个地址呢，

就是服务器的供网地址，注意要带上端口。那卡片消息模板的id呢，

也是咱们前面保存下来的。填写好以后啊，我们直接下一步，然后呢，保存发布就可以了。

发布之后呢，这个web hook的地址啊，我们需要保存下来，后面呢也要用到。

那第六步啊，需要创建一个机器人，再进入叮叮应用里面啊，

我们去添加应用能力，然后呢，选机器人，这里呢填写一些基本的信息，

注意啊，消息接收的模式。呢要选择http，然后把第五步的web hook的地址呢填到这里，

最后呢我们点击发布就大功告成了。

最后呢我们来实际使用一下，在钉钉里面呢去建一个群，在群设置里啊就可以添加到motobot的机器人了，

之后呢我们就可以艾特他来和他进行互动，

那剩下的呢就是发挥你自己的想象力去配置你的motobot了。

最后呢我来说一下我测试的感觉啊。首先呢motobot它不怎么耗资源，

所以呢一个轻量服务器就可以跑起来，这在成本上呢是非常友好的，

尤其是大家现在对它的未来情况呢不是那么确定，

如果简单只是试用一下呢，那肯定要选便宜的，花几十块呢总比花大几千去买一个设备要好多了。

第二个呢就是modebod现在呢有很多安全的问题，所以呢在云上使用啊你可以把它当成是一个沙盒，

而且呢云上本身它的安全处理也比本地要好很多，

比如呢你可以配置一些ip的白名单来减少暴露面。

第三个呢就是接入集成方面，虽然现在的配置呢稍微有点麻烦，但是呢可以接入到钉钉等国内的im，

总归呢体验上还是有很多提升的。

最后呢对于云上还是本地，我个人的感觉啊是看你的实际使用场景，

如果你想要操作很多本地的工具，那只能是在本地了，但如果啊你更多的是想要在网络当中去进行像信息采集或者系统的互动等内容的话，

那云上呢会更适合。总之啊，不管怎么样上手体验的话，呢，阿里云的这个套餐还是一个不错的选择那。

这里是it咖啡馆，我们下次再见！
