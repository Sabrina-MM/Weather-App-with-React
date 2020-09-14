import React, { useState } from "react";
import axios from "axios";

export default function TypeCity() {
  let [city, setCity] = useState("");
  let [result, setResult] = useState("London");

  function handleSubmit(event) {
    event.preventDefault();
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=5df05ec20f5c5b50f9ac557495988486&units=metric`;

    axios.get(url).then(handlerWeather);
  }

  function upDateCity(event) {
    setCity(event.target.value);
  }

  function handlerWeather(response) {
    setResult(response.data.name);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-6">
          <input
            type="Search"
            placeholder="Type a city..."
            onChange={upDateCity}
            className="form-control shadow-sm"
            autoFocus="on"
          />
        </div>

        <div className="col-2">
          <input
            type="submit"
            value="Search"
            className="form-control btn btn-primary shadow-sm w-100"
          />
        </div>
        <div className="col-2">
          <input
            type="submit"
            value="current"
            className="form-control btn btn-success shadow-sm w-100"
          />
        </div>
      </div>

      <h1>{result}</h1>
    </form>
  );
}
