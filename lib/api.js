import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import dayjs from 'dayjs';
import renderToString from 'next-mdx-remote/render-to-string';
import prism from 'remark-prism';
import externalLinks from 'remark-external-links';

const contentDirectory = path.join(process.cwd(), 'content');
const postDirectory = path.join(contentDirectory, 'post');

export function getPostSlugList() {
  return fs.readdirSync(postDirectory);
}

export function getPostSummaryBySlug(slug) {
  const postPath = path.join(postDirectory, slug, 'index.mdx');
  const fileContent = fs.readFileSync(postPath, 'utf-8');
  const { data } = matter(fileContent);
  return {
    title: data.title,
    date: dayjs(data.date).format('YYYY-MM-DD'),
    slug,
  };
}

export function getPostList() {
  const slugs = getPostSlugList();
  return slugs
    .map((slug) => getPostSummaryBySlug(slug))
    .sort((a, b) => (dayjs(a.date).isBefore(dayjs(b.date)) ? 1 : -1));
}

export async function getPostBySlug(slug) {
  const postPath = path.join(postDirectory, slug, 'index.mdx');
  const fileContent = fs.readFileSync(postPath, 'utf-8');
  const { data, content } = matter(fileContent);
  return {
    title: data.title,
    date: dayjs(data.date).format('YYYY-MM-DD'),
    description: data.description,
    tags: data.tags,
    content: await renderToString(content, {
      mdxOptions: { remarkPlugins: [prism, externalLinks] },
    }),
  };
}
