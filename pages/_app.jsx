import 'tailwindcss/tailwind.css';
import '../styles/globals.css';
import Link from 'next/link';

const navList = [
  {
    title: '首页',
    href: '/',
  },
  {
    title: '关于',
    href: '/about',
  },
];

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <nav className="nav flex items-center justify-center py-8 space-x-6">
        {navList.map((nav) => (
          <Link key={nav.href} href={nav.href}>
            <a className="nav-item px-0.5 py-0 dark:text-white">{nav.title}</a>
          </Link>
        ))}
      </nav>
      <Component {...pageProps} />
      <footer className="md:flex items-center justify-between mt-14 border-t dark:border-gray-700 py-8">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          <span>
            Copyright &copy; {new Date().getFullYear()}{' '}
            <Link href="/">
              <a>Paranoid_K</a>
            </Link>
          </span>
          <span> · </span>
          <a
            href="https://beian.miit.gov.cn"
            target="_blank"
            rel="noreferrer noopener"
          >
            鲁ICP备15010597号
          </a>
        </p>
        <a
          className="inline-block mt-2 text-black dark:text-white"
          href="https://vercel.com"
          target="_blank"
          rel="noreferrer noopener"
          title="Powered by Vercel"
        >
          <svg
            role="img"
            aria-label="Powered by Vercel"
            height="20"
            viewBox="0 0 283 64"
            fill="currentColor"
          >
            <path d="M37 0l37 64H0L37 0zM159.6 34c0-10.3-7.6-17.5-18.5-17.5s-18.5 7.2-18.5 17.5c0 10.1 8.2 17.5 19.5 17.5 6.2 0 11.8-2.3 15.4-6.5l-6.8-3.9c-2.1 2.1-5.2 3.4-8.6 3.4-5 0-9.3-2.7-10.8-6.8l-.3-.7h28.3c.2-1 .3-2 .3-3zm-28.7-3l.2-.6c1.3-4.3 5.1-6.9 9.9-6.9 4.9 0 8.6 2.6 9.9 6.9l.2.6h-20.2zM267.3 34c0-10.3-7.6-17.5-18.5-17.5s-18.5 7.2-18.5 17.5c0 10.1 8.2 17.5 19.5 17.5 6.2 0 11.8-2.3 15.4-6.5l-6.8-3.9c-2.1 2.1-5.2 3.4-8.6 3.4-5 0-9.3-2.7-10.8-6.8l-.3-.7H267c.2-1 .3-2 .3-3zm-28.7-3l.2-.6c1.3-4.3 5.1-6.9 9.9-6.9 4.9 0 8.6 2.6 9.9 6.9l.2.6h-20.2zM219.3 28.3l6.8-3.9c-3.2-5-8.9-7.8-15.8-7.8-10.9 0-18.5 7.2-18.5 17.5s7.6 17.5 18.5 17.5c6.9 0 12.6-2.8 15.8-7.8l-6.8-3.9c-1.8 3-5 4.7-9 4.7-6.3 0-10.5-4.2-10.5-10.5s4.2-10.5 10.5-10.5c3.9 0 7.2 1.7 9 4.7zM282.3 5.6h-8v45h8v-45zM128.5 5.6h-9.2L101.7 36 84.1 5.6h-9.3L101.7 52l26.8-46.4zM185.1 25.8c.9 0 1.8.1 2.7.3v-8.5c-6.8.2-13.2 4-13.2 8.7v-8.7h-8v33h8V36.3c0-6.2 4.3-10.5 10.5-10.5z"></path>
          </svg>
        </a>
      </footer>
    </>
  );
}
