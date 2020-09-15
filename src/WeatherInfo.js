import React from "react";
import SettingDateAndTime from "./SettingDateAndTime";
import ReactAnimatedWeather from "react-animated-weather";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="pane-left ">
        <h1>
          {props.data.city},{props.data.country}
        </h1>

        <div>
          <SettingDateAndTime date={props.data.date} />
        </div>
        <div className="text-capitalize">{props.data.description}</div>
      </div>

      <div className="pane-right">
        <ul>
          <li className="humidity">
            Humidity: {props.data.humidity} %{" "}
            <ReactAnimatedWeather icon="RAIN" color="black" size={20} />
          </li>
          <li className="wind">
            Wind : {props.data.wind} km/h{" "}
            <ReactAnimatedWeather icon="WIND" color="black" size={20} />
          </li>
          <li className="real-feel">
            Real Feel : {Math.round(props.data.realFeelValue)} °
          </li>
        </ul>
      </div>
      <div className="pane-left-Temperature"></div>
      <img
        className="main-img"
        src={`http://openweathermap.org/img/wn/${props.data.icon}@2x.png`}
        alt="weather"
      />
      <span className="temp">{Math.round(props.data.temperature)}</span>

      <div className="cel-fahrenheit">
        <a href="/">°C </a>|<a href="/">°F</a>
      </div>
    </div>
  );
}
