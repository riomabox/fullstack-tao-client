import Layout from "./layout/Layout";
import promptClient from "./Prompt-client";
import { AnswerList } from "./components/AnswerList";
import { AnswerForm } from "./components/AnswerForm";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

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

function App() {
        const queryClient = useQueryClient();

        // Fetching prompt data
        const {
                data: prompt,
                isLoading,
                isError,
        } = useQuery({
                queryKey: "prompt",
                queryFn: promptClient.getActivePrompt,
                initialData: emptyPrompt,
        });

        // Handling answer submission
        const mutation = useMutation({
                mutationFn: promptClient.createAnswer,
                onSuccess: () => {
                        // Invalidate and refetch
                        queryClient.invalidateQueries("prompt");
                },
        });

        const handleSubmit = (answer) => {
                mutation.mutate(answer);
        };

        return (
                <Layout>
                        <section className="text-center max-w-3xl mx-auto mb-8">
                                <h1 className="text-4xl font-display font-extrabold text-gray-900 mb-4">
                                        {prompt.title || "Welcome to ClassyApp"}
                                </h1>
                                <p className="text-gray-600">A clean, elegant UI built with Tailwind CSS.</p>
                        </section>

                        {isLoading ? (
                                <div className="text-center py-20">Loading...</div>
                        ) : prompt.answered ? (
                                <AnswerList answers={prompt.answers} />
                        ) : (
                                <AnswerForm onSubmit={handleSubmit} />
                        )}
                </Layout>
        );
}

export default App;
