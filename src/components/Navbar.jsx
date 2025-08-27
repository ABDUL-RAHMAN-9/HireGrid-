import React from 'react'
import logo from '../assets/logo.jpg'
import { NavLink, useNavigate } from 'react-router-dom'
import Button from './Button';

const Navbar = () =>
{
  const navigate = useNavigate();

  const onClick = () =>
  {
    navigate('/contact', { replace: true });
  }

  return (
    <div className="w-full flex justify-between items-center px-6 py-3">
      <img src={logo} alt="logo_img" className="w-14 rounded-full" />

      <ul className="flex gap-6 rounded-full shadow-xl px-8 py-3 border border-gray-300">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "bg-blue-600 text-white px-4 py-2 rounded-full font-medium shadow-md"
              : "text-black px-4 py-2 rounded-full hover:bg-gray-300 transition"
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/Products"
          className={({ isActive }) =>
            isActive
              ? "bg-blue-600 text-white px-4 py-2 rounded-full font-medium shadow-md"
              : "text-black px-4 py-2 rounded-full hover:bg-gray-100 transition"
          }
        >
          Products
        </NavLink>

        <NavLink
          to="/About"
          className={({ isActive }) =>
            isActive
              ? "bg-blue-600 text-white px-4 py-2 rounded-full font-medium shadow-md"
              : "text-black px-4 py-2 rounded-full hover:bg-gray-100 transition"
          }
        >
          About
        </NavLink>

        <NavLink
          to="/Contact"
          className={({ isActive }) =>
            isActive
              ? "bg-blue-600 text-white px-4 py-2 rounded-full font-medium shadow-md"
              : "text-black px-4 py-2 rounded-full hover:bg-gray-100 transition"
          }
        >
          Contact
        </NavLink>
      </ul>


      <Button text="Get Started" onClick={onClick} />


    </div>
  )
}

export default Navbar
