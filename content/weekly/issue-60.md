---
title: 第60期：Web 要复兴？
date: 2024-05-12
description: 利好前端
---

![](/static/weekly/issue-60-cover.jpg)

最近阿里宣布重启淘宝网页版，并且已经对网站完成了一次重要升级，体验上相对于之前确实好了不少。自从 2013 年阿里宣布“ALL IN 无线”战略之后，他们就把几乎所有精力投入到移动端的 App 上，对于 PC 网页端不仅没有更新维护，还设置了各种障碍逼迫用户使用手机 App，而最近突然重启网页版有点令人意外。

十几年前是移动互联网发展最红火的时期，阿里也凭借着“ALL IN 无线”的战略做得风生水起，而国内其他互联网公司也都像阿里一样把所有精力都投入到移动端，导致 Web 快速没落，而现在移动互联网的发展到了瓶颈期，各方面都没有大的增长点了，他们又想起了被遗忘在角落的 Web，可能是为了寻找新的增长点，也可能是为了补全用户体验吧。

另外这两年最火的 AIGC 领域，相关产品大多都是 Web 优先，反而是手机 App 的功能不完善或更新慢。原因主要还是 Web 有较高的灵活性和更新效率，任何形式的内容展现都可以在 Web 上轻松实现，并且更新迭代效率高，另外 AIGC 相关产品大多都需要跨应用信息互通，Web 使用的都是开放的标准协议，而不是一个个的 App 信息孤岛。

不论怎么样，都希望 Web 复兴，重塑互联网。

<hr />

## 技术

#### [React 19 Beta](https://react.dev/blog/2024/04/25/react-19)

React 团队最近发布了 React 19 的 Beta 版，关于 React 19 的更新内容可以参考 [第 52 期：React 19 前瞻](/weekly/issue-52) 或者直接看这篇官方博客的内容，这里不再赘述。

倒是最近发现有些公众号在讲 React 19 时起一些哗众取宠的标题，比如 Hooks 可以在条件语句中使用了、useEffect 要退出历史舞台之类的，希望大家不要被他们误导，多看官方文档，也希望这些公众号不要误人子弟、丢人现眼了。

#### [Module Federation 2.0 正式发布！](https://mp.weixin.qq.com/s/E138XQLfEHe-8GVACNjGWw)

Module Federation 是 Webpack 5 的新功能之一，它可以让大型应用的开发协作更方便和高效，最近字节的 Web Infra 团队与 Module Federation 的作者 @Zack Jackson 共同发布了 2.0 版本，解决了旧版本中的一些问题，并且上线了新的文档站。

## 开源

#### [Page UI](https://github.com/danmindru/page-ui)

Page UI 是用于创建 Landing Pages 的组件和模版的合集，可以直接复制粘贴它的代码来使用，与 shadcn/ui 的理念比较类似，并且也是基于 React 和 Tailwind CSS 开发的。

#### [Pragmatic drag and drop](https://github.com/atlassian/pragmatic-drag-and-drop)

Pragmatic 是一个低级别的拖拽库，功能和 react-beautiful-dnd 类似，并且都是由 Atlassian 公司开发的，但 Pragmatic 与框架无关，可用于任何框架，且性能更好。

## 产品

#### [产品经理的无限游戏](https://jiewang.gitbook.io/chan-pin-jing-li-de-wu-xian-you-xi)

这是一本开源电子书，作者是糗事百科的创始人王坚，本书的内容主要包含了如何成为产品经理、怎么做一个产品、怎么实现产品的增长等三部分的内容。

#### [Filmly](https://filmly.163.com/)

Filmly 是网易开发的一款媒体库播放器，类似于 Infuse，支持直连百度网盘和阿里云盘的内容，大厂下场来做这种相对小众且不赚钱的产品挺意外的，不过倒也符合网易的作风。
