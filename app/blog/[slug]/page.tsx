import { notFound } from 'next/navigation';
import { allBlogs } from 'contentlayer/generated';
import MDX from '@/components/MDX';

export const generateStaticParams = async () => allBlogs.map((item) => ({ slug: item.slug }));

export const generateMetadata = async ({ params }) => {
  const blog = allBlogs.find((item) => item.slug === params.slug);
  return {
    title: `${blog.title} - Paranoid_K's Blog`,
    description: blog.description,
    keywords: blog.tags.join(', '),
  };
};

export default async function Page({ params }) {
  const blog = allBlogs.find((item) => item.slug === params.slug);

  if (!blog) {
    return notFound();
  }

  return (
    <>
      <div className="flex flex-col items-center px-2 pt-12 pb-8">
        <h1 className="font-medium text-2xl">{blog.title}</h1>
        <p className="mt-2 text-gray-500 text-sm font-mono">{blog.date}</p>
      </div>
      <article className="px-2 prose max-w-none">
        <MDX code={blog.body.code} />
      </article>
    </>
  );
}
