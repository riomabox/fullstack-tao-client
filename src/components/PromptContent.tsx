import { AnswerList } from "./AnswerList";
import { AnswerForm } from "./AnswerForm";

export default function PromptContent({ prompt, handleSubmit }) {
        if (!prompt.answered) {
                return <AnswerForm onSubmit={handleSubmit} />;
        }
        return <AnswerList answers={prompt.answers} />;
}
