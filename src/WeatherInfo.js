import React from "react";
import SettingDateAndTime from "./SettingDateAndTime";
import ReactAnimatedWeather from "react-animated-weather";
import WeatherTemperature from "./WeatherTemperature";
import { WiSunrise } from "weather-icons-react";
import { WiSunset } from "weather-icons-react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
  function setSunUp() {
    let sunRise = new Date(props.data.sunrise);
    let hoursSunRise = sunRise.getHours();
    return `${hoursSunRise}:00 am `;
  }

  function setSunSet() {
    let sunSet = new Date(props.data.sunset);
    let hoursSunSet = sunSet.getHours();
    return ` ${hoursSunSet}:00 pm `;
  }

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
            Real Feel : {Math.round(props.data.realFeelValue)}°
          </li>
          <li>
            <small>
              {setSunUp()}
              <WiSunrise size={24} color="goldenrod" />;{setSunSet()}{" "}
              <WiSunset size={24} color="saddlebrown" />;
            </small>
          </li>
        </ul>
      </div>

      <div className="float-left">
        <WeatherIcon code={props.data.icon} />
      </div>
      <WeatherTemperature celsius={props.data.temperature} />
    </div>
  );
}
