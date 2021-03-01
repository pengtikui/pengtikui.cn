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
        <p className="text-sm text-gray-600 dark:text-gray-400 flex flex-col md:flex-row">
          <span>
            Copyright &copy; {new Date().getFullYear()}{' '}
            <Link href="/">
              <a>Paranoid_K</a>
            </Link>
          </span>
          <span className="hidden md:block mx-1">·</span>
          <a
            href="https://beian.miit.gov.cn"
            target="_blank"
            rel="noreferrer noopener"
            className="mt-1 md:mt-0"
          >
            鲁ICP备15010597号-1
          </a>
        </p>
        <a
          className="inline-block text-black dark:text-white mt-2 md:mt-0"
          href="https://vercel.com"
          target="_blank"
          rel="noreferrer noopener"
          title="Powered by Vercel"
        >
          <img
            src="/powered-by-vercel.svg"
            alt="Powered by Vercel"
            className="h-8"
          />
        </a>
      </footer>
    </>
  );
}
