import React from "react";

export default function () {
  let DayData = {
    day: "Monday 10:30",
    description: "Cloudy",
  };
  return (
    <div>
      <h5>{DayData.day}</h5>
      <div className="howTheWetherIs">
        <span>
          <small className="small">{DayData.description}</small>
        </span>
      </div>
    </div>
  );
}
