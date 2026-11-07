import { defineHastPlugin } from 'satteri';

/** http(s):// 开头的绝对地址，或 // 开头的协议相对地址 */
const EXTERNAL_URL = /^(?:https?:)?\/\//i;

/** Markdown 中的外部链接在新标签页打开，并且不传递来源与权重 */
export const externalLinks = defineHastPlugin({
  name: 'external-links',
  element: {
    filter: ['a'],
    visit(node, ctx) {
      const href = node.properties?.href;
      if (typeof href !== 'string' || !EXTERNAL_URL.test(href)) return;

      ctx.setProperty(node, 'rel', ['nofollow', 'noopener', 'noreferrer']);
      ctx.setProperty(node, 'target', '_blank');
    },
  },
});
