import Link from 'next/link';
import Image from 'next/image';
import 'tailwindcss/tailwind.css';
import Header from '../shared/Header';
import Footer from '../shared/Footer';

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
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
