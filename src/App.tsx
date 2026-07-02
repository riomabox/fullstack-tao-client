import { useEffect, useState } from "react";
import Layout from "./Layout";
// import { supabase } from "./supabaseClient";

interface answers {
  text: number;
  author: { name: string };
}

interface Prompt {
  title: string;
  answers: answers[];
  answered: boolean;
}

const emptyPrompt: Prompt = {
  title: "",
  answers: [],
  answered: false,
};

function App() {
  const [prompt, setPrompt] = useState(emptyPrompt);

  useEffect(() => {
    fetch("http://localhost:8000/api/v1/prompts")
      .then((res) => res.json())
      .then((data) => setPrompt(data));
  }, []);

  return (
    <Layout>
      <main>
        {prompt.answered ? (
          prompt.answers.map((answer) => (
            <div key={answer.text}>
              <p>{answer.text}</p>
              <div>— {answer.author.name}</div>
            </div>
          ))
        ) : (
          <form>
            <textarea></textarea>
            <button>Submit</button>
          </form>
        )}
      </main>
    </Layout>
  );
}

export default App;
