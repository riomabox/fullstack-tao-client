const getActivePrompt = () => {
        return fetch("/api/prompts").then((res) => res.json());
};

export default {
        getActivePrompt,
};
