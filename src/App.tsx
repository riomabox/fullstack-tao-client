import Layout from "./layout/Layout";
import usePrompt from "./hooks/usePrompt";
import RandomInspirationalQuote from "./components/RandomInspirationalQuote";
import PromptContent from "./components/PromptContent";

function App() {
        const { prompt, handleSubmit } = usePrompt();

        return (
                <Layout>
                        <section className="text-center max-w-3xl mx-auto mb-8">
                                <h1 className="text-4xl font-display font-extrabold text-gray-900 mb-4">
                                        {prompt?.title || "Welcome to ClassyApp"}
                                </h1>
                        </section>

                        {prompt ? (
                                <PromptContent prompt={prompt} handleSubmit={handleSubmit} />
                        ) : (
                                <RandomInspirationalQuote />
                        )}
                </Layout>
        );
}

export default App;
