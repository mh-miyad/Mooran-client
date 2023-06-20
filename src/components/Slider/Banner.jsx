import React from "react";
import banner from "../../assets/banner-img.png";
import "./style.css";

const Banner = () => {
  return (
    <section
      className='bg-gradient-to-r from-indigo-600 to-fuchsia-600 p-12  rounded-2xl'
      data-aos='flip-down'>
      <div className='py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-0 '>
        <div className='flex justify-center items-center flex-col gap-10 md:flex-row'>
          <div
            className=''
            data-aos='zoom-out-right'
            data-aos-offset='300'
            data-aos-easing='ease-in-sine'>
            <img
              src={banner}
              alt=''
              className='h-56 md:h-56 lg:h-96 hover:scale-110 transition-all ease-in-out duration-200 wobble-hor-bottom'
            />
          </div>
          <div
            className=' md:w-1/2 '
            data-aos='zoom-out-left'
            data-aos-offset='300'
            data-aos-easing='ease-in-sine'>
            <h1 className='text-3xl md:text-5xl lg:text-7xl  text-transparent bg-clip-text font-extrabold bg-gradient-to-r from-indigo-400 via-blue-200 to-fuchsia-500 tracking-in-contract-bck'>
              Shop Stylish and Save at Mooran
            </h1>
            <span className='text-white  text-xs md:text-2xl '>
              Redefine Your Style with Mooran's Trendsetting Collection
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
