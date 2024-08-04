import React from 'react'
import Navbar from '../components/Navbar'

const Success = () => {
  return (
    <>
    <Navbar />
    <div className='flex flex-col items-center justify-center h-screen'>
      <h1 className='font-semibold mb-4 text-3xl'>Order Successful!</h1>
      <p>Your order has been successfully placed</p>
    </div>
    </>
  )
}

export default Success
