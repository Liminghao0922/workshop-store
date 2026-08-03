import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const workshops = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/workshops' }),
	schema: z.object({
		repo: z.string(),
		url: z.string().url(),
		format: z.enum(['hands-on', 'demo', 'workshop']),
		level: z.enum(['beginner', 'intermediate', 'advanced']),
		duration: z.string(),
		featured: z.boolean().default(false),
		services: z.array(z.string()),
		tags: z.array(z.string()),
		languages: z.array(z.enum(['ja', 'en', 'zh'])),
		updatedAt: z.coerce.date(),
		titleEn: z.string(),
		titleJa: z.string(),
		summaryEn: z.string(),
		summaryJa: z.string(),
		prerequisitesEn: z.array(z.string()),
		prerequisitesJa: z.array(z.string()),
		outcomesEn: z.array(z.string()),
		outcomesJa: z.array(z.string()),
		cautionEn: z.string().optional(),
		cautionJa: z.string().optional(),
	}),
});

export const collections = { workshops };
