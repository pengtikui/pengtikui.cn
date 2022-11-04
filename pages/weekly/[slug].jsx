import Head from 'next/head';
import { MDXRemote } from 'next-mdx-remote';
import Banner from '../../shared/Banner';
import { getWeeklyBySlug, getWeeklySlugList } from '../../lib/api';

import 'prism-themes/themes/prism-vsc-dark-plus.css';

export default function WeeklyItem({ weekly }) {
  return (
    <div className="mt-6 max-w-2xl mx-auto px-4">
      <Head>
        <title>
          {weekly.title} - {`Paranoid_K's Weekly`}
        </title>
        <meta name="author" content="Paranoid_K" />
        <meta name="description" content={weekly.description} />
      </Head>
      <Banner>
        <h1 className="text-3xl font-medium dark:text-white">{weekly.title}</h1>
        <span className="mt-2 text-sm text-gray-400">{weekly.date}</span>
      </Banner>
      <article className="py-8 prose max-w-none">
        <MDXRemote {...weekly.content} />
      </article>
    </div>
  );
}

export async function getStaticPaths() {
  const list = getWeeklySlugList();

  return {
    paths: list.map((item) => ({
      params: { slug: item },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const weekly = await getWeeklyBySlug(params.slug);
  return { props: { weekly } };
}
