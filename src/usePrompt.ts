import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import promptClient from "./Prompt-client";

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
                queryKey: ["prompt"],
                queryFn: promptClient.getActivePrompt,
                initialData: emptyPrompt,
        });

        // Handling answer submission
        const mutation = useMutation({
                mutationFn: promptClient.createAnswer,
                onSuccess: () => {
                        // Invalidate and refetch
                        queryClient.invalidateQueries({ queryKey: ["prompt"] });
                },
        });

        const handleSubmit = (answer: { text: string; author: { name: string } }) => {
                mutation.mutate(answer);
        };

        return {
                prompt,
                isLoading,
                handleSubmit,
        };
}
