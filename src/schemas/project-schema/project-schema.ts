import { z } from "astro:content";

export const projectSchema = z.object({
	name: z.string(),
	img: z.string().array(),
	github: z.string({required_error:"Este repositorio es privado"}).url().optional()
});