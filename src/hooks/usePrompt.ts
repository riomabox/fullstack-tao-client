import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import promptClient from "../api/Prompt-client";
import queryKeys from "./query-keys";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

interface Answer {
        text: string;
        author: { name: string };
}

interface Prompt {
        title: string;
        answers: Answer[];
        answered: boolean;
}

const emptyPrompt: Prompt = {
        title: "",
        answers: [],
        answered: false,
};

export default function usePrompt() {
        const queryClient = useQueryClient();

        // Fetching prompt data
        const { data: prompt, isLoading } = useQuery({
                queryKey: queryKeys.prompt,
                queryFn: promptClient.getActivePrompt,
                initialData: emptyPrompt,
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
                prompt: {
                        ...prompt,
                        answers: prompt.answers.map((answer) => ({
                                ...answer,
                                createdAt: dayjs(answer.createdAt).fromNow(true),
                        })),
                },
                isLoading,
                handleSubmit,
        };
}
