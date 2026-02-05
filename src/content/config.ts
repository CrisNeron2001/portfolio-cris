import { contactSchema } from "@schemas/contact-schema/contact-schema";
import { experienceSchema } from "@schemas/experience-schema/experience-schema";
import { profileSchema } from "@schemas/profile-schema/profile-schema";
import { projectSchema } from "@schemas/project-schema/project-schema";
import { skillSchema } from "@schemas/skill-schema/skill-schema";
import { defineCollection } from "astro:content";

const profiles = defineCollection({ schema: profileSchema });
const projects = defineCollection({ schema: projectSchema });
const skills = defineCollection({ schema: skillSchema });
const experiences = defineCollection({ schema: experienceSchema });
const contacts = defineCollection({ schema: contactSchema });

export const collections = { 
	profiles, 
	projects, 
	skills, 
	experiences, 
	contacts 
};