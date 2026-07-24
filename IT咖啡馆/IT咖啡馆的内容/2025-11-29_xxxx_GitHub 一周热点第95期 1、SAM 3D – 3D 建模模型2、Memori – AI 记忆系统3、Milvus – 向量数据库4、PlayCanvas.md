---
title: "GitHub 一周热点第95期 1、SAM 3D – 3D 建模模型
2、Memori – AI 记忆系统
3、Milvus – 向量数据库
4、PlayCanvas Engine – Web 原生 3D 引擎
5、Librepods – airpods扩展工具
6、DBeaver – 通用数据库管理工具
#Github #AI新星计划 #大模型 #智能体 #数据库"
source: "getnote"
platform: "video"
author: "IT咖啡馆"
post_id: ""
post_link: "https://www.iesdouyin.com/share/video/7577619365592419610/?region=CN&mid=7577619538600692506&u_code=1300i0f8mad5&did=MS4wLjABAAAA1ZGSQFjefOTpOBy_FqFLSlMxmgg4aGvpJb-mdApQbBk&iid=MS4wLjABAAAANwkJuWIRFOzg5uCpDRpMj4OX-QryoDgn-yYlXQnRwQQ&with_sec_did=1&video_share_track_ver=&titleType=title&share_sign=Ksd9fK4xgM7J8CdrRXyGJfjgcSsYPnlS7qMP1ceNstU-&share_version=230000&ts=1764432271&from_aid=1128&from_ssr=1&share_track_info=%7B%22link_description_type%22%3A%22%22%7D"
published_at: "2025-11-29 10:00:00"
created: "2026-07-24"
tags: ["clippings", "getnote", "IT咖啡馆"]
---

# GitHub 一周热点第95期 1、SAM 3D – 3D 建模模型
2、Memori – AI 记忆系统
3、Milvus – 向量数据库
4、PlayCanvas Engine – Web 原生 3D 引擎
5、Librepods – airpods扩展工具
6、DBeaver – 通用数据库管理工具
#Github #AI新星计划 #大模型 #智能体 #数据库

