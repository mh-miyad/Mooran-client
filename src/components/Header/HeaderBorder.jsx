import React from "react";
import brand1 from "../../assets/icons/brand1.png";
import brand2 from "../../assets/icons/brand2.png";
import brand3 from "../../assets/icons/brand3.png";
import brand4 from "../../assets/icons/bramd4.png";

const HeaderBorder = () => {
  return (
    <div className='text-center -mt-10 w-2/3 mx-auto shadow-2xl'>
      <div className='border p-10 bg-blue-100 rounded-xl'>
        <div>
          Over <span className='text-blue-500 font-bold text-xl '>32k+ </span>
          fashion gurus are growing their brands with FashionForAll.
          <div className='flex my-4 flex-wrap'>
            <img src={brand1} alt='' className='h-5 mx-auto' />
            <img src={brand2} alt='' className='h-5 mx-auto' />
            <img src={brand3} alt='' className='h-5 mx-auto' />
            <img src={brand4} alt='' className='h-5 mx-auto' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderBorder;
