import React from "react";
import { useSelector } from "react-redux";
import Home from "../../pages/Home/Home";
import Loading from "../Loading/Loading";
import ErrorMessage from "../ErrorMessage/ErrorMessage";


const Weather = () => {
  const { data, status, searchHistory, error } = useSelector(
    (state) => state.weather
  );

  return (
    <div className="weather-section items-center text-center">

      {!data && !error && status !== "loading" && <Home></Home>}
      
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
      {data && (
        <div>
          <h1>searched</h1>
        </div>
      )}


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
