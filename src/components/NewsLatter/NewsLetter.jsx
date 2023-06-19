import React from "react";
import "./style.css";

import Img from "../../assets/icons/newslatterImg.png";

const NewsLetter = () => {
  return (
    <div className='banner'>
      <div className='flex justify-between items-center'>
        <div className='w-1/2 '>
          <img src={Img} alt='' className='md:w-1/2' />
        </div>
        <div className=' text-white '>
          <p className='text-sm text-white md:text-indigo-700 md:text-5xl font-extrabold'>
            Trendy Styles..
          </p>
          <p className='text-xs'>Thousands styles More!</p>
          <p className='text-[8px]'>
            Having a pet means you have more joy, a new friend, a happy person
            who will always be with you to have fun. We have 200+ different pets
            that can meet your needs!
          </p>

          <div className='flex '>
            <button className='text-xs text-red-300  '>
              {" "}
              shop collections{" "}
            </button>
            <button className='text-xs text-red-300  '>
              {" "}
              See how it works{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
