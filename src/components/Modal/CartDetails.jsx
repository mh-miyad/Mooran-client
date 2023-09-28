import { Avatar, Button } from 'flowbite-react'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

const CartDetails = () => {



    const cartItem = useSelector((state) => state.cartItem);
    console.log(cartItem);

    return (
        <>
            {
                cartItem.map((ele) => {
                    return (

                        <div className=' border-b-4 p-3 mb-4'>
                            <div className='flex justify-between items-center gap-2 flex-wrap '>
                                <Avatar img={ele.thumbnail} size={`lg`} />
                                <div className=' '>
                                    <p className='break-words'>{ele.title}</p>
                                </div>

                                <div>
                                    <p className='font-semibold text-xl'> Items{1}</p>
                                </div>
                                <div>
                                    <p className='font-extrabold text-2xl'> ${ele.price}</p>
                                </div>
                            </div>
                        </div >
                    )
                }
                )
            }
            <div className='flex gap-3 '>
                <Button color="failure" >
                    Order Now
                </Button>
                <Button color="success" >
                    Add More Items
                </Button>
            </div>
        </>
    )
}

export default CartDetails