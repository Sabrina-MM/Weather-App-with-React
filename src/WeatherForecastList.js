import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastList(props) {
  function hours() {
    let date = new Date(props.data.dt * 1000);
    let hours = date.getHours();
    return `${hours}:00`;
  }

  function temperature() {
    let maxTemperature = Math.round(props.data.main.temp_max);
    let minTemperature = Math.round(props.data.main.temp_min);
    return (
      <div>
        <strong>{maxTemperature}</strong>/{minTemperature}°
      </div>
    );
  }
  return (
    <div className="WeatherForecastList col">
      {hours()}

      <div className="iconForecast">
        <WeatherIcon code={props.data.weather[0].icon} />
      </div>
      {temperature()}
    </div>
  );
}
