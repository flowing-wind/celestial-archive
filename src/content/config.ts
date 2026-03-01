import { z, defineCollection } from "astro:content";

const observationsCollection = defineCollection({
    type: "content",
    schema: z.object({
        title: z.string(),
        date: z.date(),
        author: z.string().default("fuuraiko"),
        description: z.string(),
        constellation: z.string(),
    }),
});

const aboutCollection = defineCollection({
    type: "content",
    schema: z.object({
        title: z.string(),
        date: z.date(),
    }),
});

export const collections = {
    observations: observationsCollection,
    about: aboutCollection,
};
