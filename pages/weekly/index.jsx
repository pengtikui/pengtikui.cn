import Link from 'next/link';
import Head from 'next/head';
import PageHead from '../../shared/PageHead';
import Banner from '../../shared/Banner';
import { getWeeklyList } from '../../lib/api';
import ContentItem from '../../shared/ContentItem';

export default function WeeklyIndex({ list }) {
  return (
    <>
      <PageHead title={`Paranoid_K's Weekly`} />
      <Banner>
        <h1 className="text-2xl font-medium">周刊</h1>
      </Banner>
      <div className="max-w-2xl mx-auto mt-12">
        {list?.map((content) => (
          <ContentItem key={content.slug} content={content} />
        ))}
      </div>
    </>
  );
}

export async function getStaticProps() {
  const list = getWeeklyList();
  return {
    props: { list: list.map(({ tags, ...rest }) => rest) },
  };
}
