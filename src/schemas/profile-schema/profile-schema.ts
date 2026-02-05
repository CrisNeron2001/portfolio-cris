import { z } from "astro:content";

export const profileSchema = z.object({
	title: z.string(),
	name: z.string()
});