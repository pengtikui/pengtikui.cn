---
title: 基于 Lexical 写个编辑器（一）
date: 2024-09-01
description: 基于 Lexical 写个富文本编辑器
tags:
  - Lexical
  - Editor
  - 编辑器
  - 富文本编辑器
  - 所见即所得
  - React
  - Radix UI
  - Tailwind CSS
  - Rspack
  - Rsbuild
---

Lexical 是 Meta 开源的一个 Web 文本编辑器框架，它采用了与 React 虚拟 DOM 类似的思路，将编辑器状态与真实 DOM 解耦，大大降低了开发者的心智负担，并且 Lexical 有着很高的可扩展性和性能，开发者可以基于它开发完全符合自己业务需求的编辑器，可以是简单的纯文本编辑器，也可以是复杂的富文本编辑器，甚至是实时协作的文本编辑器。

因为 Lexical 的概念比较多和复杂，只是进行理论学习会比较枯燥和难懂，因此我们通过开发一个富文本编辑器来边实践边学习。由于内容较多，所以将会分为多期进行，这是第一期，另外需要你有一定的前端基础和 React 基础。

## 前置准备

框架方面，我们会基于 React 和 Lexical 官方的 React 集成包进行开发，不过 Lexical 本身是个框架无关的 JavaScript 框架，你也可以根据自己的需求使用其他框架。

样式方面，我们会使用 Tailwind CSS，另外 Lexical 没有提供任何 UI 组件，我们为了便于开发，会使用 Radix UI 作为基础组件，当然 Lexical 不限制你使用哪种 CSS 方案，可以根据自己的喜好换成其他的。

脚手架方面，我们使用 Rsbuild - 基于 Rspack 的 Web 构建工具，并且由于项目仅作为学习使用，不考虑将其发布为 npm 包，所以脚手架方面也不会做相关配置，如果你有相关需求，可以参考 Rspack 生态中的 Rslib 或社区其他方案。

## 创建项目

我们使用 Rsbuild 来创建一个空项目，并且使用 pnpm 作为包管理工具：

```bash
pnpm create rsbuild@latest
```

根据提示我们创建一个 React 和 TypeScript 的项目。

## 安装依赖

安装 Lexical、Lexical 的 React 集成包和其他必需的包：

```bash
pnpm add lexical @lexical/react @lexical/rich-text @lexical/selection @lexical/utils
```

安装 UI 相关依赖，如 Tailwind CSS、Radix UI 等：

```bash
# 作为 devDependencies
pnpm add tailwindcss @tailwindcss/typography tailwindcss-animate -D
# 作为 dependencies
pnpm add @radix-ui/react-select @radix-ui/react-toggle clsx lucide-react
```

依赖安装完成后需要进行简单的配置，Tailwind CSS 相关的配置方法参考 Rsbuild 的官方文档即可，另外要注意我们需要配置两个插件，`@tailwindcss/typography` 和 `tailwindcss-animate`，前者用于富文本的样式，后者用于给基础组件添加一些简单的动画效果。

另外 `clsx` 用于拼接 className，`lucide-react` 是一个图标库，界面上用到的图表都用它导入。

## 项目结构

我们的项目结构如下，和编辑器相关的内容都放在 `./src/Editor` 目录下，`components` 目录下是一些基础组件，如按钮、下拉框等，`plugins` 和 `nodes` 目录分别是 Lexical 中的对应概念的内容。

```bash
- src
   |- Editor
   |    |- components
   |    |- plugins
   |    |- nodes
   |    |- index.tsx
   |- App.tsx
   |- index.tsx
```

## 开发基础组件

目前需要用到的 ToggleButton 和 Select 组件，用于工具栏上的按钮和下拉选择，我们基于 Radix UI 和 Tailwind CSS 进行简单的封装，都放在 `./src/Editor/components` 目录下，这里就不做过多的介绍了，文章最后会提供代码链接，直接参考即可。

## 创建编辑器

我们先来创建一个最基本的编辑器，放在 `./src/Editor/index.tsx` 中：

