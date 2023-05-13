import { MDXRemote } from 'next-mdx-remote/rsc';
import { getBlogBySlug } from '../../../lib/api';

export default async function Page({ params }) {
  const blog = await getBlogBySlug(params.slug);

  return (
    <>
      <div className="flex flex-col items-center px-2 pt-12 pb-8">
        <h1 className="font-medium text-2xl">{blog.title}</h1>
        <p className="mt-2 text-gray-500 text-sm">{blog.date}</p>
      </div>
      <article className="px-2 prose ">
        <MDXRemote source={blog.raw} />
      </article>
    </>
  );
}
