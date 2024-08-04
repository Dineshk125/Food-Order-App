import React from 'react'
import { FaStar } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/slices/CartSlice'; 

const FoodCart = ({img, id, price, name, rating, desc , addNotification}) => {
     
    const dispatch = useDispatch();

  return (
    <div className='font-bold w-[250px] p-5 bg-white' flex flex-col rounded-lg>
      <img 
      src={img} 
      alt=""
       className='w-auto h-[130px] hover:scale-110 cursor-grab transition-all duration-500 ease-in-out'/>

      <div className='text-sm flex justify-between'>

        <h2 className=' '>{name}</h2>

        <span className='text-green-500'>₹{price}</span>
      </div>

      <p className=' text-sm font-normal'>{desc.slice(0,50)}...</p>

      <div className='flex justify-between'>
        <span className='flex justify-center items-center'>
    <FaStar className='mr-1 text-yellow-400' /> {rating}
            </span>
        <button className='p-1 text-white bg-green-600 hover:bg-red-600  rounded-lg text-sm'  onClick={() => {dispatch(addToCart({id, name, price, img, rating,qty:1}))
        addNotification();
    }}>Add to cart</button>
      </div>
    </div>
  )
}

export default FoodCart
