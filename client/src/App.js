import React from "react";
import Login from "./pages/Login";
import LandingPage from "./pages/LandingPage";
import Signup from "./pages/Signup";
import Contact from "./pages/Contact";
import MakePost from "./pages/MakePost";
import Auth from "./utils/auth";
import "./App.css";

import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
  ApolloProvider,
} from "@apollo/client";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { setContext } from "@apollo/client/link/context";

const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <header>
          <nav>
            <div className="nav-wrapper teal lighten-2">
              <Link
                to="/"
                className="brand-logo"
                style={{ fontFamily: "Comfortaa", paddingLeft: "10px" }}
              >
                AutoInsta
              </Link>
              <a href="#!" data-target="mobile-nav" className="sidenav-trigger">
                <i className="material-icons">menu</i>
              </a>
              <ul className="right hide-on-med-and-down">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/makepost">Make Post</Link>
                </li>
                <li>
                  <Link to="/contact">Contact Us</Link>
                </li>
                {Auth.loggedIn() ? (
                  <>
                    <li>
                      <Link
                        to="/login"
                        className="waves-effect waves-light btn"
                      >
                        Login
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/signup"
                        className="waves-effect waves-light btn"
                      >
                        SignUp
                      </Link>
                    </li>
                  </>
                ) : (
                  <>
                    <li>
                      <Link onClick={() => Auth.logout()}>Logout</Link>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </nav>
        </header>
        <body>
          <style>
            {`@import url('https://fonts.googleapis.com/css2?family=Comfortaa&display=swap');`}
          </style>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/makepost" element={<MakePost />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </body>
      </Router>
    </ApolloProvider>
  );
}

export default App;
