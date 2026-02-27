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

export const collections = {
    observations: observationsCollection,
};
