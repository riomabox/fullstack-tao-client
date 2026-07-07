import { z } from "zod";
import { type Prompt } from "../types/Prompt";

export const promptSchema = z.object({
        title: z.string(),
        answers: z.array(
                z.object({
                        text: z.string(),
                        author: z.object({
                                name: z.string(),
                        }),
                        createdAt: z.string(),
                }),
        ),
        answered: z.boolean(),
}) as unknown as z.ZodType<Prompt>;
