import React from 'react';
import { FiShoppingCart } from 'react-icons/fi';

const Navbar = ({ cartCount}) => {
    return (
      <div className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        
        {/* Logo */}
        <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-indigo-500 bg-clip-text text-transparent">
          DigiTools
        </h1>

        {/* Menu */}
        <ul className="hidden md:flex gap-8 text-[#101727] font-semibold text-[16px]">
          <li className="hover:text-purple-600 cursor-pointer">Products</li>
          <li className="hover:text-purple-600 cursor-pointer">Features</li>
          <li className="hover:text-purple-600 cursor-pointer">Pricing</li>
          <li className="hover:text-purple-600 cursor-pointer">Testimonials</li>
          <li className="hover:text-purple-600 cursor-pointer">FAQ</li>
        </ul>

        {/* Right Side */}
        <div className="flex items-center gap-5">
          
          {/* Cart */}
          <div className="relative cursor-pointer">
            <FiShoppingCart className="text-xl text-[#101727] w-14.59 h-14.59"/>
           
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-purple-600 text-white text-xs px-1.5 py-0.5 rounded-full">
                {cartCount}
              </span>
            )}
          </div>

          {/* Login */}
          <button className="hidden md:block text-[#101727] font-semibold text-[16px] hover:text-purple-600">
            Login
          </button>

          {/* Get Started */}
          <button className="bg-gradient-to-r from-purple-600 to-indigo-500 text-white px-5 py-2 rounded-full hover:opacity-90 transition text-[#101727] font-semibold text-[16px] ">
            Get Started
          </button>
        </div>

       
      </div>
    </div>
    );
};

export default Navbar;