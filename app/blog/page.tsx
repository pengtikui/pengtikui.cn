import { Lato } from 'next/font/google';
import List from '../../components/List';
import { getBlogList } from '../../lib/api';

const font = Lato({
  weight: '700',
  subsets: ['latin'],
});

export default async function Page() {
  const blog = getBlogList();
  return (
    <>
      <div className="pt-10 pb-6 px-3">
        <h1
          className={`flex flex-col text-3xl text-black leading-normal tracking-wider ${font.className}`}
        >
          博客 / Blog
        </h1>
      </div>
      <List data={blog} />
    </>
  );
}
