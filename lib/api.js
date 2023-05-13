import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import dayjs from 'dayjs';

const contentDirectory = path.join(process.cwd(), 'content');

export const getContentSlugList = (type) => fs.readdirSync(path.join(contentDirectory, type));

export const getBlogSlugList = () => getContentSlugList('blog');
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

export const getContentList = (type) => {
  const slugs = getContentSlugList(type);
  return slugs
    .map((slug) => getContentSummaryBySlug(type, slug))
    .sort((a, b) => (dayjs(a.date).isBefore(dayjs(b.date)) ? 1 : -1));
};

export const getBlogList = () => getContentList('blog');
export const getWeeklyList = () => getContentList('weekly');

export const getShortBlogList = () => getBlogList().slice(0, 5);
export const getShortWeeklyList = () => getWeeklyList().slice(0, 5);

export const getAllList = () => {
  const blogList = getBlogList();
  const weeklyList = getWeeklyList();
  return [...blogList, ...weeklyList].sort((a, b) =>
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
    tags: data.tags || [],
    raw: content,
  };
};

export const getBlogBySlug = (slug) => getContentBySlug('blog', slug);
export const getWeeklyBySlug = (slug) => getContentBySlug('weekly', slug);
