import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
import { sub } from 'date-fns';

const post = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './content' }),
  schema: z.object({
    title: z.string(),
    date: z.date().transform((date) => sub(date, { hours: 8 })),
    description: z.string(),
    tags: z.array(z.string()).optional(),
  }),
});

export const collections = {
  post,
};
