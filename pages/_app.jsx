import 'tailwindcss/tailwind.css';
import Header from '../shared/Header';
import Footer from '../shared/Footer';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
