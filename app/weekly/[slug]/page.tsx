import { notFound } from 'next/navigation';
import { allWeeklies } from 'contentlayer/generated';
import MDX from '@/components/MDX';

export const generateStaticParams = async () => allWeeklies.map((item) => ({ slug: item.slug }));

export const generateMetadata = async ({ params }) => {
  const weekly = allWeeklies.find((item) => item.slug === params.slug);
  return {
    title: `${weekly.title} - Paranoid_K's Weekly`,
    description: weekly.description,
  };
};

export default async function Page({ params }) {
  const weekly = allWeeklies.find((item) => item.slug === params.slug);

  if (!weekly) {
    return notFound();
  }

  return (
    <>
      <div className="flex flex-col items-center px-2 pt-12 pb-8">
        <h1 className="font-medium text-2xl">{weekly.title}</h1>
        <p className="mt-2 text-gray-500 text-sm font-mono">{weekly.date}</p>
      </div>
      <article className="px-2 prose max-w-none">
        <MDX code={weekly.body.code} />
      </article>
    </>
  );
}
