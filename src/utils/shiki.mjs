// 代码块的高亮主题与外框，配色和结构来自改版设计稿的「排版 / 代码块」

/** 极简浅色主题：只区分关键字、字符串和注释 */
export const paperTheme = {
  name: 'paper',
  type: 'light',
  colors: {
    'editor.background': '#fafafa',
    'editor.foreground': '#262626',
  },
  tokenColors: [
    {
      scope: ['comment', 'punctuation.definition.comment'],
      settings: { foreground: '#999999' },
    },
    {
      scope: [
        'keyword',
        'storage',
        'storage.type',
        'storage.modifier',
        'constant.language',
        'variable.language',
        'keyword.operator.new',
        'keyword.operator.expression',
        'keyword.control',
        // shell 中的命令名，如 pnpm、npm
        'entity.name.command',
      ],
      settings: { foreground: '#9a3159' },
    },
    {
      scope: ['string', 'string.quoted', 'string.template', 'punctuation.definition.string'],
      settings: { foreground: '#3e7049' },
    },
    {
      scope: [
        'keyword.operator',
        'punctuation',
        'storage.type.function.arrow',
        // shell 命令的参数和选项保持默认色
        'string.unquoted.argument',
        'constant.other.option',
        // JSON 的键名不当作字符串着色
        'support.type.property-name',
      ],
      settings: { foreground: '#262626' },
    },
  ],
};

const PLAIN_LANGS = new Set(['plaintext', 'plain', 'text', 'txt']);

const copyIcon = {
  type: 'element',
  tagName: 'svg',
  properties: {
    xmlns: 'http://www.w3.org/2000/svg',
    width: '12',
    height: '12',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: '2',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    ariaHidden: 'true',
  },
  children: [
    {
      type: 'element',
      tagName: 'rect',
      properties: { x: '8', y: '8', width: '14', height: '14', rx: '2', ry: '2' },
      children: [],
    },
    {
      type: 'element',
      tagName: 'path',
      properties: { d: 'M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2' },
      children: [],
    },
  ],
};

/** 把 <pre> 包进带语言标签和复制按钮的 <figure> */
export const codeBlockFrame = {
  name: 'code-block-frame',
  root(root) {
    const pre = root.children.find((node) => node.type === 'element' && node.tagName === 'pre');
    if (!pre) return;

    const lang = this.options.lang ?? '';
    const label = PLAIN_LANGS.has(lang) ? '' : lang;

    root.children = [
      {
        type: 'element',
        tagName: 'figure',
        properties: { className: ['code-block'] },
        children: [
          {
            type: 'element',
            tagName: 'figcaption',
            properties: { className: ['code-block-header'] },
            children: [
              {
                type: 'element',
                tagName: 'span',
                properties: { className: ['code-block-lang'] },
                children: [{ type: 'text', value: label }],
              },
              {
                type: 'element',
                tagName: 'button',
                properties: { type: 'button', className: ['code-block-copy'], ariaLabel: '复制代码' },
                children: [
                  copyIcon,
                  {
                    type: 'element',
                    tagName: 'span',
                    properties: { className: ['code-block-copy-text'] },
                    children: [{ type: 'text', value: '复制' }],
                  },
                ],
              },
            ],
          },
          pre,
        ],
      },
    ];
  },
};
