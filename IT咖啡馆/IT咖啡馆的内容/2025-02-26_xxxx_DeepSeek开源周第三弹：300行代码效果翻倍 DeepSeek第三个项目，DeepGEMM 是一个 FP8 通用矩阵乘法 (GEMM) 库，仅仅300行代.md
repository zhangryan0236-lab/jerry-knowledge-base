---
title: "DeepSeek开源周第三弹：300行代码效果翻倍 DeepSeek第三个项目，DeepGEMM 是一个 FP8 通用矩阵乘法 (GEMM) 库，仅仅300行代码，就把性能提升了2.7倍。
#DeepSeek #AI #github #大模型 #机器学习"
source: "getnote"
platform: "video"
author: "IT咖啡馆"
post_id: ""
post_link: "https://www.iesdouyin.com/share/video/7475700739466136851/?region=CN&mid=7475702354373872422&u_code=0&did=MS4wLjABAAAAqaHXKxNxsuAY0C0yWlCE3LI7XnQwhtCtSYffm3o1wkI&iid=MS4wLjABAAAANwkJuWIRFOzg5uCpDRpMj4OX-QryoDgn-yYlXQnRwQQ&with_sec_did=1&video_share_track_ver=&titleType=title&share_sign=4NcOCcws1_LKmehebfUUZTPoMr8l9vFHiPJuFfaB190-&share_version=230300&ts=1740597938&from_aid=1128&from_ssr=1"
published_at: "2025-02-26 20:23:19"
created: "2026-07-24"
tags: ["clippings", "getnote", "IT咖啡馆"]
---

# DeepSeek开源周第三弹：300行代码效果翻倍 DeepSeek第三个项目，DeepGEMM 是一个 FP8 通用矩阵乘法 (GEMM) 库，仅仅300行代码，就把性能提升了2.7倍。
#DeepSeek #AI #github #大模型 #机器学习

> **来源**: [IT咖啡馆 · 得到大脑](https://www.iesdouyin.com/share/video/7475700739466136851/?region=CN&mid=7475702354373872422&u_code=0&did=MS4wLjABAAAAqaHXKxNxsuAY0C0yWlCE3LI7XnQwhtCtSYffm3o1wkI&iid=MS4wLjABAAAANwkJuWIRFOzg5uCpDRpMj4OX-QryoDgn-yYlXQnRwQQ&with_sec_did=1&video_share_track_ver=&titleType=title&share_sign=4NcOCcws1_LKmehebfUUZTPoMr8l9vFHiPJuFfaB190-&share_version=230300&ts=1740597938&from_aid=1128&from_ssr=1)
> **发布时间**: 2025-02-26 20:23:19
> **博主主页**: https://www.iesdouyin.com/share/video/7475700739466136851/?region=CN&mid=7475702354373872422&u_code=0&did=MS4wLjABAAAAqaHXKxNxsuAY0C0yWlCE3LI7XnQwhtCtSYffm3o1wkI&iid=MS4wLjABAAAANwkJuWIRFOzg5uCpDRpMj4OX-QryoDgn-yYlXQnRwQQ&with_sec_did=1&video_share_track_ver=&titleType=title&share_sign=4NcOCcws1_LKmehebfUUZTPoMr8l9vFHiPJuFfaB190-&share_version=230300&ts=1740597938&from_aid=1128&from_ssr=1

## AI 摘要

💥 **项目亮点**
- DeepSeek开源周的第三个项目DeepGEMM是一个FP8通用矩阵乘法（GEMM）库，仅300行代码就将性能提升了2.7倍。

📐 **GEMM重要性**
- GEMM是高性能计算的核心算法，在深度学习中占据重要地位，大语言模型训练超80%的计算时间消耗在矩阵乘法上，对其优化影响后续性能。

🔄 **优化对比**
- 英伟达官方提供cutlass库用于矩阵乘法加速，DeepGEMM借鉴cutlass概念并优化，不深度依赖其模板。

🎯 **运行支持**
- DeepGEMM仅支持在h系列显卡上运行。

📈 **测试表现**
- DeepSeek官方在h800上测试了DeepGEMM在DeepSeek v3和R1推理中所有矩阵情况，在各种场景下表现出色。
- 标准矩阵乘法与基于cutlass 3.6的优化实现对比，速度提升1到2.7倍，小批量数据上效果显著，最高达2.7倍。
- 对于混合专家模型计算，提供两种特殊数据排列方式，可取得1.1到1.2倍加速效果。

📖 **优化内容**
- 详细优化内容包括全GIT设计，支持非对称块，还有FMMA的指定优化，可查看项目了解。

## 原文

**标题：** DeepSeek开源周第三弹：300行代码效果翻倍 DeepSeek第三个项目，DeepGEMM 是一个 FP8 通用矩阵乘法 (GEMM) 库，仅仅300行代码，就把性能提升了2.7倍。

#DeepSeek #AI #github #大模型 #机器学习

**作者：** IT咖啡馆

三百行代码能干什么？Deepseek说可以实现二点七倍的效率提升。今天啊deepseek发布了开元周的第三个项目，它是一个优化的fp八通用矩阵乘法库。这一次呢deep seek又展现了那种抠到极致的理念。那就让我们一块来看看这个小而强大的开源项目。 Deep g e m m首先啊g e m m是通用矩阵乘法的缩写，是高性能计算当中的核心算法，尤其是在深度学习当中占据了重要的地位。现在的大语言模型训练都重度依赖于矩阵乘法，差不多超过百分之八十的计算时间呢会消耗在矩阵乘法上。所以啊对于他的优化必然会直接影响后续的性能。对于矩阵乘法，英伟达官方提供了cutlass库来进行加速。他呢其实已经非常厉害了，但是deep stick并不满足deep g e m m也借鉴了cutlass的一些概念，在此基础上呢进行了优化，进一步提升了性能，并且呢不深度依赖于它的模板。目前deep g e m m仅支持在h系列的显卡上运行。Dipstick官方在h八百上测试了dipstick v三和r一推理当中可以用到的所有矩阵情况。 Deep g e m m在各种场景下都表现出色。对于标准矩阵乘法与基于cutlass三点六的优化实现相对比呢，速度可以提升一到二点七倍不等，这其中啊在小批量数据上效果尤为显著，最高可以达到二点七倍。对于混合专家模型的计算，deep g e m m也提供了两种特殊的数据排列方式。这两种方式呢最终啊都可以取得一点一到一点二倍的加速效果。对于详细的优化内容项目的数说明啊，包括了全g i t的设计，支持非对称的块，还有f m m a的指定优化。这些呢都太深度了，关注的同学自己去查看一下项目吧。搞过开发的都知道啊，五万块工资的能写代码，五千块工资的也能写代码，但是深度调优呢，五千工资的就干不了了。所以虽然仅仅三百行的代码，但含金量可非比一般。好了，我们今天就聊到这里，下次再见。
