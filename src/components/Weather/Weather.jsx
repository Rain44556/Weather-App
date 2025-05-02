import React from "react";
import { useSelector } from "react-redux";

const Weather = () => {
  const { data, status, searchHistory, error } = useSelector((state) => state.weather);

  return (
    <div className="weather-section items-center text-center">
      <div className="weather-temperature">
        <h1>25°C</h1>
      </div>

      <div>
        <h1>{searchHistory.length}</h1>
      </div>

      <div className="weather-condition">
        <h1>rainy</h1>
      </div>
      {console.log(data)}
      {data && 
      <div>
        <h1>searched</h1>
    </div>
        }
    </div>
  );
};

export default Weather;
