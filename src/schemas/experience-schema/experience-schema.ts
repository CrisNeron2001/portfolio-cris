import { z } from "astro:content";

export const experienceSchema = z.object({
	title: z.string(),
	name: z.string(),
	img: z.string().array()
});