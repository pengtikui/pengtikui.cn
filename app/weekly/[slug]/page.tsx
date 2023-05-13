import { MDXRemote } from 'next-mdx-remote/rsc';
import { getWeeklyBySlug } from '../../../lib/api';

export default async function Page({ params }) {
  const weekly = await getWeeklyBySlug(params.slug);

  return (
    <>
      <div className="flex flex-col items-center px-2 pt-12 pb-8">
        <h1 className="font-medium text-2xl">{weekly.title}</h1>
        <p className="mt-2 text-gray-500 text-sm">{weekly.date}</p>
      </div>
      <article className="px-2 prose">
        {/* @ts-expect-error Async Server Component */}
        <MDXRemote source={weekly.raw} />
      </article>
    </>
  );
}
