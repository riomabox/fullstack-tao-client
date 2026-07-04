import { useEffect, useState } from "react";
import Layout from "./layout/Layout";
import promptClient from "./Prompt-client";
import { AnswerList } from "./components/AnswerList";
import { AnswerForm } from "./components/AnswerForm";

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
        const [prompt, setPrompt] = useState<Prompt>(emptyPrompt);
        const [isLoading, setIsLoading] = useState(true);
        const [isError, setIsError] = useState(false);

        const getPrompt = () => {
                setIsLoading(true);

                promptClient
                        .getActivePrompt()
                        .then((data) => setPrompt(data))
                        .catch(() => setIsError(true))
                        .finally(() => setIsLoading(false));
        };

        useEffect(() => {
                getPrompt();
        }, []);

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
                                <AnswerForm
                                        onSubmit={(answer) => {
                                                promptClient.createAnswer(answer).then(() => getPrompt());
                                        }}
                                />
                        )}
                </Layout>
        );
}

export default App;
