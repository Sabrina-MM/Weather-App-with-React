import React, { useState } from "react";
import axios from "axios";

import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";

import { APIKEY } from "../../constants";

export default function Weather(props) {
  const [result, setResult] = useState(false);
  const [weatherData, setWeatherData] = useState({});
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      date: new Date(response.data.dt),
      timezone: response.data.timezone,
      city: response.data.name,
      icon: response.data.weather[0].icon,
      description: response.data.weather[0].main,
      realFeelValue: response.data.main.feels_like,
      humidity: response.data.main.humidity,
      country: response.data.sys.country,
      sunrise: new Date(response.data.sys.sunrise),
      sunset: new Date(response.data.sys.sunset),
    });

    setResult(true);
  }

  function search() {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}&units=metric`;

    axios.get(url).then(handleResponse);
  }

  function showCurrenLocation(position) {
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIKEY}&units=metric`;
    axios.get(url).then(handleResponse);
    url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${APIKEY}&units=metric`;
    axios.get(url).then(<WeatherInfo />);
    axios.get(url).then(<WeatherForecast />);
  }
  function getCurrentLocation() {
    navigator.geolocation.getCurrentPosition(showCurrenLocation);
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
      <div className="weather">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-sm-5">
              <input
                type="search"
                placeholder="Type a city..."
                className="form-control shadow-sm"
                autoFocus="on"
                onChange={handleCity}
              />
            </div>

            <div className="col-sm-3">
              <input
                type="submit"
                value="Search"
                className="form-control btn btn-info shadow-sm w-100"
              />
            </div>
            <div className="col-sm-3">
              <input
                type="button"
                value="Location"
                className="form-control btn btn-outline-info shadow-sm w-100"
                onClick={getCurrentLocation}
              />
            </div>
          </div>
        </form>
        <WeatherInfo data={weatherData} />
        <WeatherForecast city={weatherData.city} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
