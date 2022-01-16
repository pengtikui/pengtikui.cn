import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="zh-CN">
        <Head>
          <script
            async
            defer
            data-website-id="a4bc7e1a-0559-4a0b-bf29-5de3f4e87c71"
            src="https://umami-five-tau.vercel.app/umami.js"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
