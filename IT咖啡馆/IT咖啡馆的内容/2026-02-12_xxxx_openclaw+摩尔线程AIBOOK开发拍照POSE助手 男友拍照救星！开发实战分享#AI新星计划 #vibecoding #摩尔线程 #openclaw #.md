---
title: "openclaw+摩尔线程AIBOOK开发拍照POSE助手 男友拍照救星！开发实战分享
#AI新星计划 #vibecoding #摩尔线程 #openclaw #拍照技巧"
source: "getnote"
platform: "video"
author: "IT咖啡馆"
post_id: ""
post_link: "https://www.iesdouyin.com/share/video/7605822998788050228/?region=CN&mid=7605823379253545791&u_code=31a8fk605ek1&did=MS4wLjABAAAACvsG3MrSw-9Pf0g6OQJSIbzmBKron7xvvz9vqspdmNE&iid=MS4wLjABAAAANwkJuWIRFOzg5uCpDRpMj4OX-QryoDgn-yYlXQnRwQQ&with_sec_did=1&video_share_track_ver=&titleType=title&share_sign=KSbI5zjx4NN9Qe1y4Q6PwMCs74fuK.7g6Rp3JY2gF3M-&share_version=210400&ts=1770912345&from_aid=1128&from_ssr=1&share_track_info=%7B%22link_description_type%22%3A%22%22%7D"
published_at: "2026-02-12 11:58:57"
created: "2026-07-24"
tags: ["clippings", "getnote", "IT咖啡馆"]
---

# openclaw+摩尔线程AIBOOK开发拍照POSE助手 男友拍照救星！开发实战分享
#AI新星计划 #vibecoding #摩尔线程 #openclaw #拍照技巧

