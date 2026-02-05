import { z } from "astro:content";

export const contactSchema = z.object({
	title: z.string(),
});