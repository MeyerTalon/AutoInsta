import React from "react";
import { Link } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import "./App.css";

function App() {
  return (
    <>
      <header>
        <nav
          style={{ backgroundColor: "#2388dc" }}
          className="navbar navbar-expand-lg navbar-light"
        >
          <a
            className="navbar-brand"
            href="/"
            style={{
              fontFamily: "Arial, sans-serif",
              fontWeight: "bold",
              color: "white",
            }}
          >
            AutoInsta
          </a>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/"
                style={{
                  fontFamily: "Arial, sans-serif",
                  color: "black",
                  fontWeight: "bold",
                  textDecoration: "none",
                }}
              >
                Home
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <body>
        <Home />
      </body>
    </>
  );
}

export default App;
