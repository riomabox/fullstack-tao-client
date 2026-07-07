import axios from "axios";
import endpoint from "./endpoint";
import { promptSchema } from "./schema";

const api = axios.create({
        headers: {
                "Content-Type": "application/json",
        },
});

const getActivePrompt = async () => {
        const { data } = await api.get(endpoint.activePrompt);
        return promptSchema.parse(data);
};

const createAnswer = async (answer: { text: string; author: { name: string } }) => {
        const { data } = await api.post(endpoint.createAnswer, answer);
        return data;
};

export default {
        getActivePrompt,
        createAnswer,
};
