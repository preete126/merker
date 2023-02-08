import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { Link } from "react-router-dom";

// import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <section>
      <main>
        <Link
          to={"/signup"}
          className="btn btn-link link-dark text-decoration-none text-warning"
        >
          <button className="btnLog" type="submit">
            <span>
              <i className="bi bi-person-check me-2"></i>
            </span>
            Sign Up
          </button>
        </Link>{" "}
      </main>
    </section>
  );
}

export default App;
