---
title: "DeepSeek开源周第二弹，极致通信效率的DeepEP DeepSeek的开源第二弹来了 ，今天开源的项目是第一个用于MOE模型训练和推理的开源EP通信库 #DeepSeek #github #MOE #大模型 #英伟达"
source: "getnote"
platform: "video"
author: "IT咖啡馆"
post_id: ""
post_link: "https://www.iesdouyin.com/share/video/7475303947184508199/?region=CN&mid=7475304887505455891&u_code=0&did=MS4wLjABAAAAG6v7xrGV2WoE6cjFeF2DObzm_IT7-icUqsTdgZLwFU8&iid=MS4wLjABAAAANwkJuWIRFOzg5uCpDRpMj4OX-QryoDgn-yYlXQnRwQQ&with_sec_did=1&video_share_track_ver=&titleType=title&share_sign=1BL5VhMDGVAwv437_x_WOlLDR4BRo96.HIFBG.usbKU-&share_version=230600&ts=1740511727&from_aid=1128&from_ssr=1"
published_at: "2025-02-25 18:41:18"
created: "2026-07-24"
tags: ["clippings", "getnote", "IT咖啡馆"]
---

# DeepSeek开源周第二弹，极致通信效率的DeepEP DeepSeek的开源第二弹来了 ，今天开源的项目是第一个用于MOE模型训练和推理的开源EP通信库 #DeepSeek #github #MOE #大模型 #英伟达

