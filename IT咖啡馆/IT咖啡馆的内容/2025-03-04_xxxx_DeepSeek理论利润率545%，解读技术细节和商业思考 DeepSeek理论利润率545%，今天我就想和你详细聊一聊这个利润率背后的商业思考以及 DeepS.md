---
title: "DeepSeek理论利润率545%，解读技术细节和商业思考 DeepSeek理论利润率545%，今天我就想和你详细聊一聊这个利润率背后的商业思考以及 DeepSeek的极致优化。
#DeepSeek #开源 #商业模式 #AI #Github"
source: "getnote"
platform: "video"
author: "IT咖啡馆"
post_id: ""
post_link: "https://www.iesdouyin.com/share/video/7477800021115620671/?region=CN&mid=7477800801293929253&u_code=0&did=MS4wLjABAAAAziOPw2AYOdM2oS1QLgNs2aXoCwXW_b9BXAr3ZUTRQ-4&iid=MS4wLjABAAAANwkJuWIRFOzg5uCpDRpMj4OX-QryoDgn-yYlXQnRwQQ&with_sec_did=1&video_share_track_ver=&titleType=title&share_sign=0KhvAnuxNzhn.6hkHfg3bqPE8RRsjPDUgXNVCIBUewI-&share_version=210800&ts=1741116406&from_aid=1128&from_ssr=1"
published_at: "2025-03-04 12:06:12"
created: "2026-07-24"
tags: ["clippings", "getnote", "IT咖啡馆"]
---

# DeepSeek理论利润率545%，解读技术细节和商业思考 DeepSeek理论利润率545%，今天我就想和你详细聊一聊这个利润率背后的商业思考以及 DeepSeek的极致优化。
#DeepSeek #开源 #商业模式 #AI #Github

