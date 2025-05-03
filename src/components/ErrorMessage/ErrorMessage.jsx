import React from 'react';
import { HiOutlineArrowPathRoundedSquare } from 'react-icons/hi2';

const ErrorMessage = ({error}) => {
    return (
        <div className="backdrop-blur-md text-left rounded-2xl shadow-xl bg-red-800 dark:bg-rose-700/50 p-7 max-w-lg mx-auto justify-center items-center">
        <p className="text-gray-300 font-bold text-lg my-1">
          Weather's taking a coffee break 😂... please try again shortly!
        </p>
        <p className="mb-3 text-gray-300">{error}</p>
        <button className="flex gap-2 underline text-white cursor-pointer items-center">
          <HiOutlineArrowPathRoundedSquare className="text-xl" /> Refresh
        </button>
      </div>
    );
};

export default ErrorMessage;