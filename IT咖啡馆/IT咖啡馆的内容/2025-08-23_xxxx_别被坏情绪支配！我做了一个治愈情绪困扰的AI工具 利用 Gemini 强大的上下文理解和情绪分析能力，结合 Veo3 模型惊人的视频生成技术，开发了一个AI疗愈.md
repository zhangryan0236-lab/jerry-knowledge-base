---
title: "别被坏情绪支配！我做了一个治愈情绪困扰的AI工具 利用 Gemini 强大的上下文理解和情绪分析能力，结合 Veo3 模型惊人的视频生成技术，开发了一个AI疗愈助手。
#ai新星计划  #2025开学季 #Google #Google开发者大会 #公益正能量"
source: "getnote"
platform: "video"
author: "IT咖啡馆"
post_id: ""
post_link: "https://www.iesdouyin.com/share/video/7541606477597854976/?region=CN&mid=7541606556012432169&u_code=0&did=MS4wLjABAAAAkPawps9OCtK3KvN7k0JJv20nnRwMkdXrU-ECJLbBvNk&iid=MS4wLjABAAAANwkJuWIRFOzg5uCpDRpMj4OX-QryoDgn-yYlXQnRwQQ&with_sec_did=1&video_share_track_ver=&titleType=title&share_sign=uyuO5V6Hdbax51fU.ZWQtkYGW.GgBTx69ob76eEeFBo-&share_version=230000&ts=1755965036&from_aid=1128&from_ssr=1&share_track_info=%7B%22link_description_type%22%3A%22%22%7D"
published_at: "2025-08-23 10:45:01"
created: "2026-07-24"
tags: ["clippings", "getnote", "IT咖啡馆"]
---

# 别被坏情绪支配！我做了一个治愈情绪困扰的AI工具 利用 Gemini 强大的上下文理解和情绪分析能力，结合 Veo3 模型惊人的视频生成技术，开发了一个AI疗愈助手。
#ai新星计划  #2025开学季 #Google #Google开发者大会 #公益正能量

