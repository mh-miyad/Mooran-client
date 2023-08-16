import { Spinner } from "flowbite-react";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const CarouselSlider = ({ img }) => {
  return (
    <div className=''>
      <div className=' p-5 bg-gray-200 rounded-xl shadow-2xl '>
        {img ? (
          <Carousel
            autoPlay={true}
            verticalSwipe='natural'
            className=''
            dynamicHeight>
            {img.map((e) => {
              return (
                <div key={e} className=''>
                  <img src={e} alt='carousel-image' className='' />
                </div>
              );
            })}
          </Carousel>
        ) : (
          <Spinner aria-label='Default status example' />
        )}
      </div>
    </div>
  );
};

export default CarouselSlider;
