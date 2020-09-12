import React from "react";

export default function PanelRight() {
  let weatherData = {
    humidity: 53,
    realFeelValue: 13,
    windValue: 9,
  };
  return (
    <div className="pane-right">
      <ul>
        <li className="humidity">
          Humidity: {weatherData.humidity}
          <span> </span>% 💦<i className="fas fa-tint"> </i>
        </li>
        <li className="real-feel">
          Real Feel : {weatherData.realFeelValue}
          <span id="real-feel"></span>°❄<i className="fas fa-cloud-rain"></i>
        </li>
        <li className="wind">
          Wind : {weatherData.windValue}
          <span> </span> km/h 💨
          <i className="fas fa-wind"> </i>
        </li>
      </ul>
    </div>
  );
}
