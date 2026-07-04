const getActivePrompt = () => {
        return fetch("/api/prompts").then((res) => res.json());
};

const createAnswer = (answer: { text: string; author: { name: string } }) => {
        return fetch("/api/answers", {
                method: "POST",
                headers: {
                        "Content-Type": "application/json",
                },
                body: JSON.stringify(answer),
        });
};

export default {
        getActivePrompt,
        createAnswer,
};
