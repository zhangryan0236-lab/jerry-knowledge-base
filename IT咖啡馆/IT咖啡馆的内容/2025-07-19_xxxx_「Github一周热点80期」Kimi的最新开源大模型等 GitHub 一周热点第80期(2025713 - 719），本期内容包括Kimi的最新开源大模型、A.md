---
title: "「Github一周热点80期」Kimi的最新开源大模型等 GitHub 一周热点第80期(2025/7/13 - 7/19），本期内容包括Kimi的最新开源大模型、Alist的开源延续、免费开发资源汇总、 数据库MCP工具箱和开源桌面机器人
#Github #AI新星计划  #大模型 #MCP #huggingface"
source: "getnote"
platform: "video"
author: "IT咖啡馆"
post_id: ""
post_link: "https://www.iesdouyin.com/share/video/7528714369509657856/?region=CN&mid=7528714501341088558&u_code=0&did=MS4wLjABAAAAn4W53IeazqL4prlY23PtFLOC9BVSvCNpp_-KVkY78lE&iid=MS4wLjABAAAANwkJuWIRFOzg5uCpDRpMj4OX-QryoDgn-yYlXQnRwQQ&with_sec_did=1&video_share_track_ver=&titleType=title&share_sign=0PR6oc8mFTlpMp.fW5wsI5DuVMgmlyzt5nfvzsufxb4-&share_version=240400&ts=1752941101&from_aid=1128&from_ssr=1"
published_at: "2025-07-19 16:57:01"
created: "2026-07-24"
tags: ["clippings", "getnote", "IT咖啡馆"]
---

# 「Github一周热点80期」Kimi的最新开源大模型等 GitHub 一周热点第80期(2025/7/13 - 7/19），本期内容包括Kimi的最新开源大模型、Alist的开源延续、免费开发资源汇总、 数据库MCP工具箱和开源桌面机器人
#Github #AI新星计划  #大模型 #MCP #huggingface

> **来源**: [IT咖啡馆 · 得到大脑](https://www.iesdouyin.com/share/video/7528714369509657856/?region=CN&mid=7528714501341088558&u_code=0&did=MS4wLjABAAAAn4W53IeazqL4prlY23PtFLOC9BVSvCNpp_-KVkY78lE&iid=MS4wLjABAAAANwkJuWIRFOzg5uCpDRpMj4OX-QryoDgn-yYlXQnRwQQ&with_sec_did=1&video_share_track_ver=&titleType=title&share_sign=0PR6oc8mFTlpMp.fW5wsI5DuVMgmlyzt5nfvzsufxb4-&share_version=240400&ts=1752941101&from_aid=1128&from_ssr=1)
> **发布时间**: 2025-07-19 16:57:01
> **博主主页**: https://www.iesdouyin.com/share/video/7528714369509657856/?region=CN&mid=7528714501341088558&u_code=0&did=MS4wLjABAAAAn4W53IeazqL4prlY23PtFLOC9BVSvCNpp_-KVkY78lE&iid=MS4wLjABAAAANwkJuWIRFOzg5uCpDRpMj4OX-QryoDgn-yYlXQnRwQQ&with_sec_did=1&video_share_track_ver=&titleType=title&share_sign=0PR6oc8mFTlpMp.fW5wsI5DuVMgmlyzt5nfvzsufxb4-&share_version=240400&ts=1752941101&from_aid=1128&from_ssr=1

## AI 摘要

📱 **Kimi K2开源大模型**
- Kimi K2是月之安发布的首款开源旗舰模型
- 采用MOE架构，总参数达1万亿，激活参数32B
- 在自主编码、工具调用和数学推理测试中表现优秀
- 兼容OpenAI和Anthropic API格式，成本降低80%

🔧 **Open List开源项目**
- Open List是A List的开源延续项目
- 接口和操作逻辑与A List相似，易于上手
- 通过Docker进行部署，未来发展取决于持续更新

💻 **免费开发资源汇总**
- Free PO代提供开发者免费资源指南
- 包括云服务器、代码托管、开发工具等
- 适合想要创业的开发者，提供初期免费资源

🗄️ **MCP工具箱**
- 开源MCP数据库服务，支持多种数据库接入
- 提供连接池、身份验证、热更新等功能
- 类似于AI时代的ORM工具，支持AI助手数据库操作

🤖 **Rich Mini开源桌面机器人**
- Hugging Face与Pollen Robotics发布的机器人
- 设计用于人机交互、创意编程和AI实验
- 提供多种预设动作和社区共享功能
- 支持Python和Hugging Face开源大模型

📚 **资料分享**
- 《中国人工智能应用发展报告》由阿里云和央视联合推出
- 《Operating System from Zero to One》帮助掌握操作系统编写基础

## 原文

Get up宝藏多每周听我说一说第80期的内容呢？会包括kimi的最新开源大模型，List的开源延续、免费开发资源汇总数据库、MCP工具箱和开源桌面机器人。最后呢，还有两份资料分享最近呢，大家有没有看到在微信的安装包里竟然隐藏着小米的注释？这位程序员啊，到底是经历了怎么样的折磨呢？你们在开发的过程当中遇到过什么样的奇葩注释呢？可以在弹幕里来聊一聊。那么好了，话不多说，我们也进入正式内容，如果觉得内容不错，别忘了点赞和关注kimi k2是月之安面刚刚发布的首款开源旗舰模型，以挑战GPT4.1和cloud Sony的四维目标模型呢，采用了moe的架构，总参数达到了恐怖的1万亿，激活参数是32B，现在已经上架了kimi web端和APP端，去年的时候呢，Kimi给我的感觉是营销过渡，这一次啊，开源K2模型的发布啊，也让我在技术方面对它有了一些改观，从官方的测试数据来看啊，Kimi k2。

为了更强的代码能力，更擅长的通用agent任务，在自主编码、工具调用和数学推理三个维度的基准测试当中表现优秀。目前最被关注的应该是代码能力，在分数上呢，明显要高于DPCV3，并且接近了CLOUD4的水平，这里官方也给出了K2生成的各种例子，看起来的效果是非常不错的，而且kimi这一次也非常贴心，兼容了open AI和a tropic两种API格式，所以很多网友也将它用在了cloud code当中，总体的反馈非常不错，成本还可以降低80%。如果您也想体验呢，只需要ex个port两个环境变量，将a tropic base URL和a tropic API key替换成kimi的就可以了。从技术的角度来说呢，Kimi k2与deeppick v3的架构啊，高度相似，区别则在于注意力头的数量更少，专家的数量更多。最近呢，感觉开源模型圈子稍微有一点点沉寂，也希望这一次的K2呢，能给整个圈子带来一点点活力。不得不说一句啊，万众期待的deep sick r什么时候能来呢？

曾经被无数的资源爱好者所钟爱的a list已经被卖了，这个消息啊，我猜大家都应该有所耳闻了吧。当然呢，开源精神不会消亡，就在al list转型的时候啊，Open list横空出世就是希望能够继续啊，以开源的精神让a list这个好用的工具继续得以延续，本身呢，就是fo a list, 所以呢，接口对标a list, 操作的逻辑几乎一模一样，上手的门槛就比较低，部署也是可以通过刀cker来进行。在开源的世界里啊，像这种原始产品转型收费开源社区自发延续的情况还是比较多的，但是呢，Open list的将来是否能够真正发展起来，还是要看能否保持持续的更新。Free po代绝对是开发者的一个宝库，什么最让人快乐呢？那绝对就是白嫖。而这里啊，就有开发者能用得上的各种白嫖指南，什么ss passs s, 各个层面的都包括了，比如像云服务器可以白嫖哪些，谷歌awsa Oracle都给你整理好了，还有什么代码托管，开发工具，团队协作工具C。

MS都整理好了有哪些工具，并且有哪些免费额度和使用的介绍，实际使用的角度来说啊，尤其适合那些想要搞出海创业的开发者，就比如呢，我之前说到的被裁的朋友，如果他想去搞一些海外的开发创业，那可以在这里先准备好各种免费的起步资源，当然呢，也不是说要白嫖一辈子，如果你的业务真发展起来了，该花钱的时候还是要花钱。本项目是一款开源的MCP数据库服务，在AI应用大爆发的当下，让AI助手具备数据库操作的能力成为了不少开发者的刚需。谷歌的这个项目的定位就是一个专用于数据库的MCP，无论你用的是posts gra circle还是买circle to box呢，都能帮你把数据库的接入搞定，并且呢，还有连接池，身份验证，热何更新、监控能力等支持，使用的时候呢，首先要安装server，可以通过二进制文件或者刀客镜像，还需要一个配制文件，这里呢，最主要的就是3块东西，O resources和tools，可以来看看这个例子就能够比较直观的感受到啊，它是类似于写的。

扣模板的感觉，其实呢，这个项目就特别像是AI时代里的or RM工具，那准备好了以后就可以启动，接下来呢，就可以在比如像科R里面去配置MCP来使用它，另外呢，也可以使用谷歌的SDK来在A阵的开发当中使用tool box, 比如呢，我们可以看这个代码就能够了解到该如何引入和使用tool box rich mini呢，是huggy Vs联合po伦robottic发布的开源桌面机器人，专为人机交互、创意编程、AI实验而设计，目前呢，提供的两个版本，一个是299刀，一个是449刀，据网上的消息呢，5小时内就卖出了超过13万欧元。Rich mini呢，身高28cm，体重1.5kg，这个大小呢，放在桌面上不算特别的大，设计的审美来说呢，我感觉有一点点星湛的风格，它拥有6个自由度的头部移动、全身旋转、动画天线、广角摄像头，还有多个麦克风以及一个5瓦的扬声器。用户呢，不仅可以调用哈根face中心内置的15种预设动作，还可以通过社区平台上传。

下载以及共享新的机器人行为，与其他用户共同去扩展rich mini的动作库，还有交互的可能性。另外呢，Rich mini还可以用来跑Python以及ho face上的各种开源大模型，那hanging face一直在尝试将AI机器人的成本降低，Switch mini也承诺后续会完全的开源，会放出全部的资源，那么你有没有什么想用机器人来做的想法呢？最后还是分享两个资料，第一份是中国人工智能应用发展报告，是阿里云联合央视央广研究院推出的，今年央视也搞了一个赢在AI家的创投类节目，咱们的it咖啡馆里有一个群游也上了这个节目，绝对妥妥的大佬。这个报告呢，就是基于100多家参与的企业调研之后制作的一份报告，稍微有一点点的官腔，但是也值得一看，第二个是operating system from zero to one, 本书呢，将帮助你从0开始掌握编写操作系统所需的基础知识，因此呢，这本书的名字就很直接，就是从0~1。那如果有需要的呢，可以留言来告诉我。

那么好了，以上就是本周的全部内容，我们下次再见。
