import { AnswerList } from "./AnswerList";
import { AnswerForm } from "./AnswerForm";

export default function PromptContent({ prompt, handleSubmit }) {
        return prompt.answered ? <AnswerList answers={prompt.answers} /> : <AnswerForm onSubmit={handleSubmit} />;
}
