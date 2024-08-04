import React from 'react'
import Navbar from '../components/Navbar'
import FoodItems from '../components/FoodItems'
import Cart from '../components/Cart'
import CategoryMenu from '../components/CategoryMenu'

const Home = () => {
  return (
    <>
    <Navbar />
    <CategoryMenu />
    <FoodItems />
    <Cart />
    </>
  )
}

export default Home
