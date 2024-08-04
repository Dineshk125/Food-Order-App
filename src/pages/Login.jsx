import React from "react";
import Navbar from "../components/Navbar";

const Login = () => {
  return (
    <>
    <Navbar />

    <section className="">
      <div className="container flex items-center justify-center min-h-screen px-6 mx-auto">
        <form className="w-full bg-gray-400 max-w-md border rounded-lg px-4 py-4">
        
        <div className="text-center"><h1 className="font-bold  text-gray-900 underline">Login</h1></div>

          <div className="relative flex items-center mt-8">

            <input
              type="text"
              required
              className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-4 light:bg-white dark:text-gray-900 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              placeholder="Username"
            />
          </div>

          <div className="relative flex items-center mt-6">

            <input
              type="email"
              required
              className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-4 light:bg-white  dark:text-gray-900 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              placeholder="Email address"
            />
          </div>

          <div className="relative flex items-center mt-4">

            <input
                required
              type="password"
              className="block w-full px-4 py-3 text-gray-700 bg-white border rounded-lg light:bg-white dark:text-gray-900 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              placeholder="Password"
            />
          </div>

          <div className="mt-6">
              

            <button
                

            className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-green-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">

        <a href="http://localhost:5173" >
              Sign In
               </a>
            </button>
          
            <div className="mt-6 text-center ">
              <a
                href="Signup"
                className="text-sm text-blue-500 hover:underline dark:text-blue-800 underline"
              >
               Create New Account
              </a>
            </div>
          </div>
        </form>
      </div>
    </section>
    </>
  );
};

export default Login;
