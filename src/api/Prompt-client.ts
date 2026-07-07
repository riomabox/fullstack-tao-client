import axios from "axios";
import endpoint from "./endpoint";

const api = axios.create({
        headers: {
                "Content-Type": "application/json",
        },
});

const getActivePrompt = async () => {
        const { data } = await api.get(endpoint.activePrompt);
        return data;
};

const createAnswer = async (answer: { text: string; author: { name: string } }) => {
        const { data } = await api.post(endpoint.createAnswer, answer);
        return data;
};

export default {
        getActivePrompt,
        createAnswer,
};
