import React from 'react'
import logo from '../assets/logo.jpg'
import { Link } from 'react-router-dom'
const Navbar = () =>
{
  return (
    <div className='w-full flex justify-between items-center px-6 py-3'>
      <img src={logo} alt="logo_img" className='w-18 rounded-full ' />
      <ul className='flex gap-12 rounded-4xl shadow-2xl px-10 py-4 '>
        <Link to="/"><li>Home</li></Link>
        <Link to="/Products"><li>Products</li></Link>
        <Link to="/About"><li>About</li></Link>
        <Link to="/Contact"><li>Contact</li></Link>
      </ul>
      <button className='bg-black text-white rounded-2xl px-4 py-2 hover:bg-gray-800 transition'>Get Started</button>
    </div>
  )
}

export default Navbar
