---
title: 第30期：小而美与独立开发者
date: 2023-07-08
description: 推荐《小而美：持续盈利的经营法则》
---

![](/static/weekly/issue-30-cover.jpg)

因为微信，现在“小而美”好像快变成了个贬义词，但我这里要说的是个褒义词。最近在看（还没看完）[《小而美：持续盈利的经营法则》](https://book.douban.com/subject/36280425/) -- [Gumroad](https://gumroad.com) 创始人萨希尔·拉文吉亚写的一本书，这本书的英文原名是《The Minimalist Entrepreneur: How Great Founders Do More with Less》，我觉得 Minimalist 和 Do More with Less 这几个词是对“小而美”最好的解释。

这本书的核心内容是：不是每个企业都能成为独角兽，企业应该发现自身的核心能力并创造出价值，进而实现持续盈利。现在越来越多的人成为了独立开发者，我觉得这本书对独立开发者或想要成为独立开发者的人都有一定的参考意义，一个人也可以是一个“企业”。

> 凡是不依赖外部资源来维持项目运营的开发者，不论全职还是兼职，都可以称为独立开发者。

着重说两个书中我认为很不错的、比较认可的观点吧：

**创业的关键在于兴趣，而不是技能。** 这也是很多开发者的误区，觉得自己技术水平很高就能做出来好产品，这样容易导致眼高手低，需求都是自己凭空想象出来的，实际并没有人有这些需求。所以要对某个领域有较高的兴趣，并从自己和与自己有相同兴趣的人群中发现痛点需求，再去实现一个产品来解决这些需求，这样既有了目标用户群，又有足够的动力去维护更新产品，最后哪怕没有实现盈利，也至少解决了自己的需求。

**越少越好。** 对一个产品而言，少就意味着功能少，开发和维护的工作量也少。一个极简主义的产品通常意味着目标用户群较小，这些一般都是大厂不屑于做或者做不好的细分领域，但对独立开发者来说，一个细分领域的用户群也是个不小的规模，并且这种产品也有一定的稀缺性，目标用户的付费意愿也更强。

我还有一些书中没有提到的观点，那就是**付费模式**和**面向海外**。

一是付费模式。互联网产品盈利的方式通常有两种：广告和用户付费，广告模式需要你有大量的流量，而对一个小而美的产品而言，流量其实不大，广告主没有投放的意愿，并且广告大多像狗皮膏药一样丑，因此直接向用户收费是个不错的选择。

二是面向海外。这是基于付费模式下的一种退而求其次的选择，一是因为国内收费渠道（如微信、支付宝）对个人不开放或门槛较高；二是国内付费环境较差，大多数人没有对虚拟产品付费的习惯，这个只能靠时间去解决。

<hr />

## 技术

#### [操作系统封闭、后台保守，为什么前端仍能一路狂奔？](https://mp.weixin.qq.com/s/7FTstmAi7r5ic4t5bBsGMA)

这是一篇去年的文章，是 InfoQ 15 周年特别策划系列文章之一，通过对尤雨溪和周爱民的采访回顾了前端十五年来的发展历程。

其中周爱民谈到前端正行进在一个全新阶段中，并且新阶段将会发生在交互领域，VR 和 AR 是这个方向上的典型技术，恰好今年苹果发布了 Vision Pro，支持了 [WebXR](https://www.w3.org/TR/webxr) 标准，所以 WebXR 会是值得各位前端开发者探索的新领域吗？

#### [前端容易出神话？从高中辍学到价值 10 亿美元的初创公司](https://mp.weixin.qq.com/s/V8GmZv0X6WVC1n9qFYBEeg)

标题中说的这个人是 [Next.js](https://nextjs.org) 的作者 Guillermo Rauch，也是 [Vercel](https://vercel.com) 的创始人兼 CEO。本文主要讲述的是 Guillermo Rauch 的成长历程以及 Vercel 的发展，内容还不错，但标题有些夸张了。

## 开源

#### [resso](https://github.com/nanxiaobei/resso)

最简单的 React 状态管理器，支持 React 18、React Native、SSR、小程序等，API 设计的极其简单，没有各种花里胡哨的概念。

#### [cali.so](https://github.com/CaliCastle/cali.so)

[cali.so](https://cali.so) 网站的源码。这是一个个人官网，设计的很漂亮，也有一些比较有意思的功能，比如链接悬浮预览、文章按段落评论等，代码主要是 Next.js 技术栈。

#### [Drizzle ORM](https://github.com/drizzle-team/drizzle-orm)

又一个 Node.js & TypeScript ORM，API 设计的比较贴近 SQL 本身和 JS 生态的习惯，没有照搬传统 ORM 中 ActiveRecord、DataMapper 之类的复杂概念，比较简单易用，但 API 也比较零碎。

## 其他

#### [Threads](https://www.threads.net)

Threads 是 Meta 新发布的社交应用，在功能上与 Twitter 高度类似。它由 Instagram 团队开发，直接使用 Instagram 账号登录，并且设计风格也和 Instagram 保持一致。

Threads 上线 7 小时注册用户破千万，首日注册用户破三千万。

#### [OpenAI 进一步开放 GPT-4 的 API](https://openai.com/blog/gpt-4-api-general-availability)

OpenAI 宣布进一步开放 GPT-4 的 API，任何先前有成功支付记录的开发者现在都可以直接使用 GPT-4 的 API 了，同时计划在本月底向新注册的开发者开放 GPT-4 API。
