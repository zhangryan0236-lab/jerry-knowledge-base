---
title: "DeepSeek开源周第四弹，揭开V3背后的并行秘密 今天一下子连发3个，解密了DeepSeek V3背后的并行秘密。
#DeepSeek #AI #人工智能 #大模型 #GitHub"
source: "getnote"
platform: "video"
author: "IT咖啡馆"
post_id: ""
post_link: "https://www.iesdouyin.com/share/video/7476428277310147903/?region=CN&mid=7476428764164344639&u_code=0&did=MS4wLjABAAAAFnHT5fiFrtyt4-hhMj6JsIjJ3bTU2sORUJdMYTSQcmk&iid=MS4wLjABAAAANwkJuWIRFOzg5uCpDRpMj4OX-QryoDgn-yYlXQnRwQQ&with_sec_did=1&video_share_track_ver=&titleType=title&share_sign=Nij7E5ndYpeusCm5Y8DyY_NKzjyeouTy7LA7cx4VTaE-&share_version=220400&ts=1740770939&from_aid=1128&from_ssr=1"
published_at: "2025-02-28 19:22:55"
created: "2026-07-24"
tags: ["clippings", "getnote", "IT咖啡馆"]
---

# DeepSeek开源周第四弹，揭开V3背后的并行秘密 今天一下子连发3个，解密了DeepSeek V3背后的并行秘密。
#DeepSeek #AI #人工智能 #大模型 #GitHub

> **来源**: [IT咖啡馆 · 得到大脑](https://www.iesdouyin.com/share/video/7476428277310147903/?region=CN&mid=7476428764164344639&u_code=0&did=MS4wLjABAAAAFnHT5fiFrtyt4-hhMj6JsIjJ3bTU2sORUJdMYTSQcmk&iid=MS4wLjABAAAANwkJuWIRFOzg5uCpDRpMj4OX-QryoDgn-yYlXQnRwQQ&with_sec_did=1&video_share_track_ver=&titleType=title&share_sign=Nij7E5ndYpeusCm5Y8DyY_NKzjyeouTy7LA7cx4VTaE-&share_version=220400&ts=1740770939&from_aid=1128&from_ssr=1)
> **发布时间**: 2025-02-28 19:22:55
> **博主主页**: https://www.iesdouyin.com/share/video/7476428277310147903/?region=CN&mid=7476428764164344639&u_code=0&did=MS4wLjABAAAAFnHT5fiFrtyt4-hhMj6JsIjJ3bTU2sORUJdMYTSQcmk&iid=MS4wLjABAAAANwkJuWIRFOzg5uCpDRpMj4OX-QryoDgn-yYlXQnRwQQ&with_sec_did=1&video_share_track_ver=&titleType=title&share_sign=Nij7E5ndYpeusCm5Y8DyY_NKzjyeouTy7LA7cx4VTaE-&share_version=220400&ts=1740770939&from_aid=1128&from_ssr=1

## AI 摘要

📢 **开源周项目发布情况**
- DeepSeek开源周第四天，原本以为五天五个项目，结果当天一下子发布了三个项目。

💡 **周派技术**
- 在DeepSeek V3报告中作为重要技术亮点提出，将模型训练类比工厂，周派如同调度员。
- 实现模型训练中前向和后向计算通信阶段的完全重叠，相比传统算法有明显优势，能让两张卡跑出三张卡的效率。

🎛️ **EPLB技术**
- 全名专家并行负载均衡器，是EP的调度器。
- 以MOE模型类比饭店，解决厨师（专家）工作量不均问题，用于DeepSeek V3实现动态MOE负载效果。
- 官方尝试将同样的专家放置到同一节点减少节点间数据流通提升效率，算法有分层负载均衡和全局负载均衡，项目提供示例帮助理解。

📊 **Profile Data项目**
- DeepSeek怕大家光有源码不好理解，开源训练和推理的性能分析数据。
- 可通过浏览器直接查看可视化效果，帮助社区更好理解计算与通信有效重叠及底层实现细节 。

## 原文

**标题：** DeepSeek开源周第四弹，揭开V3背后的并行秘密 今天一下子连发3个，解密了DeepSeek V3背后的并行秘密。

#DeepSeek #AI #人工智能 #大模型 #GitHub

**作者：** IT咖啡馆

朋友们，deep seek开元周的第四天来了。本来啊我以为五天五个项目，没想到啊，今天一下子来了一个二带，一发了三个项目。那么我们一块来看一下，有什么好东西，周派这个词呢在deep seek v三的报告当中啊，就作为一个重要的技术亮点被提出了。现在呢deep seek将背后的技术也公开了项目里的描述。不太好理解。我给你简单解释一下，我们把模型的训练类比为一个工厂。周派呢就是这个调度员，他让流水线上没有闲人，打完螺丝赶紧去贴标签。同时如果发现螺丝太多，打不过来，那就多安排一些打螺丝的人。总之呢，没有空闲的时间保证一直在处理任务。他实现了模型训练中前向和后向计算通信阶段的完全重叠，相比，传统的前向后向和零气泡单向流水线算法周派会有明显的优势。那现在两张卡能跑出三张卡的效率，你觉得对显卡是利好还是利空呢？ E p l b呢全名是专家并行负载均衡器。如果你是搞英法的那看到l b一定很亲切。什么四层啊、七层负载均衡、云上，还有e l b a l b s l b各种l b deep seek的这个e p l b呢就是e p的调度器。之前啊我举个例子，这个m o e模型呢就像是个饭店，里面有各种厨师，但是呢厨师经常会出现工作量不均的问题，那怎么调度让所有的厨师都忙起来呢？这个就是e p l b要干的事情。这项技术啊主要是用在deepsick v三当中，用来实现动态m o e负载的效果。另外呢官方还尝试将一组同样的专家放置到同一节点，以尽量减少节点间的数据流通，进而提升效率。可以参考v三的技术报告啊，e p l b的算法有两种分层、负载均衡和全局负载均衡项目中啊，还贴心的提供了示例来帮助大家更好地理解。最后呢profile data deepstick啊，怕大家光有源码不好理解，又开源了。其训练和推理的性能分析数据，帮社区更好的理解计算与通信如何有效重叠以及底层实现细节。还可以通过浏览器呢去直接查看可视化的效果。这个项目呢就是数据没有太多可说的。到了第四天呢，有没有发现项目确实不太好理解，比较深度。但是呢对这个越来越体贴了，有代码，有实力，还有数据，有兴趣的快去研究研究吧。好了，就聊到这里，散会。
