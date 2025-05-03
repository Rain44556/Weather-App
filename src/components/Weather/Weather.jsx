import React from "react";
import { useSelector } from "react-redux";
import Home from "../../pages/Home/Home";
import Loading from "../Loading/Loading";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import { weatherIcons } from "../../utls/weatherIcons";
import History from "../History/History"
import WeatherInfo from "../../pages/WeatherInfo/WeatherInfo";


const Weather = () => {
  const { data, status, searchHistory, error } = useSelector(
    (state) => state.weather
  );

  return (
    <div className="weather-section items-center text-center">

      {!data && !error && status !== "loading" && <Home></Home>}
      {searchHistory.length > 0 && (<History></History>)}

      {data && !error && (
        <div className="weather-data">
        <WeatherInfo></WeatherInfo>
      </div>)}

      <div>
        <h1>{searchHistory.length}</h1>
      </div>


      {/* error-handling */}
      {error && (
       <ErrorMessage error={error}></ErrorMessage>
      )}

      {/* loading */}
      {
        status === "loading" && (
         <Loading></Loading>
        )
      }
    </div>
  );
};

export default Weather;
