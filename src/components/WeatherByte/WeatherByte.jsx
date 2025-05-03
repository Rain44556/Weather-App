import React, { useEffect, useMemo, useState } from "react";
import ideaImg from "../../assets/idea.png"

const WeatherByte = () => {
    const [info, setInfo] = useState('');

    const weatherInfo = useMemo(() =>[
        "The highest temperature ever recorded on Earth was 134°F (56.7°C) in Death Valley, California.",
        "Antarctica is the driest, windiest, and coldest continent on Earth—some parts haven't seen rain for nearly 2 million years.",
        "Hailstones can grow larger than a softball and fall at speeds exceeding 100 mph.",
        "A single hurricane can release the energy of 10,000 nuclear bombs over its lifetime.",
        "Fog can be so thick in places like San Francisco that it has been given the nickname 'Karl' by locals.",
      ], []);

    useEffect(()=>{
        setInfo(weatherInfo[Math.floor(Math.random() * weatherInfo.length)]);
    }, [weatherInfo]);

  return <div className="section shimmer-effect relative overflow-hidden flex gap-10 p-10 items-center">
   <div><img src={ideaImg} alt="" /></div>
   <div>
        <h4 className="font-bold mb-2 text-xl">Did You Know?</h4>
        <p>{info}</p>
    </div>
   </div>
};

export default WeatherByte;
