import { useEffect, useState } from "react";
import Layout from "./Layout";
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
                                <section className="grid md:grid-cols-2 gap-6">
                                        {prompt.answers.map((answer, idx) => (
                                                <article key={idx} className="p-6 bg-white shadow rounded-lg">
                                                        <p className="text-gray-800 mb-4">{answer.text}</p>
                                                        <div className="text-sm text-gray-500">
                                                                — {answer.author.name}
                                                        </div>
                                                </article>
                                        ))}
                                </section>
                        ) : (
                                <section className="max-w-2xl mx-auto">
                                        <form className="space-y-4">
                                                <label className="block">
                                                        <span className="text-gray-700">Share your answer</span>
                                                        <textarea
                                                                className="mt-1 block w-full rounded-md border-gray-200 shadow-sm"
                                                                rows={4}
                                                        ></textarea>
                                                </label>
                                                <div className="flex items-center justify-between">
                                                        <button className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">
                                                                Submit
                                                        </button>
                                                        <div className="text-sm text-gray-500">
                                                                Be kind and concise.
                                                        </div>
                                                </div>
                                        </form>
                                </section>
                        )}
                </Layout>
        );
}

export default App;
