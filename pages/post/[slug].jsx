import Head from 'next/head';
import 'prism-themes/themes/prism-vsc-dark-plus.css';
import hydrate from 'next-mdx-remote/hydrate';
import { getPostBySlug, getPostSlugList } from '../../lib/api';

export default function PostItem({ post }) {
  const content = hydrate(post.content, { components: {} });

  return (
    <div className="mt-6 max-w-3xl mx-auto">
      <Head>
        <title>{post.title} - Paranoid_K</title>
        <meta name="author" content="Paranoid_K" />
        <meta name="description" content={post.description} />
        <meta name="keywords" content={post.tags} />
      </Head>
      <header className="mb-8">
        <h1 className="text-3xl dark:text-white font-bold">{post.title}</h1>
        <span className="block text-sm text-gray-500 dark:text-gray-400 mt-1">
          {post.date}
        </span>
      </header>
      <article className="prose dark:prose-light max-w-none">{content}</article>
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
