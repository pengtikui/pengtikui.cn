import { defineDocumentType, makeSource } from 'contentlayer2/source-files';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeImgSize from 'rehype-img-size';
import remarkGfm from 'remark-gfm';
import remarkExternalLinks from 'remark-external-links';

export const Blog = defineDocumentType(() => ({
  name: 'Blog',
  filePathPattern: './blog/**.md',
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
      resolve: (blog) => `/blog/${blog._raw.sourceFileName.replace('.md', '')}`,
    },
    slug: {
      type: 'string',
      resolve: (blog) => blog._raw.sourceFileName.replace('.md', ''),
    },
  },
}));

export const Weekly = defineDocumentType(() => ({
  name: 'Weekly',
  filePathPattern: './weekly/**.md',
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
      resolve: (weekly) => `/weekly/${weekly._raw.sourceFileName.replace('.md', '')}`,
    },
    slug: {
      type: 'string',
      resolve: (weekly) => weekly._raw.sourceFileName.replace('.md', ''),
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
    remarkPlugins: [remarkGfm as any, remarkExternalLinks as any],
  },
});
