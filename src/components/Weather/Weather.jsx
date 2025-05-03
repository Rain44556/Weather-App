import React from "react";
import { useSelector } from "react-redux";
import { HiOutlineArrowPathRoundedSquare } from "react-icons/hi2";


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
      {/* {console.log(data)} */}
      {data && 
      <div>
        <h1>searched</h1>
    </div>
        }
        {
          error && (
            <div className="backdrop-blur-md text-left rounded-2xl shadow-xl bg-red-800 dark:bg-rose-700/50 p-7 max-w-lg mx-auto justify-center items-center">
              <p className="text-gray-300 font-bold text-lg my-1">Weather's taking a coffee break 😂... please try again shortly!</p>
            <p className="mb-3 text-gray-300">{error}</p>
            <button
            className="flex gap-2 underline text-white cursor-pointer items-center">
              <HiOutlineArrowPathRoundedSquare className="text-xl" /> Refresh
              </button>
            </div>
          )
        }
    </div>
  );
};

export default Weather;
