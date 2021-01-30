import Link from 'next/link';
import PageHead from '../shared/PageHead';
import AuthorHeader from '../shared/AuthorHeader';
import { getPostList } from '../lib/api';

export default function Home({ posts }) {
  return (
    <>
      <PageHead />
      <AuthorHeader />
      <div className="mt-10">
        {posts?.map((post) => (
          <article key={post.slug} className="mb-8 last:mb-0">
            <h2 className="text-2xl dark:text-gray-100 font-semibold ">
              <Link href={`/post/${post.slug}`}>
                <a className="post-link">{post.title}</a>
              </Link>
            </h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              {post.date}
            </p>
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
