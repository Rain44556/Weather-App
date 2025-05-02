import React from "react";

const TopDestinations = () => {
  const cities = [
    { name: "New York", country: "US", icon: "🗽" },
    { name: "London", country: "GB", icon: "🇬🇧" },
    { name: "Tokyo", country: "JP", icon: "🗼" },
    { name: "Paris", country: "FR", icon: "🗼" },
    { name: "Sydney", country: "AU", icon: "🏄" },
    { name: "Dubai", country: "AE", icon: "🏙️" },
  ];
  return (
    <div className="section p-10">
      <h1 className="font-bold text-2xl mb-8">Top Destinations</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
        {cities.map((city, idx) => (
          <button 
          key={idx} 
          className="group flex gap-5 items-center rounded-xl dark:hover:bg-gray-800 cursor-pointer transition-all duration-300 p-4 backdrop-blur-sm bg-[#9ACBD0] border border-[#43bec7] text-sm font-medium dark:bg-[#37424e] dark:border-gray-700">
            <span className="text-2xl group-hover:scale-110 transition-transform duration-300">{city.icon}</span>
            <div className="text-left">
              <p className="font-medium">{city.name}</p>
              <p className="text-xs font-bold">{city.country}</p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default TopDestinations;