```tsx
import { InitialConfigType, LexicalComposer } from '@lexical/react/LexicalComposer';
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin';
import { ContentEditable } from '@lexical/react/LexicalContentEditable';
import { LexicalErrorBoundary } from '@lexical/react/LexicalErrorBoundary';
import { AutoFocusPlugin } from '@lexical/react/LexicalAutoFocusPlugin';

const Editor = () => {
  const initialConfig: InitialConfigType = {
    namespace: 'editor',
    theme: {},
    nodes: [],
    onError: console.error,
  };

  return (
    <div>
      <LexicalComposer initialConfig={initialConfig}>
        <div>
          <RichTextPlugin
            contentEditable={<ContentEditable />}
            placeholder={<div>来写点什么吧</div>}
            ErrorBoundary={LexicalErrorBoundary}
          />
        </div>
        <AutoFocusPlugin />
      </LexicalComposer>
    </div>
  );
};

export default Editor;
```

上面的代码就创建了一个基础的编辑器，现在编辑器是没有样式的，先来解释一下这段代码：

LexicalComposer 是编辑器的根组件，其他所有内容都要在它下面，它本质上一个 React 的 Context，在其他代码中可以通过 `useLexicalComposerContext` 获取到编辑器实例。

RichTextPlugin 是一个富文本插件，也是我们这个编辑器的起点，它提供了富文本编辑的相关功能，如文本输入、删除、格式化等。

ContentEditable 是实际可以编辑的区域，本质上是一个 `contenteditable` 的 `div`，我们的编辑器是不需要 `input` 或 `textarea` 进行输入的，因此 placeholder 也是一个 HTML 元素，我们需要调整样式将它放在合适的位置，默认是在可编辑区域下方的。

AutoFocusPlugin 也是个 Lexical 插件，它可以将光标自动聚焦到可编辑区域，这样就可以直接输入，不需要鼠标点击一下了。

以上代码是需要添加一些基础的样式的，这里不做过多的介绍，直接参考代码即可。

## 插件

从上面最基础的编辑器就能看得出来，Lexical 的各个功能模块都是以插件为单位的，插件可以做任何事，Lexical 没有为插件提供特定的 API，而是可以使用任意 API 实现任意功能。

我们在基于 React 进行开发时，插件本质上也是一个 React 组件，直接包裹在 LexicalComposer 中。

## 开发工具栏

上面创建的编辑器是还没有任何用户可交互的内容的，富文本编辑器最常见的是交互形式是上方放一个工具栏，那我们也来开发一个。工具栏也是以插件的形式来实现，我们把代码放在 `./src/Editor/plugins/ToolbarPlugin` 目录下。

工具栏的功能如下：

- 调整文本的类型，包含段落、一级标题到六级标题、引用块；
- 调整文本的样式，包括加粗、斜体、下划线、删除线、代码、高亮、上标和下标；

### UI 部分

UI 部分比较简单，没有任何逻辑，直接看代码吧：

```tsx
const ToolbarPlugin = () => {
  const [editor] = useLexicalComposerContext();

  /** 文本类型 */
  const [blockType, setBlockType] = useState('paragraph');

  /** 文本格式 */
  const [isBold, setIsBold] = useState(false);
  // 省略一些，如斜体、下划线等

  const formatText = () => {
    // ...
  };

  const handleBlockTypeChange = () => {
    // ...
  };

  return (
    <div>
      <Select value={blockType} onValueChange={handleBlockTypeChange}>
        <SelectItem value="paragraph" label="段落" icon={ALargeSmallIcon} />
        <SelectSeparator />
        <SelectItem value="h1" label="一级标题" icon={Heading1Icon} />
        {/* 省略一些 */}
        <SelectSeparator />
        <SelectItem value="quote" label="引用块" icon={QuoteIcon} />
      </Select>
      <div>{/* 来个分割线 */}</div>
      <div>
        <ToggleButton
          icon={BoldIcon}
          aria-label="加粗"
          pressed={isBold}
          onPressedChange={() => formatText('bold')}
        />
        {/* 省略一些 */}
      </div>
    </div>
  );
};
```

### 获取选中文本状态

