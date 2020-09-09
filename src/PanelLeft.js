import React from "react";
import Sun from "./sun-cloudy.png";
import DayPanelLeft from "./DayPanelLeft";

export default function () {
  return (
    <div className="pane-left ">
      <DayPanelLeft />
      <img src={Sun} className="img-center" alt="sun" />
      <span className="temp" id="temperature">
        20
      </span>
      <div id="cel-fahrenheit">
        <a href="/">°C </a>|<a href="/">°F</a>
      </div>
    </div>
  );
}
