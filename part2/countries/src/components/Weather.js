import React, { useState, useEffect } from "react";
import axios from "axios";

const Weather = ({ capital }) => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    axios
      .get(
        `http://api.weatherstack.com/current?access_key=743a3dd42930a2c8affaa96c7c5c22e2&query=${capital}`
      )
      .then((res) => setWeather(res.data.current));
  }, [capital]);

  return weather ? (
    <div>
      <h2>Weather in {capital}</h2>
      <p>Temperature: {weather.temp_c} &#8451;</p>
      <p>Condition: {console.log(weather.condition)}</p>
      <img
        src={weather.condition.icon}
        alt={weather.condition.text + " icon"}
        height="50"
        width="50"
      />
      <p>Wind: {weather.wind_kph} kph</p>
    </div>
  ) : (
    <p>Fetching Weather ....</p>
  );
};

export default Weather;
