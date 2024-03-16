---
title: 如何写出优秀的 React 代码
date: 2019-09-30 11:44:25
description: 本文翻译自 How to write great React，原作者通过类比《代码简洁之道》中优秀函数的五条规则来阐述如何写好一个 React 组件。
tags:
  - React
---

> 本文为翻译，原文地址：[How to write great React](https://link.medium.com/o47k9T5Vl0)

本篇文章从一个问题开始：如果我能给新手开发者一些建议以帮助他们写出优秀的 React 代码，那会是什么建议呢？

我的答案是：**通过遵循编写整洁函数的规则来编写 React 组件。**

## 为什么我们专注于组件？

我们编写 React 应用的目标是**易读、易维护和易扩展。**这有很多因素：架构、状态管理、文件结构、代码格式等等。但是我们大部分的应用中的**大部分代码都是组件**。

如果组件代码都是干净整洁的，团队可以更快的行动。这样就能保证一个好的应用了吗？不，架构的其他部分可能是一团糟。但是构建一个好的架构要比组件难得多。

那么如何把组件写好呢？第一步：**始终将其视为函数**。

## 组件即函数

一些 React 组件是函数：

```javascript
const Button = ({ text, onClick }) => (
  <button onClick={onClick}>{text}</button>
);
```

也有一些不是函数，而是有 `render` 方法的 `class`：

```javascript
class Button extends Component {
  render() {
    const { text, onClick } = this.props;
    return <button onClick={onClick}>{text}</button>;
  }
}
```

在第一种情况下，把组件视为函数很简单。我们开始将组件概念化为一个实体，并受不同的规则约束。

使用 `class` 组件时，我们更容易忘记组件的核心部分是 `render` 方法：一个返回 UI 片段的函数。

当我们忘记把组件视为函数时，我们会创建一个大且难理解的组件。它做了太多事，接收太多 `props`，或者有太多的分支条件。它很难使用或改进，真是令人头疼。

把组件视为函数是写好 React 的第一步，无论是函数组件还是 `class` 组件。

下面来说为什么。

## 编写优秀的函数

我们先把 React 放一边，思考一个问题：**什么样的函数才是优秀的函数？**

Robert Martin 的经典书籍《代码整洁之道》中强调了五点：

- 短小
- 单一职责
- 一层抽象
- 少于三个参数
- 使用描述性的名称

我们依次看一下这些规则，以及他们对 React 组件意味着什么。

## 组件应该很小

> 函数的第一规则是短小，第二规则还是短小。 — 《代码简洁之道》

短小的函数更易读。没人愿意使用一个有 500 行代码的函数。Robert Martin 认为函数应该很少会超过 20 行。

对 React 组件来说，这个规则有些不同，因为即使是个很简单的元素，JSX 也会占据很多行。

组件主体（在 `class` 组件是指 `render` 方法）不超过 50 行是个好的经验法则。如果查看文件的行数更方便，那大部分组件文件都不应该超过 250 行。100 行以内是最理想的。

**保证组件小巧。**

## 组件应该只做一件事

我在文章 [Tiny Components: What could go wrong?](https://blog.bitsrc.io/tiny-components-what-can-go-wrong-d6aa42d71370) 中更详细地讲了这个主题。

简而言之，组件应该仅承担一项主要职责，只有一个原因可以修改它。

如果你因为要调整菜单条目的顺序而修改 `MenuList.jsx` 组件，这很好。如果你因为要调整侧边栏的打开方式而修改 `MenuList.jsx`，那很糟糕。

**将 UI 拆成多个小块，每个小块仅处理一件事。**

## 组件应该只有一层抽象

这有一个具有多层抽象的函数（伪代码）：

```javascript
const loadThings = async () => {
  setIsLoading(true);
  const response = await fetchThings();
  setIsLoading(false);
  const { error, data } = response;
  if (error) {
    if (error.status === 404) {
      redirectTo('/404');
    } else if (error.status === 500) {
      redirectTo('/error');
    }
  } else {
    const thingsToUpdate = data.ids.reduce((map, id) => {
      map[id] = data.things[id];
      return map;
    }, {});
    updateThingsInState(thingsToUpdate);
  }
};
```

注意已经有一些内容被拆分成其他函数：设置 `loading` 状态和从服务器获取数据。但也有一些没拆分：出错时跳转和更新 `things` 的状态。

这有一个整洁的实现：

```javascript
const handleResponse = (response) => {
  const { error, data } = response;
  if (error) {
    handleError(error);
  } else {
    updateThingsInState(data);
  }
};
const loadThings = async () => {
  setIsLoading(true);
  const response = await fetchThings();
  setIsLoading(false);
  handleResponse(response);
};
```

现在 `loadThings` 比较易读了。它逐行调用其他函数来处理和加载数据相关的任务。我们的新函数 `handleRespone` 也比较简单，只包含了一个条件。一层抽象的规则贯穿始终。

这有一个混合抽象的 React 组件：

```javascript
const Dashboard = () => {
  return (
    <div className="Dashboard">
      <header>
        <h1>Too Little Abstraction Corp.</h1>
        <nav>
          <a href="/about">About</a>
          <a href="/mission">Mission</a>
          <a href="/faq">FAQ</a>
          <a href="/contact">Contact</a>
        </nav>
      </header>
      <ProductDescription />
      <EmailSubscriptionForm />
      <footer>
        <h2>Thanks for visiting!</h2>
      </footer>
    </div>
  )
}
```

一些标签被抽象为子组件（`<ProductDescription />`, `<EmailSubscriptionForm />`），但是 header 和 footer 并没有被抽象为子组件。

这也是个非常简单的例子：你会经常遇到将数十行或数百行原生标签和子组件混合在一起的组件。

`Dashboard` 组件做的事太多了。有太多的理由去修改它了，并且由于缺乏抽象导致它很难读。

解决方案：

```javascript
const Dashboard = () => {
  return (
    <div className="Dashboard">
      <Header />
      <ProductDescription />
      <EmailSubscriptionForm />
      <Footer />
    </div>
  )
}
```

这就非常易读了。除非你要添加一些新的子组件，你几乎不需要接触这个文件。

每个子组件也可以按照需求进行共用和修改。当你修改 `Header` 时，不会对 `Footer` 造成任何影响。

混合抽象是一个容易陷入的陷阱，因为在编写它的时候是有道理的（我只添加一点点标签，没有必要拆分为一个组件）。但是随着时间的推移，它会变成难以理解的复杂组件。

如果你尝试让你组件保持大致只有一层抽象（有些特殊情况是可以接受的，比如使用 `div` 做一些包裹），这将易于后期维护。

**限制组件只有一层抽象。**

## 组件应该只有少量参数(props)

> 最理想的参数数量是零（零参数函数），其次是一（单参数函数），再次是二（双参数函数），应尽量避免三（三参数函数）。有足够特殊的理由才能用三个以上参数（多参数函数） — 所以无论如何也不要这么做。 — 《代码整洁之道》

从技术上来讲，React 组件只接收两个参数：`props` 和 `context`。但是，从本质上讲，你应该想对待函数的参数一样来对待 `props`。

实际上，写只有一两个 `props` 的组件很难，尤其是有些组件要把 `props` 传给它的子组件。

这有宽松一些的经验法则。**三个最好，五个可以接受，七个以上简直就是灾难。**

正确的组合可以帮你避免 `props` 在多个组件间传递。尝试在组件树的最末节点处理事件。

顺便说一下，布尔型的 `props` 会增加不必要的复杂性。Filip Danić 有一篇[非常好的文章](https://spicefactory.co/blog/2019/03/26/how-to-avoid-the-boolean-trap-when-designing-react-components/)来讲述这个主题。

**限制组件的 `props` 在三个以内。**

## 组件应该有个描述性的名称

这看起来很简单，也应该会很简单。

事实上，很难给组件命名时说明这个组件做了太多的事。**“这个组件的作用是什么？”的答案应该很简单，**正是一个具有描述性的名称。

如果一个开发者看了应用的组件树，他应该对每个组件的功能有完整而清晰的了解。没什么好奇怪的。

这有一个更好地规则：**问自己，如果我告诉用户这个组件的名字，她能够在 UI 上指出这个组件或猜到这个组件是做什么的吗？**

**组件不应该使用技术性的抽象名称。**`<TodoListItem>` 怎么样？很好理解。`<PortfolioLoader>` 呢？有些抽象，但还比较直观。`<UserViewModelInterface>` 呢？emmm...

**保证组件名具体且具有描述性。**

## 结语

你写组件的时候遵循这些规则了吗？为什么或为什么不？你还遵循了哪些其他规则？

如果你有任何想法、问题或建议，请在评论中告诉我。

感谢你的阅读。
