import React from "react";
import ReactDOM from "react-dom";
import { ApolloClient, InMemoryCache, createHttpLink, ApolloProvider } from "@apollo/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";

import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri:'/graphql',
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

ReactDOM.render(
  <Router>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </Router>,
  document.getElementById("root")
);
