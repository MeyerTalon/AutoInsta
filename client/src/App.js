import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import LandingPage from "./pages/LandingPage";
import Signup from "./pages/Signup";
import "./App.css";

function App() {
  return (
    <>
      <header>
        <nav>
          <div className="nav-wrapper teal lighten-2">
            <a href="#!" className="brand-logo">
              AutoInsta
            </a>
            <a href="#!" data-target="mobile-nav" className="sidenav-trigger">
              <i className="material-icons">menu</i>
            </a>
            <ul className="right hide-on-med-and-down">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/create-post">Make Post</Link>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
              <li>
                <Link to="/login" className="waves-effect waves-light btn">
                  Login
                </Link>
              </li>
              <li>
                <Link to="/Signup" className="waves-effect waves-light btn">
                  SignUp
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      <body>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </body>
    </>
  );
}

export default App;
