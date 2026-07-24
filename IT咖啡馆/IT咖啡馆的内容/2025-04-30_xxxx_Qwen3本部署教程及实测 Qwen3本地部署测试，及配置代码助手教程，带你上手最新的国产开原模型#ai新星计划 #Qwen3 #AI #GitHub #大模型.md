---
title: "Qwen3本部署教程及实测 Qwen3本地部署测试，及配置代码助手教程，带你上手最新的国产开原模型
#ai新星计划 #Qwen3 #AI #GitHub #大模型"
source: "getnote"
platform: "video"
author: "IT咖啡馆"
post_id: ""
post_link: "https://www.iesdouyin.com/share/video/7498961767062588684/?region=CN&mid=7498962545823255323&u_code=0&did=MS4wLjABAAAAbkcJRSxmQ_BTBFFL4-8ry0h1O6EmR79ByQUO2VaG-6s&iid=MS4wLjABAAAANwkJuWIRFOzg5uCpDRpMj4OX-QryoDgn-yYlXQnRwQQ&with_sec_did=1&video_share_track_ver=&titleType=title&share_sign=sUfYgLjohDaIxwsXOBDFMrut8Gs7T01Cwov.XxdpSYI-&share_version=220600&ts=1746029723&from_aid=1128&from_ssr=1"
published_at: "2025-04-30 12:44:34"
created: "2026-07-24"
tags: ["clippings", "getnote", "IT咖啡馆"]
---

# Qwen3本部署教程及实测 Qwen3本地部署测试，及配置代码助手教程，带你上手最新的国产开原模型
#ai新星计划 #Qwen3 #AI #GitHub #大模型

