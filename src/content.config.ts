import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const pages = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/pages" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    quote: z.string(),
  }),
});

const courses = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/courses" }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    description: z.string(),
    featured: z.boolean().default(false),
    provider: z.string(),
    bookingUrl: z.url(),
    flyer: z.string(),
    flyerAlt: z.string(),
    order: z.number().default(0),
  }),
});

const recommendations = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/empfehlungen" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    link: z.url().optional(),
    course: z.string().optional(),
    draft: z.boolean().default(true),
  }),
});

const legal = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/rechtliches" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    status: z.string(),
  }),
});

export const collections = { pages, courses, recommendations, legal };