> **来源**: [IT咖啡馆 · 得到大脑](https://www.iesdouyin.com/share/video/7577619365592419610/?region=CN&mid=7577619538600692506&u_code=1300i0f8mad5&did=MS4wLjABAAAA1ZGSQFjefOTpOBy_FqFLSlMxmgg4aGvpJb-mdApQbBk&iid=MS4wLjABAAAANwkJuWIRFOzg5uCpDRpMj4OX-QryoDgn-yYlXQnRwQQ&with_sec_did=1&video_share_track_ver=&titleType=title&share_sign=Ksd9fK4xgM7J8CdrRXyGJfjgcSsYPnlS7qMP1ceNstU-&share_version=230000&ts=1764432271&from_aid=1128&from_ssr=1&share_track_info=%7B%22link_description_type%22%3A%22%22%7D)
> **发布时间**: 2025-11-29 10:00:00
> **博主主页**: https://www.iesdouyin.com/share/video/7577619365592419610/?region=CN&mid=7577619538600692506&u_code=1300i0f8mad5&did=MS4wLjABAAAA1ZGSQFjefOTpOBy_FqFLSlMxmgg4aGvpJb-mdApQbBk&iid=MS4wLjABAAAANwkJuWIRFOzg5uCpDRpMj4OX-QryoDgn-yYlXQnRwQQ&with_sec_did=1&video_share_track_ver=&titleType=title&share_sign=Ksd9fK4xgM7J8CdrRXyGJfjgcSsYPnlS7qMP1ceNstU-&share_version=230000&ts=1764432271&from_aid=1128&from_ssr=1&share_track_info=%7B%22link_description_type%22%3A%22%22%7D

## AI 摘要

🖼️ **Meta 3D建模模型（SAM3D）**
- 是Segment Anything Model（SAM）在三维方向的延伸，具备物体三维结构理解能力
- 可从图片推断几何体积、边界框、深度信息及表面结构
- 包含两个子项目：SAM3D objects（物体建模）和SAM3D body（人体建模）
- Meta已开放模型示例和技术说明，适合开发者研究3D理解框架

🧠 **Memory（AI记忆引擎）**
- 专为AI智能体设计的开源记忆引擎，支持长期记忆、短期记忆和工作记忆
- 核心功能：结构化存储记忆数据，提供检索、筛选、插入、回忆的统一接口
- 支持SQLite、PostgreSQL、MySQL等数据库，可嵌入现有应用
- 内置三种记忆模式：短期关键点模式、长期可检索模式、混合模式
- 兼容OpenAI、Anthropic、LangChain等生态，一行代码即可启用全局记忆

📊 **Milvus（开源向量数据库）**
- Zilliz出品的高性能向量数据库，定位AI检索、RAG、大模型嵌入向量存储
- 核心特性：高吞吐、分布式、GPU加速、云原生，支持稠密/稀疏向量
- 架构采用计算与存储解耦，支持自动扩容、热分层存储、流式写入
- 企业级特性：多副本高可用、RBAC权限管理，单机版可通过Docker Compose快速启动
- 应用场景：搜索引擎、RAG系统、推荐系统、图像检索等

🌐 **PlayCanvas（Web端开源3D引擎）**
- 基于JS/TS构建，运行在WebGL与WebGPU上的轻量级3D引擎
- 支持GLTF 2.0、物理材质、动画系统、粒子系统、阴影后期处理
- 内置Ammo.js物理引擎，支持触摸、手柄、鼠标等多输入方式
- 完全开源（MIT协议），适用于Web端3D游戏、可视化场景、VR/AR体验

🎧 **AirPods跨平台扩展工具**
- 逆向工程项目，通过模拟Apple私有协议实现AirPods在安卓/Linux设备的全功能支持
- 支持功能：入耳检测、主动降噪切换、触控操作、头部动作接听、电量显示
- 安卓端部分功能需Root和Xposed框架，兼容性和稳定性仍在优化中

💻 **DBeaver（数据库管理工具）**
- 支持几乎所有主流数据库（MySQL、PostgreSQL、Oracle、MongoDB等）
- 功能包括SQL编辑器、可视化表结构、ER图、导入导出、执行计划调优
- 跨平台桌面客户端，基于Java/Eclipse RCP架构，支持插件化扩展
- 社区版免费，企业版提供高级功能，被称为"SQL瑞士军刀"

📚 **推荐学习资料**
- 字节跳动AI智能体实践手册：分享办公、电商、内容创作等场景的AI应用思考
- RAG实践系统构建指南：揭秘送大神的实战干货，讲解知识库与问答系统搭建

## 原文

Kit HUB一周热点汇总第95期本期的内容呢，包括了Meta最新的3D建模模型，AI智能体系引擎、云原生向量数据库、开源外部3D引擎、AirPods跨平台扩展工具以及通用数据库管理工具。最后还是分享两份资料，如果觉得内容不错呢，别忘了点赞关注支持一下。3M3D是Meta最新发布的将图像转换为3D模型的工具，是segment anything model在三维方向的一个延伸，Sam之前就以强大的图像分割能力而著称，而SAMM3D则进一步让模型具备了对物体三维结构的理解能力，能够从图片当中去推断出物体的几何体积、边界框、深度信息，甚至是表面的结构。从目前的弹幕效果来说呢，非常的炸裂，这一类模型的实际意义也非常的大，它让普通用户啊，只需要一张图片就能生成3D的模型对象，这就在游戏、虚拟现实、A1数字孪生，还有建筑设计等方面呢，具备非常大的价值，无论是Meta Google还是各家的AI公司都投入。

输入力量去推进3D生成模型，Sam姆3D也被认为可能是下一代3D建筑模型的基础能力，目前呢，Sam姆3D仍然处在研究发布的阶段，现在有两个子项目，一个是SAM3D objects, 一个是SAM3D body Meta已经开放了模型视力，还有技术说明，对于开发者来说呢，这是一套非常值得去研究的3D理解框架。Memory这个项目啊，一看名字就知道肯定和记忆有关，它是一个专为AI认的设计的开源记引擎，让智能体一次的拥有长期记忆、短期记忆、工作记忆的能力。对于做智能助理、自动化代理，还有多轮任务规划的人来说呢，这种记忆层的能力几乎是必备的组件工具。Memory的核心概念呢，就是把所有的记忆结构化存到数据库，当中，然后呢，为A着提供检索、筛选、插入、回忆的统一接口，它支持呢，像circleq light postcriy my circle可以直接嵌入到现有的应用当中，它还内置了三种模式，记忆模式是短期的关键点，自动模式啊，就是长期存。

处，并且可检索。混合模式就是结合两种的优势，目前有很多项目在使用memory来去记录用户的偏好，历史任务，还有对话的要点，让A着的可以在复杂的工作流当中不再是说过就忘，集成上也比较简单，代码里通过一行memory.enable就可以打开全局记忆系统兼容open AI and tropic long chain等生态。Mail wass是目前非常流行的开源向量数据库之一，它的定位就是为AI检索rag大模型嵌入向量存储而去打造的高性能引擎，它具备了高吞吐、分布式、GPU加速、云原生等几个核心的特性，是Z类的出品的开源项目mail沃S支持了几乎所有的主流向量检索算法，也能够同时处理稠密向量和系数向量，适用于呢文本、图像、音频等多模态的应用，架构上来说mails采用了计算与存储解耦多节点协同的处理，让系统的支持自动的扩容知识从单机开发到规模的生产集群。它还提供了。

热分层存储、流式写入、多副本都可用、r abpc、权限管理等企业级的特性，上手的难度不算高，单机版的一条docker compose就能启动了。在大模型应用爆发的当下呢，向量数据库越来越受到重视，Mail wass也希望能够成为向量世界当中的MYSQL，它已经被用于向搜索引擎、rag系统、推荐系统，还有图像检索等大量的应用场景。Play canvas是一个在we部领域非常成熟的开源3D引擎，它主打的就是体积小，加载快，跨平台，整个引擎基于JS和TS去构建，默认的运行在web gl与web GPU上，因此呢，你可以直接在浏览器当中去做3D游戏、可视化场景，还有产品的展示以及VRAR等体验内容。它的渲染能力比较稳定，支持GLTF、2.0、物理材质、动画系统、粒子系统、阴影后期处理等常见的特性，Play kvas内置的物理引擎是阿莫ZS，还支持触摸手柄、鼠标等多种输入方式。

更重要的是呢，它完全开源MAT协议，在商业的使用上没有什么负担，Play kvas呢，目前已经被应用在了很多大型网站项目当中，比如像汽车的可视化，虚拟的试音，手机的3D展示等，对于要做web端的3D内容的开发者来说呢，它是一个比较好的高质量选择，那本项目啊，是一个比较硬核的逆向工程的项目，它的目标是让AirPods在安卓Linux设备上也能够使用iPhone才有的高级功能，比如像耳内的检测啊，主动降噪模式的切换，触控操作，还有头部的动作接听，电量显示等项目的团队呢，通过模拟iPod私有协议来骗过AirPods，让他以为连接到的是Apple设备，从而开放全部的功能，那部分的特性呢，在安卓上需要root和X pods才能实现，因为蓝牙的底层的技术站的限制比较多，那目前虽然在兼容性和稳定性上还有一些不足，但项目也在不断的进化，对于那些喜欢折腾的用户来说啊。而且你手。

处里正好有AirPods，并且你希望它在非苹果的设备上也能够完全使用，那你可以去关注这个项目，也希望这个项目能够真正做到它的触发的目标c bir是数据库管理工具当中非常经典的开源产品之一，基本上呢，你能想到的数据库啊，它都能连接上，像my circlele postsc gra circlele Oracle circle server circleq light, 以及一些no circleql的产品，比如像mogo DB界面呢，是桌面客户端的设计，包括了像circleql编辑器，可视化的表结构编辑器，ER图，数据库导入导出，执行计划，还有调优工具，功能是比较全面的，它最大的优势是它是跨平台的，并且插件化。DB呢，本质上是基于Java和eclclipse rpc的架构，那数据库连接的驱动呢，也都是可以管理的，社区版免费可用，企业版呢，提供了一些高级的额外功能，当然呢，也需要收费，它也被称为啊，是circle的瑞士军刀，无论是开发者DBA还是数据分析师，都可以把DBA当成是日常的必备工具来作为呢。

一站式的数据库管理客户端，那最后还是分享两份资料，第一份是字节跳动的A任的实践手册都知道啊，字节跳动在AI方面做的是非常不错的，那它内部在A镇的方向上都有什么尝试呢？这个资料呢，分享了在像办公啊，电商内容创作等方面的很多思考，那第二份是rag实践系统构建知识库和问答系统的实战指南，又是揭密送大神的内容，这个是比较实战的干货了，对于rig感兴趣的同学呢，可以来学习一下，有需要的可以告诉我，以上就是本周的全部内容，那我们下次再见。
