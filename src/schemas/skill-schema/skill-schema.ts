import { z } from "astro:content";

export const skillSchema = z.object({
	title: z.string()
});