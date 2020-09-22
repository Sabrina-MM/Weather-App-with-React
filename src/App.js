import React from "react";
import Footer from "./Footer";
import Weather from "./Weather";

import "./App.css";
import "./C-F.css";

export default function App() {
  return (
    <div className="weather-app">
      <div className="container">
        <div className="card-bodyfirstbox border 1px solid" color="#dee2e6">
          <Weather defaultCity="London" />
        </div>
        <Footer />
      </div>
    </div>
  );
}
