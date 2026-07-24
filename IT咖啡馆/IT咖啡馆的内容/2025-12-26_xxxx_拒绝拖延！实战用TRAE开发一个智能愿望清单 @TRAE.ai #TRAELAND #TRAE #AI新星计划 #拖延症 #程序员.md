---
title: "拒绝拖延！实战用TRAE开发一个智能愿望清单 @TRAE.ai #TRAELAND  #TRAE #AI新星计划 #拖延症 #程序员"
source: "getnote"
platform: "video"
author: "IT咖啡馆"
post_id: ""
post_link: "https://www.iesdouyin.com/share/video/7588014736801877289/?region=CN&mid=7588014885817174794&u_code=45md0g3mai4h&did=MS4wLjABAAAAAUk7H2BGVdY_7H4xUH8NiEYY0uUkioI_MLRuOUuTkL8&iid=MS4wLjABAAAANwkJuWIRFOzg5uCpDRpMj4OX-QryoDgn-yYlXQnRwQQ&with_sec_did=1&video_share_track_ver=&titleType=title&share_sign=kAC2ozW2BF8ui98cZlbDcBx5_5uNbTxR2IKwH1rQcIs-&share_version=210500&ts=1766765209&from_aid=1128&from_ssr=1&share_track_info=%7B%22link_description_type%22%3A%22%22%7D"
published_at: "2025-12-26 19:01:12"
created: "2026-07-24"
tags: ["clippings", "getnote", "IT咖啡馆"]
---

# 拒绝拖延！实战用TRAE开发一个智能愿望清单 @TRAE.ai #TRAELAND  #TRAE #AI新星计划 #拖延症 #程序员

