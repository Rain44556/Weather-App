import React from "react";
import { useSelector } from "react-redux";
import { weatherIcons } from "../../utls/weatherIcons";

const WeatherInfo = () => {
  const { data } = useSelector((state) => state.weather);
  return (
    <div className="section px-5 py-10">
      <div className="flex gap-5 flex-col md:flex-row md:justify-between md:items-start">
        <div className="date-location-info">
          <div className="flex items-center gap-4">
            <h1 className="text-3xl font-bold text-[#006A71] dark:text-gray-200">
              {data.name}
            </h1>
            <span className="border py-1 px-2 bg-[#4eaab1] text-gray-100 dark:bg-gray-300 dark:text-gray-900 text-sm rounded-md font-medium">
              {data.sys.country}
            </span>
          </div>
          <p className="text-left text-md text-gray-700 dark:text-gray-200">
            {new Date().toLocaleTimeString("en-US", {
              weekday: "long",
              month: "short",
              day: "numeric",
              hour: "2-digit",
              minute: "2-digit",
            })}
          </p>
          <div className="flex gap-3 items-center mt-5">
            <span className="text-6xl">
              {weatherIcons[data.weather[0].icon] || "🌤️"}
            </span>
            <p className="text-2xl font-medium capitalize  text-[#006A71] dark:text-gray-200">
              {data.weather[0].description}
            </p>
          </div>
        </div>

        <div className="temp-info text-center md:text-right">
          <p className="text-8xl md:text-8xl font-bold text text-[#064145] dark:text-gray-200">
            {Math.round(data.main.temp)}°
          </p>
          <p className="text-lg font-medium mt-2 dark:text-gray-200 text-[#064145]">
            Feels like {Math.round(data.main.feels_like)}°
          </p>
        </div>
      </div>
    </div>
  );
};

export default WeatherInfo;
