import React from 'react'
import Navbar from '../components/Navbar'

const Signup = () => {
  return (
    <>
    <Navbar />
    <section className="bg-white">
    <div className="container flex items-center justify-center min-h-screen px-6 pt-0 ">
    <form className="w-full bg-gray-400 max-w-md border rounded-lg  px-4 py-4">

    <div className="flex justify-center font-bold underline text-gray-900">
               <h1>Sign-Up</h1>
            </div>

            <div className="relative flex={true} items-center mt-8">

                <input  required type="text" className="block w-full py-3 bg-white border rounded-lg px-4 light:bg-white dark:text-gray-900 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Username" />
            </div>

            <div className="relative flex={true} items-center mt-6">
                

                <input required type="email" className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-4 light:bg-white dark:text-gray-900 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Email address" />
            </div>

            <div className="relative flex items-center mt-4">

                <input  required type="password" className="block w-full px-4 py-3 text-gray-700 bg-white border rounded-lg light:bg-white dark:text-gray-900 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Password" />
            </div>

            <div class="relative flex={true} items-center mt-4">

                <input required type="password" className="block w-full px-4 py-3 text-gray-700 bg-white border rounded-lgl ight:bg-white dark:text-gray-900 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Confirm Password" />
            </div>

            <div class="mt-6">
                <button className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-green-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                    <a href="http://localhost:5173">
                    Sign Up
                    </a>
                </button>

                <div className="mt-6 text-center ">
                    <a href="Login" class="text-sm text-blue-900 hover:underline dark:text-blue-900 underline">
                        Already have an account?
                    </a>
                </div>
            </div>
        </form>
    </div>
</section>
</>
  )
}

export default Signup