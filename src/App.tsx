import Layout from "./layout/Layout";
import { AnswerList } from "./components/AnswerList";
import { AnswerForm } from "./components/AnswerForm";
import usePrompt from "./usePrompt";

function App() {
        const { prompt, handleSubmit, isLoading } = usePrompt();

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
