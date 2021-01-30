const needRedirectPostList = [
  'react-code-style-guide',
  'css-in-react',
  'webpack-auto-css-modules',
  'how-to-write-great-react',
  'dva.js-get-started',
  'koa2-get-started',
];

module.exports = {
  async redirects() {
    return needRedirectPostList.map((slug) => ({
      source: `/${slug}`,
      destination: `/post/${slug}`,
      permanent: true,
    }));
  },
};