> **来源**: [IT咖啡馆 · 得到大脑](https://www.iesdouyin.com/share/video/7475303947184508199/?region=CN&mid=7475304887505455891&u_code=0&did=MS4wLjABAAAAG6v7xrGV2WoE6cjFeF2DObzm_IT7-icUqsTdgZLwFU8&iid=MS4wLjABAAAANwkJuWIRFOzg5uCpDRpMj4OX-QryoDgn-yYlXQnRwQQ&with_sec_did=1&video_share_track_ver=&titleType=title&share_sign=1BL5VhMDGVAwv437_x_WOlLDR4BRo96.HIFBG.usbKU-&share_version=230600&ts=1740511727&from_aid=1128&from_ssr=1)
> **发布时间**: 2025-02-25 18:41:18
> **博主主页**: https://www.iesdouyin.com/share/video/7475303947184508199/?region=CN&mid=7475304887505455891&u_code=0&did=MS4wLjABAAAAG6v7xrGV2WoE6cjFeF2DObzm_IT7-icUqsTdgZLwFU8&iid=MS4wLjABAAAANwkJuWIRFOzg5uCpDRpMj4OX-QryoDgn-yYlXQnRwQQ&with_sec_did=1&video_share_track_ver=&titleType=title&share_sign=1BL5VhMDGVAwv437_x_WOlLDR4BRo96.HIFBG.usbKU-&share_version=230600&ts=1740511727&from_aid=1128&from_ssr=1

## AI 摘要

📢 **开源项目介绍**
- DeepSeek开源周第二弹，开源第一个用于MOE模型训练和推理的开源EP通信库DeepEP
- 该项目可看作对DeepSeek v3背后技术的解密

🧩 **MOE模型解读**
- MOE即混合专家模式，模型每次使用部分参数，能拥有更大参数规模
- 以餐厅为例解释：餐厅厨师如专家，各擅长不同菜系，服务员根据菜品类型动态选厨师烹饪，体现专家分工、智能分配和结果整合三个重要环节
- MOE面临挑战：忙闲不均（如20%厨师炒80%菜）、沟通成本高（几个厨师做同一道菜需完全同步通信）、资源浪费（厨师切完菜后闲置等待新菜）

💪 **DeepSeek的优势**
- 很好克服MOE挑战，让数据进入流水线即被处理

🌟 **DeepEP的作用与特性**
- 解决MOE中“厨师”（专家）之间沟通问题，提供对非对称域带宽转发优化的内核，如从NVLink域转发到RDMA域
- NVLink是GPU间直接互联技术，双向连接速度达160GB；RDMA是远程内存访问，绕过操作系统内核与CPU干预，网络传输速度达50GB每秒
- DeepEP内核有高吞吐量和低延迟特性，适配训练和推理任务
- 带宽传输率方面，用DeepSeek v3或R1预训练配置，DeepEP最高跑到158GB接近带宽上限
- 低延迟推理场景中，有一组纯RDMA低延迟内核，表现亮眼
- 有异步可糊机制，后台执行RDMA传输不消耗GPU流处理器资源，配合算法实现GPU计算复用
- 项目使用超出文档范围的PTX命令

## 原文

**标题：** DeepSeek开源周第二弹，极致通信效率的DeepEP DeepSeek的开源第二弹来了 ，今天开源的项目是第一个用于MOE模型训练和推理的开源EP通信库

 #DeepSeek #github #MOE #大模型 #英伟达

**作者：** IT咖啡馆

朋友们，deep seek的开源周第二弹来了。今天的开源项目是第一个用于m o e模型训练和推理的开源e p通信库。不明白什么意思，别急，马上带你了解。这个项目呢你可以看作是对于deep seek v三背后技术的一次解密。之前在deep seek v三的论文当中啊，提到了很多内容，应该实际上应用的就是这个项目的能力。这次呢再也不会有人质疑当初deepseek v三低爆了用卡数量。那么我们首先呢要从m o e说起，m o e也就是混合专家模式。每一次模型使用的是部分参数，进而呢可以让模型拥有更大的参数规模。不懂什么意思？我用通俗易懂的方式给你解释一下。假设你有一家餐厅，里面有很多的厨师，每一个厨师呢擅长不同的菜系。当顾客点菜的时候，服务员会根据菜品的类型，动态的选择，合适的厨师来进行烹饪。这就是m o e架构的核心思想。这里呢可以看到三个重要的环节，专家分工、智能分配和结果整合。而这个过程中呢就会遇到一些问题和挑战。比如啊忙闲不均百分之二十的厨师炒了百分之八十的菜。还有呢沟通成本高。几个厨师完成同一道菜的时候呢，他们需要互相完全同步通信。第三啊就是资源的浪费。厨师在切完菜之后呢，会闲下来，等待新菜送过来。这些呢就是m o e常见的挑战。 Deepseek之所以如此成功，就是因为他很好的克服了这些。他让流水线上没有闲人，再加上尽可能的优化工序，就可以做到让数据进入流水线就立马被处理掉。我这里只是一个比喻啊，更详细的内容还是要去查看v三的技术报告。这次开源的d p e p就是解决厨师之间沟通的问题。它提供了一组对于非对称域带宽转发进行优化的内核。比如从n v link域转发到r d m a域，n v link呢是一种g p u之间的直接互联，它是n v大提供的技术，双向连接速度呢可以达到一百六十g b rdma呢是远程内存访问，绕过操作系统的内核与cpu的干预网络传输数据速度可以达到五十gb每秒。 D p e p的内核呢提供了高吞吐量和低延迟的特性，并且啊可以同时适配到训练和推理的任务。根据目前项目给出的数据，在带宽传输率方面，使用deep seek v三或者r一的预训练配置。D p e p可以最高跑到一百五十八gb接近了贷款的上限。在低延迟的推理场景当中呢，d p e p包含了一组纯r d m a的低延迟内核表现非常亮眼。这里啊dpep还有一个异步糊可的机制。在后台执行rdma传输的时候呢，不会消耗任何的gpu流处理器资源，配合算法呢就可以实现gpu计算的复用。这个在deep seek v三的论文中呢，也有说到项目还提到一点，黑科技，就是他们使用了一些超出文档范围的p t x命令。这只能说啊deep seek研究的是真身。啊，今天这个开源项目呢其实解开了之前很多的疑问，也打破了很多对于deep seek的质疑。那好了，我们今天就聊到这里，下次再见。
