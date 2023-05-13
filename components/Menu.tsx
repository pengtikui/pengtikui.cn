import { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const LIST = [
  {
    title: '首页',
    href: '/',
  },
  {
    title: '博客',
    href: '/blog',
  },
  {
    title: '周刊',
    href: '/weekly',
  },
  // {
  //   title: '关于',
  //   href: '/about',
  // },
];

const Menu: FC = () => {
  return (
    <nav className="flex items-center justify-between pt-6 px-2">
      <Link href="/" className="flex shadow-sm rounded-full overflow-hidden border">
        <Image src="/avatar.jpeg" alt="Paranoid_K" width={34} height={34} />
      </Link>
      <ul className="flex px-3 bg-white rounded-full shadow-lg shadow-gray-100 ring-1 ring-gray-100">
        {LIST.map((item) => (
          <li
            key={item.title}
            className="px-3 py-2 text-sm text-gray-700 transition-colors hover:text-black"
          >
            <Link href={item.href}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Menu;
