import React from 'react';
import loading from "../../assets/loading.json"
import Lottie from 'lottie-react';

const Loading = () => {
    return (
        <div  className='flex flex-col items-center justify-center max-w-lg mx-auto'>
             <Lottie className='w-3/5' animationData={loading}></Lottie>
             <p className="text-gray-400 font-medium">Fetching weather data...</p>
          </div>
    );
};

export default Loading;