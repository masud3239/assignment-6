import React from 'react';
// import { FaCube, FaRocket, FaUser } from 'react-icons/fa';
import userImg from '../assets/products/user.png'
import packageImg from '../assets/products/package.png'
import rocketImg from '../assets/products/rocket.png'

const Steps = () => {
    return (
         <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 text-center">
        
        
        <h2 className=" text-3xl md:text-5xl  font-extrabold text-[#101727]">
          Get Started In 3 Steps
        </h2>
        <p className="text-[#627382] mt-3">
          Start using premium digital tools in minutes, not hours.
        </p>

      
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">

        
          <div className="relative bg-white rounded-2xl p-8 shadow-md">
            
          
            <span className="absolute top-4 right-4 bg-purple-600 text-white text-[14px] px-3 py-1 rounded-full">
              01
            </span>

       
            <div className="w-20 h-20 mx-auto flex items-center justify-center rounded-full bg-purple-100 text-purple-600 text-3xl mb-6">
              <img src={userImg} alt="" />
            </div>

            <h3 className="text-2xl font-bold text-[#101727]">
              Create Account
            </h3>
            <p className="text-[#627382] text-[16px] mt-3">
              Sign up for free in seconds. No credit card required to get started.
            </p>
          </div>

          <div className="relative bg-white rounded-2xl p-8 shadow-sm">
            
            <span className="absolute top-4 right-4 bg-purple-600 text-white text-[14px] px-3 py-1 rounded-full">
              02
            </span>

            <div className="w-20 h-20 mx-auto flex items-center justify-center rounded-full bg-purple-100 text-purple-600 text-3xl mb-6">
              <img src={packageImg} alt="" />
            </div>

            <h3 className="text-2xl font-bold text-[#101727]">
              Choose Products
            </h3>
            <p className="text-[#627382] text-[16px] mt-3">
              Browse our catalog and select the tools that fit your needs.
            </p>
          </div>

          <div className="relative bg-white rounded-2xl p-8 shadow-sm ">
            
            <span className="absolute top-4 right-4 bg-purple-600 text-white text-[14px] px-3 py-1 rounded-full">
              03
            </span>

            <div className="w-20 h-20 mx-auto flex items-center justify-center rounded-full bg-purple-100 text-purple-600 text-3xl mb-6">
             <img src={rocketImg} alt="" />
            </div>

            <h3 className="text-2xl font-bold text-[#101727]">
              Start Creating
            </h3>
            <p className="text-[#627382] text-[16px] mt-3">
              Download and start using your premium tools immediately.
            </p>
          </div>

        </div>
      </div>
    </section>
    );
};

export default Steps;