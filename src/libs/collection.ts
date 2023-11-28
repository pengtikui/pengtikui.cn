import { getCollection } from 'astro:content';
import { compareDesc } from 'date-fns';

export const getCollectionList = async (collection: 'blog' | 'weekly') => {
  const collections = await getCollection(collection);
  return collections
    .sort((a, b) => compareDesc(new Date(a.data.date), new Date(b.data.date)))
    .map((item) => ({
      slug: item.slug,
      url: `/${collection}/${item.slug}`,
      title: item.data.title,
      date: item.data.date.toISOString().slice(0, 10),
    }));
};
