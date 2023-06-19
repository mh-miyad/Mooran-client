import React from "react";
import "./style.css";
import cart from "../../../assets/icons/cart.png";
import sell from "../../../assets/icons/sell.png";
import truck from "../../../assets/icons/track.png";
import cash from "../../../assets/icons/cash.png";
const WorksDemo = () => {
  return (
    <div className=' '>
      <p className='my-20 text-center text-xl md:text-3xl lg:text-5xl font-bold text-gray-600'>
        What We Do{" "}
      </p>
      <div className='lg' id='section'>
        <div className='flex justify-center  md:bg-white max-w-3xl mx-auto shadow-2xl rounded-md  p-8   '>
          <div className=' grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl md:gap-10  rounded-xl'>
            <div className='flex  items-center justify-center gap-5 bg-white md:bg-transparent rounded-md p-2 md:p-0 '>
              <div className='md:w-1/2'>
                {" "}
                <img
                  src={cart}
                  alt=''
                  className='w-8 h-8 md:w-12 md:h-12 lg:w-20 lg:h-20 '
                />
              </div>
              <div className=''>
                <span className='text- md:text-lg lg:text-xl font-bold '>
                  Shop for latest wears
                </span>
                <p className='text-[5px] md:text-xs'>
                  Lorem ipsum dolor sit amet consectetur. Quam libero viverra
                  faucibus condimentum.
                </p>
              </div>
            </div>
            <div className='flex  items-center justify-center gap-5 bg-white md:bg-transparent rounded-md p-2 md:p-0 '>
              <div className='md:w-1/2'>
                {" "}
                <img
                  src={cash}
                  alt=''
                  className='w-8 h-8 md:w-12 md:h-12 lg:w-20 lg:h-20'
                />
              </div>
              <div className=''>
                <span className='text- md:text-lg lg:text-xl font-bold '>
                  Request for mesurment for a style
                </span>
                <p className='text-[5px] md:text-xs'>
                  Lorem ipsum dolor sit amet consectetur. Quam libero viverra
                  faucibus condimentum.
                </p>
              </div>
            </div>
            <div className='flex  items-center justify-center gap-5 bg-white md:bg-transparent rounded-md p-2 md:p-0 '>
              <div className='md:w-1/2'>
                {" "}
                <img
                  src={truck}
                  alt=''
                  className='w-8 h-8 md:w-12 md:h-12 lg:w-20 lg:h-20'
                />
              </div>
              <div className=''>
                <span className='text- md:text-lg lg:text-xl font-bold '>
                  Get your wears delivered to you
                </span>
                <p className='text-[5px] md:text-xs'>
                  Lorem ipsum dolor sit amet consectetur. Quam libero viverra
                  faucibus condimentum.
                </p>
              </div>
            </div>
            <div className='flex  items-center justify-center gap-5 bg-white md:bg-transparent rounded-md p-2 md:p-0 '>
              <div className='md:w-1/2'>
                {" "}
                <img
                  src={sell}
                  alt=''
                  className='w-8 h-8 md:w-12 md:h-12 lg:w-20 lg:h-20'
                />
              </div>
              <div className=''>
                <span className='text- md:text-lg lg:text-xl font-bold '>
                  Sell yours wears
                </span>
                <p className='text-[5px] md:text-xs'>
                  Lorem ipsum dolor sit amet consectetur. Quam libero viverra
                  faucibus condimentum.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorksDemo;
