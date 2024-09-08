---
title: 基于 Lexical 写个编辑器（二）
date: 2024-09-08
description: 基于 Lexical 写个富文本编辑器
tags:
  - Lexical
  - Editor
  - 编辑器
  - 富文本编辑器
  - 所见即所得
  - React
---

在[上期](/blog/lexical-editor-1)中，我们已经写了一个具备基本功能的富文本编辑器，这期我们不着急了解更多新概念和开发更多新功能，先把上期中涉及到概念做个总结，并且完善和补全已有的功能。

下面就先来讲解一下上期中遇到的一些概念，这些也都是 Lexical 中比较重要的概念，后续的内容大多也都是建立在这些概念之上的。

## 编辑器状态（Editor State）

Lexical 中的状态可以理解为 React 中虚拟的 DOM，本质上也是 JavaScript 对象，并且可以序列化为 JSON 字符串。但不同的是，Lexical 的状态由**节点树**和**选中**两部分组成，节点可以理解为 DOM，选中是光标选择的区域和位置信息。Lexical 会自动将状态渲染为真实 DOM，状态发生变化后，Lexical 也会进行 diff 操作，然后对真实 DOM 进行局部更新，以提升性能。

编辑器状态有**更新期间**和**更新后**两个阶段，只有在更新期间，状态才可以被修改。最常见的更新方法是 `editor.update`，该方法的回调函数中可以修改编辑器状态，比如上期中设置文本类型的 `formatParagraph`、`formatHeading` 等方法都用到了 `editor.update` 方法。你可以把他理解为 React 中的 setState，它本质上在收集各种修改，然后 Lexical 进行统一合并更新，以实现更好的性能。

## 节点（Nodes）

节点是编辑器状态的组成部分，它表示编辑器的内容，比如一个段落就是一个节点，与 HTML 元素比较类似，一个节点可以类比为一个 HTML 元素。

节点有很多类型，比如段落、标题、块引用都是不同类型的节点，Lexical 内置了 RootNode、LineBreakNode、ElementNode、TextNode、DecoratorNode 五种节点：

- RootNode 是根节点，有且仅有一个；
- LineBreakNode 表示换行符，用于磨平不同系统间换行符的差异；
- ElementNode 用于其他节点的父节点，可以类比为 HTML 中的 div 或 span，它既可以是块级的，也可以是内联的；
- TextNode 是包含文本的叶节点，加粗、斜体等类型就是 TextNode 的属性，也可以通过内联 CSS 给文本添加样式；
- DecoratorNode 是个特殊类型的节点，可以用于插入任意自定义内容，比如视频组件等；

除了内置的这五种，可以在其基础上进行扩展，比如上期中用到了 `@lexical/rich-text` 导出的 HeadingNode 和 QuoteNode，它们就是在 ElementNode 上进行扩展的。

## 选中（Selection）

选中也是编辑器状态的组成部分，并且 Lexical 也内置了多种选中类型：

- RangeSelection 是最常用的选中类型，它是浏览器 DOM Selection 和 Range API 的封装，表示光标选择的范围和位置信息，上期中对文本进行格式化时用到了它；
- NodeSelection 表示多个任意节点的选择，比如选择了多个图片等；
- TableSelection 表示表格中的网格选择，比如选择表格中的某行某列；
- null 表示没有任何选中信息；

## 监听器（Listeners）

在上期的 ToolbarPlugin 中用到了 registerUpdateListener，它用于编辑器状态的监听，每当状态发生变化都会执行回调函数，并且可以在回调函数中拿到最新状态和上次的状态。

除了 registerUpdateListener，还有 registerTextContentListener、registerMutationListener 等多种方法来注册多种监听器，并且它们都会返回一个函数用于取消监听。

## $ 开头的函数

了解完几个重要的概念，我们再看看上期留的一个问题，为什么 Lexical 提供的 API 函数有些是以 `$` 开头的，而有些却没有。

如果你用过 React Hooks 就比较好理解这个问题了，虽然每个 Hook 本质上就是个函数，但我们都以 `use` 开头进行命名，并且要按照 React 的规则来用它，比如不能在循环和条件语句中使用。

Lexical 的目的也是类似的，`$` 开头的函数都是可以**直接操作编辑器状态**的，都是用在 `editor.update`、`editor.getEditorState().read` 等方法的回调函数中的，如果你写了一些直接操作编辑器状态的函数，也建议以这个规范来命名。

## 补全 ToolbarPlugin 功能

下面就把上期的工具栏功能补全一下，新增列表、Markdown 的支持。

### 新增列表

这里我们新增有序列表和无序列表两种，分别对应 HTML 中的 ol 和 ul 元素。首先需要安装 `@lexical/list`，它提供了列表相关的节点类型和插入删除列表的命令。

```base
pnpm add @lexical/list
```

首先我们需要引入 `@lexical/react` 中的 `ListPlugin` 插件，并在 `initialConfig` 的 `nodes` 中添加上 ListNode 和 ListItemNode 两个节点类型。

然后在 `formatText` 并列的地方添加两个方法 `formatUnorderedList` 和 `formatOrderedList` 用于设置列表格式，并在下拉列表中添加两个选项：

```tsx
/**
 * 设置为无序列表
 */
const formatUnorderedList = () => {
  editor.dispatchCommand(INSERT_UNORDERED_LIST_COMMAND, undefined);
};

/**
 * 设置为有序列表
 */
const formatOrderedList = () => {
  editor.dispatchCommand(INSERT_ORDERED_LIST_COMMAND, undefined);
};
```

其中 `INSERT_UNORDERED_LIST_COMMAND` 和 `INSERT_ORDERED_LIST_COMMAND` 从 `@lexical/list` 导入。

上期中提到获取当前 blockType 的逻辑并不完善，这里就需要就进行补充一下了，需要判断是否为列表节点、是否为 Heading 节点等：

```tsx
// block type
const anchorNode = selection.anchor.getNode();
let element =
  anchorNode.getKey() === 'root'
    ? anchorNode
    : $findMatchingParent(anchorNode, (node: LexicalNode) => {
        const parent = node.getParent();
        return parent !== null && $isRootOrShadowRoot(parent);
      });
if (element === null) {
  element = anchorNode.getTopLevelElementOrThrow();
}

if ($isListNode(element)) {
  setBlockType(element.getListType());
} else if ($isHeadingNode(element)) {
  setBlockType(element.getTag());
} else {
  setBlockType(element.getType());
}
```

相较于之前，添加了判断条件，后续再添加其他类型的节点，一样需要在这儿添加判断。

另外，本来打算也支持一下代码块的，但是 Lexical 提供的 CodeNode 我不太喜欢，以及需要处理代码高亮的问题，那就下期自定义一个 CodeBlockNode，顺便学习一下怎么自定义节点。

本期的代码参考 [feat: 02](https://github.com/pengtikui/lexical-demo/commit/79642199b0476b45237e5a12cfff9e81efde30b4)。
