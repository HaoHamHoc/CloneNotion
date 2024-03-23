import React from 'react'
// import { FaUser, FaUnlockAlt } from "react-icons/fa";


const Signup = ({hideForm, convert}) => {
  return (
    <div className="relative py-6 px-10 h-100 mt-20 bg-white shadow-xl rounded-xl ">
    <span className="absolute font-bold top-0 right-0 px-4 py-2 hover:bg-[#f00] hover:cursor-pointer hover:text-white" onClick={hideForm}>x</span>
    <form action="">
      <div className="mb-6">
        <label htmlFor="name" className="block text-gray-800 font-bold">Username:</label>
        <input type="text" name="name" id="name" placeholder="Username" className="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600 :ring-indigo-600" />
      </div>

      <div className="mb-6">
        <label htmlFor="pass" className="block text-gray-800 font-bold">Password:</label>
        <input type="password" name="name" id="pass" placeholder="Password" className="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600 :ring-indigo-600" />
      </div>

      <div>
        <label htmlFor="repass" className="block text-gray-800 font-bold">Enter Password:</label>
        <input type="password" name="repass" id="repass" placeholder="Enter Password" className="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600 :ring-indigo-600" />

        <p href="#" className="text-sm font-thin text-gray-800 hover:underline mt-4 inline-block hover:text-indigo-600 cursor-pointer" onClick={convert}>To Form LogIn?</p>
      </div>
      <button className="cursor-pointer py-2 px-4 block mt-6 bg-indigo-500 text-white font-bold w-full text-center rounded">Login</button>
    </form>
  </div>
  )
}

export default Signup;