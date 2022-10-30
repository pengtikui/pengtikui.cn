import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="px-4 py-4 sticky top-0 z-10  backdrop-blur backdrop-filter bg-opacity-90">
      <div className="max-w-2xl mx-auto flex items-center justify-between">
        <Link className="flex items-center" href="/">
          <Image className="rounded-full" src="/avatar.jpeg" alt="Avatar" width={38} height={38} />
          <p className="ml-2 font-bold text-xl text-gray-800">Paranoid_K</p>
        </Link>
        <nav className="tracking-wider flex items-center">
          <Link className="hover:opacity-70" href="/">
            首页
          </Link>
          <span className="mx-3 text-gray-300 text-sm">/</span>
          <Link className="hover:opacity-70" href="/about">
            关于
          </Link>
        </nav>
      </div>
    </header>
  );
}
