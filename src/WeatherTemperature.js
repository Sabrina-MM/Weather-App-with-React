import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function fahrenheit() {
    let formula = (props.celsius * 9) / 5 + 32;
    return formula;
  }

  if (unit === "celsius") {
    return (
      <div className="weatherTemeprature">
        <span className="temp"> {Math.round(props.celsius)}</span>
        <div className="cel-fahrenheit ">
          <a href="/">°C </a>|
          <a href="/" onClick={showFahrenheit}>
            °F
          </a>
        </div>
      </div>
    );
    {
    }
  } else {
    return (
      <div className="weatherTemeprature">
        <span className="temp">{Math.round(fahrenheit())} </span>
        <div className="cel-fahrenheit ">
          <a href="/" onClick={showCelsius}>
            °C{" "}
          </a>
          |<a href="/">°F</a>
        </div>
      </div>
    );
  }
}
