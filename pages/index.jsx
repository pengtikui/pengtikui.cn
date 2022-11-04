import Link from 'next/link';
import PageHead from '../shared/PageHead';
import Banner from '../shared/Banner';
import { getAllList } from '../lib/api';
import ContentItem from '../shared/ContentItem';

export default function Home({ list }) {
  return (
    <>
      <PageHead title="Paranoid_K" />
      <Banner>
        <h1>#stayparanoid</h1>
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
  const list = getAllList();
  return {
    props: { list: list.map(({ tags, ...rest }) => rest) },
  };
}
