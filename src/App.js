import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Route } from "react-router-dom";

import Home from "./pages/Home";
import MyTests from "./pages/MyTests";
import Results from "./pages/Results";
import Test from "./pages/Test";
import TestForm from "./pages/TestForm";
import CreateTest from "./pages/CreateTest";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <Route exact path="/" component={Home} />
          <Route exact path="/createTest" component={CreateTest} />
          <Route exact path="/myTests" component={MyTests} />
          <Route exact path="/results" component={Results} />
          <Route exact path="/test" component={Test} />
          <Route exact path="/testForm" component={TestForm} />
        </header>
      </Router>
    </div>
  );
}

export default App;
