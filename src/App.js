import React from "react";
import { MemoryRouter as Router } from "react-router";

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
