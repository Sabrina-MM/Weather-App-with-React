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
      <div>
        <ul className="float-left">
          <li className="temp"> {Math.round(props.celsius)}</li>
        </ul>
        <div className="unit">
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
      <div>
        <ul className="float-left">
          <li className="temp">{Math.round(fahrenheit())} </li>
        </ul>
        <div className="unit">
          <a href="/" onClick={showCelsius}>
            °C{" "}
          </a>
          |<a href="/">°F</a>
        </div>
      </div>
    );
  }
}
