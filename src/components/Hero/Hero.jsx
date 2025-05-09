import React from 'react';
import cloudRain from "../../assets/cloud-with-rain.svg"
import cloudSun from "../../assets/cloud-with-sun.svg"
import rainbow from "../../assets/rainbow.svg"

const cardCSS = "rounded-2xl px-4 py-2 backdrop-blur-md shadow-md bg-[#9ACBD0] border border-[#43bec7] text-sm font-medium dark:bg-[#37424e] dark:border-gray-700";

const Hero = () => {
    
    return (
        <div className='section px-5 py-10 text-center'>
            <h1 className='text-[#006A71] dark:dark:text-gray-200 text-4xl animate-pulse duration-[3s] sm:text-5xl font-extrabold mb-4 text-shadow'>
            From Sunshine to Storms!</h1>
            <p className='text-lg max-w-2xl mx-auto mb-8'>Check the latest weather conditions anywhere in the world. Enter a city above or explore popular locations below.</p>
       <div className='flex gap-5 flex-wrap justify-center mb-4'>
        <p className={cardCSS}>Live Weather Updates</p>
        <p className={cardCSS}>Comprehensive Data</p>
        <p className={cardCSS}>Worldwide Access</p>
        <p className={cardCSS}>Historical Data Access</p>
       </div>

       <div className='flex gap-10 py-10 justify-center'>
        <p className='animate-float' style={{ animationDelay: '0.5s' }}><img className='w-20 h-20' src={cloudSun}  alt="cloud-sun" /></p>
        <p className='animate-float' style={{ animationDelay: '0.1s' }}><img className='w-20 h-20' src={cloudRain} alt="cloud-rain" /></p>
        <p className='animate-float' style={{ animationDelay: '0.9s' }}><img className='w-20 h-20' src={rainbow} alt="rainbow" /></p>
       
       </div>
        </div>
    );
};

export default Hero;