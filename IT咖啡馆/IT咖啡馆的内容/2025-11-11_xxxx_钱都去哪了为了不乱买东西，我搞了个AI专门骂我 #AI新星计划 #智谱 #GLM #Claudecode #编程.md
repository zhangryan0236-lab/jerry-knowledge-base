---
title: "钱都去哪了?为了不乱买东西，我搞了个AI专门骂我 #AI新星计划 #智谱 #GLM #Claudecode #编程"
source: "getnote"
platform: "video"
author: "IT咖啡馆"
post_id: ""
post_link: "https://www.iesdouyin.com/share/video/7571415208581680384/?region=CN&mid=7571415303372999475&u_code=1l1d6df3ai7i&did=MS4wLjABAAAAYBL057NyKqHN8HEQD8f8coyTmoxMJ4J06NpXNKxGziY&iid=MS4wLjABAAAANwkJuWIRFOzg5uCpDRpMj4OX-QryoDgn-yYlXQnRwQQ&with_sec_did=1&video_share_track_ver=&titleType=title&share_sign=2joPJd_gFBLR2SQhAxc5G8EOjieOd5vwziPz4dTBrlA-&share_version=220000&ts=1762877067&from_aid=1128&from_ssr=1&share_track_info=%7B%22link_description_type%22%3A%22%22%7D"
published_at: "2025-11-11 18:38:03"
created: "2026-07-24"
tags: ["clippings", "getnote", "IT咖啡馆"]
---

# 钱都去哪了?为了不乱买东西，我搞了个AI专门骂我 #AI新星计划 #智谱 #GLM #Claudecode #编程

