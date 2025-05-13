import React from 'react';

const ErrorMessage = ({error}) => {
    return (
        <div className="backdrop-blur-md text-left rounded-2xl shadow-xl bg-rose-400 dark:bg-rose-500/50 p-7 max-w-lg mx-auto justify-center items-center">
        <p className="text-gray-300 font-bold text-lg my-1">
          Weather's taking a coffee break 😂... please try again shortly!
        </p>
        <p className="mb-3 text-gray-300">{error}</p>
        <button 
        className=" text-white">
         Please Search Another City!
        </button>
      </div>
    );
};

export default ErrorMessage;