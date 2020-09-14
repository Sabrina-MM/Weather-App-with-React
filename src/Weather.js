import React, { useState } from "react";
import axios from "axios";
import "./index.css";
import "./C-F.css";

export default function Weather(props) {
  const [result, setResult] = useState(false);
  const [weatherData, setWeatherData] = useState({});

  function handleResponse(response) {
    setWeatherData({
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      date: "Wednesday, 10:30 hs",
      city: response.data.name,
      icon: response.data.weather[0].icon,
      description: response.data.weather[0].main,
      realFeelValue: response.data.main.feels_like,
      humidity: response.data.main.humidity,
      country: response.data.sys.country,
    });

    setResult(true);
  }

  if (result) {
    return (
      <form onSubmit="/">
        <div className="row">
          <div className="col-6">
            <input
              type="Search"
              placeholder="Type a city..."
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
              value="Current"
              className="form-control btn btn-success shadow-sm w-100"
            />
          </div>
        </div>

        <div className="pane-left ">
          <h1>
            {weatherData.city},{weatherData.country}
          </h1>

          <div>{weatherData.date}</div>
          <div className="text-capitalize">{weatherData.description}</div>
        </div>
        <div className="pane-right">
          <ul>
            <li className="humidity">
              Humidity: {weatherData.humidity}
              <span> </span>% 💦<i className="fas fa-tint"> </i>
            </li>
            <li className="wind">
              Wind : {weatherData.wind}
              <span> </span> km/h 💨
              <i className="fas fa-wind"> </i>
            </li>
            <li className="real-feel">
              Real Feel : {weatherData.realFeelValue}
              <span id="real-feel"></span>°C ❄
              <i className="fas fa-cloud-rain"></i>
            </li>
          </ul>
        </div>
        <div className="pane-left"></div>
        <img
          className="main-img"
          src={`http://openweathermap.org/img/wn/${weatherData.icon}@2x.png`}
          alt="weather"
        />
        <span className="temp">{Math.round(weatherData.temperature)}</span>

        <div className="cel-fahrenheit">
          <a href="/">°C </a>|<a href="/">°F</a>
        </div>
      </form>
    );
  } else {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=5df05ec20f5c5b50f9ac557495988486&units=metric`;

    axios.get(url).then(handleResponse);

    return "Loading...";
  }
}
