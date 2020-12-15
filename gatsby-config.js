module.exports = {
  siteMetadata: {
    title: `Paranoid_K's Blog`,
    author: 'Paranoid_K',
    description: `Paranoid_K's Personal Blog`,
    siteUrl: 'https://pengtikui.cn',
  },
  pathPrefix: '/',
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/blog`,
        name: 'blog',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/assets`,
        name: 'assets',
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-mermaid',
            options: {
              language: 'graph',
            },
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: 'gatsby-remark-responsive-iframe',
            options: {
              wrapperStyle: 'margin-bottom: 1.0725rem',
            },
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
          {
            resolve: 'gatsby-remark-external-links',
            options: {
              target: '_blank',
            },
          },
        ],
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-74390371-1',
      },
    },
    'gatsby-plugin-feed',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography',
      },
    },
    {
      resolve: 'gatsby-plugin-tags',
      options: {
        templatePath: `${__dirname}/src/templates/tags.js`,
      },
    },
    {
      resolve: 'gatsby-plugin-no-sourcemaps',
    },
  ],
};
