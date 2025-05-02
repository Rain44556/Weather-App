import React from 'react';
import cloudRain from "../../assets/cloud-with-rain.svg"
import cloudSun from "../../assets/cloud-with-sun.svg"
import rainbow from "../../assets/rainbow.svg"

const Hero = () => {
    return (
        <div className='w-full max-w-4xl mx-auto my-10 py-10 text-center bg-gradient-to-r from-[#e0dfdc] to-[#afd5da] border border-[#43ccd5] dark:border dark:border-gray-400 rounded-xl dark:bg-gradient-to-r dark:from-[#212931] dark:to-[#56728f] p-5 shadow-xl'>
            <h1 className='text-[#006A71] dark:dark:text-gray-200 text-4xl animate-pulse duration-[3s] sm:text-5xl font-extrabold mb-4 text-gradient text-shadow'>
            From Sunshine to Storms!</h1>
            <p className='text-lg max-w-2xl mx-auto mb-8'>Check the latest weather conditions anywhere in the world. Enter a city above or explore popular locations below.</p>
       <div className='flex gap-5 justify-center'>
        <p className='rounded-2xl px-4 py-2 backdrop-blur-md shadow-md bg-[#9ACBD0] border border-[#43bec7] text-sm font-medium dark:bg-[#37424e] dark:border-gray-700'>Live Weather Updates</p>
        <p className='rounded-2xl px-4 py-2 backdrop-blur-md shadow-md bg-[#9ACBD0] border border-[#43bec7] text-sm font-medium dark:bg-[#37424e] dark:border-gray-700'>Comprehensive Data</p>
        <p className='rounded-2xl px-4 py-2 backdrop-blur-md shadow-md bg-[#9ACBD0] border border-[#43bec7] text-sm font-medium dark:bg-[#37424e] dark:border-gray-700'>Worldwide Access</p>
        <p className='rounded-2xl px-4 py-2 backdrop-blur-md shadow-md bg-[#9ACBD0] border border-[#43bec7] text-sm font-medium dark:bg-[#37424e] dark:border-gray-700'>Historical Data Access</p>
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