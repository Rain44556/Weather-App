import React from "react";
import { useSelector } from "react-redux";
import { weatherIcons } from "../../utls/weatherIcons";
import { RiHome4Fill } from "react-icons/ri";
import { IoFlag } from "react-icons/io5";
import { WiDayWindy } from "react-icons/wi";
import { IoSpeedometerOutline } from "react-icons/io5";


const WeatherInfo = () => {
  const { data } = useSelector((state) => state.weather);
  const statsCSS = "items-center rounded-lg md:justify-center flex gap-10 bg-card py-4 px-4";

  return (
    <div className="section py-10 px-14">

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
          <p className="text-8xl md:text-8xl font-bold text-[#064145] dark:text-gray-200">
            {Math.round(data.main.temp)}°
          </p>
          <p className="text-lg font-medium mt-2 dark:text-gray-200 text-[#064145]">
            Feels like {Math.round(data.main.feels_like)}°
          </p>
        </div>
      </div>


      <div className="weather-stats grid md:grid-cols-2 gap-4 my-10">

        <div className={`weather-pressure ${statsCSS}`}>
          <span className="text-2xl text-teal-800 dark:text-gray-800 rounded-lg bg-[#c9dee0] p-2"><RiHome4Fill /></span>
          <div className="text-[#006A71] dark:text-gray-200 text-left">
            <p>Pressure</p>
            <h2 className="font-bold text-lg">{data.main.pressure} hPa</h2>
          </div>
        </div>

        <div className={`weather-humidity ${statsCSS}`} >
          <span className="text-2xl text-teal-800 dark:text-gray-800 rounded-lg bg-[#c9dee0] p-2"><IoFlag /></span>
          <div className="text-[#006A71] dark:text-gray-200 text-left">
            <p>Humidity</p>
            <h2  className="font-bold text-lg">{data.main.humidity}%</h2>
          </div>
        </div>

        <div className={`wind-speed ${statsCSS}`}>
          <span className="text-2xl text-teal-800 dark:text-gray-800 rounded-lg bg-[#c9dee0] p-2"><WiDayWindy /></span>
          <div className="text-[#006A71] dark:text-gray-200 text-left">
            <p>Wind speed </p>
            <h2 className="font-bold text-lg">{data.wind.speed} m/s</h2>
          </div>
        </div>

        <div className={`weather-visibility ${statsCSS}`}>
          <span className="text-2xl text-teal-800 dark:text-gray-800 rounded-lg bg-[#c9dee0] p-2"><IoSpeedometerOutline /></span>
          <div className="text-[#006A71] dark:text-gray-200 text-left">
            <p className="">Visibility</p>
            <h2 className="font-bold text-lg">{(data.visibility / 1000).toFixed(1)} km</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherInfo;
