import { getCollection, type CollectionEntry } from 'astro:content';
import { format } from 'date-fns';

export type Post = CollectionEntry<'post'>;

const byDateDesc = (a: Post, b: Post) => b.data.date.getTime() - a.data.date.getTime();

/** 博客文章，按日期倒序 */
export const getBlogPosts = async () => {
  const list = await getCollection('post', ({ id }) => id.startsWith('blog/'));
  return list.sort(byDateDesc);
};

/** 周刊，按日期倒序 */
export const getWeeklyPosts = async () => {
  const list = await getCollection('post', ({ id }) => id.startsWith('weekly/'));
  return list.sort(byDateDesc);
};

export const getSlug = (post: Post) => post.id.split('/').slice(1).join('/');

export const getUrl = (post: Post) => `/${post.id}`;

const WEEKLY_TITLE = /^第\s*(\d+)\s*期\s*[：:]\s*(.+)$/;

/** 「第81期：JavaScript 生态 2024」→ { issue: 81, title: 'JavaScript 生态 2024' } */
export const parseWeeklyTitle = (post: Post) => {
  const match = post.data.title.match(WEEKLY_TITLE);
  if (match) {
    return { issue: Number(match[1]), title: match[2].trim() };
  }
  const fromId = post.id.match(/issue-(\d+)/)?.[1];
  return { issue: fromId ? Number(fromId) : undefined, title: post.data.title };
};

/** 按年份分组，保持原有顺序 */
export const groupByYear = <T>(items: T[], getDate: (item: T) => Date) => {
  const groups = new Map<number, T[]>();
  for (const item of items) {
    const year = getDate(item).getFullYear();
    const group = groups.get(year);
    if (group) {
      group.push(item);
    } else {
      groups.set(year, [item]);
    }
  }
  return [...groups.entries()].map(([year, list]) => ({ year, items: list }));
};

export const formatDate = (date: Date, pattern = 'yyyy.MM.dd') => format(date, pattern);

/** 2024 年 12 月 8 日 */
export const formatLongDate = (date: Date) => format(date, 'yyyy 年 M 月 d 日');
