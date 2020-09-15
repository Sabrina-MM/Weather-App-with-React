import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";

import "./index.css";
import "./C-F.css";

export default function Weather(props) {
  const [result, setResult] = useState(false);
  const [weatherData, setWeatherData] = useState({});
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      date: new Date(response.data.dt * 1000),
      city: response.data.name,
      icon: response.data.weather[0].icon,
      description: response.data.weather[0].main,
      realFeelValue: response.data.main.feels_like,
      humidity: response.data.main.humidity,
      country: response.data.sys.country,
    });

    setResult(true);
  }
  function search() {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=5df05ec20f5c5b50f9ac557495988486&units=metric`;

    axios.get(url).then(handleResponse);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function handleCity(event) {
    setCity(event.target.value);
  }

  if (result) {
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-6">
              <input
                type="Search"
                placeholder="Type a city..."
                className="form-control shadow-sm"
                autoFocus="on"
                onChange={handleCity}
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
                value="Current"
                className="form-control btn btn-success shadow-sm w-100"
              />
            </div>
          </div>
        </form>
        <WeatherInfo data={weatherData} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
