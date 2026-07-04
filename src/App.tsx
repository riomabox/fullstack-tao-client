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
        const [loading, setLoading] = useState(true);

        useEffect(() => {
                promptClient
                        .getActivePrompt()
                        .then((data) => setPrompt(data))
                        .finally(() => setLoading(false));
        }, []);

        return (
                <Layout>
                        <section className="text-center max-w-3xl mx-auto mb-8">
                                <h1 className="text-4xl font-display font-extrabold text-gray-900 mb-4">
                                        {prompt.title || "Welcome to ClassyApp"}
                                </h1>
                                <p className="text-gray-600">A clean, elegant UI built with Tailwind CSS.</p>
                        </section>

                        {loading ? (
                                <div className="text-center py-20">Loading...</div>
                        ) : prompt.answered ? (
                                <AnswerList answers={prompt.answers} />
                        ) : (
                                <AnswerForm />
                        )}
                </Layout>
        );
}

export default App;
