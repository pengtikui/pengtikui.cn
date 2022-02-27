import Link from 'next/link';
import PageHead from '../shared/PageHead';
import Banner from '../shared/Banner';
import { getPostList } from '../lib/api';

export default function Home({ posts }) {
  return (
    <>
      <PageHead title="Paranoid_K" />
      <Banner>
        <h1>#stayparanoid</h1>
      </Banner>
      <div className="max-w-2xl mx-auto px-4 pt-10 pb-4">
        {posts?.map((post) => (
          <article key={post.slug} className="mb-14 last:mb-10">
            <p className="text-sm text-gray-400 mb-2">{post.date}</p>
            <h2 className="text-xl">
              <Link href={`/post/${post.slug}`}>
                <a className="hover:underline underline-offset-4">
                  {post.title}
                </a>
              </Link>
            </h2>
            <p className="mt-2 text-sm text-gray-600">{post.description}</p>
          </article>
        ))}
      </div>
    </>
  );
}

export async function getStaticProps() {
  const posts = getPostList();
  return {
    props: { posts },
  };
}
