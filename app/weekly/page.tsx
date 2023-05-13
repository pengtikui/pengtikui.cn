import { Metadata } from 'next';
import { Lato } from 'next/font/google';
import { compareDesc } from 'date-fns';
import List from '@/components/List';
import { allWeeklies } from 'contentlayer/generated';

const font = Lato({
  weight: '700',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: `Paranoid_K's Weekly`,
};

export default async function Page() {
  const weeklyList = allWeeklies.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)));

  return (
    <>
      <div className="pt-10 pb-6 px-3">
        <h1
          className={`flex flex-col text-3xl text-black leading-normal tracking-wider ${font.className}`}
        >
          周刊 / Weekly
        </h1>
        <p className="mt-4 text-gray-600 text-sm leading-relaxed">
          我会在这分享近期看到的、学到的新奇好玩的东西或技术，内容包括但不仅限于前端技术、设计和 TMT
          行业资讯等。
        </p>
      </div>
      <List data={weeklyList} />
    </>
  );
}
