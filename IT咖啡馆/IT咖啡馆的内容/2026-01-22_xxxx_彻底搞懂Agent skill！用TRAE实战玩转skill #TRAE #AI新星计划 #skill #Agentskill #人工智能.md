---
title: "彻底搞懂Agent skill！用TRAE实战玩转skill #TRAE  #AI新星计划 #skill #Agentskill #人工智能"
source: "getnote"
platform: "video"
author: "IT咖啡馆"
post_id: ""
post_link: "https://www.iesdouyin.com/share/video/7597409869242584335/?region=CN&mid=7597410045134080804&u_code=igebdj4ka6k&did=MS4wLjABAAAAT-PpOWqt3ft0-Ok3NaOyXcu4NEhqsIrOMjoHzpv3LCE&iid=MS4wLjABAAAANwkJuWIRFOzg5uCpDRpMj4OX-QryoDgn-yYlXQnRwQQ&with_sec_did=1&video_share_track_ver=&titleType=title&share_sign=OAvSvsyJK_8mxaA6QehKPNNQFD6RiAMGe5ap6YSiduA-&share_version=230800&ts=1769098037&from_aid=1128&from_ssr=1&share_track_info=%7B%22link_description_type%22%3A%22%22%7D"
published_at: "2026-01-22 12:00:27"
created: "2026-07-24"
tags: ["clippings", "getnote", "IT咖啡馆"]
---

# 彻底搞懂Agent skill！用TRAE实战玩转skill #TRAE  #AI新星计划 #skill #Agentskill #人工智能

