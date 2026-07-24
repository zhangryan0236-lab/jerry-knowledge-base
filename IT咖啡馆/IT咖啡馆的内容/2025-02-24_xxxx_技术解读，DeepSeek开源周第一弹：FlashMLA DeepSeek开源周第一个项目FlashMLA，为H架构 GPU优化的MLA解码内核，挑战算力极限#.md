---
title: "技术解读，DeepSeek开源周第一弹：FlashMLA DeepSeek开源周第一个项目FlashMLA，为H架构 GPU优化的MLA解码内核，挑战算力极限
#DeepSeek #github #flashMLA #AI #GPU"
source: "getnote"
platform: "video"
author: "IT咖啡馆"
post_id: ""
post_link: "https://www.iesdouyin.com/share/video/7474928706037796108/?region=CN&mid=7474929217424198411&u_code=0&did=MS4wLjABAAAAYFuVNtK2LJyvbjm8PR_AFG4IwiM5ahnIuSz0NO-yvpI&iid=MS4wLjABAAAANwkJuWIRFOzg5uCpDRpMj4OX-QryoDgn-yYlXQnRwQQ&with_sec_did=1&video_share_track_ver=&titleType=title&share_sign=M5I_dPPChXcWu3oV0Rbqdezjw67S1TfhBpP.A1SnLKI-&share_version=210300&ts=1740425426&from_aid=1128&from_ssr=1"
published_at: "2025-02-24 18:23:22"
created: "2026-07-24"
tags: ["clippings", "getnote", "IT咖啡馆"]
---

# 技术解读，DeepSeek开源周第一弹：FlashMLA DeepSeek开源周第一个项目FlashMLA，为H架构 GPU优化的MLA解码内核，挑战算力极限
#DeepSeek #github #flashMLA #AI #GPU

> **来源**: [IT咖啡馆 · 得到大脑](https://www.iesdouyin.com/share/video/7474928706037796108/?region=CN&mid=7474929217424198411&u_code=0&did=MS4wLjABAAAAYFuVNtK2LJyvbjm8PR_AFG4IwiM5ahnIuSz0NO-yvpI&iid=MS4wLjABAAAANwkJuWIRFOzg5uCpDRpMj4OX-QryoDgn-yYlXQnRwQQ&with_sec_did=1&video_share_track_ver=&titleType=title&share_sign=M5I_dPPChXcWu3oV0Rbqdezjw67S1TfhBpP.A1SnLKI-&share_version=210300&ts=1740425426&from_aid=1128&from_ssr=1)
> **发布时间**: 2025-02-24 18:23:22
> **博主主页**: https://www.iesdouyin.com/share/video/7474928706037796108/?region=CN&mid=7474929217424198411&u_code=0&did=MS4wLjABAAAAYFuVNtK2LJyvbjm8PR_AFG4IwiM5ahnIuSz0NO-yvpI&iid=MS4wLjABAAAANwkJuWIRFOzg5uCpDRpMj4OX-QryoDgn-yYlXQnRwQQ&with_sec_did=1&video_share_track_ver=&titleType=title&share_sign=M5I_dPPChXcWu3oV0Rbqdezjw67S1TfhBpP.A1SnLKI-&share_version=210300&ts=1740425426&from_aid=1128&from_ssr=1

## AI 摘要

📢 **开源周项目发布**
- DeepSeek开启open source week，每天发布一个开源项目，首个项目为FlashMLA
- 发布短短几小时获数千spa，受关注度高

💪 **FlashMLA项目特点**
- 专为H架构GPU设计的高效解码内核，优化可变长序列的多头潜在注意力机制，提升大模型上下文推理效率
- 属于极致工程优化，性能在生产环境得到验证

🧐 **核心内容解析**
- **MLA解码内核**：针对transformer模型的创新注意力优化技术，通过低质压缩技术减少推理时的key value缓存，提升推理效率；传统transformer需为每个词缓存高维向量，MLA通过低质投影技术将高维向量压缩到潜在空间，减少显存和计算资源消耗，详细内容可查看DeepSeek v2和v3技术报告
- **H GPU的优化**：Nvidia的H系列是最新专为超大规模AI和超算设计的GPU，国内可用阉割版H800，DeepSeek在H800上实现3000GDPS内存带宽和580TFLOPS的算力，接近显卡性能极限
- **可变长序列的优化**：实际使用场景中用户输入不规则，内核需支持动态序列，鉴于对FlashAttention的致谢，推测在此基础上有创新优化

🌟 **DeepSeek的优化路线**
- DeepSeek不走“利大专飞”路线，注重工程性优化，如去年fair flair ai hpc的低能耗高效率技术、前段时间的nsa原生稀疏注意力，到现在的FlashMLA

## 原文

**标题：** 技术解读，DeepSeek开源周第一弹：FlashMLA DeepSeek开源周第一个项目FlashMLA，为H架构 GPU优化的MLA解码内核，挑战算力极限

#DeepSeek #github #flashMLA #AI #GPU

**作者：** IT咖啡馆

朋友们，deepseek又来挑战算力的极限了。今天啊deepseek开启了自己的open source week,会每天发布一个开源项目。那么接下来呢我们就来看一下这周的第一个项目，flash m l a.让我们看看啊deep seek是如何挑战算力的极限的。发布之后呢，短短几个小时就获得了数千的spa,可见大家对于deep seek的热情有多么的高涨。目前项目给出的信息比较简单，只有短短几句话，我用一句话来帮你整理。Flash. M l a是dipstick专为h架构的gpu设计的高效解码内核，优化了可变长序列的多头潜在注意力机制，显著提升了大模型上下文推理效率。这个项目啊属于是极致的工程优化，将硬件的性能呢压榨到了极限，而且啊这一切都是在生产环境当中得到验证的那接下来那我们就来看几个核心的内容。第一个m l a解码内核deep seek发布的m l a多头潜在注意力机制，是一种针对transformer模型的创新注意力，优化技术，通过低质压缩技术，减少了推理时的key value缓存，在保障性能的同时呢显著提升了推理效率。想要了解详细内容呢，你可以查看dipstick v二和v三的技术报告。这里面呢有详细的说明。传统的transformer呢需要为每一个词缓存高维的p y六向量。而m l a呢通过低质投影技术，将高维向量压缩到潜在的空间当中，以低为表示，这样呢就极大程度上减少了显存和计算资源的消耗。第二点呢是h gpu的优化。Nvidia的h系列呢是目前最新的专为超大规模ai和超算设计的gpu.那国内能用到的呢就是秧歌版的h八百deepseek呢在h八百上实现了三千gdps内存带宽和五百八十t flops的算力，已经是把显卡的性能开发到了接近极致。第三啊就是可变长序列的优化。在模型的实际使用场景当中呢，用户的输入往往是不规则的，可能会面对于比较短的对话，当然也有可能是超长的对话或者是文档输入的内容。这种时候啊就需要内核支持动态的序列。鉴于项目最后对于flash tension的致谢啊，我猜测他应该是在此的基础上进行了一些创新和优化。大家都知道啊，deepseek这一路走来的火爆很重要的一个原因啊，就是他不再走利大专飞的路线，而是花大量的精力去进行工程性的优化。比如像去年的fair flair ai h p c当中介绍的低能耗高效率的技术。还有啊前一段时间的n s a原生稀疏注意力，再到现在的flash m l a,都是一直在突破极限的道路上不断的尝试，这一点呢也非常符合dipstick这个名字。但是呢我有一个幸福的烦恼，那就是如果说五个项目全部都发布以后，那我的每周tiktok热点是不是要把这五个项目全部放上去呢？那么我们今天就聊到这里。
