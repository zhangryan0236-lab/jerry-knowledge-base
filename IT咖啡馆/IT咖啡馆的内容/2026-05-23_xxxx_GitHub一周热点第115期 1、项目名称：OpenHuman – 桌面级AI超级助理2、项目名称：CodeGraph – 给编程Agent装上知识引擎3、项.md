---
title: "GitHub一周热点第115期 1、项目名称：OpenHuman – 桌面级AI超级助理
2、项目名称：CodeGraph – 给编程Agent装上知识引擎
3、项目名称：CloakBrowser – 隐身Chromium
4、项目名称：CLI-Anything – 把任何软件变成AI可用的CLI
5、项目名称：LingBot-Map – 流式3D重建基础模型
#Github #AI新星计划 #智能体 #程序员 #IT咖啡馆"
source: "getnote"
platform: "video"
author: "IT咖啡馆"
post_id: ""
post_link: "https://www.iesdouyin.com/share/video/7642964239769947438/?region=CN&mid=7642964357365779263&u_code=157020je9g20&did=MS4wLjABAAAAhtDu6nBK8xbOCvp8DCPojBI5MGo7EIqXI5qxPOKn_vQ&iid=MS4wLjABAAAANwkJuWIRFOzg5uCpDRpMj4OX-QryoDgn-yYlXQnRwQQ&with_sec_did=1&video_share_track_ver=&titleType=title&share_sign=SH5e_w2j0kNAN1NmbEDor7RFDHaqQGRrbRP81Q4zA1s-&share_version=240800&ts=1779552209&from_aid=1128&from_ssr=1&share_track_info=%7B%22link_description_type%22%3A%22%22%7D"
published_at: "2026-05-23 14:04:47"
created: "2026-07-24"
tags: ["clippings", "getnote", "IT咖啡馆"]
---

# GitHub一周热点第115期 1、项目名称：OpenHuman – 桌面级AI超级助理
2、项目名称：CodeGraph – 给编程Agent装上知识引擎
3、项目名称：CloakBrowser – 隐身Chromium
4、项目名称：CLI-Anything – 把任何软件变成AI可用的CLI
5、项目名称：LingBot-Map – 流式3D重建基础模型
#Github #AI新星计划 #智能体 #程序员 #IT咖啡馆

