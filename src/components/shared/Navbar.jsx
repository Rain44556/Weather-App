import React, { useEffect, useState } from "react";
import { fetchWeather } from "../../redux/weatherAction";
import { useDispatch } from "react-redux";
import { MdDarkMode, MdLightMode } from "react-icons/md";

const Navbar = () => {
  const [city, setCity] = useState("");
  const dispatch = useDispatch();
  const [theme, setTheme] = useState(localStorage.theme || "light")

  const searchCityName = (e) => {
    e.preventDefault();
    const searchCityName = e.target.value;
    setCity(searchCityName);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (city.trim()) {
      dispatch(fetchWeather(city));
    }
  };

  useEffect(()=>{
    if (theme === "dark"){
      document.documentElement.classList.add('dark')
    }else{
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <div className=" my-10 ">
      <div className="flex gap-5 py-3 px-5 items-center max-w-lg mx-auto justify-between mb-5 bg-blue-600 dark:bg-gray-700 dark:text-white">
        <h1 className="text-2xl sm:text-3xl font-bold">Hello Weather!</h1>
        <button 
        onClick={()=> setTheme(theme === "light" ? "dark" : "light")}
        className="border w-8 h-8 rounded-full cursor-pointer
        bg-white/10 backdrop-blur-md  border-white/20 hover:bg-white/20 focus:outline-none transition-all duration-300 shadow-lg hover:shadow-xl">
          {theme === "light" ? (
            <MdDarkMode className="w-5 h-5 mx-auto"/>
          ) : (
            <MdLightMode className="w-5 h-5 mx-auto" />
          )}
          </button>
      </div>

      <div className="search-city text-center relative max-w-lg mx-auto">
        <input
          onChange={searchCityName}
          type="search"
          id="search"
          className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search City"
          required
        />
        <button
          onClick={handleSearch}
          type="submit"
          className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default Navbar;