> **来源**: [IT咖啡馆 · 得到大脑](https://www.iesdouyin.com/share/video/7498961767062588684/?region=CN&mid=7498962545823255323&u_code=0&did=MS4wLjABAAAAbkcJRSxmQ_BTBFFL4-8ry0h1O6EmR79ByQUO2VaG-6s&iid=MS4wLjABAAAANwkJuWIRFOzg5uCpDRpMj4OX-QryoDgn-yYlXQnRwQQ&with_sec_did=1&video_share_track_ver=&titleType=title&share_sign=sUfYgLjohDaIxwsXOBDFMrut8Gs7T01Cwov.XxdpSYI-&share_version=220600&ts=1746029723&from_aid=1128&from_ssr=1)
> **发布时间**: 2025-04-30 12:44:34
> **博主主页**: https://www.iesdouyin.com/share/video/7498961767062588684/?region=CN&mid=7498962545823255323&u_code=0&did=MS4wLjABAAAAbkcJRSxmQ_BTBFFL4-8ry0h1O6EmR79ByQUO2VaG-6s&iid=MS4wLjABAAAANwkJuWIRFOzg5uCpDRpMj4OX-QryoDgn-yYlXQnRwQQ&with_sec_did=1&video_share_track_ver=&titleType=title&share_sign=sUfYgLjohDaIxwsXOBDFMrut8Gs7T01Cwov.XxdpSYI-&share_version=220600&ts=1746029723&from_aid=1128&from_ssr=1

## AI 摘要

🌟 **千问3模型构成**
- 包含8个模型，6个稠密模型为千问3 0.6B、1.7B、4B、8B、14B和32B。
- 2个重量级moe模型是千问3 30B的A3B和旗舰版千问3 235B的A22B 。

💪 **千问3亮点**
- 模型变小：旗舰模型在22B激活参数下，达到与GM奈2.5PRO和OE相当水平，仅需4块H20显卡即可部署。
- 思维混合：是混合思维模型，可在思考与非思考模型间随意切换。
- agent能力提升：提供更好的agent和代码能力，加强对MCP支持，能无缝切换到现有MCP智能体工作。
- 多语言支持：支持119种语言和方言。

💻 **本地部署过程及问题解决**
- 作者用Mac电脑（64g的max studio），选择LX studio，优先考虑MLX模型，下载32B的8BITT量化版。
- 加载模型执行时遇报错，是PRO模板问题，通过点击模型后小齿轮，修改prompt模板解决。

📊 **性能测试**
- 问逻辑题，思考过程约十分钟，输出token速度12token每秒，速度不错但思考时间长。
- 与GRM的Z1对比，千问速度不如GRM Z1（GRM Z1为32B的4BIT量化版本）。

🎯 **作为本地编码助手使用**
- 在LM studio点击开发者开启服务，在本地1234端口运行。
- Vs code中配置，在API provider选LM studio，选千问3模型，首次点击报错，将LM studio里千问3上下文长度拉满后可正常使用。运行速度比在线API慢。

🤔 **整体评价**
- 千问作为国内最大开源模型家族，在速度、质量和稳定性方面表现均衡。
- 模型整体大小降低，未来在本地部署和边缘化设备运行有不错表现。

## 原文

朋友们千呼万唤使出来，阿里终于发布了开源模型千问3也是啊，超越了deep sick成为了最强的开源模型，那我也第一时间带你来看看这一次千问3有什么亮点，如何自己部署，还有呢，使用起来感受怎么样？本次千万3包含了8个模型，6个稠密模型分别是千问30.6b1.7B、4B、8B、14B和32B，两个重量级的moe模型分别是千问三三十B的A3B和旗舰版千万3235B的A22B。这一次的模型更新呢，我觉得一个最大的特点就是模型变小了，旗舰模型啊，在22B的激活参数下，就达到了和GM奈2.5PRO和OE能力相当的水平，而且仅需4块H20显卡就可以完成部署，那第二点呢，我觉得是思维混合，千万三一个很大的特点呢，它是一个混合思维模型，它可以在思考模型和非思考模型间随意的切换。第三个呢，是agent的能力，千问3提供了更好的agent和代码。

能力，同时也加强了对MCP的支持，这个真的是紧随形式，官方给出的事例当中可以看出对MCP支持的效果，这样呢，千问3就可以无缝的切换到你现有的MCP智能体当中去进行工作了。最后一点是多语言千问3的模型，支持119种语言和方言，现在的千问在全球都很受欢迎，多语言的支持呢，也让全球的用户可以更好的受益，虽然官方的数据吹的是天花乱坠，但实际表现怎么样呢？还得靠真实的体验，这一次呢，千问的稠密模型最大才32比，既然大小都这么亲民了，那我们必须要本地来部署一下，测试一下效果，我还是选择用LX studio, 这里我优先考虑选择MLX的模型，因为呢，我是Mac电脑，那因为我本地是一台64g的max studio, 所以我能接受最大的就是这个32B的8BITT量化版，下载过程呢，我就跳过了，现在模型下载好了以后啊，我就来加载一下模型，然后。

然后执行一下，这里会遇到一个报错，我研究了一下啊，这个应该是目前的PRO的模板有一点小问题，那我们要去给它做一些修正，点击我的模型，然后点击这个千粉3后面的小齿轮，然后点击这个prompt，我们把模型的模板修改好了以后，然后贴进来，现在呢，我再回到对话就可以正常使用了。那我们首先来问一个逻辑题啊，因为之前在千问Q的时候呢，会遇到思考过长的问题，我们来试试在千问3里面怎么样啊，那我现在问的这个问题呢，之前在千问Q的时候就会引起一个无限思考的bug，这一次在千问三上我来试用呢，还是思考的过程非常长，我一度也以为会遇到bug，但最后还是有了结果，整个过程啊，大概持续了十分多钟，输出的token呢，大概速度是在12头Ken每秒，整体的速度上还是不错的，但是我觉得思考的其实还是有点长，那我同时也做了一个对比，就是在LM studio丢里边去运行了一下GRM的Z1，我顺便也可以对比一下两个国产模型。

的速度表现，这里GRMZ1的32B呢，只有4B的量化版本，虽然对比上稍微有一点不是特别的公允啊，但是我们大致看一下效果，整体的运行下来呢，其实千问的速度呢，没有JRMZ1的速度快，当然呢，也要考虑到这个JMZ1是4BIT特量化的版本，那如果你不想用本地部署的方式呢，也可以用官方的在线版来直接使用，那接下来呢，我再来给大家演示一个实用的场景，就是怎么把千文3作为一个本地的编码助手，那这里呢，我们还是使用LM studio丢点击开发者，然后点击开启服务，这样它就会在本地的1234端口运行一个服务，然后呢，我们回到Vs code当中，打开我们的client，点击配置，在API provider里面选择LM studio, 然后就可以选择列出的支持的模型，那这些模型呢，就是你本地已经下载好的模型，我就选择这个千粉三，然后我们就可以使用它来去开发啊，但是这里点击第一次的时候会遇到一个报错，它也是告。

我嘛，这个上下文的长度太短了，所以呢，我们要到LM studio丢里面去配置一下千万三的上下文长度，那这里我就比较简单粗暴啊，直接把它拉满，拉到最大的上下文长度，然后呢，我们再回到壳LAN里面，哎，这次就可以正常使用了，那我给他一小段提示，让他去给我开发一个HDRLM的页面，那最终运行的效果是这样的，整体运行的速度来说呢，肯定比在线的API要慢很多，不过不花钱嘛，你总是要付出一些代价的，如果你想使用agent的能力呢，那需要配合千万agent的这个项目，那具体的使用呢，我在这个视频里面就不扩展了，下次有机会呢，专门做一个视频来和大家讲一下，那最后呢，我来整体的说一下这一次千万三的整个的感受啊，我个人觉得呢，千问作为国内目前最大的一个开源模型家族，它的表现还是比较均衡的，在速度质量和稳定性方面都比较不错，而且呢，由于这次模型的整体大小降低的非常多，所以未来一个阶段我觉得它在。

本地部署，还有边缘化设备上的运行，都会有一个非常不错的表现，那好了，以上就是本期的全部内容，我们下次再见。