> **来源**: [IT咖啡馆 · 得到大脑](https://www.iesdouyin.com/share/video/7642964239769947438/?region=CN&mid=7642964357365779263&u_code=157020je9g20&did=MS4wLjABAAAAhtDu6nBK8xbOCvp8DCPojBI5MGo7EIqXI5qxPOKn_vQ&iid=MS4wLjABAAAANwkJuWIRFOzg5uCpDRpMj4OX-QryoDgn-yYlXQnRwQQ&with_sec_did=1&video_share_track_ver=&titleType=title&share_sign=SH5e_w2j0kNAN1NmbEDor7RFDHaqQGRrbRP81Q4zA1s-&share_version=240800&ts=1779552209&from_aid=1128&from_ssr=1&share_track_info=%7B%22link_description_type%22%3A%22%22%7D)
> **发布时间**: 2026-05-23 14:04:47
> **博主主页**: https://www.iesdouyin.com/share/video/7642964239769947438/?region=CN&mid=7642964357365779263&u_code=157020je9g20&did=MS4wLjABAAAAhtDu6nBK8xbOCvp8DCPojBI5MGo7EIqXI5qxPOKn_vQ&iid=MS4wLjABAAAANwkJuWIRFOzg5uCpDRpMj4OX-QryoDgn-yYlXQnRwQQ&with_sec_did=1&video_share_track_ver=&titleType=title&share_sign=SH5e_w2j0kNAN1NmbEDor7RFDHaqQGRrbRP81Q4zA1s-&share_version=240800&ts=1779552209&from_aid=1128&from_ssr=1&share_track_info=%7B%22link_description_type%22%3A%22%22%7D

## AI 摘要

🤖 **Open黑欧曼（开源智能助手）**
- 功能类似Open Pro和Hammers，核心特色为“AI主动了解用户”
- 核心链路：连接、抓取、记忆，支持超180种第三方集成（使用Composial工具）
- 每20分钟遍历活跃链接，拉取新数据至记忆库
- 采用Memory Tree和Offseating双轨机制（源自AI大神卡帕西的工作流）
- 安装：MacOS/Linux支持一键CLI命令，Windows有PowerShell脚本
- 支持本地模型但引导使用云上AI，自定义较麻烦
- 含Token压缩层，官方称降低80%成本与延迟

💻 **CodeGraph（编程Agent智能图谱）**
- 解决大项目中Agent频繁翻文件查代码的痛点，预先构建代码仓库知识图谱
- 官方数据：成本降35%、Token减59%、速度提升49%、工具调用减70%
- 10k+大文件仓库效果显著，Token消耗降至原1/4
- 安装：1号命令安装，`code graph init`初始化项目
- 支持主流编程Agent（Close Code、Cursor、Codex等）与19+编程语言
- 支持框架级路由识别（如React、Flex、Spring等）
- 本地运行，数据不上传，无外部API调用

🌐 **Clock Browser（隐身Chrome）**
- 通过30+反爬检测网站测试，Recapture v3评分0.9，可过Cloudflare
- 区别于Playwright/Undetected的JS注入方案，直接修改Chrome C++源码（58个补丁）
- 覆盖Canvas、WebGL、音频、字体、GPU等模块，编译为二进制文件
- 适合自动化、数据采集、AI浏览器场景

⌨️ **CLI Anything（GUI转CLI工具）**
- 来自港大HKUDS实验室，将GUI软件转为AI Agent可用的命令行工具
- 原理：分析软件源码/GitHub仓库，自动生成ZionForce命令行接口
- 社区已适配18+应用（Blender、LibreOffice、Zoom、Godot等）
- 含CLI Hub包管理器，一键浏览安装社区构建的CLI
- 支持主流工具（Cloud Code、Cursor、Codex等）

📊 **Linbot Map（流式3D重建模型）**
- 基于几何上下文Transformer的纯自回归模型，从流式视频实时重建3D场景
- 填补蚂蚁凌波年初开源模型（Linbot Devs/VRA/VA/World）的3D空间构建空缺
- 实时性：约20fps，支持室内外场景
- 开源协议：Apache 2.0，模型可在Hugging Face和ModelScope下载
- 应用方向：3D视觉、自动驾驶等

📚 **资料分享**
- 《重构与崛起：OpenCloud时代的中国AI产业生态报告》：分析OpenCloud引发的产业革命，涵盖协议、模型、平台、商业模式，重点讨论Skill经济、AI基础设施、企业级治理
- 《2025年人形机器人市场研究报告》：梳理全球与中国产业发展、市场格局、趋势，分析语数、优必选、Figure AI等企业路径及行业商业化进展

## 原文

kithub一周热点汇总第一百一十五期本期的内容呢包括啊桌面级的ai超级助理编程agent的智能图谱隐身chrome把任何软件变成cri工具以及呢实时的流式三d重建模型。那最后呢，还是分享两份资料，如果觉得内容不错啊，别忘了点赞和关注。open黑欧曼呢是一个开元的智能助手，那这半年呢，涌现了很多啊现象级的a震的工具，尤其呢是open pro和hammers最为呢出名。open黑欧曼呢在功能上啊和它们是类似的，那它整体来看呢，最有特色的是两点。第一个呢是open黑欧曼啊，希望让ai呢主动来了解我们。那整个项目的核心链路呢，可以拆解为三个部分，就是连接抓取和记忆。那项目支持啊超过了一百八十种的第三方集成和自动的拉取，这里呢应该是使用composial的工具，那前几期呢我也介绍过，可以去翻一下之前的视频，它可以呢每二十分钟去便利每一个活跃的链接，并且将新的数据拉取到记忆术当中。第二个呢是memory tree和offseating的双轨机制，这一套机制呢是来自ai大神卡帕西分享过的offseating工作流思路呢还是很精华的。安装啊还是比较简单的迈克os和linux支持一键的q命令去安装，windows呢也有powershell的脚本，也支持呢本地的模型。但是目前呢，整体的设计思路啊，还是希望引导去使用它云上的ai，所以呢，虽然支持本地的。ai和自定义啊，但是都比较麻烦。最后啊，项目还是给出了一个token zuci的一个压缩层来去降低token的开销。官方的数据啊，说可以把成本和延迟降低百分之八十。项目里呢，也给出了和其他agent的一个对比。但是呢，我觉得一个很重要的问题是迁移。比如呢，我熟悉了一个工具，就不想要去切换，所以呢，想要让用户啊进来使用它的新工具，其实应该学习一下黑姆斯，提供自动化的迁移工具。总之呢，项目的思路我觉得还是很值得去学习和了解的。如果你用过cloud code或者是closer呢，去写大的项目，肯定啊遇到过这个问题，就是agent每次呢，都要用grap等工具呢，去到处的翻文件，去找代码，那一顿凶猛的操作背后啊，就是token在燃烧。codegraph呢，就是来解决这个痛点的，他给你的代码仓库啊，去预先建设一个知识图谱，背着呢呢，直接去查图谱就可以了，不用呢再去买文件呢，去乱找。官方给的数据啊，平均可以便宜百分之三十五，token呢可以减少百分之五十九，那速度啊，可以提升百分之四十九，也可以减少百分之七十的工具调用在vscode啊这种十k以上的大文件的仓库上，效果尤为明显。token消耗呢，可以直接降低到原来的四分之一左右。那使用上呢，也比较简单啊，一号命令就可以安装。然后呢，在code graph init就可以初始化项目支持了，close code， coser，codex还有c l。i open code等这样主流的编程，a gent那也支持啊超过十九种的编程语言。还有框架级的路由识别，比如呢，像专购flex，spring express这些常见的，都可以自动的识别。同时呢，它也保证啊，是在本地去运行，数据呢不上传，也没有外部的api调用。对隐私敏感的开发者来说啊，是非常好的一个消息。clock browser呢，是一个隐身版的chrome浏览器，它通过了超过三十个的反爬检测网站的测试。呃，recapture的v三评分呢，也是零点九cloudfair的测试呢，也可以直接通过市面上一些比较常见的方案，比如像playwrite，undetected都是呢js注入，或者是配置层面的patch。那chrome一旦更新了，就容易失效。那本项目的做法呢，会更硬核一些，他直接修改了chrome的c加加的原码，五十八个补丁呢，去覆盖了像canvas，webgl，音频，字体，gpu等内容啊，编译成真正的二进制的文件。这样的反爬系统啊，就确实识别到的是一个正常的浏览器了。那对于做自动化和数据采集的，还有a i浏览器的朋友来说呢，这个项目啊，是值得去关注的。那最近一段时间呢，c l i的热度啊，不断的上升。那这周啊，我也出视频介绍了飞出的c l i那本项目啊，是又一个来自于港大h k u d s实验室的。它的想法呢，就是把所有的g u i的软件都变成a i a这能够使用的命令行。工具，那它的原理呢，其实也不难理解，a i a的呢呢通过c r i来控制软件，那效率呢，是高于截图加g u i的方式的。那c r i anything呢，就会分析你的软件的源代码，或者是get up的仓库，去自动化的生成一个zionforce的命令行接口。然后呢，a i a的呢，就能够直接的通过终端的命令来去使用这个软件了。那目前社区啊，已经贡献了超过十八个以上的应用cri的适配，比如呢，像blender啊，labor office啊，还有zoom，甚至呢包括了go dot的游戏引擎，那还有一个cli hub的包管理器，只要安装以后啊，就可以去一键浏览安装所有社区构建的cri。那本项目支持cloud code，cursor， codex，opencloud等主流的工具。说实话呢，这个项目的野心还是很大的，如果真的能够做到啊，让aia阵呢，通过cri去直接操控任何的软件，那对于a阵的生态来说是一个巨大的推动。linbot map是一个基于几何上下文transformer的纯字回归的流式三d重建基础模型，它可以从流式的视频数据当中呢，去实时地重建三d的场景。那蚂蚁凌波呢，在年初的时候一口气开源了四款大模型，包括了linbot devs，linbot vra， linbot va，linbot world，覆盖了感知、底层环境理解，行动输出。但其中呢，缺少了一个关键的环节，就是如何把连续的感知数据呢，实时的构建成稳定。的三维空间模型，本项目呢就是填补了这个空缺。那简单来说呢，就是你拿着一个手机啊去拍一段视频，它能够一边拍一边实时的重构出三d的场景，速度呢可以达到约二十fps，支持啊室内外的场景，并且呢是阿巴奇二点零的开源许可协议。模型呢在honking face和model scope上呢也都能够下载。如果你对像三d视觉啊，自动驾驶等技术呢感兴趣，可以去了解一下这个项目。那最后啊，还是分享两份资料，第一份呢是重构与崛起opencloud时代的中国a镇的产业生态报告，主要呢围绕opencloud引发的a镇的产业的革命去展开，分析了中国aia镇的生态的协议啊，模型啊，平台啊，还有商业模式上的这个发展的过程。报告重点讨论了包括像skill经济啊，ai镇的基础设施，还有一些企业级的治理等内容。那第二份呢是二零二五年人形机器人市场研究报告，它系统的梳理了全球与中国的人形机器人产业的发展状况，市场格局，还有未来的一些趋势。那报告也重点分析了像语数啊，优必选啊，还有figure ai等企业它的发展路径，以及呢在一些重点行业当中的一些商业化的进展。那有需要的呢可以告诉我。那以上就是本周的全部内容，那我们下次再见。
