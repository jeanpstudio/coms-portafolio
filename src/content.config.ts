import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * @description Content Collections configuration.
 * Uses Zod for schema validation and Astro Loaders for performance.
 */

const blog = defineCollection({
  // New loader for Astro v5+ (supports fast rebuilds and MDX)
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/blog" }),
  // Schema validation for frontmatter
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
  }),
});

export const collections = { blog };
