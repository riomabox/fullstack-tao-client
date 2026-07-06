import axios from "axios";

const api = axios.create({
        headers: {
                "Content-Type": "application/json",
        },
});

const getActivePrompt = async () => {
        const { data } = await api.get("/api/prompts");
        return data;
};

const createAnswer = async (answer: { text: string; author: { name: string } }) => {
        const { data } = await api.post("/api/answers", answer);
        return data;
};

export default {
        getActivePrompt,
        createAnswer,
};
