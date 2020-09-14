import React from "react";
import Footer from "./Footer";
import Weather from "./Weather";

import "./App.css";
import "./C-F.css";

export default function App() {
  return (
    <div className="container" style={{ maxWidth: 830 }}>
      <div className="card-bodyfirstbox border 1px solid" color="#dee2e6">
        <Weather city="London" />
        <div>
          <div className="App"></div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
