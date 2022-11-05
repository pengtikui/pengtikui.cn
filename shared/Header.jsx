import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const menu = [
  { title: '首页', href: '/', delay: 'delay-[100ms]' },
  { title: '博客', href: '/blog', delay: 'delay-[150ms]' },
  { title: '周刊', href: '/weekly', delay: 'delay-[200ms]' },
  { title: '关于', href: '/about', delay: 'delay-[250ms]' },
];

const ToggleIcon = ({ icon: Icon, hidden }) => {
  return (
    <Icon
      className="w-5 h-5 absolute top-0 left-0 transition duration-150 opacity-100 scale-100 data-[hidden=true]:invisible data-[hidden=true]:opacity-0 data-[hidden=true]:scale-0"
      data-hidden={hidden}
    />
  );
};

export default function Header() {
  const [active, setActive] = useState(false);

  const toggle = () => setActive(!active);

  useEffect(() => {
    document.body.style.overflow = active ? 'hidden' : '';
  }, [active]);

  const handleLinkClick = () => {
    setActive(false);
  };

  return (
    <header className="py-4">
      <div className="max-w-2xl mx-auto px-4 flex items-center justify-between relative">
        <Link className="flex items-center" href="/">
          <Image className="rounded-full" src="/avatar.jpeg" alt="Avatar" width={38} height={38} />
          <p className="ml-2 font-bold text-xl text-gray-800">Paranoid_K</p>
        </Link>
        <nav className="hidden md:flex items-center tracking-wider">
          {menu.map((item) => (
            <Link
              key={item.href}
              className="flex items-center text-gray-800 hover:opacity-70 after:content-['/'] after:mx-3 after:text-gray-300 after:text-sm last:after:hidden"
              href={item.href}
            >
              {item.title}
            </Link>
          ))}
        </nav>
        <button className="visible md:hidden w-5 h-5 relative" onClick={toggle}>
          <ToggleIcon icon={Bars3Icon} hidden={active} />
          <ToggleIcon icon={XMarkIcon} hidden={!active} />
        </button>
        <Transition
          show={active}
          as="ul"
          className="flex flex-col space-y-2 p-4 absolute left-0 top-10 w-full h-screen bg-white"
          enter="transition duration-[50ms]"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition duration-[20ms] ease-in-out"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          {menu.map((item, index) => (
            <Transition.Child
              key={item.href}
              as="li"
              className="border-b border-gray-100 dela"
              enter={`transition duration-300 ${item.delay}`}
              enterFrom="opacity-0 -translate-x-5"
              enterTo="opacity-100 translate-x-0"
            >
              <Link
                className="block py-4 px-2 text-sm font-semibold text-gray-800"
                href={item.href}
                onClick={handleLinkClick}
              >
                {item.title}
              </Link>
            </Transition.Child>
          ))}
        </Transition>
      </div>
    </header>
  );
}
