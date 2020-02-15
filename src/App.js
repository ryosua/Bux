import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Redirect } from "react-router-dom";

import Home from "./pages/Home";
import TestType from "./pages/TestType/TestType";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <Route exact path="/" component={Home} />
          <Route exact path="/createTest" component={TestType} />
        </header>
      </Router>
    </div>
  );
}

export default App;
