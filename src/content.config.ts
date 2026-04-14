import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * @description Content Collections configuration.
 * Uses Zod for schema validation and Astro Loaders for performance.
 * 
 * PARA EDITAR: Si quieres añadir campos nuevos a tus proyectos (ej. "Ubicación"), 
 * añádelos al esquema 'projects' de abajo.
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

const projects = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    impactPhrase: z.string(),
    context: z.string(),
    challenge: z.string(),
    solution: z.string().optional(),
    storyImage: z.string().optional(),
    highlightQuote: z.string().optional(),
    role: z.string(),
    tools: z.array(z.string()),
    year: z.string(),
    heroImage: z.string(),
    metrics: z.array(z.object({
      label: z.string(),
      value: z.string(),
      description: z.string().optional(),
    })),
    strategy: z.object({
      title: z.string().optional(),
      description: z.string().optional(),
      images: z.array(z.string()).optional(),
      imageCaptions: z.array(z.string()).optional(),
      galleryQuote: z.string().optional(),
    }).optional(),
    tech: z.object({
      title: z.string().optional(),
      description: z.string().optional(),
      features: z.array(z.object({
        title: z.string(),
        description: z.string(),
      })).optional(),
      techQuote: z.string().optional(),
    }).optional(),
  }),
});

export const collections = { blog, projects };
