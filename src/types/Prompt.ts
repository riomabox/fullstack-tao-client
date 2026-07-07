type Answer = {
        text: string;
        author: { name: string };
        createdAt: string;
};

export type Prompt = {
        title: string;
        answers: Answer[];
        answered: boolean;
};
