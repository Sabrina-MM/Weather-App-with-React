import React from "react";
import Weather from "./Weather";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello Sabrina</h1>
        <Weather city="London" />
        Learn React
      </header>
    </div>
  );
}

export default App;
