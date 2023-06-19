import React from "react";
import "./style.css";

import Img from "../../assets/icons/newslatterImg.png";
import icon from "../../assets/icons/video.png";

const NewsLetter = () => {
  return (
    <div className='banner  '>
      <div className='flex  justify-center items-center'>
        <div className='w-1/2 '>
          <img
            src={Img}
            alt=''
            className='md:w-10/12 lg:w-1/2 my-5 md:mr-20  md:mx-auto w-1/2  '
          />
        </div>
        <div className='md:w-1/2 md:p-10 md:ml-32 lg:ml-72 w-1/3 '>
          <p className='text-sm text-white lg:text-indigo-700 md:text-4xl md:text-gray-100 lg:text-5xl font-extrabold mt-4'>
            Trendy Styles..
          </p>
          <p className='text-xs text-white lg:text-indigo-700 md:text-xl lg:text-4xl'>
            Thousands styles More!
          </p>
          <p className='text-[5px] md:text-xs text-white/50 lg:text-black'>
            Having a pet means you have more joy, a new friend, a happy person
            who will always be with you to have fun. We have 200+ different pets
            that can meet your needs!
          </p>

          <div className='flex flex-col lg:flex-row  gap-2 my-3'>
            <button className='text-[6px] md:text-lg uppercase md:text-white lg:text-black border-2 border-blue-700 px-6 mx-4 md:p-2  hover:bg-indigo-600 hover:text-white font-bold   transition-colors ease-linear duration-200 rounded-full md:my-2 lg:my-10  '>
              {" "}
              shop collections{" "}
            </button>
            <button className='text-[6px] md:text-lg uppercase gap-4  md:text-white lg:text-black flex  justify-center items-center   border-2 border-pink-600 px-6 mx-4 md:p-2  hover:bg-pink-500 hover:text-white font-bold   transition-colors ease-linear duration-200 rounded-full md:my-2 lg:my-10 '>
              {" "}
              <img src={icon} alt='' className=' w-2 h-2 md:w-5 md:h-5' /> See
              how it works{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
