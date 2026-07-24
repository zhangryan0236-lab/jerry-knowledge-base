---
title: "GitHub一周热点第122期 1、项目名称：ai-job-search - 基于 Claude Code 的 AI 求职工作流
2、项目名称：PhotoGIMP - 把 GIMP 改造成 Photoshop 风格的补丁
3、项目名称：caveman - 让 AI Agent 少说废话
4、项目名称：Meetily - 本地优先的 AI 会议助手
5、项目名称：OfficeCLI - 给 AI Agent 用的 Office 文档命令行工具
#AI新星计划  #Github #智能体 #求职 #office"
source: "getnote"
platform: "video"
author: "IT咖啡馆"
post_id: ""
post_link: "https://www.iesdouyin.com/share/video/7661141439023320372/?region=CN&mid=7661141668231072575&u_code=156880blej5c&did=MS4wLjABAAAAiyWWsdqMMT_CCyP2t5yHoSi6s1McRYL1A6EZErIrSg3yBm2ZAyC9QFZCcZErc3jF&iid=MS4wLjABAAAANwkJuWIRFOzg5uCpDRpMj4OX-QryoDgn-yYlXQnRwQQ&with_sec_did=1&video_share_track_ver=&titleType=title&share_sign=ux77PtZSaNuAPj335q4SwmpiZj_CB5lBU8yxwXxJpSM-&share_version=290100&ts=1783793371&from_aid=6383&from_ssr=1&share_track_info=%7B%22link_description_type%22%3A%22%22%7D"
published_at: "2026-07-11 13:41:41"
created: "2026-07-24"
tags: ["clippings", "getnote", "IT咖啡馆"]
---

# GitHub一周热点第122期 1、项目名称：ai-job-search - 基于 Claude Code 的 AI 求职工作流
2、项目名称：PhotoGIMP - 把 GIMP 改造成 Photoshop 风格的补丁
3、项目名称：caveman - 让 AI Agent 少说废话
4、项目名称：Meetily - 本地优先的 AI 会议助手
5、项目名称：OfficeCLI - 给 AI Agent 用的 Office 文档命令行工具
#AI新星计划  #Github #智能体 #求职 #office

