---
title: "「Github一周热点63期」DeepSeek 开源周汇总等 GitHub 一周热点汇总第63期(2025/02/23 - 3/01），本期内容包括DeepSeek 开源周汇总 、超过Sora的万象2.1、AI数据分析库、Notion 替代品和AI 助手平台，一起来看具体内容吧。 #人工智能 #DeepSeek #GitHub #Notion #Cherrystudio"
source: "getnote"
platform: "video"
author: "IT咖啡馆"
post_id: ""
post_link: "https://www.iesdouyin.com/share/video/7477061382366694719/?region=CN&mid=7477062279087901450&u_code=0&did=MS4wLjABAAAAH2ATx9e2kwLCnmKc4tBP1EWI4kMaZMLdJO9VOJn4bpE&iid=MS4wLjABAAAANwkJuWIRFOzg5uCpDRpMj4OX-QryoDgn-yYlXQnRwQQ&with_sec_did=1&video_share_track_ver=&titleType=title&share_sign=DGahM1Q16fLgfDUgvb9MVVu1llq_Qhgnf6BUMun.3xI-&share_version=240000&ts=1740943590&from_aid=1128&from_ssr=1"
published_at: "2025-03-02 12:20:23"
created: "2026-07-24"
tags: ["clippings", "getnote", "IT咖啡馆"]
---

# 「Github一周热点63期」DeepSeek 开源周汇总等 GitHub 一周热点汇总第63期(2025/02/23 - 3/01），本期内容包括DeepSeek 开源周汇总 、超过Sora的万象2.1、AI数据分析库、Notion 替代品和AI 助手平台，一起来看具体内容吧。 #人工智能 #DeepSeek #GitHub #Notion #Cherrystudio

