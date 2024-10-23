import { Metadata } from 'next';
import Script from 'next/script';
import { Inter } from 'next/font/google';
import Menu from '../components/Menu';
import './globals.css';
import Footer from '../components/Footer';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Paranoid_K',
  description: 'Paranoid_K 的个人站点，关于前端、JavaScript 等',
  authors: [{ name: 'Paranoid_K', url: 'https://pengtikui.cn' }],
  other: {
    'baidu-site-verification': 'codeva-vCZMO1BPzq',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-CN" className={inter.variable}>
      <body className="max-w-3xl mx-auto px-2">
        <Menu />
        {children}
        <Footer />
      </body>
      <Script src="https://cdn.splitbee.io/sb.js" />
    </html>
  );
}
