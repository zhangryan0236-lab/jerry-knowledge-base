---
title: "GitHub 一周热点第96期 1、Flux2 – 最新AI绘图模型
2、HunyuanVideo – 腾讯的视频生成模型
3、Cognee – AI的个性化动态记忆
4、LaunchNext – 开源版的MAC Launchpad
5、NoteDiscovery – 笔记和知识库系统
6、nginx-proxy-manager – Nginx可视化管理工具
#AI新星计划 #Github #人工智能 #智能体 #Mac"
source: "getnote"
platform: "video"
author: "IT咖啡馆"
post_id: ""
post_link: "https://www.iesdouyin.com/share/video/7580651091742723343/?region=CN&mid=7580651282030168878&u_code=3hf8b9fb9858&did=MS4wLjABAAAAzfa-a7xvzHGm-r_gwIxC2orNj9BAq0lm9BOwPdOr82M&iid=MS4wLjABAAAANwkJuWIRFOzg5uCpDRpMj4OX-QryoDgn-yYlXQnRwQQ&with_sec_did=1&video_share_track_ver=&titleType=title&share_sign=abDVS44u7YoQWSBgtfvuUCBosY8pYNiR29Yxyl.s56Y-&share_version=240000&ts=1765037063&from_aid=1128&from_ssr=1&share_track_info=%7B%22link_description_type%22%3A%22%22%7D"
published_at: "2025-12-06 15:58:00"
created: "2026-07-24"
tags: ["clippings", "getnote", "IT咖啡馆"]
---

# GitHub 一周热点第96期 1、Flux2 – 最新AI绘图模型
2、HunyuanVideo – 腾讯的视频生成模型
3、Cognee – AI的个性化动态记忆
4、LaunchNext – 开源版的MAC Launchpad
5、NoteDiscovery – 笔记和知识库系统
6、nginx-proxy-manager – Nginx可视化管理工具
#AI新星计划 #Github #人工智能 #智能体 #Mac

