import Link from 'next/link';
import TypeBadge from './TypeBadge';

export default function ContentItem({ content, showBadge }) {
  return (
    <article className="mb-12 px-4">
      <p className="mb-2 flex items-center space-x-2">
        {showBadge && <TypeBadge type={content.type} />}
        <span className="text-sm text-gray-400">{content.date}</span>
      </p>
      <h2 className="text-xl font-medium">
        <Link
          className="hover:underline underline-offset-4"
          href={`/${content.type}/${content.slug}`}
        >
          {content.title}
        </Link>
      </h2>
      <p className="mt-2 text-sm text-gray-600">{content.description}</p>
    </article>
  );
}