> **来源**: [IT咖啡馆 · 得到大脑](https://www.iesdouyin.com/share/video/7588014736801877289/?region=CN&mid=7588014885817174794&u_code=45md0g3mai4h&did=MS4wLjABAAAAAUk7H2BGVdY_7H4xUH8NiEYY0uUkioI_MLRuOUuTkL8&iid=MS4wLjABAAAANwkJuWIRFOzg5uCpDRpMj4OX-QryoDgn-yYlXQnRwQQ&with_sec_did=1&video_share_track_ver=&titleType=title&share_sign=kAC2ozW2BF8ui98cZlbDcBx5_5uNbTxR2IKwH1rQcIs-&share_version=210500&ts=1766765209&from_aid=1128&from_ssr=1&share_track_info=%7B%22link_description_type%22%3A%22%22%7D)
> **发布时间**: 2025-12-26 19:01:12
> **博主主页**: https://www.iesdouyin.com/share/video/7588014736801877289/?region=CN&mid=7588014885817174794&u_code=45md0g3mai4h&did=MS4wLjABAAAAAUk7H2BGVdY_7H4xUH8NiEYY0uUkioI_MLRuOUuTkL8&iid=MS4wLjABAAAANwkJuWIRFOzg5uCpDRpMj4OX-QryoDgn-yYlXQnRwQQ&with_sec_did=1&video_share_track_ver=&titleType=title&share_sign=kAC2ozW2BF8ui98cZlbDcBx5_5uNbTxR2IKwH1rQcIs-&share_version=210500&ts=1766765209&from_aid=1128&from_ssr=1&share_track_info=%7B%22link_description_type%22%3A%22%22%7D

## AI 摘要

🎯 **智能愿望清单开发过程**
- 年初愿望因拖延未实现，开发智能愿望清单解决目标拆解问题
- 使用Tree的solo模式，先开启plan模式生成详细开发计划
- 通过AI生成提示词后进行改进，类似工作中“挑毛病”优化流程
- 配置参数启动服务后，与Tree协作调试修改，最终实现多功能效果
- 最终工具支持配置大模型、输入愿望、设置时间条件，自动拆分规划并提供资料和打卡页面

🔧 **Tree工具年度使用体验**
- 作为Tree重度用户，同时使用国内版和国际版
- 开发多个日常工具：收集GitHub热门项目数据工具（每日使用）、AI疗愈故事和视频生成工具（含多模态能力与AI公益思考）、双11购物劝阻小应用
- 推荐开发流程：先开plan模式做详细规划，计划越详细开发效果越好
- 配置特定功能智能体（后端架构、页面优化、项目结构初始化），提升开发效果并减少提示词用量
- 开发中可切换模式：复杂问题用solo模式，简单问题切IDE模式直接修改，利用智能补全提高效率
- 配置全局和项目级规则，提升Tree开发效果
- 需保持耐心，AI无法一次搞定全部任务，需多次修改优化

📊 **Tree年度代码报告**
- Tree生成年度代码成绩报告，记录连按31次tab、凌晨1:30开发等有趣时刻
- 报告生成“节奏大师”形象标签，用户可查看自己的专属形象

## 原文

这是我年初时候的愿望，而这是年底的现实情况，你是不是也和我一样啊，一年的红筹伟业都败给了拖延，为了能让2026年收获满满，我搞了一个智能愿望清单，可以把模糊的愿望分解成具体的可执行的动作，今天呢，分享一下如何去开发实现你呀，也可以自己来搞一个开发工具呢，我还是使用tree，我们进入solo模式啊，我先简单的输入一下需求，我要开发一个智能愿望清单，只需要大致的方向就能自动的帮我拆解成具体的可执行的小任务。那么这里呢，推荐打开plan模式，因为我输入的需求呢，它比较模糊，所以我希望他先规划出详细的开发计划，我确认好了以后呢，再真正的开始开发tree呢，直接给出的这个plan呢，其实挺详细的，我稍微调整了一两次呢，就基本没问题了，然后就可以开始开发了。另一个啊，先做plan再开发的好处呢，就是我一开始呢，其实想不好怎么去写这个提示词，这样呢，AI先写，我再去做一些。

改进，这就好像工作当中的领导啊，虽然我不知道应该怎么干，但是呢，我就知道怎么给你挑毛病，很快呢，我就拿到了这第一版的开发结果，那我配置一下参数啊，然后呢，让tree来给我启动一下服务，稍微确认一下内容，我们可以看到啊，这个时候开发的结果呢，其实并没有完全达到我设想的预期，而且呢，也会有一些小的问题，那这里呢，就需要我和tree一起来做调试和修改，那这部分内容呢，我稍微快进一下，其实啊，就是遇到问题，然后逐步的去解决，那最终实现的效果呢，是这个样子的，我可以配置大模型，然后输入愿望，再设置时间和一些其他的条件，那它就会自动的拆分和规划，还会呢，给我列出相关的资料，最后呢，还有一个打卡的页面，那这一年呢，我也算是tree的一个重度用户，现在是国内版和国际版两个版本呢，在一块儿用，除了日常的工作以外呢，我还用它给自己做了不少日常小工具，比如呢，我最常用的收集getth upb热门项目数据的工具，那这个。

那我之前专门出过视频，基本上呢，我每天都会用到，还有就是生成AI疗愈故事和视频的工具，那这个里面呢，也是集合了多模态的能力和我对于AI公益的一些思考，那还有刚过的双11啊，我做了一个劝自己少买东西的一个小应用，那也想和大家来分享几个我自己的心得，那么首先solo模式呢，我建议先开plan再去开发，而且建议把这个系统的规划做的尽量详细，计划越详细呢，开发的结果就会越好。第二个呢，就是配置几个特定功能的智能体，比如呢，像后端架构的页面优化的，还有初始化特定的项目结构的solo codeer呢，是可以自己去调度的，那这样的话呢，开发的效果会更好，而且呢，提示词的量呢，也可以减少，第3个呢，就是开发的过程当中呢，你可以切换模式，比如呢，一开始用solo模式，当遇到一些简单的问题的时候呢，我就会切到IDE模式，那一眼我能看出来呢，我就直接改了，而且呢Q的智能补全的速度很快。

比让solo去全面的分析，然后再做修改要更快捷。第4个呢，就是规则建议呢，配置一些规则可以呢，配置一个全局的，然后呢，在开发之前呢，再配置一个项目级别的，这样可以更好的去提升trade的一个开发效果。最后我还想说啊，就是一定要有耐心，不要指望完全让AI一次就搞定全部的任务，有些问题呢，一次搞不定，修改几次也是可以的。还想和大家分享一份特别的年度报告，就是tree发给我的这份年度代码成绩，他悄悄的记住了一些有意思的时刻，像连按了31次tab也不知道我当时干了什么，还有呢，干到一点半，那这一次我是有印象的，他给我生成的形象呢，是节奏大师，你也可以来看看啊，你是什么形象，好了，这里是it咖啡馆，希望你的2026年更加美好，我们下次再见。
