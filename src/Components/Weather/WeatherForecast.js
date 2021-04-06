import React, { useState } from "react";
import axios from "axios";
import "../../App.css";
import WeatherForecastList from "./WeatherForecastList";

export default function WeatherForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  function handleForecastResponse(response) {
    setForecast(response.data);
    setLoaded(true);
  }

  if (loaded && props.city === forecast.city.name) {
    return (
      <div className="WeatherForecast row">
        <WeatherForecastList data={forecast.list[0]} />
        <WeatherForecastList data={forecast.list[1]} />
        <WeatherForecastList data={forecast.list[2]} />
        <WeatherForecastList data={forecast.list[3]} />
        <WeatherForecastList data={forecast.list[4]} />
        <WeatherForecastList data={forecast.list[5]} />
      </div>
    );
  } else {
    let apiKey = "5df05ec20f5c5b50f9ac557495988486";
    let url = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(handleForecastResponse);
    return null;
  }
}
