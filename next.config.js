const { withContentlayer } = require('next-contentlayer');

const needRedirectPostList = [
  'react-code-style-guide',
  'css-in-react',
  'webpack-auto-css-modules',
  'how-to-write-great-react',
  'dva.js-get-started',
  'koa2-get-started',
];

/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      ...needRedirectPostList.map((slug) => ({
        source: `/${slug}`,
        destination: `/post/${slug}`,
        permanent: true,
      })),
      {
        source: '/post/:path*',
        destination: '/blog/:path*',
        permanent: true,
      },
    ];
  },
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  experimental: {
    appDir: true,
  },
};

module.exports = withContentlayer(nextConfig);
