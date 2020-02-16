import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Route } from "react-router-dom";

import Account from "./pages/Account";
import Home from "./pages/Home";
import MyTests from "./pages/MyTests";
import Results from "./pages/Results";
import Review from "./pages/Review";
import Test from "./pages/Test";
import TestForm from "./pages/TestForm";
import TestType from "./pages/TestType";
import GraphQLTest from "./pages/GraphQLTest";

import {
  ApolloClient,
  ApolloLink,
  concat,
  HttpLink,
  InMemoryCache
} from "apollo-boost";

import { ApolloProvider } from "@apollo/react-hooks";

import "./App.css";

const httpLink = new HttpLink({
  uri: `https://bux-app.herokuapp.com/graphql`
});

const authMiddleware = new ApolloLink((operation, forward) => {
  const token = localStorage.getItem("auth-token");
  operation.setContext({
    headers: {
      "auth-token": token || ""
    }
  });
  return forward ? forward(operation) : null;
});

const client = new ApolloClient({
  link: concat(authMiddleware, httpLink),
  cache: new InMemoryCache()
});

function App() {
  return (
    <div className="App">
      <ApolloProvider client={client}>
        <Router>
          <header className="App-header">
            <Route exact path="/" component={Home} />
            <Route exact path="/createTest" component={TestType} />
            <Route exact path="/myTests" component={MyTests} />
            <Route exact path="/results" component={Results} />
            <Route exact path="/review" component={Review} />
            <Route exact path="/test" component={Test} />
            <Route exact path="/testForm" component={TestForm} />
            <Route exact path="/graphql" component={GraphQLTest} />
            <Route exact path="/account" component={Account} />
          </header>
        </Router>
      </ApolloProvider>
    </div>
  );
}

export default App;
