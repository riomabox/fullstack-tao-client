import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import promptClient from "../api/Prompt-client";
import queryKeys from "./query-keys";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { type Prompt } from "../types/Prompt";

dayjs.extend(relativeTime);

// const emptyPrompt: Prompt = {
//         title: "",
//         answers: [],
//         answered: false,
// };

const formatPrompt = (prompt: Prompt) => {
        return {
                ...prompt,
                answers: prompt.answers.map((answer) => ({
                        ...answer,
                        createdAt: dayjs(answer.createdAt).fromNow(true),
                })),
        };
};

export default function usePrompt() {
        const queryClient = useQueryClient();

        // Fetching prompt data
        const { data: prompt } = useQuery({
                queryKey: queryKeys.prompt,
                queryFn: promptClient.getActivePrompt,
                // initialData: emptyPrompt,
                // select: (prompt) => formatPrompt(prompt),
                select: formatPrompt,
        });

        // Handling answer submission
        const mutation = useMutation({
                mutationFn: promptClient.createAnswer,
                onSuccess: () => {
                        // Invalidate and refetch
                        queryClient.invalidateQueries({ queryKey: queryKeys.prompt });
                },
        });

        const handleSubmit = (answer: { text: string; author: { name: string } }) => {
                mutation.mutate(answer);
        };

        return {
                prompt,
                handleSubmit,
        };
}
