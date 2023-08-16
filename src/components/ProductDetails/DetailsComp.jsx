import React, { useState } from "react";

import CarouselSlider from "../Carousel/CarouselSlider";
import { Rating } from "flowbite-react";

const DetailsComp = ({
  id,
  name,
  image,
  description,
  price,
  rating,
  stock,
  discountPercentage,
}) => {
  console.log(id);
  const [quantity, setQuantity] = useState(1);
  return (
    <div className=' '>
      <div className='flex gap-5 md:flex lg:justify-center  md:gap-10 flex-col md:flex-row '>
        <div className='w-full md:w-1/2 lg:w-1/3'>
          <CarouselSlider img={image} />
          <div>
            <div className='text-center text-2xl  md:text-4xl mt-5 font-extrabold'>
              <div>
                {" "}
                <div className=' p-5'>
                  <div className='flex gap-5 text-3xl justify-center shadow-2xl mt-5 rounded-lg p-5'>
                    <div className='uppercase mb-5 text-red-400'>
                      price : $ {price}
                    </div>
                    <div className='text-indigo-500'>
                      {" "}
                      Available Stock : {stock}
                    </div>
                  </div>
                  <div className='my-10 mx-auto w-10/12 '>
                    <Rating className='my-6 '>
                      <Rating.Star />
                      <Rating.Star />
                      <Rating.Star />
                      <Rating.Star />
                      <Rating.Star />
                      <p className='ml-2 text-sm font-medium text-gray-500 dark:text-gray-400'>
                        {rating} out of 5
                      </p>
                    </Rating>
                    <p className='mb-4 text-sm font-medium text-gray-500 dark:text-gray-400'>
                      1,745 global ratings
                    </p>
                    <Rating.Advanced className='mb-2' percentFilled={70}>
                      <p>5 star</p>
                    </Rating.Advanced>
                    <Rating.Advanced className='mb-2' percentFilled={17}>
                      <p>4 star</p>
                    </Rating.Advanced>
                    <Rating.Advanced className='mb-2' percentFilled={8}>
                      <p>3 star</p>
                    </Rating.Advanced>
                    <Rating.Advanced className='mb-2' percentFilled={10}>
                      <p>2 star</p>
                    </Rating.Advanced>
                    <Rating.Advanced percentFilled={5}>1 star</Rating.Advanced>
                  </div>
                </div>{" "}
              </div>
            </div>
          </div>
        </div>
        <div className=' '>
          <div className='font-bold  text-center` p-5 text-xl md:text-2xl text-gray-800'>
            <div className=' uppercase p-5  mx-auto  '> {name}</div>
            <div className='text-lg md:text-xl capitalize text-slate-950'>
              {description}
            </div>
            <div className='text-sm  my-5 md:text-lg text-gray-600'>
              Product Description : Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Molestiae perspiciatis architecto harum
              voluptatibus quod ipsum aut, unde dolor cum veniam?
            </div>
          </div>
          <div className='border p-5 flex justify-between uppercase items-center  font-extrabold  text-sm rounded-xl'>
            <div className='font-bold '>get discount </div>
            <span className='text-red-500 text-xl'>{discountPercentage}%</span>
            <button className='bg-indigo-600 px-5 py-2 drop-shadow-xl rounded-2xl hover:ring-2 ring-indigo-300 font-medium text-white'>
              Claim{" "}
            </button>
          </div>

          <div className='text-center mt-5 '>
            <div className='my-2 '>
              <button
                className='rounded-xl  px-5 border py-2 bg-gray-300 mx-2'
                onClick={() => setQuantity(quantity + 1)}>
                +
              </button>
              <input
                type='number'
                name=''
                id=''
                value={quantity}
                readOnly
                className='w-20 rounded-lg focus-within:border-4 text-center font-bold  '
              />
              <button
                className='rounded-xl  px-5 border py-2 bg-gray-300 mx-2'
                onClick={() =>
                  quantity > 1 ? setQuantity(quantity - 1) : quantity == 0
                }>
                -
              </button>
            </div>
            <div>
              <button className='bg-pink-500 text-white px-12 py-3 rounded-3xl hover:ring-4 ring-pink-600 transition-all ease-in-out duration-150 '>
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsComp;