> **来源**: [IT咖啡馆 · 得到大脑](https://www.iesdouyin.com/share/video/7477061382366694719/?region=CN&mid=7477062279087901450&u_code=0&did=MS4wLjABAAAAH2ATx9e2kwLCnmKc4tBP1EWI4kMaZMLdJO9VOJn4bpE&iid=MS4wLjABAAAANwkJuWIRFOzg5uCpDRpMj4OX-QryoDgn-yYlXQnRwQQ&with_sec_did=1&video_share_track_ver=&titleType=title&share_sign=DGahM1Q16fLgfDUgvb9MVVu1llq_Qhgnf6BUMun.3xI-&share_version=240000&ts=1740943590&from_aid=1128&from_ssr=1)
> **发布时间**: 2025-03-02 12:20:23
> **博主主页**: https://www.iesdouyin.com/share/video/7477061382366694719/?region=CN&mid=7477062279087901450&u_code=0&did=MS4wLjABAAAAH2ATx9e2kwLCnmKc4tBP1EWI4kMaZMLdJO9VOJn4bpE&iid=MS4wLjABAAAANwkJuWIRFOzg5uCpDRpMj4OX-QryoDgn-yYlXQnRwQQ&with_sec_did=1&video_share_track_ver=&titleType=title&share_sign=DGahM1Q16fLgfDUgvb9MVVu1llq_Qhgnf6BUMun.3xI-&share_version=240000&ts=1740943590&from_aid=1128&from_ssr=1

## AI 摘要

📦 **DeepSeek开源周汇总**
- 连续五天发布6个开源项目及1个数据集，项目都放在openinfraindesce项目里。
- flash lma：高效解码内核，针对lma和可变长序列优化，提升大模型上下文推理效率。
- deep ep：用于moe训练和推理的开源ep通信库，提升moe专家间通信效率。
- deep gemm：fp8通用惩罚矩阵库，仅三百多行代码，提升2.7倍效率。
- joepap：创新的双向流水线并行算法，降低设备空闲时间，提升整体使用率。
- eplb：专家并行负载均衡器，实现moe中专家的高效负载调度。
- 3fs：并行文件系统，利用现代ssd和rdma网络带宽，解决ai训练和推理工作负载问题。
- profile data：dipstick训练和推理框架的性能分析数据。

🎬 **万象2.1**
- 阿里开源的视频生成模型，登上vbunch排行榜第一名，超过sora等国内外模型。
- 上线四个模型，文生视频有1.3b和14b两个规格，图生视频都是14b分别针对480p和720p。
- 官方称1.3b版本在一块4090上运行占用8g多显存，示例效果好，生成6秒视频约需十多分钟，有免费额度。

🧐 **Pandas ai**
- 开源python库，简化pandas使用，通过自然语言与数据查询交互，无需写复杂代码。
- pandas是python语言用于数据分析的扩展库。
- 安装要求python版本3.8到3.12之间，安装后设置密钥即可使用，可生成图表。
- 有在线平台，个人免费版功能受限，企业和深度用户收费。

📄 **Dogmos**
- 年轻的开源文档协作和本地知识库，定位为confluence和notion的开源替代品。
- 通过docker安装启动，需修改app和数据库密码，在3000端口访问。
- 支持基本文件管理和编辑功能，实时协作编辑不错，编辑器功能全面，支持mark档语法和所见即所得模式，有评论讨论和版本控制等功能，处于早期阶段。

💪 **Cherry studio**
- 全能ai助手平台，集多模型对话、知识库管理等多种功能于一体。
- 借助DeepSeek热潮兴起，常作为DeepSeek本地客户端，配合欧拉马实现本地部署。
- 主要支持在线模型接入，默认支持大量模型api，添加密钥即可使用。
- 有特色功能如一问多答、自动分组、助手市场和本地知识库等，跨平台，安装简单，ui漂亮，mac版本启动较卡，更符合国人使用习惯，未来规划功能值得期待。

## 原文

**标题：** 「Github一周热点63期」DeepSeek 开源周汇总等 GitHub 一周热点汇总第63期(2025/02/23 - 3/01），本期内容包括DeepSeek 开源周汇总 、超过Sora的万象2.1、AI数据分析库、Notion 替代品和AI 助手平台，一起来看具体内容吧。

 #人工智能 #DeepSeek #GitHub #Notion #Cherrystudio

**作者：** IT咖啡馆

 Get up一周热点汇总第六十三期。本期的内容呢会包括deep、 seek、开源周的汇总，超过sora的万象二点一ai数据分析工具，no神替代品和ai助手平台一起来看具体内容吧。还是别忘了给我一个赞。这一周呢deepsea兑现了之前的承诺，一口气连续五天发布开源项目。而且呢还不是五个，是六个外加一个数据集。这里呢我快速给大家汇总一下都有哪些内容。第一个flash lma是高效的解码内核，针对lma和可变长序列优化，提升了大模型上下文的推理效率。第二个deep e p呢是一个用于m o e训练和推理的开源e p通信库，它提升了m o e专家之间的通信效率。第三个deep g e m m是f p八通用惩罚矩阵库仅仅三百多行代码，提升了二点儿七倍的效率。第四个joepap是deep seek v三报告中介绍过的创新的双向流水线并行算法，降低设备的空闲时间，提升整体的使用率。第五个e p l b是专家并行负载均衡器，实现了m o e中专家的高效负载调度。第六个三f s是一个充分利用现代s s d和r d m a网络带宽的并行文件系统，解决的就是ai训练和推理当中的工作负载问题。最后啊还有一个数据集是profile data,它是dipstick训练和推理框架的性能分析数据。具体的项目呢大家可以去翻一下我之前的视频，我每天都做了，看的时候呢也别忘点个赞。 Deep seek官方把这些项目啊都放到了这个openinfraindesce个项目里。从名字呢也能看出来，这些项目啊都是基础设施和底层优化相关的。所以啊这些项目在大家看来可能会稍微的有点无趣。因为确实啊这些都是算法和一些深度优化的内容。一般人呢没有办法去接触，也没有办法去复现他。但是呢他确实都是非常重要的技术探索。像deepseek这样啊，把产品和底层技术全部都开源的做法确实非常的不容易。这个就叫专业dipsick的开源内容啊，可能太抽象了。那我们马上就换一个非常直观的本项目，是阿里开源的视频生成模型。万象二点一之前呢，通意万象二点一呢已经登上了vbunch排行榜的第一名，超过了sora、混元、vivo、 mini、 max、 luma等国内外的视频生成模型。可以说啊，春节以后啊，阿里就开始就元神这个位置，跟deep seek掰起手腕了，频频发布重磅的内容。这一次呢阿里发布的万象二点一上线有四个模型，分别是文生视频和图生视频，各有两个文生视频模型呢有一点三b和十四b两个规格。图生视频呢都是十四b分别针对四八零p和七二零p.当然啊十四b的参数呢并不能说太大，但是呢在个人消费级别的显卡上部署还是比较吃力的。但是啊除了十四b以外，还有一个一点三b的版本。官方的说法呢是在一块四零九零上运行的时候，会占用八g多的显存。这个我觉得个人呢就相对更适合一些了。从官方给出的示例来看啊，效果都非常的好。我自己也去通一万象的网站试了一下，效果确实挺不错，提升还是很大的。还可以直接配合视频啊生成音频生成的视频，还是六秒的时长，生成一次呢大概需要十多分钟的时间。每次呢确实还是蛮久的，大家如果想用的话呢，可以先用官方送的免费额度来玩一玩。本地的测试呢我还没有做晚一点，我会试一下本地部署和运行的效果。 Pandas ai是一个开源的拍摄库，目的呢就是为了简化pandas的使用，使数据分析呢更加直观，更加容易使用。他允许用户啊通过自然语言的方式来去和数据进行查询和交互，而不需要去写复杂的代码。那不了解的朋友肯定想知道啊，pandas是什么呢？它是python语言的一个扩展库，主要呢就是用于数据的分析。 Pandas这个名字呢也是衍生自penodate和python data analysis,你可以在dreamper笔记或者是streamlet程序当中去使用判断。 Ai首先呢通过pip来安装，这里啊要注意python的版本要求是三点八到三点一二之间。安装完成之后呢，需要去设置一下密钥，然后呢就可以加载数据了。并且啊通过在语言去和数据进行交互，可以参考官方给出的例子。而且呢除了基本的回答内容，你还可以要求潘达ai去帮你直接生成图表，这样呢就可以有更好的一个展现效果。除了开源项目以外呢，判断ai也提供了自己的在线平台。你可以在代码里将数据复制到平台上，然后呢就可以在平台上通过外部ui去使用判断ai了。对于个人用户来说呢，可以用免费的版本，但是功能会有一些限制。对于企业和深度的用户呢，判断ai的平台是需要收费的这几年的文档工具一直都很热门。 Dogmos的是一个比较年轻的开源文档协作和本地知识库。它的定位呢也是confluence和notion的开源替代品。它为用户提供了一个强大而灵活的工具，用于创建编辑和共享文档，还有团队协作和知识管理项目，推荐通过docker去安装和启动。先把dockercompose文件下载下来之后呢，需要修改一些默认的配置。这里面最主要要修改的就是app的密码，还有数据库的密码。修改完成以后呢，就可以启动了。启动之后啊，到三千端口去访问自己的dogmos.使用上的感觉呢，dogmos的是支持了基本整体文件管理和编辑的功能的，包括了像文档编辑流程图、空间权限管理、历史记录、搜索、附加文件等。Dogmos的实时协作。编辑是一个比较不错的点，同时呢他的编辑器功能也比较全面，支持mark档的语法和所见即所得的模式。另外啊他的评论讨论还有版本控制等功能，也能看出来，这个是一个针对于团队而设计的产品。产品目前还处于一个相对早期的阶段。相比于他自己设定的两个替代品啊，conference和notion功能上确实没有那么强大。好处呢就是胜在灵活和开源。还有啊就是他是一个比较年轻的项目，相对来说他还有自己的发展潜力。 Cherry studio是一个集多模型对话、知识库管理、ai、绘画、翻译等功能于一体的全能ai助手平台。它呢提供了高度自定义的设计和强大的扩展，还有比较好的用户体验。目前啊借助deepseek的这波火爆热潮，也带动了trees studio的兴起。现在很多网络上的教程呢都是基于trees studio来作为deepseek的本地客户端。同时呢配合欧拉马来实现本地的部署。除了本地模型以外，cherry studio呢其实主要支持的还是在线的模型接入，默认呢支持了大量的模型api只要添加上对应的api密钥就可以使用了。本质上来说呢，cherry studio和像安妮c l l m之类的产品都是一样的，都是一个围绕大模型a p i来去提供增强功能的ai应用，有一些自己的特色，像一问多答自动分组助手市场和本地知识库等。 China studio呢还是支持跨平台的，你可以在下载页面啊下载到自己对应版本的安装包。安装过程呢也非常简单，都很直观。整体的使用呢给人的感觉还是比较不错的。除了功能以外呢，整个ui做的也是蛮漂亮的。但是我下载的mac版本在启动的时候会比较卡，我觉得这里应该是需要优化的。另外啊作为一个国产的开源项目，整个产品的设计上也会更加符合国人的使用习惯，包括审美和一些功能的安排上。同时呢项目的规划当中啊，也列了很多不错的功能，还是比较值得未来的期待的。那么好了，以上呢就是本周所有的开源项目有，对哪个感兴趣呢？就自己去试一下吧。那我们今天就聊到这里，下一次再见。
