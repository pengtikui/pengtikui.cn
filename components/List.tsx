import { FC } from 'react';
import Link from 'next/link';

export interface ListProps {
  data: any[];
  className?: string;
}

const List: FC<ListProps> = ({ data, className }) => {
  return (
    <ul className={className}>
      {data.map((item) => (
        <li
          key={item.slug}
          className="px-3 py-2 mt-1 rounded-md transition-colors hover:bg-gray-100"
        >
          <Link
            href={`/${item.type}/${item.slug}`}
            className="flex items-center justify-between space-x-2"
          >
            <span className="flex-grow text-gray-900 line-clamp-1">{item.title}</span>
            <span className="flex-shrink-0 text-sm text-gray-400">{item.date}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default List;
