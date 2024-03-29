---
title: 第50期：面向晋升编程
date: 2024-01-20
description: 你会面向晋升编程吗？
---

![](/static/weekly/issue-50-cover.jpg)

昨天看到一篇文章 - [面向晋升编程的 iOS 开发们](https://medium.com/@davidhu-sg/面向晋升编程的ios开发们-5f0c438984dc)，简单总结一下这篇文章的内容：国内的 iOS 开发者们都喜欢抱着一套老技术去做，鲜有人去跟苹果最新发布的技术保持同步，导致这一现象的原因是大家喜欢面向晋升编程，而更新技术对自己的绩效没有任何帮助。

其实不止 iOS，前端这种情况更甚。Web 前端和 Android、iOS 等客户端都可以归类为大前端，它们有一个共性，就是代码都是运行在用户侧，在有限的绩效周内很难做出真正有用，又能在领导面前吹嘘的项目，你做的页面体验更好了，用户不会跟你的领导夸你。后端就相对容易一些，接口响应时间降低多少、服务器资源占用降低多少、并发量提高多少等，这些都是很直观的指标。

最近因为公司业务调整，接手了不少项目，看了看这些项目的代码，举两个想骂人的例子。一是页面上的客服按钮，这个按钮组件从 npm 包 A 中导入进来，而 A 中的该组件又是从 B 中导入进来的，以此类推一共调用了五层 npm 包，所有的逻辑都在最后一层中，中间的每层都是直接透传；二是某个项目所有的业务接口地址全都维护在某个 npm 中，而非业务代码中。这两个例子中的 npm 包都并非以 monorepo 的形式维护，而是正儿八经的发布到 npm 仓库中的，业务逻辑稍有调整就需要先更新 npm 包的代码，再发布 npm 包，再更新业务代码中的包版本，再进行项目部署，想想就挺恶心的。

除了上面这俩例子，把简单逻辑变得复杂化的情况比比皆是，这是因为之前的开发者水平不行吗，我觉得不是，这也是面向晋升编程导致的结果。我把简单的业务代码规划的极其复杂，再画一个看上去很牛逼的架构图，给领导画个大饼，这晋升不就稳了嘛，领导高兴我也高兴，至于合不合理、后续好不好维护，那不关我的事了。

作为一个普通员工，这么做其实也无可厚非，毕竟我们是来工作赚钱的，不是来为爱发电的，但作为领导需要有能力区分出哪些是事是有长期价值的，哪些是吹嘘和画大饼的。不过现在的大部分公司中，好像都没有领导担责的惯例，小到不合理的架构设计导致的维护成本上升，大到公司的战略决策失误。

所以面向晋升编程也不是我们这些普通员工的错，制度导向的结果而已，日积月累下来早晚要反噬到公司高层。而作为普通员工的我们，不论在公司的工作方式怎么样，平时还是需要不断提升自己，不断更新技术栈，这样才能始终保持竞争力。

<hr />

## 技术

#### [Using HSL Colors In CSS](https://www.smashingmagazine.com/2021/07/hsl-colors-css/)

一篇介绍 HSL 的文章，介绍了什么是 HSL、使用 HSL 的好处以及一些使用用例。这是一篇 2021 年的文章，但到目前为止使用 HSL 的网站也不是很多。

#### [作为一个开源项目的创始人](https://ttalk.im/2024/01/be-an-open-source-leader.html)

前段时间有人在 X 发帖夸 React 的文档写得好，而 Vue 作者尤雨溪趁机对 React 进行了一番言辞激烈的批判。这篇文章也是对这这件事的一个讨论，言辞也不是很温和哈哈哈，可以以吃瓜的心态看看。

#### [Web 技术栈也能开发鸿蒙应用？Taro 给出了一个友好的方案](https://mp.weixin.qq.com/s/4GUeIn-y0IREwDqGvA8wuQ)

鸿蒙刚发布了不再兼容安卓的星河版，对开发者而言，原生适配鸿蒙有不低的成本。Taro 是一个跨端开发框架，这篇文章是 Taro 对鸿蒙进行适配的原理分析，希望它能越来越完善吧。

## 开源

#### [Maybe](https://github.com/maybe-finance/maybe)

Maybe 是一款个人理财和财务管理软件，功能比较全面，但由于业务没能做成功，就将其开源了。技术栈主要包含 Next.js、TailwindCSS、Postgres 等，设计也比较好看。

#### [Gotcha](https://github.com/WhiteCosmos/Gotcha-Rest-Client)

Gotcha 是一个跨平台的 API 接口测试工具，功能与 Postman 类似。和 Maybe 一样，由于商业上不太成功，作者决定将其开源，这种精神令人敬佩呐。

#### [Reactive Resume](https://github.com/AmruthPillai/Reactive-Resume)

Reactive Resume 是一款免费开源的简历制作工具，可以在线使用，也可以自行部署，内置了多种模版，也集成了 AI 能力，页面设计的也很漂亮。

## 产品

#### [Notion Calendar](https://www.notion.so/product/calendar)

Notion 突然发布了他们的日历产品 Notion Calendar，可以将日程集中到一处管理，可以集成 Notion 文档、Zoom 等，UI 和交互做的都很精致。不过目前只能通过 Google 账号登录，设计风格和 Notion 也完全不一样，倒是也不意外，因为 Notion Calendar 的前身是 [Cron](https://cron.com)，应该是被收购来的。

#### [Amie](https://www.amie.so)

Amie 也是个日历应用，同时也集成了待办功能，也能集成 Notion、Zoom 等。印象比较深刻是它的交互，动画特别顺滑和灵动，但又不浮夸，是个以设计为卖点的产品。

## TMT

#### Vision Pro 正式发售

苹果 Vision Pro 在美国官网正式开启预售，售价 3499 美元起，不知道是因为产量低还是太火爆，目前发货时间已经延迟到四月份了。从外媒的体验来看，普遍评价是太重，作为初代产品，并且售价又那么高，注定不会普及，让开发者完善生态的意义更大一些。

#### HarmonyOS NEXT 鸿蒙星河版亮相

1 月 18 日华为举行发布会，正式宣布 HarmonyOS NEXT 鸿蒙星河版面向开发者开放申请。与之前版本不同的是，鸿蒙星河版不再兼容安卓，该版本将在 2024 年 Q2 发布开发者 Beta 版，Q4 发布商用版。不太理解是，开发者还需要申请并进行考试，直接完全开放不更有利于生态发展嘛。
