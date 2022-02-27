import Head from 'next/head';
import { MDXRemote } from 'next-mdx-remote';
import Banner from '../../shared/Banner';
import { getPostBySlug, getPostSlugList } from '../../lib/api';

import 'prism-themes/themes/prism-vsc-dark-plus.css';

export default function PostItem({ post }) {
  return (
    <div className="mt-6 max-w-2xl mx-auto px-4">
      <Head>
        <title>{post.title} - Paranoid_K</title>
        <meta name="author" content="Paranoid_K" />
        <meta name="description" content={post.description} />
        <meta name="keywords" content={post.tags} />
      </Head>
      <Banner>
        <h1 className="text-3xl font-medium dark:text-white">{post.title}</h1>
        <span className="mt-2 text-sm text-gray-400">{post.date}</span>
      </Banner>
      <article className="py-8 prose max-w-none">
        <MDXRemote {...post.content} />
      </article>
    </div>
  );
}

export async function getStaticPaths() {
  const posts = getPostSlugList();

  return {
    paths: posts.map((post) => ({
      params: { slug: post },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const post = await getPostBySlug(params.slug);
  return { props: { post } };
}
