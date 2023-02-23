import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { Link } from "react-router-dom";
import Navbar from "./components/Navbar";
// import DefaultLayout from "../Layout/DefaultLayout";

// import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <section>
      <main>
        <Navbar /> <br />
        <br /> <br />
        <br />
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
        <Link
          to={"/login"}
          className="btn btn-link link-dark text-decoration-none text-warning"
        >
          <button className="btnLog" type="submit">
            <span>
              <i className="bi bi-box-arrow-in-right me-2"></i>{" "}
            </span>
            Log In
          </button>{" "}
        </Link>
      </main>
    </section>
  );
}

export default App;
