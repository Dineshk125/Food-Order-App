import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import ItemCart from "./ItemCart";
import { useSelector } from "react-redux";
import { FaShoppingCart } from "react-icons/fa";
import {useNavigate } from "react-router-dom"


const Cart = () => {
     
        const [activeCart, setActiveCart ] = useState(false)

        const cartItems = useSelector((state) => state.cart.cart);
        const totalQty = cartItems.reduce((totalQ, item ) => totalQ + item.qty,0);
        const totalPrice = cartItems.reduce((totalP , item) => totalP + item.qty * item.price ,0)

        const navigate = useNavigate();

  return (
    <>
    <FaShoppingCart onClick={() => setActiveCart(!activeCart)} className={`rounded-full bg-white shadow-md text-5xl p-3 fixed top-2 right-4 ${totalQty > 0 &&  'animate-bounce' }`}/>

    <div 
    className={`fixed right-0 top-0 w-full lg:w-[20vw] h-full bg-white mb-3 ${
        activeCart ? "translate-x-0" : "translate-x-full"
    }  transition-all duration-500 z-50`}>

      <div className="flex justify-between items-center my-3 p-5">

        <span className="font-bold text-xl text-gray-800">My Order</span>

        <IoMdClose onClick={() => setActiveCart(!activeCart)} className="border-2 border-gray-600 text-gray-600 font-bold p-1 text-xl rounded-md hover:text-red-500 cursor-pointer" />

      </div>

      {cartItems.length > 0 ? ( cartItems.map((food) => {
        return ( <ItemCart key={food.id} id={food.id} name={food.name} price={food.price} img={food.img} qty={food.qty} />
    )
      })
    ) : (
        <h2 className="text-center text-xl font-bold text-gray-800">Cart is empty</h2>
    )}
      

      <div className="absolute bottom-0 pl-5">
        <h3 className="font-semibold text-gray-800">Items : {totalQty}</h3>
        <h3 className="font-semibold text-gray-800">Total Amount : ₹  {totalPrice} </h3>
        <hr className="w-[90vw] lg:w-[18vw] my-2 " />

        <button onClick={() => navigate('/success')} className="bg-green-500 hover:bg-red-500 font-bold py-2 text-white rounded-lg w-[90vw] lg:w-[18vw] mb-5">
          Checkout
        </button>
      </div>
    </div>
    </>
  );
};

export default Cart;
