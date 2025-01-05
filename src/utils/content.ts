import type { CollectionEntry } from 'astro:content';
import { format } from 'date-fns';

export const extraList = (list: CollectionEntry<'post'>[], count?: number) => {
  return list.sort((a, b) => b.data.date.getTime() - a.data.date.getTime())
    .slice(0, count)
    .map((item) => ({
      title: item.data.title,
      date: format(item.data.date, 'yyyy-MM-dd'),
      url: `/${item.id}`,
    }));
};