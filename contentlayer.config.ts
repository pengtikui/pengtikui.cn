import { defineDocumentType, makeSource } from '@contentlayer/source-files';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeImgSize from 'rehype-img-size';
import remarkGfm from 'remark-gfm';
import remarkExternalLinks from 'remark-external-links';

export const Blog = defineDocumentType(() => ({
  name: 'Blog',
  filePathPattern: './blog/**/index.md',
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      required: true,
    },
    date: {
      type: 'string',
      required: true,
    },
    description: {
      type: 'string',
      required: true,
    },
    tags: {
      type: 'list',
      of: {
        type: 'string',
      },
      required: true,
    },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (blog) => `/${blog._raw.sourceFileDir}`,
    },
    slug: {
      type: 'string',
      resolve: (blog) => blog._raw.sourceFileDir.replace('blog/', ''),
    },
  },
}));

export const Weekly = defineDocumentType(() => ({
  name: 'Weekly',
  filePathPattern: './weekly/**/index.md',
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      required: true,
    },
    date: {
      type: 'string',
      required: true,
    },
    description: {
      type: 'string',
      required: true,
    },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (weekly) => `/${weekly._raw.sourceFileDir}`,
    },
    slug: {
      type: 'string',
      resolve: (weekly) => weekly._raw.sourceFileDir.replace('weekly/', ''),
    },
  },
}));

export default makeSource({
  contentDirPath: './content',
  documentTypes: [Blog, Weekly],
  mdx: {
    rehypePlugins: [
      [rehypePrettyCode, { theme: 'github-dark' }],
      [rehypeImgSize, { dir: 'public' }],
    ],
    remarkPlugins: [remarkGfm, remarkExternalLinks],
  },
});
