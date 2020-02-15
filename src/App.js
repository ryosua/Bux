import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Home from "./pages/Home";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <Home />
        </header>
      </Router>
    </div>
  );
}

export default App;