> **来源**: [IT咖啡馆 · 得到大脑](https://www.iesdouyin.com/share/video/7580651091742723343/?region=CN&mid=7580651282030168878&u_code=3hf8b9fb9858&did=MS4wLjABAAAAzfa-a7xvzHGm-r_gwIxC2orNj9BAq0lm9BOwPdOr82M&iid=MS4wLjABAAAANwkJuWIRFOzg5uCpDRpMj4OX-QryoDgn-yYlXQnRwQQ&with_sec_did=1&video_share_track_ver=&titleType=title&share_sign=abDVS44u7YoQWSBgtfvuUCBosY8pYNiR29Yxyl.s56Y-&share_version=240000&ts=1765037063&from_aid=1128&from_ssr=1&share_track_info=%7B%22link_description_type%22%3A%22%22%7D)
> **发布时间**: 2025-12-06 15:58:00
> **博主主页**: https://www.iesdouyin.com/share/video/7580651091742723343/?region=CN&mid=7580651282030168878&u_code=3hf8b9fb9858&did=MS4wLjABAAAAzfa-a7xvzHGm-r_gwIxC2orNj9BAq0lm9BOwPdOr82M&iid=MS4wLjABAAAANwkJuWIRFOzg5uCpDRpMj4OX-QryoDgn-yYlXQnRwQQ&with_sec_did=1&video_share_track_ver=&titleType=title&share_sign=abDVS44u7YoQWSBgtfvuUCBosY8pYNiR29Yxyl.s56Y-&share_version=240000&ts=1765037063&from_aid=1128&from_ssr=1&share_track_info=%7B%22link_description_type%22%3A%22%22%7D

## AI 摘要

🎨 **Flex 2 AI绘图模型**
- Flex 2作为第二代产品推出4款基础模型+1个VAE模型，包含开源（如32B权重的代伍版本）和闭源（Flex Pro/Flex）组合
- 支持多图参考（最多10张），角色/产品/风格一致性准确率超95%
- 原生支持4K高清分辨率生成与编辑，复杂文本渲染能力升级
- 硬件门槛高，FP8版本需33G显存，商用需单独授权，推荐通过ComfyUI工具使用量化小版本

🎬 **腾讯混元V6.1.5视频生成模型**
- 仅8.3B参数实现高画质，消费级GPU可流畅运行（需14G显存，低于此前模型20G+要求）
- 支持文本驱动+图像引导双生成模式，统一架构避免多模型兼容性问题
- 衍生多镜头叙事玩法：T2V生成场景→截取关键帧→I2V输入扩展镜头
- 采用SSTA稀疏注意力机制等技术，发布技术报告供研究

🧠 **Cogny AI个性化动态记忆工具**
- 开源工具平台，将原始数据转化为AI智能体持久动态记忆，替代RAG
- 融合向量搜索+图数据库，构建模块化可扩展数据管道，增强关系上下文/结构化知识处理能力
- 支持完全自托管（本地数据保留）和在线云服务两种部署方式
- 上手简单（slogan：6行代码实现AI智能体记忆），是AI智能体长期记忆+知识管理领域完善的微服务

🖥️ **LaunchNext开源Mac启动台工具**
- 原生Mac OS应用，为弃用经典Launchpad的macOS 16用户恢复功能并添加现代化特性
- 安装时可能被系统阻止，需终端执行特定命令（作者因成本未购买开发者证书）
- 支持多语言、隐藏图标标签、自定义图标大小、智能管理文件夹等功能

📝 **Note Discovery笔记与知识库系统**
- 轻量级自托管工具，可作为私有Notion/Office/Miki替代，数据本地存储
- 功能满足日常使用，竞争优势集中在成本、隐私、速度和离线能力
- 部署简单（支持Docker Compose），适合关注数据安全的用户

🔧 **Nginx Proxy Manager可视化管理工具**
- 开源Nginx管理面板，基于Nginx+Docker实现反向代理、HTTPS/SSL配置、域名转发、访问控制等傻瓜式操作
- 解决命令行配置复杂问题，适合管理多Nginx服务的用户
- 支持Docker Compose快速启动，或通过宝塔面板等Linux管理工具安装

📚 **资料分享**
- 美团大模型Agent实践手册：可与上周分享的字节Agent实践对比，观察互联网巨头技术差异
- 强化学习数学基础资料：以通俗数学方式介绍强化学习概念、问题及经典算法，含工具和算法两部分内容

## 原文

guitar一周热点汇总第九十六期本期的内容呢会包括最新的ai绘图模型，

腾讯开源的视频生成模型，ai的个性化动态记忆，

开源版的mac launch pad笔记和智智库系统还有njx的可视化管理工具。

那最后呢还是分享两份资料，如果觉得内容不错呢，别忘了点赞和关注。

那作为flex系列的第二代产品呢，flex二啊这次推出了四款的基础模型和一个vae模型，

那这当中呢有开源的也有闭源的一个组合，

flex pro和flex是闭源的，而大家关注最多的代伍版本呢是开源的，

它是一个基于flex二base模型的三十二b的开源权重版本。

black forest的发布的原始版本呢比较大，我呢是跑不动的，

如果你家里有h一百之类的大卡呢可以去试一下。一般呢如果个人想玩的话呢，

建议去找一些这种量化比较小的版本，那上手的话呢可以直接通过comfui之类的工具会比较方便一些。

那我呢也是用comfui去下载的他提供的这个fp八的版本，

即使这样呢他也有三十三g的一个大小。说实话现在的硬件门槛呢还是比较高的，

而且呢注意啊，如果想要商用的话，

你需要获得授权，因为它这里的协议呢是特有的。那flex二这一次的升级呢主要有三个维度，

第一个呢就是多图的参考支持，那现在呢能够支持处理最多十张的参考图像，

实现呢角色产品还有风格的高度一。

致性在一致性的准确率上呢可以超过百分之九十五。那第二个呢就是四兆币的高清分辨率编辑的支持，

可以原声的支持，这种四兆币图像的生成和编辑能够呈现出非常好的一个细节。

第三个呢就是对于复杂文本的渲染能力。

但是这一次升级呢，其实也能够感觉得到啊，ai世界的格局啊现在变了，

虽然这一次flex二呢也很强，但是flex一发布时候那种惊艳的感觉呢已经无法再继续了，

现在世界的所有目光啊都在nano banana身上，

这里面呢其实也能感到啊小团队和大公司在竞争的时候的一种无奈吧，

所以你更看好flex还是nano banana呢？

会员v六呢是腾讯开源的视频生成技术模型框架，在这个框架之下呢，之前呢其实发布过很多款模型，

那最近发布的就是会员v六一点五，它是一款视频生成模型，

仅需要呢八点三b的参数就实现了非常好的画质，

显著降低了这种使用的门槛，你可以在消费级的gpu上呢去流畅的运行，

这样呢就让开发者和创作者呢可以更加轻松的去上手。那大概呢需要十四b的显存就可以完成视频的生成了，

那相对比来说呢，之前的y二点二大概需要二十b以上的显存，

确实呢混元v六呢会更友好一点，

如果想要自己试玩的话也是推荐啊通过conpui之类的工具，

这里面呢有配置好的工作流可以直接下载缺少的。模型就可以使用了。

那混元v六一点五呢，同时支持了文本驱动和图像引导两种生成模式，

并且呢统一了架构，避免了这种多模型切换带来的兼容性问题。

同时呢也衍生了一些新的玩法，比如像先通过t to v去生成场景，

然后呢再截取一些关键帧的图像来实现i to v的输入，进而呢去实现一种多镜头的叙事。

那会员维度一点五呢也发布了对应的技术报告，

这里面介绍了使用的一些关键技术，像ssta的稀疏注意力机制等，

感兴趣的呢可以自己去下载下来研究一下。我觉得呢，它和one对比来说的话，并不好说啊，

谁绝对比谁好，希望呢可以共同进步吧。cogeny呢是一个开源的工具和平台，

可以将你的原始数据啊转化为持久且动态的ai智能体记忆。

它将相量搜索与图数据库相结合，构建出模块化可扩展的ecl数据处理管道。

并且呢希望可以替代reg。那对比congany和reg呢，

reg的相量搜索啊更多的是语义的匹配，在处理关系上下文和一些结构化知识还有历史的时候呢，

就会显得比较难搞。

congony呢，增加了知识图谱和持久化的记忆能力。那congony呢，目前有两种部署方式，

一个是完全的自托管，数据呢可以全部保留在本地，如果你觉得自己的动手能力不足呢，

也可以去使用在线的云服务。那使用上啊，项目的slogan是memory for ai agents in six line。

of code所以呢，上手还是比较简单的，

参考这个项目的sample就可以比较简单的使用了。另外呢，查看项目的相关文档也能看出来啊，

它是a镇的长期记忆加知识管理方面做的比较完善的一个micros。

在升级了二十六以后呢，苹果官方啊弃用了经典的launchpad启动台，

这对于喜欢之前这种launchpad启动台的人来说呢，

就很难接受，比如呢，就像是我新版的这个app呢用起来呢就像是dog加聚焦再加启动台的一个混合的大杂烩，

其实很多人呢都不喜欢。

那既然官方没有给出啊回退的方案，那么开元大神就该出手了。所以啊，launch next的应运而生，

它呢就是一个原声的mac os应用，目的呢就是帮你把launchpad拿回来，

并且呢给它加点现代化的配料。如果你在安装启动的时候呢遇到了系统的阻止，

那么需要你自己啊在终端里去执行一下这个命令。作者啊也说了他买不起一年九十九刀的开发者证书，

其实我觉得他可以开一个打赏，

大家支持一下其实也就够了。latchnex和原始的latchpad呢体验是几乎一致的，

还多了多语言的支持，可以隐藏图标标签，自定义图标大小，

智能管理文件夹等功能。总之呢，想要找回之前latchpad呢，可以去试一下note discovery呢是一个轻量级自托管的笔记和知识库管理系统，

换句话来说呢，

你可以把它当成是自己私有的notion office加上miki和云笔记。

不过呢，所。有的数据啊，都是保存在你自己的服务器或者硬盘上的，

项目的功能来说呢，是足够日常使用的。当然呢，对于选择之前啊，一定要做详细对比的朋友来说，

你可以去看一下项目当中给出的这个自己和商业软件的对比，

主要的竞争点呢都在成本，隐私，速度和离线上。

部署的话呢，可以使用刀客conpos，比较简单啊，很容易上手。其实呢，笔记类的应用啊，

真是非常的多，算是一个开源产品的大品类了。我觉得选择的话呢，

还是要根据自己的实际情况和习惯。比如啊，像我的话呢，我原来是用nosen的，

现在呢改用飞猪了，这个真不是广告，这个就单纯分享一下，主要呢是因为我比较关注在在线分享，

还有多端的一个操作，另外呢就还有一些权限的设置，

还有呢就是我比较懒，所以呢，我会选择这种商用的这种现成的产品，

那飞书啊，如果能好心的再给我打点广告费就更好了。njx procy manager呢是一个开源的njx管理工具，

基于njx加docker的反向代理管理面板。

使用者呢可以使用这种傻瓜式的配置呢来去管理反向代理，https， ssl，

还有域名的转发，访问的控制等功能。如果你对在命令行里去配置和管理ndix不太熟练的话，

或者呢你管理的ndix比较多，希望可以更简单更直观的去查看，

那都可以使用ndix pros manager。部署的话呢，可以使用docker compose来去快速的启动，

还有呢就是可以通过linux各种。管理面板，

比如像van panel之类的去快速的安装啊，index proxy manager。

那最后啊，还是分享两份资料，第一份呢是美团的大模型agent实践手册，

上周呢分享了字节啊在agent方面的实践，这周呢我又看到了美团的，那这不巧了嘛，

那就把这个呢也分享给大家，大家呢可以自己去对比一下两个互联网巨头的差异。

那第二个是强化学习的数学基础，本书呢，希望以数学但是又比较通俗易懂的方式呢来去介绍强化学习的基本概念，

基本的问题，还有一些经典的算法。

那内容啊，涉及两部分，一部分呢是介绍基本的工具，第二部分呢就是介绍基本的算法。

那有需要的呢，可以告诉我。那以上就是本周的全部内容，我们下次再见。