> **来源**: [IT咖啡馆 · 得到大脑](https://www.iesdouyin.com/share/video/7605822998788050228/?region=CN&mid=7605823379253545791&u_code=31a8fk605ek1&did=MS4wLjABAAAACvsG3MrSw-9Pf0g6OQJSIbzmBKron7xvvz9vqspdmNE&iid=MS4wLjABAAAANwkJuWIRFOzg5uCpDRpMj4OX-QryoDgn-yYlXQnRwQQ&with_sec_did=1&video_share_track_ver=&titleType=title&share_sign=KSbI5zjx4NN9Qe1y4Q6PwMCs74fuK.7g6Rp3JY2gF3M-&share_version=210400&ts=1770912345&from_aid=1128&from_ssr=1&share_track_info=%7B%22link_description_type%22%3A%22%22%7D)
> **发布时间**: 2026-02-12 11:58:57
> **博主主页**: https://www.iesdouyin.com/share/video/7605822998788050228/?region=CN&mid=7605823379253545791&u_code=31a8fk605ek1&did=MS4wLjABAAAACvsG3MrSw-9Pf0g6OQJSIbzmBKron7xvvz9vqspdmNE&iid=MS4wLjABAAAANwkJuWIRFOzg5uCpDRpMj4OX-QryoDgn-yYlXQnRwQQ&with_sec_did=1&video_share_track_ver=&titleType=title&share_sign=KSbI5zjx4NN9Qe1y4Q6PwMCs74fuK.7g6Rp3JY2gF3M-&share_version=210400&ts=1770912345&from_aid=1128&from_ssr=1&share_track_info=%7B%22link_description_type%22%3A%22%22%7D

## AI 摘要

📱 **项目背景与功能**
- 开发初衷：解决用户因拍照姿势不合格被埋怨的痛点
- 核心功能：通过聊天工具发送拍照场景（如地点），自动返回图文形式的姿势指导
- 创新点：采用OpenCloud+飞书作为用户入口，省去前端开发成本

🏗️ **整体架构设计**
- 后端：使用OpenCode开发服务与API，数据存储于PostgreSQL
- AI生图：本地部署ComfyUI提供图片生成能力
- 用户入口：通过OpenCloud+飞书实现交互
- 开发环境：摩尔线程MTP AI Book（搭载长江SoC芯片，集成ARM全大核CPU、GPU及NPU，提供50TOPS异构AI算力）

💻 **开发环境优势**
- 操作系统：基于Linux内核的MT AIOS，适配AI应用开发
- 预装工具：VS Code、Jupyter Notebook、PyTorch、VRM等主流开发工具与AI框架
- 本地支持：Docker、多版本Python及CUDA适配镜像，开箱即用

🔧 **开发过程**
1. 准备工作：利用AI Book预装的Node.js环境，通过npm安装OpenCode
2. 模型配置：集成Codex与摩尔线程AI Coding Plan（云端MTT五千全精度计算+硅基流动推理加速引擎，模型为GRM4.7）
3. 需求梳理：与AI明确开发场景，使用开发Skill避免无效开发
4. 后端API开发：根据地点、性别、年龄等条件返回姿势建议及指导，完成Python API与数据结构化
5. 生图功能集成：本地部署ComfyUI，通过导出API工作流实现自动调用，批量生成姿势示意图
6. 管理后台开发：实现姿势编辑、发布、批量生成提示词与图片的功能
7. 用户交互配置：通过OpenCloud+飞书接入，支持本地模型部署（如VLLM）降低成本

🚀 **关键技术实现**
- ComfyUI API调用：导出工作流JSON，替换input为动态提示词实现自动生图
- OpenCloud集成：通过Scale Creator生成Skill，对接后端API实现交互
- 成本优化：推荐使用AI Coding Plan套餐或本地模型部署

## 原文

最近啊，我给自己web扣定了一个新型的app。我呢，只要在聊天工具里说啊我正在哪里拍照，

告诉我呢应该摆什么姿势，他呢就会回复我一个图文形式的内容来去指导我。

如果你也经常因为拍照不合格被女朋友埋怨的话，那你应该能理解我的初衷啊。

那在这一次开发当中呢，我尝试啊将opencloud融入到软件的架构。

那接下来呢，我就想用这个视频给你讲清楚我是如何去设计和实现的。

那首先啊，我们来看一下我的整体架构设计。在后端呢，我用open code开发了一个后端的服务和aps over，

数据呢保存到postguy circle，同时呢，本地部署了一个comfui来去提供ai的升图。

在上层呢，我用opencloud加飞书作为用户的入口。

这样呢，我就省掉了前端开发的工作。那这一次开发当中呢，

我尝试了新的本地开发环境。就是这一台啊，摩尔县城的mtp ai book，

它搭载了自然的soc芯片长江，集成了arm全大核的cpu，

摩尔县城全功能的gpu以及npu。那本地啊，

提供了五十tops的易购ai算力。那操作系统啊，是基于linux内核的mt aios，

对于现在的ai应用开发来说呢，linux还是更加方便。

而且呢，它还预装了主流的开发工具和ai框架，比如呢，像mascode，真名牌notebook拍torch vrm等，

开发者啊，基本可以开箱即用。那么接下来呢，

我们就来说一下我的开发过程。首先呢，是准备工。作先呢要安装一下open code。

ai book呢本地预装了note的ds环境，我啊直接就使用npm store来去安装open code，

非常方便。装好了之后呢，我要给它配置一下开发的模型。

除了我常用的codex以外呢，我还配置了一个摩尔县城新出的ai coding plan智能编程服务。

它云端啊是mtt五千强劲的全精度计算，

融合了硅基流动推理加速引擎，模型呢是grm四点七，和codex呢打个配合，

非常不错。另外啊，现在还有免费的活动，可以去看一下。

配置好了以后呢，首先啊，我们先和a i说一下我的整体情况，也就是呢我预期的场景，

然后呢让他去做出规划。这里呢建议使用一些开发的skill，或者呢明确告诉a i要先和自己去澄清问题，

然后呢再开始开发。这样呢就可以避免a i乱搞，

因为那都是外部抠顶。所以呢，我就选择一些重点的阶段来去做一些说明。

首先啊，第一阶段就是我们要完成后台的几个关键api的开发。

那这里我希望的功能呢，就是可以根据传入的各种条件，比如像地点，性别，年龄，

风格，难度来去返回一个建议的拍照姿势和对应的一个拍照指导。

那当ai完成了python的api和数据的数字化之后呢，我们就可以先去做一下测试。

那这里可以看到啊，我们已经可以正常拿到返回的结果了。

能够看到啊，在做这类后台服务开发的时候呢，ai book。的linkings环境啊支持的非常好，

而且呢它还支持了刀客以及呢多种版本的tookid和dna的适配镜像。

那第二阶段呢，我就想要继续去完善一下后端的能力，

因为每一个拍照的姿势呢返回的时候都应该给出对应的图片，而且啊，这个图片的生成呢，

我肯定也需要用ai的能力。首先呢，我先进行最小的map验证来确认一下我设计的流程是可行的。

那我先让ai呢根据数据啊去生成一个生图用的提示词。

然后呢，考虑到后续啊可能要生成很多的图，

为了节约成本呢，我就在本地的环境当中啊去装了一个confui。

当然呢，是否在本地去运行生图还是要结合自己的情况。比如呢，我这台ai book有三十二g的内存，

那本地的算力呢有五十top四，可以很好地去支持啊这个本地运行comfy y，

并且呢同步进行编程也不会卡，

那我就去试一下这个提示词是不是符合要求。那comfyy里呢，我找了一个最因位置turb的模型的工作流啊，

用它呢来作为我生图的模型

测试一下啊，可以看到啊，它生成的图片呢是比较符合我预期的效果的。

那这样流程呢，我们就验证通过了。那接下来啊，为了后续的扩展性和管理的方便，

我干脆呢直接让ai给我做一个管理的后台来去管理所有的拍照姿势的编辑发布还有生成图片。

那这里我跳过了一些过程啊，

最后他就长这个样子，那在这里啊我就可以给系统去加入姿势，

然后批量的去生成提词词，还可以去批量的生成示意图。那这里有一点要特别提出来的就是convoi呢是支持api调用的，

所以呢，我就可以让我的系统去自动的调用它来去生成图片。

那这里我们需要做的呢，就是把刚才跑通的那个confui的工作流给它导出，

右键点击名字，然后呢选择导出api，

就会得到一个json，然后呢，我们调用的时候啊，只需要把里面的这个input换成我们在姿势的详情里已经生成好的这个提示词。

那这个工作呢，我们也让ai去开发相对应的功能。那它开发完成了以后啊，我们来试一下效果。

可以看到啊，现在在comfui里面，我们就能看到自动会接收到系统的请求，

然后开始去执行升图，但是这里呢，

系统还没有拿到升成的结果，还需要再做一个修改啊，

那改好了以后啊，我再执行一次，这一次呢就能看到已经完全可以成功了。

那来测试一下api的接口，也能够拿到返回的内容，

并且呢，这里面的链接也可以看到图片。那么现在啊，我的整个后台部分的功能呢，

就开发完成了，那在接下来呢，我们就来配置和用户交互的部分，

也就是啊，我比较创新去尝试啊，通过opencloud来做的那部分。

那opencloud安装啊，我就跳过了，如果有不清楚的呢，可以参考我之前的视频。

在ai book的linux环境当中啊，安装也是比较容易的，只需要执行官方的一键安装脚本。

就可以了。opencloud模型呢我建议是配置一个coding plan的套餐，或者呢是用ai book本地自带的v l l m去部署一个本地的模型，

这样呢可以降低研发的成本。

那首先呢我先让ai呢把刚刚我们开发的内容在reading me里面把它写好，

这样呢可以方便后续去生成scale。然后呢我们再调用scale creator来去生成一个scale，

让他就参考readme里的内容自己去分析一下，

然后就可以拿到一个完整的scale点md了。那进入opencloud里面呢，

我们直接把这个scale点md发给他，让他呢安装一下这里面的技能。

安装好以后呢，我们就先在web chat里面去试一下，可以看到啊，它能够正确的调用本地的api服务，

然后呢获得到相关信息。那为了以防万一啊，

我要求他呢一定要在聊天窗口里把图片发给我，但是这里呢web chat是不支持图片的，

所以呢我就拿出手机来试一下效果。那这一次呢我是用飞书来做的介入。

那我再一次呢把刚才的要求啊发给opencloud，

他呢就会回复我查到的建议和配图，速度呢还是非常快的。怎么样，好玩吗？

那不知道你对这个流程有什么感受啊？其实呢通过open close我们可以加速很多开发计划的落地。

原先呢如果我们想要做一个完整的应用，我们需要前端的app或者小程序，

一方面呢需要开发的投入，另外一方面呢像备案等操作呢都是非常麻烦的

那现在呢，通过opencloud我们可以更快地把创意去落地，

再配合上央ai book这样的一站式开发环境，可以更快速地去验证产品的mvp。

那最后啊，整个开发过程当中啊，摩尔县城的m d t a i book的体验是很不错的，

除了可以帮助提升开发效率呢，它还内置了虚拟机，可以支持啊多种系统的融合，

比如呢，linux开发，windows游戏，安卓娱乐都互相不耽误。

这个算力本啊，还集成了丰富的ai应用工具，比如像端测的大模型，小麦素质能智能体以及ai助手等，

助力呢ai开发更高效便捷。也很高兴啊，

能够看到现在的纯国产的硬件可以做出不错的产品，希望呢，可以越来越好。

好了，这里是it咖啡馆，我们下次再见。
