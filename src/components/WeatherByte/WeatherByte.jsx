import React, { useEffect, useState } from "react";
import ideaImg from "../../assets/idea.png"
import { weatherFacts } from "../../utls/weatherFacts";

const WeatherByte = () => {
    const [facts, setfacts] = useState('');

    useEffect(()=>{
        setfacts(weatherFacts[Math.floor(Math.random() * weatherFacts.length)]);
    }, []);

  return <div className="text-left section shimmer-effect relative overflow-hidden flex gap-10 p-10 items-center">
   <div><img src={ideaImg} alt="" /></div>
   <div>
        <h4 className="font-bold mb-2 text-xl">Did You Know?</h4>
        <p>{facts}</p>
    </div>
   </div>
};

export default WeatherByte;
