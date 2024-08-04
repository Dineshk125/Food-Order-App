import React from 'react'
import FoodCart from './FoodCart'
import FoodData from '../data/FoodData'
import toast, { Toaster } from 'react-hot-toast';
import { useSelector } from 'react-redux';


const FoodItems = () => {

  const search = useSelector((state) => state.search.search);

  const addNotification = () => toast.success(`Your item added to cart`);

  return (
   <>
    <Toaster position="top-center" reverseOrder={false}/>

    <div className='flex flex-wrap gap-10 justify-center lg:justify-start mx-6 my-10'>
      {FoodData.map((food) => {
        return ( <FoodCart 
        key={food.id}
        id={food.id}
        name={food.name}
        price={food.price}
        desc={food.desc}
        rating={food.rating}
        img={food.img}
        addNotification={addNotification}
        /> 

        )
      })}
    
    </div>
    </>
  )
}

export default FoodItems
