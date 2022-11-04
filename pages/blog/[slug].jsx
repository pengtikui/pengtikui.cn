import Head from 'next/head';
import { MDXRemote } from 'next-mdx-remote';
import Banner from '../../shared/Banner';
import { getBlogBySlug, getBlogSlugList } from '../../lib/api';

import 'prism-themes/themes/prism-vsc-dark-plus.css';

export default function BlogItem({ blog }) {
  return (
    <div className="mt-6 max-w-2xl mx-auto px-4">
      <Head>
        <title>{blog.title} - Paranoid_K</title>
        <meta name="author" content="Paranoid_K" />
        <meta name="description" content={blog.description} />
        <meta name="keywords" content={blog.tags} />
      </Head>
      <Banner>
        <h1 className="text-3xl font-medium dark:text-white">{blog.title}</h1>
        <span className="mt-2 text-sm text-gray-400">{blog.date}</span>
      </Banner>
      <article className="py-8 prose max-w-none">
        <MDXRemote {...blog.content} />
      </article>
    </div>
  );
}

export async function getStaticPaths() {
  const blogs = getBlogSlugList();

  return {
    paths: blogs.map((blog) => ({
      params: { slug: blog },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const blog = await getBlogBySlug(params.slug);
  return { props: { blog } };
}
