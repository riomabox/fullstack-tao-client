import { useEffect, useState } from "react";
// import { supabase } from "./supabaseClient";
// import { Link } from "react-router";

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
    <div>
      {/* <header>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </header> */}
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
    </div>
  );
}

export default App;
