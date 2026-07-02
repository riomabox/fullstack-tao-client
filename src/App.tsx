// import { useEffect, useState } from "react";
// import { supabase } from "./supabaseClient";
// import { Link } from "react-router";

function App() {
  const prompt = {
    title: "What is the meaning of life?",
    answers: [
      {
        text: "42",
        author: {
          name: "John Doe",
        },
      },
    ],
    answered: true,
  };

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
