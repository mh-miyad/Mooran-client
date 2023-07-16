import React from "react";

import CarouselSlider from "../Carousel/CarouselSlider";

const DetailsComp = ({ id, name, image }) => {
  return (
    <div className=' '>
      <div className='flex gap-5 md:flex   md:gap-10 flex-col md:flex-row '>
        <div className='w-full md:w-1/2 '>
          <CarouselSlider img={image} />
        </div>
        <div>
          <div className=''>
            <div className='text-lg '>Product Name : {name}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsComp;
