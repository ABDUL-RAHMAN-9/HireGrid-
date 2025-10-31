import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { HiMenu } from 'react-icons/hi'; // For mobile menu open
import { AiOutlineClose } from 'react-icons/ai'; // For mobile menu close
import { ArrowRight } from 'lucide-react'; // For button icon, ensure lucide-react is installed

const Navbar = () =>
{
  const navigate = useNavigate();
  const [nav, setNav] = useState(false);

  const onClickContact = () =>
  { // Renamed for clarity
    navigate('/contact', { replace: true });
    setNav(false); // Close mobile nav after clicking
  };

  const handleNav = () =>
  {
    setNav(!nav);
  };

  // Helper function for NavLink styles to reduce repetition
  const getNavLinkClasses = (isActive) =>
    isActive
      ? "text-pink-400 font-semibold border-b-2 border-pink-500 pb-1" // Active state with underline effect
      : "text-gray-300 hover:text-white transition duration-200 pb-1"; // Inactive state

  return (
    <div className="w-full flex justify-between items-center px-6 py-4 relative z-50 bg-[#0A0A0A] border-b border-gray-800">
      {/* Desktop Logo/Brand Name */}
      <NavLink to="/" className="text-3xl font-extrabold text-white hover:text-pink-500 transition tracking-wider">
        HireGrid
      </NavLink>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex items-center gap-8 px-4 py-2"> {/* Removed glass effect from ul itself, apply to nav container */}
        <li>
          <NavLink to="/" className={({ isActive }) => getNavLinkClasses(isActive)}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/products" className={({ isActive }) => getNavLinkClasses(isActive)}>
            Products
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className={({ isActive }) => getNavLinkClasses(isActive)}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className={({ isActive }) => getNavLinkClasses(isActive)}>
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink to="/jobs" className={({ isActive }) => getNavLinkClasses(isActive)}>
            Jobs
          </NavLink>
        </li>
      </ul>

      {/* Desktop "Sign In" / "Get Started" Button - Melody style */}
      <div className="hidden md:block">
        <button
          onClick={onClickContact}
          className="relative px-6 py-3 rounded-full font-semibold text-base bg-gradient-to-r from-pink-600 to-red-600 text-white shadow-lg transform hover:scale-105 transition duration-300 ease-in-out group overflow-hidden border border-pink-500"
        >
          <span className="relative z-10 flex items-center">
            Get Started <ArrowRight className="ml-2 w-4 h-4" />
          </span>
          <span className="absolute inset-0 bg-gradient-to-r from-pink-700 to-red-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
        </button>
      </div>

      {/* Mobile Menu Icon */}
      <div onClick={handleNav} className="block md:hidden cursor-pointer text-3xl z-30 text-white hover:text-pink-500 transition">
        {nav ? <AiOutlineClose /> : <HiMenu />}
      </div>

      {/* Mobile Menu */}
      <ul
        className={
          nav
            ? 'fixed md:hidden left-0 top-0 w-full h-full bg-[#0A0A0A] backdrop-filter backdrop-blur-lg bg-opacity-90 flex flex-col justify-start items-center ease-in-out duration-500 z-20 py-10 px-6'
            : 'ease-in-out duration-500 fixed left-[-100%] top-0 w-full h-full bg-[#0A0A0A] z-20'
        }
      >
        {/* Mobile Logo/Brand Name (Optional for mobile) */}
        <div className="mb-10">
          <NavLink to="/" className="text-4xl font-extrabold text-white hover:text-pink-500 transition tracking-wider" onClick={() => setNav(false)}>
            HireGrid
          </NavLink>
        </div>

        {/* Mobile Navigation Links */}
        <li className="w-full text-center">
          <NavLink
            to="/"
            onClick={() => setNav(false)}
            className={({ isActive }) =>
              `block py-4 text-xl font-medium ${getNavLinkClasses(isActive)} border-b border-gray-700`
            }
          >
            Home
          </NavLink>
        </li>
        <li className="w-full text-center">
          <NavLink
            to="/products"
            onClick={() => setNav(false)}
            className={({ isActive }) =>
              `block py-4 text-xl font-medium ${getNavLinkClasses(isActive)} border-b border-gray-700`
            }
          >
            Products
          </NavLink>
        </li>
        <li className="w-full text-center">
          <NavLink
            to="/about"
            onClick={() => setNav(false)}
            className={({ isActive }) =>
              `block py-4 text-xl font-medium ${getNavLinkClasses(isActive)} border-b border-gray-700`
            }
          >
            About
          </NavLink>
        </li>
        <li className="w-full text-center">
          <NavLink
            to="/contact"
            onClick={() => setNav(false)}
            className={({ isActive }) =>
              `block py-4 text-xl font-medium ${getNavLinkClasses(isActive)} border-b border-gray-700`
            }
          >
            Contact
          </NavLink>
        </li>
        <li className="w-full text-center">
          <NavLink
            to="/jobs"
            onClick={() => setNav(false)}
            className={({ isActive }) =>
              `block py-4 text-xl font-medium ${getNavLinkClasses(isActive)} border-b border-gray-700`
            }
          >
            Jobs
          </NavLink>
        </li>

        {/* Mobile "Get Started" Button */}
        <div className="mt-auto pt-8 w-full text-center"> {/* Added mt-auto to push button to bottom */}
          <button
            onClick={onClickContact}
            className="relative px-8 py-4 rounded-full font-bold text-lg bg-gradient-to-r from-pink-600 to-red-600 text-white shadow-lg transform hover:scale-105 transition duration-300 ease-in-out group overflow-hidden border border-pink-500"
          >
            <span className="relative z-10 flex items-center justify-center">
              Get Started <ArrowRight className="ml-2 w-5 h-5" />
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-pink-700 to-red-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </button>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;