> **来源**: [IT咖啡馆 · 得到大脑](https://www.iesdouyin.com/share/video/7661141439023320372/?region=CN&mid=7661141668231072575&u_code=156880blej5c&did=MS4wLjABAAAAiyWWsdqMMT_CCyP2t5yHoSi6s1McRYL1A6EZErIrSg3yBm2ZAyC9QFZCcZErc3jF&iid=MS4wLjABAAAANwkJuWIRFOzg5uCpDRpMj4OX-QryoDgn-yYlXQnRwQQ&with_sec_did=1&video_share_track_ver=&titleType=title&share_sign=ux77PtZSaNuAPj335q4SwmpiZj_CB5lBU8yxwXxJpSM-&share_version=290100&ts=1783793371&from_aid=6383&from_ssr=1&share_track_info=%7B%22link_description_type%22%3A%22%22%7D)
> **发布时间**: 2026-07-11 13:41:41
> **博主主页**: https://www.iesdouyin.com/share/video/7661141439023320372/?region=CN&mid=7661141668231072575&u_code=156880blej5c&did=MS4wLjABAAAAiyWWsdqMMT_CCyP2t5yHoSi6s1McRYL1A6EZErIrSg3yBm2ZAyC9QFZCcZErc3jF&iid=MS4wLjABAAAANwkJuWIRFOzg5uCpDRpMj4OX-QryoDgn-yYlXQnRwQQ&with_sec_did=1&video_share_track_ver=&titleType=title&share_sign=ux77PtZSaNuAPj335q4SwmpiZj_CB5lBU8yxwXxJpSM-&share_version=290100&ts=1783793371&from_aid=6383&from_ssr=1&share_track_info=%7B%22link_description_type%22%3A%22%22%7D

## AI 摘要

🔍 **AI求职助手：ai drop search**
- 基于closecode的AI求职框架，Star增长迅速，聚焦求职全流程
- 需克隆到本地，执行setup命令建立个人档案（含简历、经历、技能、目标岗位）
- 支持scrap命令搜索岗位（中国区默认支持LinkedIn），rank命令批量打分筛选
- apply命令生成定制简历和cover letter，interview命令辅助面试准备
- 核心亮点：将求职资料转化为长期维护的职业上下文，用独立skill管理岗位搜索
- 局限性：默认岗位搜索面向丹麦市场，国内主流招聘网站因反爬限制无法支持

🎨 **GIMP优化工具：photo gimp**
- 为开源图片编辑软件GIMP提供接近Adobe Photoshop的界面、快捷键和布局配置
- 解决PS用户迁移GIMP的适配问题，重排工具位置、调整快捷键和窗口布局
- 支持GIMP 3.0及以上版本，兼容Linux、Windows、macOS
- 安装方式为覆盖GIMP配置文件，需先启动GIMP生成配置目录并备份原有配置

🗣️ **AI简洁输出插件：caveman**
- 目标是让AI Agent输出更简短，减少冗余解释和token占用
- 作为scale或plug in安装到cloud code、codecs等工具，保留技术内容、代码和错误信息
- 提供light、full、ultra三种压缩等级，平均减少65%输出token
- 配套命令：komac commit（短commit信息）、koma review（一行PR评论）
- 特点：仅压缩输出，不减少模型思考token或输入上下文

🎙️ **本地AI会议助手：metali**
- 隐私优先的本地会议助手，支持音频捕获、实时转录和会议总结
- 转录用visper模型，总结可用欧拉玛等本地模型或在线大模型，数据本地存储
- 功能：实时转录、AI总结、导入音频重转写、捕获麦克风/系统音频，跨平台支持
- 架构：tory桌面应用+ras后端+max gs前端，无特别技术创新但实用性强
- 局限性：转录质量和速度受本地模型大小和设备性能影响，提供pro版本支持团队协作

💻 **Office文档工具：office cli**
- 单二进制工具，无运行时依赖，支持命令行创建、读取、修改Word/Excel/PPT
- 关键能力：内置渲染预览（转HTML/png）、watch本地预览，形成生成-查看-修改闭环
- 功能：输出结构化json、路径定位元素（页/行/单元格）、模板合并、批量执行、公式计算
- 定位：解决办公场景中AI Agent操作Office文件的需求，复杂模板/动画/图表需实际测试

📄 **资料分享**
- 循环工程研究报告：AI编程从人提示Agent走向循环提示Agent，强调设计可停止、验证、治理的作业闭环
- 回归真实2026趋势报告：消费食品品牌趋势，聚焦AI时代下对真实体验、连接的需求，AI无法替代人的文化判断和直觉

## 原文

guitar为一周热点汇总第一百二十二期本期的内容呢包括了ai求知助手，把gimp变成photosop的补丁让ai镇呢少说废话的插件本地ai会议助手和操作office文档的cri工具。

那最后呢还是分享两份资料，如果觉得内容不错啊，

也别忘了点赞和关注。第一个项目呢ai drop search是一个基于closecode的ai求职框架，

最近呢它的star增长得非常的快，

看来呢全球的人啊都在愁的找工作的问题。那它不单纯呢是优化简历用的提示词，

而是呢把找工作这件事情啊拆成了一个比较完整的工作流。

你首先呢可以把项目扩容到本地，然后呢使用closecode去进入，

那首先啊要执行set up命令，然后呢它会基于啊你的简历经历技能和目标的岗位这些资料去建立一个个人的档案。

这里呢感觉啊它应该是基于link didin的简历模板，

如果你的简历内容呢不太全，他也会提出一些问题来去补全信息。

后面呢可以用scrap命令。然后啊去基于前面的个人档案去搜索岗位。

那我看到呢，中国的话目前支持的是linkedin in，

可以拿到呢一个职位的列表，然后呢就可以使用rank命令去批量的给这些岗位啊打分，

做出筛。然后呢就可以使用apply命令去针对于某一个职位啊生成定制的简历，

还有这个cover letter。甚至呢还能用interview命令啊去做面试的准备。

那我觉得啊，这个项目比较值。得借鉴的是啊，

他把个人求职的资料呢变成了一个长期维护的职业上下文，

在原码里呢，可以看到啊，他会把这些信息啊放到点agent文件夹里，

然后呢去维护一个自己的记忆系统。还有呢，就是各职位的搜索啊，

他也是用独立的skill来去管理，那看起来是挺不错的。但是默认呢，

这些岗位的搜索啊，主要是面向于丹麦市场，比如呢，像job index，

但是呢，它的核心求知流程呢，是和语言和国家无关的，你可以用at proto去添加搜索的源项目呢，

会自动的去尝试创建一个skill。

但是呢，像国内常见的boss直聘啊，猎聘，智联等等啊，这些主流的招聘网站，

通常都有比较严的封控和反自动化的限制，

所以呢，都不行。另外呢，之前还有网友投稿了他的简历相关的项目路接，

那他也是希望啊，做一个完整的求职的工作台，整体呢，我觉得已经做的非常不错了，

很值得大家去学习。那他支持啊简历的编辑，还有gd的匹配，

还有投递的跟踪，模拟面试和复盘数据呢也都可以保存在本地。

唯一可能欠缺的呢就是自动化的职位的搜索需要手动的录入，但是这点确实也不好实现。

第二个项目啊，photo gimp是一个很实用的小工具，

那它做的事情呢，其实也挺简单的，就是把开源的图片编辑软件gimp的界面快捷键，

还有默认的布局给它调整成啊接近于adobe photoshop的样子。

如果你没有用过gmp的话，你可以把它理。解成啊，是一个免费开元photoshop的替代品。

功能上呢，它能做到图片的修图啊，还有合成平面设计这些事情。

但是很多呢，从photoshop迁移过来的用户啊，最不适应的就是界面和快捷键，

还有就是工具的一些位置啊，可能找不着，这种页面排版的逻辑不一样呢，

会很影响使用的体验，所以呢，很多时候啊，就直接劝退了。那photogmp呢，

解决的就是这个迁移的成本，它会重排工具的布局，让工具的位置呢更加接近于photoshop，

把常用的快捷键呢也改成photoshop的风格，去调整窗口还有画板画布的空间，

还会增加一个自己的启动图，

应用的图标。简单来说呢，它不是重做了一个新的图片编辑的软件，

而是呢，把photoshop换成了一套更适合photoshop用户的配置。那目前的photogmp呢，

是给gmp三点零及以上版本用的，支持呢linux，

windows和macos。安装的方式呢，本质上啊，就是覆盖gmp的配置文件。

所以官方也特别提醒啊，首先呢，要先打开一次gmp，让它去生成配置的目录，

然后呢，再安装本项目，如果你已经有了自己的配置文件的话，

那也要做好备份。那第三个项目啊，caveman，它的目标呢是让你的ai变成agent，

说话更短。因为啊，原始人不会说那么多话。你是不是啊，也经常刷到某包的一个梗啊，

就是我用最简单，最直接，最不绕弯子的方式来告诉你应该做什么什么。

现在呢，很多的编程工具啊，都有一个共同的问题，就是干活不错。

但是呢太爱解释了，其实这些话呢很多时候都浪费时间，而且呢也占用输出的token。

那koman的做法呢就很简单，它作为一个scale或者是plug in，

安装到cloud code，codecs之类的工具里面，然后呢要求agent保留技术内容，

代码命令和错误的信息，但是呢要把表达压缩成更短的风格。

那项目自己的说法就是啊，同样的答案，平均大概能减少百分之六十五的输出token。

那它提供不同的压缩等级，比如呢light， full和ultra。

有一些配套的命令，比如呢像komac commit，用来呢写更短的这种commit信息。

还有koma review，用来呢输出一行的pr评论。那之前啊，

我们也介绍过一些啊优化和减少token的项目。但是呢，q曼的思路啊，和之前的这些都不太一样。

那q曼主要是压缩的输出不会减少啊，

模型的思考token也不会呢，让输入的上下文序变小。但是呢也要注意啊，

如果你的任务本来就很短的话，那加一个scale反而呢不太划算。

第四个项目metali是一个隐私优先的ai会议助手，它可以在本地呢捕获会议音频，

实时转录并生成啊会议的总结。现在的ai会议助手呢，其实很多啊，

比如像现在的zoom啊，teams啊，它都能帮你去录音，转写总结。

但是呢也有些问题啊，一方面呢，有一些会议的内容可能比较敏感，它可能是一些公司的机密信息，

那公司呢不会让你去上传到第三方的服。务商那里。那另一方面呢，

就是现在的这种会议助手呢，其实很多啊，都是限量的，你不买会员的话呢，

用用就用不了了。那metele的定位呢，就是把这些处理啊，尽量的放到本地。

那它支持呢，本机的转录，模型呢，可以使用visper，总结的话呢，可以用欧拉玛这类的本地模型，

也可以呢，接自己的在线大模型录音，转录文本，还有会议的数据呢，

都保存在本机上，不需要默认的上传到云端。那功能上呢，它支持实时的转录，

ai总结，导入已有的音频去重新转写麦克风，还有系统的音频啊，

都可以补货。还支持多个平台，比如macos，windows， linux都能用。

架构上呢，它是一个tory的桌面应用，ras的后端加上max gs的前端，这种组合呢，

现在在本地的ai工具里啊，也是比较常见的。其实从整个技术架构上来说呢，

它并没有特别创新的点。说实话呢，很多人啊，现在去构思ai创业思路的时候，

都不会选择这个方向，因为它不够新颖。但是呢，它的火爆啊，也让人看到这种实用的应用，

它的价值呢，确实很受大家欢迎。不过本地方案也有代价，

比如转入的质量啊，速度啊，和模型大小是直接挂钩的，也会受你积极性能的影响。

那项目也提供了一个pro版本，会针对于团队啊和协作，还有高级功能，

提供更多的能力。最后一个项目，office cli，它的定位呢，

就是让aia认特，可以直接去创建，读取修改word，excel， ppt的文件。

那它是一个单二进制的工具，不需要呢一堆运行时的，依赖一行命令啊就可以完成安装，

然后呢就可以在命令行里啊，去直接啊创建，修改和验证啊这些office文件了。

那它有一个很关键的能力啊，就是它内置的渲染和预览。

office cli呢，可以把word，ppt， excel的这些文件啊，渲染成html和png，

也可以呢用watch啊去打开一个本地的预览，

让agent呢可以形成生成看效果再修改的一个闭环。功能上来说呢，它支持去操作常见的office的文件，

可以呢输出结构化的json，可以通过路径啊去定位元素，

比如呢第几页啊，第几行啊，第几列的单元格。那还支持啊模板的合并，

批量的执行，mcp， cero，excel公司的计算啊等等的能力。

那我觉得呢，office cri的功能啊，非常的实用，而且呢，它也是一个我们很需要的方向，

因为真正的办公环境当中啊，并不是只有mark档，更多的时候呢，我们其实还是要去操作word，

excel和ppt，要做到完全的兼容呢，并不容易，

越复杂的模板，还有动画，还有图表的话呢，就需要实际的测试。那最后呢，

还是分享两份资料，第一份呢是循环工程研究报告，ai编程呢，从人提示agent走向循环提示agent。

那这份报告呢，是关于loop engineer的一个啊最近又火起来的概念。

ai编程呢，正在从人一轮轮的去提示agn呢，

变成呢人设计循环，让agn呢在循环里面去持续。的执行。那现在啊，

更重要的呢，其实是设计一个可停止、可验证，可治理的持续循环的作业闭环。

那第二份呢，是回归真实二零二六趋势报告，

这份报告呢，不是纯技术的，而是呢，消费食品和品牌的趋势。

那就像报告的名字啊，回归真实。现在呢，ai和算法越来越强了，

但是人呢，反而更想要真实的体验，真实的连接，还有不那么完美的东西。

ai呢，现在能做的事情很多，但是呢，它不能真正的替代人的文化判断，

还有直觉和现场感。那有需要的呢，可以告诉我。以上啊，就是本周的全部内容，

那我们下次再见。