> **来源**: [IT咖啡馆 · 得到大脑](https://www.iesdouyin.com/share/video/7597409869242584335/?region=CN&mid=7597410045134080804&u_code=igebdj4ka6k&did=MS4wLjABAAAAT-PpOWqt3ft0-Ok3NaOyXcu4NEhqsIrOMjoHzpv3LCE&iid=MS4wLjABAAAANwkJuWIRFOzg5uCpDRpMj4OX-QryoDgn-yYlXQnRwQQ&with_sec_did=1&video_share_track_ver=&titleType=title&share_sign=OAvSvsyJK_8mxaA6QehKPNNQFD6RiAMGe5ap6YSiduA-&share_version=230800&ts=1769098037&from_aid=1128&from_ssr=1&share_track_info=%7B%22link_description_type%22%3A%22%22%7D)
> **发布时间**: 2026-01-22 12:00:27
> **博主主页**: https://www.iesdouyin.com/share/video/7597409869242584335/?region=CN&mid=7597410045134080804&u_code=igebdj4ka6k&did=MS4wLjABAAAAT-PpOWqt3ft0-Ok3NaOyXcu4NEhqsIrOMjoHzpv3LCE&iid=MS4wLjABAAAANwkJuWIRFOzg5uCpDRpMj4OX-QryoDgn-yYlXQnRwQQ&with_sec_did=1&video_share_track_ver=&titleType=title&share_sign=OAvSvsyJK_8mxaA6QehKPNNQFD6RiAMGe5ap6YSiduA-&share_version=230800&ts=1769098037&from_aid=1128&from_ssr=1&share_track_info=%7B%22link_description_type%22%3A%22%22%7D

## AI 摘要

🔍 **什么是Agent Skill**
- Agent Skill是Astropic推出的开放标准，2024年火遍AI圈
- 本质是将复杂提示词、知识库与执行逻辑封装为标准化技能包
- 可理解为给大模型的"专业说明书"，使其从通才变为领域专家
- 采用间接式披露架构，仅在需要时加载完整内容，提升上下文效率

🛠️ **Skill的核心组成**
- 必须包含skill.md文件，包含元数据（name/description）和指令（场景、工作流、输入输出、指导原则、示例）
- 可选资源和代码（如模板、脚本），支持高级使用场景
- 以文件夹形式模块化组织，便于分享、复用和版本控制

🎯 **Skill的适用场景**
- 适合高频重复、流程明确、需长期稳定表现的任务（如代码审查、日报生成、自动化工作流）
- 不适合一次性灵感创作、依赖情绪即兴发挥、无固定输出形态的场景

💡 **Skill的优势**
- 间接式披露架构提升上下文效率
- 模块化组织便于分享复用和版本控制
- 开放标准支持主流工具（如Trie、处理等）
- 使AI更稳定高效地完成特定任务（非提升模型本身智能）

📚 **必备资源推荐**
- 官方文档：建议详细阅读以深入理解
- 官方GitHub仓库：可作为示例参考
- Awesome Cloud Skill：内容丰富、覆盖面广的资源集合

## 原文

agent skill你听过吗？最近呢火遍了ai圈，它是astropic出的又一个开放标准，各大主流工具啊纷纷跟进支持。比如呢我常用的idii tri也支持了skill。可以说啊，skill是二零二零年开始最值得去了解的一个内容。那这条视频呢，我就带你啊搞懂什么是skill，并快速呢上手玩转skill，以及呢推荐一些必备的资源。首先呢，什么是scale？scale的本质上呢是将复杂的提示词，工程还有外部的知识库与执行的逻辑封装为一个标准化的技能包。你可以把它想象成是一份给大模型的专业说明书，这样呢他就能够知道怎么去完成具体的任务，让他呢从一个通才变成某个领域的专家。太抽象了，不好理解是吧？那我们先来看一个实际的例子。那我呢就用翠来做一下演示，刚好呢翠的国际版呢最近也限时免费。这是我做好的一个宠物食品的蓝屏配置，看起来呢还不错，但是呢如果我想做整体风格的提升，那就需要涉及很多的提示词，像什么色彩啊，字体啊，动效啊等等。所以呢，我决定啊，配置一个专门的技能来去做前端的优化。进入tree的配置里面啊，找到规则和技能，然后呢点击创建技能，把我准备好的这个scale的内容啊直接传进来就ok了。具体的内容呢，我们稍后再来详细的去看。那接下来呢，我们切换到solo模式里面，让它呢用front end design这个技能去优化当前的项目。那稍等片刻。优化后的项目呢是这个样子的，是不是更上了档次呢？这个技能啊还是很好用的，那接下来呢，我们就用这个skill来带你去看一下它具体包含了哪些内容。我们切换到id的模式，这里可以看到啊，在项目的点tree文件夹里面有一个scale的子文件夹，安装好的scale呢都放在这里，一个scale呢必须包含scale点md文件，这里呢包含了最核心的内容，那它当中呢会有三部分的内容，首先呢是元数据，也就是啊这个name和description的部分，ai呢会在启动的时候加载这些元素据，并将其呢包含到系统的提示词当中。那接下来呢是指令，它是scale的主体内容，包含了像场景啊，工作流啊，输入输出啊，指导原则，还有视力等等等的内容。那上面两部分呢是必须的，如果你手动去创建技能的时候也能看到啊，这些是必选项。那第三部分呢是可选的资源和代码，那属于呢是高级使用，比如呢像模板或者一些脚本。那接下来呢，我再来展示一个我使用了高级的资源和代码的例子。那比如我们开发人员呢，都非常讨厌去写日报之类的工作，那我就做一个日报的scale，那来看一下内容啊。首先在scale点md里定义了基本的内容，然后呢就是执行的动作，还有输入输出的一些例子。然后呢我再到他们类的下面去定义一个hdml的输出模板，这样呢就可以直接生成hdml形式，体感呢会更好，然后，呢在script的文件夹里面啊，去做一个脚本，因为要使用get， log等命令啊，所以呢我单独做一个执行的脚本。最后呢我们来试一下执行的效果，让他呢帮我去生成一下今天的日报。那稍等片刻呢，就可以拿到一个hdml形式的完整日报了。到这呢你应该能理解啊，scale能做什么了，那为什么它这么受人欢迎呢？这里有几点原因啊，首先呢，scale采用的是间接式披露架构，只有在真正需要的时候呢才会加载完整的内容，这样呢极大的提升了上下文的效率。第二呢就是scale的这种文件夹形式的模块化主件啊，可以轻松的去分享复用或者是做版本的控制。第三呢就是scale是一个开放的标准，你可以在自己喜欢的工具当中去使用。就比如呢，像在处理当中，其实我们也能够发现啊，scale的能力呢，你也可以通过像题诗词或者是subagen呢去实现，那什么时候要用它呢？其实这个就像是啊，有的人也能用excel去手搓游戏，或者呢用剪映啊去做这种三d建模，但是一般人肯定没法这么干。所以呢我们应该理解的是scale适合做什么，不适合做什么。那skill适合的呢就是高频重复，有明确流程的，需要长期稳定表现的这种任务。那比如呢就像code revio日报或者是一些自动化的工作流。那不适合的场景呢，就是一次性的灵感创作，强烈的依赖于情绪和即兴发挥的，没有固定输出形态的问。题这里呢我也整理了一张啊skill和提示词还有弱mcp context的对比，你可以截个图啊来仔细查看，可以帮你呢更好的去理解scale的一些内容。最后呢还有几个值得收藏的scale的资源。那首先呢就是官方的文档，我还是建议啊去看一下详细的官方的内容，这样呢会有所帮助。然后呢是官方的get up仓库，你可以把它呢作为sample去加深理解。然后呢就是awesome cloud skill，这里面的内容会更多，覆盖面呢也会更广。进入二零二六年呢，其实拉开差距的不再是模型的本身，而是你使用它的方法。现在的模型能力的提升呢，在一般的使用场景当中已经不是那么明显了。skill本质上呢不是让ai变得更聪明，而是让ai可以更稳定更高效的去做事情。好了，这里是it咖啡馆，我们下次再见。
