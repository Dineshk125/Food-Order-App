import React from 'react'
import { useDispatch } from 'react-redux'
import { setSearch } from '../redux/slices/Search'


const Navbar = () => {

const dispatch = useDispatch()

  return (
    <nav className='flex flex-col lg:flex-row justify-between py-3 mx-6'>
        <div>
            <h3 className='text-xl font-bold text-gray-600'>{ new Date().toUTCString().slice(0,16)}</h3>
            
            <h1 className='text-2xl font-bold'>Order Your Food</h1>
        </div>

        
        <div className='pr-20'>
            <input type='search'
            name='search'
            id=''
            placeholder='Search here'
            autoComplete='off'
            onChange={(e) => dispatch(setSearch(e.target)) }
            className='p-3 border border-gray-400 text-sm rounded-lg outline-none w-[30vw] lg:w-[25v] ' />
  
        </div>

        <div className="bg-gray-800 hover:bg-green-500 font-bold py-2 text-white rounded-lg w-[15vw] lg:w-[9vw] text-center mb-4 mr-20  lg:mt-[0vw]">
          <a href="http://localhost:5173/Login">
          Login/Signup
          </a>
          </div>
        
    </nav>
  )
}

export default Navbar
