import React from 'react';
import bannerImg from '../assets/products/banner.png'

const Banner = () => {
    return (
        <section className="bg-gray-50 py-16 px-6 md:px-16">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-10">
        
        {/* Left Content */}
        <div className="flex-1 text-center lg:text-left">
          
          {/* Badge */}
          <span className="inline-block bg-purple-100 text-purple-600 px-4 py-1 rounded-full text-[16px]font-medium mb-4">
            ● New: AI-Powered Tools Available
          </span>

          {/* Heading */}
          <h1 className="text-4xl md:text-[60px] font-extrabold text-[#101727] leading-tight mb-6">
            Supercharge Your <br />  <span className='text-purple-600'>Digital Workflow</span> 
          </h1>

          {/* Description */}
          <p className="text-[#101727] font-regular text-[18px] mb-6 max-w-lg mx-auto lg:mx-0">
            Access premium AI tools, design assets, templates, and productivity
            software—all in one place. Start creating faster today. 
          </p>
          <p className='mb-4'>Explore Products</p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
            
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-full font-medium transition">
              Explore Products
            </button>

            <button className="border border-purple-500 text-purple-600 px-6 py-3 rounded-full font-medium flex items-center justify-center gap-2 hover:bg-purple-200 transition">
              ▶ Watch Demo
            </button>

          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1">
          <img
            src={bannerImg}
            alt="AI Workflow"
            className="w-full max-w-md mx-auto"
          />
        </div>

      </div>
    </section>
    );
};

export default Banner;