> **来源**: [IT咖啡馆 · 得到大脑](https://www.iesdouyin.com/share/video/7541606477597854976/?region=CN&mid=7541606556012432169&u_code=0&did=MS4wLjABAAAAkPawps9OCtK3KvN7k0JJv20nnRwMkdXrU-ECJLbBvNk&iid=MS4wLjABAAAANwkJuWIRFOzg5uCpDRpMj4OX-QryoDgn-yYlXQnRwQQ&with_sec_did=1&video_share_track_ver=&titleType=title&share_sign=uyuO5V6Hdbax51fU.ZWQtkYGW.GgBTx69ob76eEeFBo-&share_version=230000&ts=1755965036&from_aid=1128&from_ssr=1&share_track_info=%7B%22link_description_type%22%3A%22%22%7D)
> **发布时间**: 2025-08-23 10:45:01
> **博主主页**: https://www.iesdouyin.com/share/video/7541606477597854976/?region=CN&mid=7541606556012432169&u_code=0&did=MS4wLjABAAAAkPawps9OCtK3KvN7k0JJv20nnRwMkdXrU-ECJLbBvNk&iid=MS4wLjABAAAANwkJuWIRFOzg5uCpDRpMj4OX-QryoDgn-yYlXQnRwQQ&with_sec_did=1&video_share_track_ver=&titleType=title&share_sign=uyuO5V6Hdbax51fU.ZWQtkYGW.GgBTx69ob76eEeFBo-&share_version=230000&ts=1755965036&from_aid=1128&from_ssr=1&share_track_info=%7B%22link_description_type%22%3A%22%22%7D

## AI 摘要

🌍 **全球情绪问题现状**
- 全球有超过2.8亿人被抑郁症困扰
- 中国约有9500万人受到影响
- 每14个人中可能有一个人面临情绪低谷

🤖 **AI疗愈助手的功能**
- 用户描述情绪状态后，AI进行情绪分析
- 生成5个追问问题以深入了解用户情绪
- 提供全面的情绪分析报告和建议
- 生成疗愈小故事和专属疗愈视频

🛠️ **项目开发过程**
- 使用詹奈的上下文理解和情绪分析能力
- 结合BU3模型的视频生成技术
- 分镜脚本、视频合成和最终视频生成的三步流程
- 使用FFmpeg合成完整视频
- AI主导开发，人工微调

💡 **开发经验与技术应用**
- 使用AI调用专ni和VIVO3模型
- 可通过adk实现智能体提供AI能力
- 强调AI在解决社会问题中的价值

## 原文

你有认真关注过自己的情绪吗？我们总以为啊，情绪是件小事儿，但他呢，正悄悄的成为全球性的大麻烦。世界卫生组织的数据啊，触目惊心，全球有超过2.8亿人正被抑郁症困扰，在中国呢，这个数字同样不容忽视，预估超过9500万。换句话来说呢，我们身边每14个人当中就可能有一个人正在独自面对着情绪的低谷。这些情绪啊，就像沉默的野兽，它正悄悄的侵蚀着我们的生活。情绪问题呢，不是矫情，它是一种真实存在的疾病，但治疗的昂贵以及社会的偏见让许多人在无助当中独自煎熬。在今年的谷歌开发者大会上啊，我看到了许多用技术实现社会公益的项目，那一刻呢，我就在想，我能不能也用AI来做点什么呢？于是我利用詹奈强大的上下文理解和情绪分析能力，结合BU3模型惊人的视频生成技术，开发了一个AI的疗愈助手。这个视频呢，我想和大家详细的聊一聊，我是怎么一步一步来实现这个项目的，所有的代码呢，我都开完了，感兴趣可以自行取用。首先呢，我们来看一下这个项目的主要功能。

用户可以描述一下自己此刻的情绪状态，AI会立刻的进行简单的分析，识别出主要的情绪以及强度，接下来呢，专门会为你生成5个追问的问题，为了让后续的分析更加精准呢，它会像一个知心朋友一样，针对你当前的状况进行追问，这种逐步的深入对话啊，会让整个过程更加自然。当你一一作答以后呢，他会给出一个全面而深入的情绪分析报告，这份报告不仅能帮助你更好的了解自己情绪的潜在问题，还会提出需要关注的重点以及一些建议。然后呢，为了舒缓你的情绪，AI会为你生成一个疗愈小故事，如果你不想读啊，也可以选择朗读功能，但这还不够啊，我们要更进一步，根据这个故事呢，来去生成一段专属的疗愈视频，如何用AI生成一个长的疗愈视频呢？这里我稍微讲一下啊，其实呢，原理也很简单，只需要三步，第一步是分镜脚本，先将故事拆解成四个分镜的脚本，第二步是视频合成，针对每个分镜呢，调用V3模型来去生成一个独立的视频片段，最后是视频合成。

我这里呢，用FM mpeg呢，将这四个视频无缝的合成一个完整的视频，我的整个开发过程呢，其实是AI为主，我来微调，这也是我觉得目前小项目比较高效的一个开发方法，只需要把需求描述的清晰明了，多和AI去做几次磨合，不要太过希望它能一次搞定，但也别太低估他的能力，只要你能看懂他在干什么，并且能够掌控方向和关键的点，他就会帮你把大部分繁琐的工作都搞定了。这里也分享一些开发的经验心得，这里我是使用AI来去直接调用专ni和VIVO3的模型，但是也可以使用adk来去实现智能体来提供AI的能力，这样呢在后端的代码上啊，可以省现很多自己处理的逻辑，在结构上也会更加清晰，用最前沿的技术去解决最实际的社会问题，这正是我认为AI最应该发挥价值的地方，这也是我一直以来探索的方向。我的项目呢，现在还有很多需要优化的地方，但希望能给你一些启发。这里是it咖啡馆，希望我们都能在技术当中呢，找到属于自己的那份温暖和力。

聊，那今天就聊到这儿，我们下次再见。