在设置文本格式之前，我们需要先知道当前选中的文本的状态。在 Lexical 中可以通过给编辑器实例注册 Update 监听器来监听状态的更新，并且插件本质上是个 React 组件，所以我们可以通过 useEffect 来注册和取消注册监听器。

```tsx
// 省略了上面已有的代码
const Editor = () => {
  const [editor] = useLexicalComposerContext();

  useEffect(() => {
    const unregister = editor.registerUpdateListener(({ editorState }) => {
      editorState.read(() => {
        // 编辑器状态更新后，都会执行到这里
      });
    });

    // 不要忘了取消注册监听器
    return unregister;
  }, []);
};
```

然后我们在 `editorState.read` 的回调函数中就可以读取当前选中文本的状态：

```tsx
// 这段代码放在 editorState.read 的回调函数中
const selection = $getSelection();
if (!$isRangeSelection(selection)) {
  return;
}

/** 读取文本格式 */
setIsBold(selection.hasFormat('bold'));

/** 读取文本类型 */
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

// 这里仅考虑了 Heading、Quote 和 Paragraph，还不够完善
const type = $isHeadingNode(element) ? element.getTag() : element.getType();
setBlockType(type);
```

解释一下上面的代码：

`$getSelection` 是 Lexical 内置的方法，可以读取获取当前选中的内容，返回一个 Selection 实例，我们这里需要用到 RangeSelection 来进行后续的操作，RangeSelection 本质上是对浏览器 DOM 的 Selection 和 Range API 的封装。

通过 RangeSelection 实例上的 `hasFormat` 方法就可以获取到当前选中的文本是否包含相应的格式，同一个 Selection 是可以包含多种格式的，比如同时是加粗和斜体。

获取文本类型就没那么简单了，比如在一级标题上选中了部分文字，这时我们需要获取的是这个一级标题的信息，也就是选中部分的父级，而不是选中部分本身，上述代码就是先获取父级元素，然后再进行判断，按照目前的需求这里只判断了 `$isHeadingNode`，后续还需要进行扩展。

### 设置文本格式

只需要调用 Lexical 内置的 `FORMAT_TEXT_COMMAND` 命令就可以设置文本格式了：

```tsx
const formatText = (type: TextFormatType) => {
  editor.dispatchCommand(FORMAT_TEXT_COMMAND, type);
};
```

### 设置文本类型

设置文本类型也是一样的，不过不同的类型需要调用不同的内置方法，需要进行一一处理：

```tsx
// 设置为段落
const formatParagraph = () => {
  editor.update(() => {
    const selection = $getSelection();
    if ($isRangeSelection(selection)) {
      $setBlocksType(selection, () => $createParagraphNode());
    }
  });
};

// 设置为标题
const formatHeading = (headingSize: HeadingTagType) => {
  editor.update(() => {
    const selection = $getSelection();
    $setBlocksType(selection, () => $createHeadingNode(headingSize));
  });
};

// 设置为引用
const formatQuote = () => {
  editor.update(() => {
    const selection = $getSelection();
    $setBlocksType(selection, () => $createQuoteNode());
  });
};
```

注意上面的操作都要放在 `editor.update` 回调函数中，这是唯一可以安全的修改编辑器状态的地方，可以把它理解为 React 的 `setState`。

至此一个简单的工具栏就开发完成了，把上面的代码合并完善一下，再补充一下样式，就是下面这个样子了。

![Lexical Editor](/static/lexical-editor/01.png)

## 总结

上面我们实现的功能虽然还比较简陋，但已经涉及到了 Lexical 大部分的重要概念，比如插件、Nodes、Selection 和 Command，现在只知道了怎么用它们，但还不知道它们具体是什么，另外你能注意到了 Lexical 内置的 API 有些是以 `$` 开头的，而有些又不是，这是为什么呢？下期就来详细讲讲。

本项目的完整代码可以从 [lexical-demo](https://github.com/pengtikui/lexical-demo) 仓库看到，本期的可以参考 [feat: 01](https://github.com/pengtikui/lexical-demo/commit/98db099890f1e17fea9863c885aab3f93599c617) commit，后续每期的更新也会是一个 commit。
