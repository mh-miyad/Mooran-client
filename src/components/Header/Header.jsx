import React from "react";
import "./header.css";
import headerImg from "../../assets/HeaderPic.png";
import icon1 from "../../assets/icons/correct.png";
import icon2 from "../../assets/icons/video.png";
import { Button } from "flowbite-react";

const Header = () => {
  return (
    <div>
      <div id='header' className='p-20 rounded-2xl shadow-2xl mt-10'>
        <div className=' flex justify-center'>
          <div className='flex flex-col-reverse justify-between  md:flex-row '>
            <div className='md:w-1/2'>
              <div className='capitalize mt-10 text-[10px] '>
                <div className='flex md:w-10/12 p-4 md:gap-10 bg-gray-200 rounded-lg'>
                  <div className='flex gap-2'>
                    <img src={icon1} className='w-3 h-3' alt='' /> free Register
                  </div>
                  <div className='flex gap-2'>
                    <img src={icon1} className='w-3 h-3' alt='' /> great service{" "}
                  </div>
                  <div className='flex gap-2'>
                    <img src={icon1} className='w-3 h-3' alt='' /> easy payment{" "}
                  </div>
                </div>

                <div className='font-light text-4xl lg:text-5xl mt-10  '>
                  Getting the best and <br /> latest style has never
                  <p className='text-white font-extrabold'> been easier!</p>
                  <p className='text-base'>
                    <span className='font-bold'>Mooran</span> is a platform that
                    helps to make fashion accessible to all. It brings to your
                    doorstep!
                  </p>
                </div>
                <div className='my-5 flex items-center '>
                  <Button gradientDuoTone='purpleToBlue' size={"lg"}>
                    Shop Collection{" "}
                  </Button>
                  <button className='px-10 py-3 flex items-center gap-4 text-xl font-bold text-white '>
                    {" "}
                    <img src={icon2} alt='' className='animate-pulse' /> Watch
                    Review
                  </button>
                </div>
              </div>
            </div>
            <div className=' md:w-1/2'>
              <img src={headerImg} alt='' className='h-40 md:h-96 mx-auto  ' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
