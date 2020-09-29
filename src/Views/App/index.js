import React from "react";

// Components
import Footer from "../../Components/Footer";
import Weather from "../../Components/Weather";

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
