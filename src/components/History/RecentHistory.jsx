import React from "react";
import { LuClockArrowUp } from "react-icons/lu";
import { useSelector } from "react-redux";
import { weatherIcons } from "../../utls/weatherIcons";

const RecentHistory = () => {
  const { data, searchHistory } = useSelector((state) => state.weather);

  return (
    <div className="w-full max-w-4xl mx-auto my-10 text-[#064145] dark:text-gray-200">
      <div className="flex gap-3 items-center font-medium dark:text-gray-200">
        <span className="text-2xl">
          <LuClockArrowUp />
        </span>
        <h1>Recent Searches</h1>
      </div>

      <div className="flex gap-3 mt-7">
        {searchHistory
          .filter((item) => item.id !== data.id)
          .slice(0, 3)
          .map((item) => (
            <div
              key={item.id + item.timestamp}
              className="min-w-[220px] bg-gradient-to-r from-[#e0dfdc] to-[#afd5da] border border-[#43ccd5]
      dark:border dark:border-gray-400 dark:bg-gradient-to-r dark:from-[#404d5b] dark:to-[#56728f] rounded-sm"
            >
              <button onClick={() => item.name} className="w-full text-left">
                <div className="p-3">
                  <div className="flex justify-between items-center">
                    <span className="text-2xl">
                      {weatherIcons[item.weather[0].icon] || "🌤️"}
                    </span>
                    <p className="font-bold text-lg">
                      {Math.round(item.main.temp)}°
                    </p>
                  </div>
                  <h1 className="mt-3 font-extrabold text-xl">{item.name}</h1>
                  <p className="font-medium text-sm">
                    {item.weather[0].description}
                  </p>
                </div>
              </button>
            </div>
          ))}
      </div>
    </div>
  );
};

export default RecentHistory;
