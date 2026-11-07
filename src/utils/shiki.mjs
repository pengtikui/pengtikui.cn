// 代码块的高亮主题，配色来自改版设计稿的「排版 / 代码块」

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
