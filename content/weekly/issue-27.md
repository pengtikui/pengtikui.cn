---
title: 第27期：WWDC23
date: 2023-06-10
description: WWDC23 的相关信息汇总
---

![](/static/weekly/issue-27-cover.png)

这周科技圈最大的新闻应该是苹果 WWDC 了吧，那这期周刊就来点不一样的，做个 WWDC23 的相关信息汇总吧。

WWDC 是苹果全球开发者大会，每年一届，在美国加州举行。通常苹果会在 WWDC 首日发布各类设备的最新版系统及其他软件技术，同时也会发布一些新的硬件产品，并在接下来的一周时间内举办面向开发者的讲座和活动。

## Vision Pro

Vision Pro 是今年 WWDC 最重磅的内容。库克在发布上说“如同 Mac 将我们带入个人计算时代，iPhone 将我们带入移动计算时代，Apple Vision Pro 将带我们进入空间计算时代”，能看得出来苹果对其寄予厚望，整个 XR 行业也希望苹果能够将这个行业带向大众。

简单来说，Vision Pro 是头戴式 MR 设备，戴上以后可以看到一个叠加在现实世界上的虚拟世界，可以使用手势和语音来进行交互。与之前 Meta、PICO 等的 VR 设备并没有本质上的区别和创新，但是苹果在硬件、软件和交互等各个层面都做到了现有技术下的最高水平，进而带来了用户体验的质变，让之前的 VR 设备看上去都像是三岁小孩的玩具，可能这就是钞能力吧。

比较有趣的一点是，苹果在发布会上全程没有提到 VR 这个概念，他们提倡的是用户不应该和现实隔绝开，也就是说 Vision Pro 是一台通过 VR 的方式来实现 MR 效果的设备，这也是 XR 行业的未来的发展方向，人不应该沉浸在虚拟世界中。

- [苹果首款头显 Vision Pro 发布！你的下一台 iPhone 何必是手机](https://www.ifanr.com/1550667)
- [Vision Pro 的 8 年历程：只有苹果才能这样造产品](https://mp.weixin.qq.com/s/N3pbonWgksBRl8CMVeb-8Q)
- [「小泽」Apple Vision Pro 真机佩戴体验：今天下午，我看见了未来。](https://www.bilibili.com/video/BV1Ps4y1q7K2)

## 系统

今年发布的系统有 iOS 17、iPadOS 17、watchOS 10、macOS Sonoma、tvOS 17，更新还是和往年一年，没什么亮点，都是一些常规的迭代更新，说几个我比较喜欢的功能吧。

一是 iOS 17 的健康应用可以记录自己的情绪感受，可以结合睡眠和锻炼等数据来评估心理健康情况；二是新增的 Journal 应用，一个智能的手帐 App，可以理解为数字化的日记，但与纸质版日记不同的是它可以根据你的各项数据自动进行汇总；三是 macOS 的小组件可以放在桌面上了，现在我的桌面是空空的，挺浪费的，有了小组件可以充分利用起来了。

- [苹果 iOS 17 健康 App 支持记录心情和情绪](https://www.ithome.com/0/697/845.htm)
- [苹果 iPadOS 17 发布：新增个性化锁屏和交互式小部件](https://www.ithome.com/0/697/810.htm)
- [苹果发布 watchOS 10：小部件回归、增强健康功能等](https://www.ithome.com/0/697/813.htm)
- [苹果宣布 macOS Sonoma：增强小部件、引入游戏模式、改进视频会议](https://www.ithome.com/0/697/811.htm)
- [苹果发布 tvOS 17，支持 Apple TV 用户展开 FaceTime 视频通话](https://www.ithome.com/0/697/817.htm)

## 硬件

除了 Vision Pro，还发布了两款新硬件产品：15 英寸 MacBook Air 和新款 Mac Studio。

MacBook Air 是第一次出现 15 英寸的机型，看上去比较适合程序员，相较于 MacBook Pro，它更轻便、屏幕更大，Pro 更强的图形性能对程序员来说用处也不大。新款 Mac Studio 采用了 M2 Ultra 芯片，这意味着苹果完成了全线产品由 Intel 芯片向 Apple Silicon 芯片的迁移，Mac Studio 的最高配置款的价格也由 40 多万降到 10 万多。

- [苹果推出 15 英寸 MacBook Air 笔记本，起售价 1299 美元](https://www.ithome.com/0/697/804.htm)
- [苹果发布搭载 M2 Max 及 M2 Ultra 的 Mac Studio，售价 1999 美元起](https://www.ithome.com/0/697/809.htm)

## 前端相关

#### [WebKit Features in Safari 17 beta](https://webkit.org/blog/14205/news-from-wwdc23-webkit-features-in-safari-17-beta/)

本文汇总了 Safari 17 beta 中的一些新特性，比较值得关注的有以下几点：

1. macOS Sonoma 支持了 Web Apps，也就是通常所说的 PWA，苹果向来对 PWA 相关能力的支持不太积极，这次终于算是支持了；
2. visionOS 中的 Safari 支持 WebXR，也就是说开发 visionOS 的应用，除了原生的 Swift 开发，Web 也是个不错的选择，但好像不支持 WebGPU；
3. 新增 `<model />` 元素，用法与 `<img />` 和 `<video />` 比较类似，用于更方便的展示 3D 模型；

## 其他

- [《人机界面指南》](https://developer.apple.com/cn/design/human-interface-guidelines)首次发布了官方中文版；
- 苹果注册了 [Figama 账号](https://www.figma.com/@apple)，并发布了 [iOS 17 和 iPadOS 17 的设计资源](https://www.figma.com/community/file/1248375255495415511)；
