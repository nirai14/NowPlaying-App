import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { RiMovie2Fill } from "react-icons/ri";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";

const Header = ({ handleLogin }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className='w-full top-0 sticky z-50'>
      <nav className='border-gray-300 bg-black py-2.5'>
        <div className='flex px-[20px] justify-between items-center'>
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <RiMovie2Fill className='text-red-700 text-[50px] my-2 mx-2' />
              <h2 className="text-[25px] font-semibold text-red-700">NowPlaying</h2>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className='hidden md:flex gap-10 text-[20px] items-center'>
            <NavLink to='/' className={({ isActive }) => isActive ? "text-red-700" : "text-gray-300"}>Home</NavLink>
            <NavLink to='movies' className={({ isActive }) => isActive ? "text-red-700" : "text-gray-300"}>Movies</NavLink>
            <NavLink to='about' className={({ isActive }) => isActive ? "text-red-700" : "text-gray-300"}>About</NavLink>
            <NavLink to='contact' className={({ isActive }) => isActive ? "text-red-700" : "text-gray-300"}>Contact</NavLink>
          </div>

          {/* Mobile Menu Icon */}
          <div className='md:hidden flex items-center'>
            <button onClick={toggleMenu}>
              {isMenuOpen ? <HiX className='text-white text-3xl' /> : <HiOutlineMenuAlt3 className='text-white text-3xl' />}
            </button>
          </div>

          {/* Right side buttons */}
          <div className='hidden md:flex pt-2 gap-4'>
            <Link to='login' onClick={handleLogin} className='bg-red-700 text-white hover:outline outline-red-800 p-2 rounded'>Log in</Link>
            <Link to='#' className='text-red-700 shadow-xl hover:outline hover:outline-red-700 p-2 rounded'>Get Started!</Link>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMenuOpen && (
          <div className='md:hidden bg-gray-800 text-white flex flex-col items-start px-5 py-4 gap-4 text-[18px]'>
            <NavLink to='/' onClick={toggleMenu} className={({ isActive }) => isActive ? "text-red-500" : "text-white"}>Home</NavLink>
            <NavLink to='movies' onClick={toggleMenu} className={({ isActive }) => isActive ? "text-red-500" : "text-white"}>Movies</NavLink>
            <NavLink to='about' onClick={toggleMenu} className={({ isActive }) => isActive ? "text-red-500" : "text-white"}>About</NavLink>
            <NavLink to='contact' onClick={toggleMenu} className={({ isActive }) => isActive ? "text-red-500" : "text-white"}>Contact</NavLink>
            <Link to='login' onClick={() => { toggleMenu(); handleLogin(); }} className='bg-red-700 text-white w-full text-center py-2 rounded'>Log in</Link>
            <Link to='#' className='text-red-700 border border-red-700 w-full text-center py-2 rounded'>Get Started!</Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
