---
title: 第64期：React 19 之表单
date: 2024-06-16
description: React 表单
---

![](/static/weekly/issue-64-cover.jpg)

这是 React 19 系列的第三期，这期介绍一下 React 19 中与表单相关的新特性。在 React 中处理表单向来是个棘手的问题，先举个简单的例子看看在 React 19 之前是怎么处理表单的。

```jsx
const FormDemo = () => {
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    updateName(name)
      .then(() => {})
      .catch(() => {})
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={name} onChange={handleNameChange} />
      <button type="submit" disabled={loading}>
        Submit
      </button>
    </form>
  );
};
```

在上面这个例子中，我们需要自行保存每个表单项的状态、自行处理表单提交事件，并且需要保存表单的提交状态，以免在接口请求完成前用户重复点击按钮。如果你的表单比较复杂，这样写出来的代码是很难维护的，因此社区也诞生了很多处理表单的库。

在 React 19 中新增了多个 API 用于对表单的优化，当然有些 API 不止适用于表单场景，这些 API 对开发体验和用户体验都有所增强：

#### useTransition

这个 Hook 在之前的版本中就有，只是在 React 19 新增了对异步函数的支持。使用 useTransition 可以自动处理异步函数的 pending 状态，上面的例子使用 useTransition 如下：

```jsx
const FormDemo = () => {
  const [name, setName] = useState('');
  const [isPending, startTransition] = useTransition();

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    startTransition(async () => {
      await updateName(name);
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={name} onChange={handleNameChange} />
      <button type="submit" disabled={isPending}>
        Submit
      </button>
    </form>
  );
};
```

可以看到 useTransition 可以帮你处理表单的提交状态，并且 startTransition 内的异步函数执行时不会阻塞 UI 渲染和页面交互。

#### \<form\> Actions 和 useActionState

React 19 中 `react-dom` 给 \<form\> 的 `action` props 做了特殊处理，如果传入的是个函数，那么该函数会用于处理表单提交，另外新增了一个 Hook `useActionState` 可以配合 \<form\> 的 `action` 来使用，将上面的例子改造如下：

```jsx
const FormDemo = () => {
  const initialState = { name: '' };
  const [formState, submitAction, pending] = useActionState(async (prevState, formData) => {
    const newName = formData.get('name');
    await updateName(newName);
    return { name: newName };
  }, initialState);

  return (
    <form action={submitAction}>
      <input name="name" type="text" value={formState.name} />
      <button type="submit" disabled={pending}>
        Submit
      </button>
    </form>
  );
};
```

很明显代码行数少了不少，但功能完全没有变化。useActionState 的第一个参数为一个函数，该函数可以是异步的，同时接收两个参数：上次该函数的返回值和表单的 FormData，第二个参数是初始状态，useActionState 会返回三个值：状态、表单提交函数和异步函数的状态。

这两个新 API 帮你自动处理了表单提交和表单提交的状态，不过这个 state 不只用于保存表单的状态，你可以把表单设为非受控的，state 用来保存异步函数的错误信息，任由你发挥。

#### useFormStatus

useFormStatus 也是个新增的 API，从名字也可能看得出来它是用来获取表单的各种状态信息的。使用该 Hook 的组件必须位于某个 \<form\> 内，简单的示例如下：

```jsx
function Submit() {
  const status = useFormStatus();
  return <button disabled={status.pending}>Submit</button>;
}

export default function App() {
  return (
    <form action={action}>
      <Submit />
    </form>
  );
}
```

返回的 status 包含四部分内容：

- pending：表单的提交状态；
- data：FormData 格式的表单数据；
- method：表单提交的 HTTP 方法，get 或 post；
- action：\<form\> 的 `action` prop；

#### useOptimistic

这个也是新增的 Hook，它不只应用于表单，主要应用场景是在数据提交完成之前就在页面上展示新的数据，算是对用户体验的一种优化。该 Hook 使用比较简单，具体用法可以参考[官方文档](https://react.dev/reference/react/useOptimistic)。

以上新增的特性都是对处理异步数据的优化，按照 React 官方的说话，这些可以统称为 **Actions**，主要用于表单场景，但也可以发挥你的想象里用于其他场景。对于中后台的复杂表单场景，以上这些新特性好像并没有多大的用处，更多的是适用于 C 端的业务场景。

<hr />

## 技术

#### [JavaScript dependency injection in Node](https://tsh.io/blog/dependency-injection-in-node-js/)

依赖注入这种设计模式在其他语言中应用的比较多，但在 JavaScript 使用的却比较少，本文通过示例对依赖注入是什么、有什么好处做了讲解，并介绍了怎么在 JavaScript 中使用依赖注入。

#### [Astro 4.10](https://astro.build/blog/astro-4100/)

Astro 这个框架一直不断的更新，这个 4.10 版本也是常规的更新，但有个新特性比较有意思，那就是 Container API，该 API 最早发布于 4.9 版本，它可以让你在 Astro 框架之外去渲染 Astro 组件，主要用于做测试的，但大家对它的期望不只是做测试，在 4.10 这篇更新日志中，官网提供了一个 PHP 中渲染 Astro 的示例，你也可以发挥想象，将它用于更多的场景。

## 开源

#### [Ink](https://github.com/vadimdemedes/ink)

一个使用 React 来开发命令行工具的库，它提供了一系列的组件和 Hooks，这些组件最终会渲染在命令行中，比传统的命令行工具开发方式有趣一点。

#### [Sandbox](https://github.com/ishaan1013/sandbox)

一个开源的基于云的代码编辑环境，支持自定义 AI 代码补全和实时协作，后端用到了 Cloudflare 的技术栈，包括 Workers AI、R2 存储、D1 数据库。
