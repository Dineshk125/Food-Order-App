import React from 'react'
import { MdDelete } from "react-icons/md";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";
import { useDispatch } from 'react-redux';
import { decQty, incQty,removeFromCart} from '../redux/slices/CartSlice';
import toast from 'react-hot-toast';



const ItemCart = ({ id,name, price,qty,img}) => {

    const dispatch = useDispatch()

  return (
    <div className='flex gap-2 shadow-md rounded-lg p-2 mb-3'>
        <MdDelete onClick={() =>{ dispatch(removeFromCart({id,name, price, qty, img}))
        toast(`${name} Removed!`,{
            icon:'👋' ,
        })
    }} className='absolute right-7 text-gray-600 cursor-pointer'/>

     <img src={img} alt="" className='w-[50px] h-[50px]'/>

     <div className='leading-5'>
        <h2 className='font-bold text-gray-800'>{name}</h2>
        <div className='flex justify-between'>
            <span className='text-green-500 font-bold'>₹{price}</span>

            <div className='flex justify-center items-center gap-2 absolute right-7'>
            <AiOutlineMinus onClick={() => qty > 1 ? dispatch(decQty({id})) : (qty=1)} className=' border-2 border-gray-600 hover:text-white bg-green-500 hover:border-none rounded-md p-1 text-xl transition-all ease-linear cursor-pointer' />
           
            <div>{qty}</div>
            
            <AiOutlinePlus onClick={() => dispatch(incQty({id}))} className=' border-2 border-gray-600 hover:text-white bg-green-500 hover:border-none rounded-md p-1 text-xl transition-all ease-linear cursor-pointer ' />
            </div>


        </div>
     </div>
    </div>
  )
}

export default ItemCart
