import Head from 'next/head';

export default function PageHead({ title }) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="author" content="Paranoid_K" />
      <meta
        name="description"
        content="Paranoid_K 的个人站点，关于前端、JavaScript 等"
      />
      <meta
        name="keywords"
        content="Paranoid_K, pengtikui, HTML, CSS, JavaScript, Node.js, React"
      />
    </Head>
  );
}
