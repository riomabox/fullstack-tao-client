import { Link, BrowserRouter, Routes, Route } from "react-router";

export default function Navigation() {
  const Home = () => {
    return <h1>Home</h1>;
  };
  const About = () => {
    return <h1>About</h1>;
  };
  const Contact = () => {
    return <h1>Contact</h1>;
  };

  return (
    <BrowserRouter>
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

      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/about" Component={About} />
        <Route path="/contact" Component={Contact} />
      </Routes>
    </BrowserRouter>
  );
}
