import { MetadataRoute } from 'next';
import { compareDesc, format } from 'date-fns';
import { allBlogs, allWeeklies } from 'contentlayer/generated';

export default function sitemap(): MetadataRoute.Sitemap {
  const allPost = [...allBlogs, ...allWeeklies]
    .sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))
    .map((item) => ({
      url: `https://pengtikui.cn${item.url}`,
      lastModified: format(new Date(item.date), 'yyyy-MM-dd'),
    }));

  return [
    {
      url: 'https://pengtikui.cn',
      lastModified: new Date(),
    },
    ...allPost,
  ];
}