> **来源**: [IT咖啡馆 · 得到大脑](https://www.iesdouyin.com/share/video/7477800021115620671/?region=CN&mid=7477800801293929253&u_code=0&did=MS4wLjABAAAAziOPw2AYOdM2oS1QLgNs2aXoCwXW_b9BXAr3ZUTRQ-4&iid=MS4wLjABAAAANwkJuWIRFOzg5uCpDRpMj4OX-QryoDgn-yYlXQnRwQQ&with_sec_did=1&video_share_track_ver=&titleType=title&share_sign=0KhvAnuxNzhn.6hkHfg3bqPE8RRsjPDUgXNVCIBUewI-&share_version=210800&ts=1741116406&from_aid=1128&from_ssr=1)
> **发布时间**: 2025-03-04 12:06:12
> **博主主页**: https://www.iesdouyin.com/share/video/7477800021115620671/?region=CN&mid=7477800801293929253&u_code=0&did=MS4wLjABAAAAziOPw2AYOdM2oS1QLgNs2aXoCwXW_b9BXAr3ZUTRQ-4&iid=MS4wLjABAAAANwkJuWIRFOzg5uCpDRpMj4OX-QryoDgn-yYlXQnRwQQ&with_sec_did=1&video_share_track_ver=&titleType=title&share_sign=0KhvAnuxNzhn.6hkHfg3bqPE8RRsjPDUgXNVCIBUewI-&share_version=210800&ts=1741116406&from_aid=1128&from_ssr=1

## AI 摘要

📈 **DeepSeek利润率情况**
- DeepSeek爆出理论利润率达545%，而OpenAI在2024年仍有超50亿的全年亏损。
- DeepSeek在开源发布之初就面临收回投资成本的疑问，如今公布的数据让其盈利潜力显现。

💡 **价格策略与市场影响**
- 2024年5月DeepSeek V2发布，价格低至Llama 3的七分之一、GPT4 Turbo的七十分之一，引发大模型降价潮，当时其负责人称仍赚钱但未验证。
- 2025年DeepSeek V3和R1发布，价格再降，盈利能力疑问上升。

📊 **理论利润率意义**
- 让外界明白DeepSeek有充沛利润空间，仅API收费模式基本可收支平衡甚至盈利，调整模式能获更多收入。
- 给AI行业警示，众多公司靠高投入烧投资运营，而DeepSeek表明不是AI不赚钱，是部分公司没能力赚钱。
- 摆明自身坚持极致优化道路且是正确道路。

🔧 **技术优化措施**
- 开源周发布的项目都与基础设施和底层优化有关，目标是更大吞吐和更低延迟。
- 优化三板斧：大模型的跨节点专家并行处理；计算与通信的重叠费用；负载均衡策略。
- 六个项目分别优化创新：计算方面通过Flash MLA和Deep GEMM让处理更快；传输方面DPEP使流水线更快、周派派让机器不空闲；存储方面3FS让仓库到车间能发更多货物；调度方面EPLB让车间活分配更平均。

📊 **规模与展望**
- 按R1计价标准，理论收入每天可达56万美元以上，推理平均使用244台H800，虽对比某些大规模集成规模小，但考虑供电等问题实际规模不小，建议适当扩容以加快响应。

🌟 **发展特点**
- DeepSeek发展特点是“抠”技术、成本和效率，同时慷慨开源。

## 原文

**标题：** DeepSeek理论利润率545%，解读技术细节和商业思考 DeepSeek理论利润率545%，今天我就想和你详细聊一聊这个利润率背后的商业思考以及 DeepSeek的极致优化。

#DeepSeek #开源 #商业模式 #AI #Github

**作者：** IT咖啡馆

朋友们，dipstick爆出了一个不得了的数字，利润率可以达到百分之五百四十五。要知道啊，像open ai,虽然二零二四年挣了很多的钱，但是他全年的亏损要超过五十个亿。也就是说啊他不但不赚钱，还要赔钱。在deepseek开源发布之初啊，就一直有怎么收回投资成本的疑问。那现在deepseek公布了自己的统计数据，让人们认识到它是真的可以变，不可能为可能。如果只是用一个简单的词来概括这其中的秘密呢，我觉得是两个字优化。今天啊我就想和你聊一聊这个利润率背后的思考，以及deep seek的极致优化。其实呢deepseek的低价并不是今天才开始的。早在二零二四年五月，deepseek v二发布之时，世界啊就被它的价格所震惊了。号称价格屠夫的deep seek,直接把价格打到了拉马三的七分之一g p t四turbo的七十分之一。第一次呢让世界知道了原来大模型的价格有这么大的空间，随之而来的呢是一大波的大模型降价潮。当时梁文峰在一次采访中啊却提到自己是赚钱的，很多人对此表示疑虑，但因为是商业机密呢，也就没有办法验证。但到了二零二五年的deep seek, v三和r一发布价格又一次被打下来了，人们对它背后盈利能力的疑问呢也再度上升了，这难道是互联网惯用的低价抢市场的策略吗？但就在上周啊deep seek开启了疯狂的开元周，在连续发布了六个项目之后，deep seek也学坏了，还来了一个one more thing. One more thing.就在最后后呢，deep seek给出了v三和r一推理系统概览。同时呢公布了我说到的这个震撼人的数字。根据在线服务，deep seek v三和r一的数据，利润率可以达到百分之五百四十五。作为一个负责任的博主啊，首先我想带大家解读一下这个数字。现在网上呢有很多过分夸大的说法，什么deepseek已经盈利百分之五百多了，deepseek每天能赚四百多万。其实呢这些是不准确的。因为这里的五百四十五是理论的利润率。实际呢由于deepseek很多服务并没有开始收费，所以并没有达到这么多。那这个五百四十五有什么意义呢？我的理解呢有三点。第一呢让外界明白deep seek有充沛的利润空间，以目前的仅api收费的模式，也基本可以达到收支的平衡，甚至是盈利。如果调整模式马上就可以有更多的收入。说白了就是啊我现在不赔钱，但是想挣的话随时能挣得到钱。第二呢就是给行业一个警示。随着ai的火热啊，冲进这个赛道的玩家不计其数，有春风得意的，也有黯然离场的。早期行业火热的时候会掩盖很多问题。很多ai公司呢都是靠高投入烧投资来维系公司的运营，这里就不点名了。绝大部分其实都是这样的，deep seek.这个数据呢就让大家明白，不是ai不赚钱，是你没有能力赚钱，再不抓紧努力，搞不好就会被行业淘汰。第三呢就是deep seek,摆明了自己的道路。Deep seek之前呢一直在走一条特立独行的道路。现在呢摆出这些数字和内容，也是想说啊，我就是要坚持极致的路子，而且这是一条正正确的道路。说到极致呢，那我们就回到技术方面来聊聊到底deep seek是怎么做到的。为了避免大家不好理解呢，我会尽量的浅显一点，不过度的聊深度的技术内容。首先我们还是回到上周的开元周，我们以一个整体的视角来看一下这些开元的项目，所有的项目都和基础设施和底层的优化有关。其实这一周的时间呢，deep seek就在干一件事，就是告诉你dipsick v三和r一到底是怎么实现超高性价比的。而第六天的one more thing,更像是怕大家有点看不懂，特意把事情再说明了一遍。那到底优化了什么呢？其实我们看这个文章的第一句就能有所收获，优化的目标是更大的吞吐和更低的延迟。总结一下，优化的三板斧就是一大模型的跨节点专家并行处理，也就是让更多的专家同时处理任务，加快推理速度。第二呢，计算与通信的重叠费用。简单解释呢就是让机器干完这个就干，那个不能闲下来。第三呢负载均衡策略。简单来说呢就是尽量的把活分配的更加平均。这么听起来呢似乎都不是很难的优化思路，但其实不然啊，deep seek就用了六个项目分别来优化和创新。我们还是把这个过程类比为工厂将六个项目串联起来，做一些简单易于理解的说明。在计算方面呢，通过flash m l a和deep g e m m,目的呢就是让工人干的比以前更快了。在传输方面呢，d p e p让流水线转的比以前更快，而周派派呢则是让机器不再空闲。在存储的方面呢，三f s就是让仓库到车间，可以同时的发更更多的货物过来。最后啊在调度方面，e p l b呢就是让车间里的活很好的分配，更加平均的执行。具体的内容啊相对比较晦涩，我们就不展开了。可以翻一翻我之前的视频里面会有一些更详细的解释。在经过了一番优化和打磨之后，就有了deep seek计算的理论利润率百分之五百四十五。按照r一的计价标准呢，理论收入每天可以达到五十六万美元以上，整个deep seek推理平均要使用到二百二十四台h八百。虽然啊相较于像格奥克那种二十万台的集成规模，感觉好像不太大。但实际如果考虑到供电、散热、布线等问题，那一般情况下呢，两个机柜才能放一台h八百，那这个规模实际还是不小的。但是对比于目前deepsick的业务负载，我觉得如果可以的话，最好还是在扩容一些，这样呢响应也会更快一些。其实纵观整个dipstick的发展，我脑海里能想到的一个字就是抠抠技术，抠成本，抠效率。不过呢他也有特别的慷慨之处，就是把很多的东西直接开源了。我其实也想啊再做一个视频，和大家专门去聊一聊deep seek开源的思考。好了，那我们今天就先聊到这里，下次再见。
