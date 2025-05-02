import React, { useState } from 'react';
import { fetchWeather } from '../../redux/weatherAction';
import { useDispatch } from 'react-redux';

const Navbar = () => {
    const [city, setCity] = useState("");
    const dispatch = useDispatch();


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

    return (
        <div className='items-center text-center'>
            <div className="search-city relative max-w-xl mx-auto">
        <input
          onChange={searchCityName}
          type="search"
          id="search"
          class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search City"
          required
        />
        <button
          onClick={handleSearch}
          type="submit"
          class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Search
        </button>
      </div>
        </div>
    );
};

export default Navbar;