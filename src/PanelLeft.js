import React, { useState } from "react";
import axios from "axios";

export default function PanelLeft() {
  let [temperature, setTemperature] = useState("");
  let [logo, setLogo] = useState("");
  let [description, setDescription] = useState("");

  let today = new Date();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[today.getDay()];
  let resultDay = `${day}`;

  function handlerWeather(response) {
    setTemperature(response.data.main.temp);
    setLogo(response.data.weather[0].icon);
    setDescription(response.data.weather[0].main);
  }

  let url = `https://api.openweathermap.org/data/2.5/weather?q=London&appid=5df05ec20f5c5b50f9ac557495988486&units=metric`;

  axios.get(url).then(handlerWeather);

  return (
    <div className="pane-left ">
      <h5>{resultDay}</h5>
      <div className="howTheWetherIs">
        <span>
          <small className="small">{description} 10:30 hs</small>
        </span>
      </div>
      <img
        src={`http://openweathermap.org/img/wn/${logo}@2x.png`}
        alt="weather"
      />
      <span className="temp">{Math.round(temperature)}</span>
      <div className="cel-fahrenheit">
        <a href="/">°C </a>|<a href="/">°F</a>
      </div>
    </div>
  );
}
