import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import dayjs from 'dayjs';
import { serialize } from 'next-mdx-remote/serialize';
import prism from 'remark-prism';
import externalLinks from 'remark-external-links';

const contentDirectory = path.join(process.cwd(), 'content');

export const getContentSlugList = (type) => fs.readdirSync(path.join(contentDirectory, type));

export const getPostSlugList = () => getContentSlugList('post');
export const getWeeklySlugList = () => getContentSlugList('weekly');

export const getContentSummaryBySlug = (type, slug) => {
  const fileContent = fs.readFileSync(path.join(contentDirectory, type, slug, 'index.md'), 'utf-8');
  const { data } = matter(fileContent);
  return {
    type,
    title: data.title,
    description: data.description,
    tags: data.tags,
    date: dayjs(data.date).format('YYYY-MM-DD'),
    slug,
  };
};

export const getPostSummaryBySlug = (slug) => getContentSummaryBySlug('post', slug);
export const getWeeklySummaryBySlug = (slug) => getContentSummaryBySlug('weekly', slug);

export const getContentList = (type) => {
  const slugs = getContentSlugList(type);
  return slugs
    .map((slug) => getPostSummaryBySlug(slug))
    .sort((a, b) => (dayjs(a.date).isBefore(dayjs(b.date)) ? 1 : -1));
};

export const getPostList = () => getContentList('post');
export const getWeeklyList = () => getContentList('weekly');

export const getAllList = () => {
  const postList = getPostList();
  const weeklyList = getWeeklyList();
  return [...postList, ...weeklyList].sort((a, b) =>
    dayjs(a.date).isBefore(dayjs(b.date)) ? 1 : -1
  );
};

export const getContentBySlug = async (type, slug) => {
  const fileContent = fs.readFileSync(path.join(contentDirectory, type, slug, 'index.md'), 'utf-8');
  const { data, content } = matter(fileContent);
  return {
    title: data.title,
    date: dayjs(data.date).format('YYYY-MM-DD'),
    description: data.description,
    tags: data.tags,
    content: await serialize(content, {
      mdxOptions: { remarkPlugins: [prism, externalLinks] },
    }),
  };
};

export const getPostBySlug = (slug) => getContentBySlug('post', slug);
export const getWeeklyBySlug = (slug) => getContentBySlug('weekly', slug);