> **来源**: [IT咖啡馆 · 得到大脑](https://www.iesdouyin.com/share/video/7571415208581680384/?region=CN&mid=7571415303372999475&u_code=1l1d6df3ai7i&did=MS4wLjABAAAAYBL057NyKqHN8HEQD8f8coyTmoxMJ4J06NpXNKxGziY&iid=MS4wLjABAAAANwkJuWIRFOzg5uCpDRpMj4OX-QryoDgn-yYlXQnRwQQ&with_sec_did=1&video_share_track_ver=&titleType=title&share_sign=2joPJd_gFBLR2SQhAxc5G8EOjieOd5vwziPz4dTBrlA-&share_version=220000&ts=1762877067&from_aid=1128&from_ssr=1&share_track_info=%7B%22link_description_type%22%3A%22%22%7D)
> **发布时间**: 2025-11-11 18:38:03
> **博主主页**: https://www.iesdouyin.com/share/video/7571415208581680384/?region=CN&mid=7571415303372999475&u_code=1l1d6df3ai7i&did=MS4wLjABAAAAYBL057NyKqHN8HEQD8f8coyTmoxMJ4J06NpXNKxGziY&iid=MS4wLjABAAAANwkJuWIRFOzg5uCpDRpMj4OX-QryoDgn-yYlXQnRwQQ&with_sec_did=1&video_share_track_ver=&titleType=title&share_sign=2joPJd_gFBLR2SQhAxc5G8EOjieOd5vwziPz4dTBrlA-&share_version=220000&ts=1762877067&from_aid=1128&from_ssr=1&share_track_info=%7B%22link_description_type%22%3A%22%22%7D

## AI 摘要

🛍️ **开发背景**
- 每年1 - 11月常有冲动消费，为减少浪费，决定开发“劝退师PRO max ultra”APP。

💻 **开发过程**
- 选择cloud code开发工具，先找前端开发配置贴到cloud MD，让cloud code初始化工程得到空项目。
- 将需求写在文件里，需求为输入想买商品后，APP分析并提问，根据回答生成毒舌理性的劝退理由。
- 开发较快完成，体验时输入想买apple watch，APP提问并给出劝退理由。
- 增加冷却系统，若坚持购买，启动10分钟冷却，屏幕每隔1分钟生成劝导语。
- 增加趣味性，用户可选择不同劝退人格，如抠门老妈、毒舌闺蜜，进入系统可见选择人格页面。

🧩 **技术细节**
- 实际使用GM4.6模型而非cloud，整体开发效果差别不明显。
- 项目代码架构是react + TEL win，模块拆分清晰，有专门service处理调用大模型功能，有分层意识，但注释较少。

📊 **GM4.6模型优缺点**
- 优点：速度不错，指令遵循强，价格便宜（包月20块），在不熟悉项目情况的人手里效果好。
- 缺点：每天下午有点卡，实践细节有小瑕疵（如进度条有小bug），比较吃提示词。

📚 **套餐与模型选择**
- 官方有g RM coding plan套餐，比较划算，可作为备选，因Cloud封号严重，镜像站不稳定。
- 强调大模型选择多，要在合理场景选用合理模型。

## 原文

每年1~11月啊，我生活当中最重要的一个字就是买买买，总是一不小心呢，就买了一堆的东西，之后啊，就陷入深深的懊恼，还总觉得自己的钱都去哪儿了。那其实啊，我大部分的时候呢，都是冲动消费，看个直播啊，刷个视频呢，脑子一热就冲动了。如果可以在下单之前多思考几秒，那可能会减少不少的浪费，为了找回我失去的钱呢，我决定啊，给自己做一个劝退师PRO max ultra在我下单之前呢，他会劝劝我，那开发的工具呢，我选择的就是cloud code, 话不多说啊，我们直接进入实操。那首先呢，我先找了一个前端开发的配置，把它贴到了这个cloud MD里面去。然后呢，我让cloud code帮我去初始化一下工程，很快呢，我们就完成了一个空的项目，那接下来呢，我就把我的需求写下来，因为想的需求比较多啊，所以我就写到一个文件里，我希望的是呢，可以输入一个想买的商品之后。

然后呢，APP会分析一下商品，然后问我几个问题，让我来反思一下是不是真的要买，然后再根据回答啊，他去生成一个比较毒舌和比较理性的一个劝退的理由。其实啊，我这个设计算是比较复杂的，看看能不能一次成型啊，A few moments later, 这里稍微快进一点，过了几分钟的时间呢，开发就搞定了，其实比我预期的还要快了一些，那我就直接进入来去体验一下。我说啊，我要买一个apple watch, 他会问我三个问题，最后呢，就是一段劝退，我的话，其实呢，很多的冲动消费啊，真的如果是稍微耽搁一小下，其实都能避免，但是呢，我就不是那么听劝的一个人。所以呢，我还要更进一步，再加一个冷却系统，如果我还是坚持要买呢，APP会启动一个10分钟冷却，同时呢，在屏幕上每隔1分钟生成一段劝我不要买的话术，相当于呢，一个劝导的双重保险，A few moments later, 一小会儿的功夫就开发好了，我来再试一下效果。

那这样呢，就可以多劝我一次，应该啊，可以打消我的冲动了。那我觉得还可以再增加一些趣味性。用户呢，可以选择不同的劝退人格，每一个呢，都有独立的人设和台词风格，比如像抠门的老妈、毒舌闺蜜。那现在进入系统就可以看到选择人格的页面了。选择好之后呢，会更好玩儿一些。那这里呢，我要揭晓一个小秘密啊，我用的其实是GM4.6的模型，而不是cloud。但整体的开发效果来说呢，基本感觉不出明显的差别。如果我不说的话，你能看出来这是GM的4.6吗？那我也进入一下生成的代码来去看一下整体的架子啊，是react+TEL win的项目。那这里的模块拆分呢，还是比较清晰的，没有混在一块儿，还专门写了一个service呢，来去处理调用大模型的功能，明显是有分层的意识，那注释的话呢，说实话有点偏少，只是覆盖了关键的信息，那整体的代码质量啊，我觉得还是比较不错的。这里呢，也说一下我感受到的GM4.6的优缺点，首先优点啊，质朴的模型啊，平时速度非常不错，指令遵循很强，假如。

不在比较熟悉项目情况的人手里呢，效果会很好，而且呢，价格很便宜啊，包月用起来他不心疼啊。缺点呢，就是每天下午会有点卡，感觉呢，可能是用的人比较多，但是啊，想一想，20块钱一个月确实也就没啥毛病了。当然，像在实践的细节上啊，也会有一点小的瑕疵，比如像这个进度条呢，它就会有一些小的bug。另外呢，我感觉啊，GM4.6还是比较吃提示词的，大家可以去找一些cloud code的配置工具里面呢，有更多的预设，这样呢，用起来会更精细怎么样啊，这样一个劝退师PRO max ultra能不能帮你省下钱呢？肯定有朋友要说啊，会不会省下的钱都花在token上了，那这里啊，它现在官方有一个g RM coding plan的套餐，那这个套餐呢，它一方面非常划算，另外呢，Cloud来说呢，它的封号很严重，镜像站也很容易不稳定，所以呢，我们可以把这个套餐去作为备选。其实呢，大模型的选择非常多，我们在合理的场景选用合理的模型，这样呢，才能更好的去完成我们。

的工作，那好了，这里是爱咖啡馆，我们下次再见。
