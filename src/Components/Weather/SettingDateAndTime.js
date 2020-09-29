import React from "react";
import moment from "moment";

export default function SettingDateAndTime(props) {
  let days = [
    "Saturday",
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
  ];

  var finalHours = moment
    .unix(props.data.date)
    .utcOffset(props.data.timezone / 60)
    .format("HH:mm");

  let day = days[props.data.date.getDay()];

  return (
    <div>
      {day} {finalHours}
    </div>
  );
}
