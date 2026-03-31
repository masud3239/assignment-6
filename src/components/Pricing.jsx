import React from 'react';
import { FaCheck } from 'react-icons/fa';

const Pricing = () => {
    return (
        <section className="py-20 bg-white ">
      <div className="max-w-6xl mx-auto px-4 text-center">

        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-extrabold text-[#101727]">
          Simple, Transparent Pricing
        </h2>
        <p className="text-[16px] text-[#627382] mt-3">
          Choose the plan that fits your needs. Upgrade or downgrade anytime.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">

          {/* Starter */}
          <div className="bg-gray-100 text-black rounded-2xl p-8 shadow text-left">
            <h3 className="text-2xl text-[#101727] font-bold">Starter</h3>
            <p className="text-[#627382] text-[16px] mt-1">Perfect for getting started</p>

            <h2 className="text-5xl text-[#101727] font-bold mt-4">$0
              <span className="text-[20px] text-[#627382]">/Month</span>
            </h2>

            <ul className="mt-6 space-y-2 text-left">
              <li className="flex items-center gap-2">
                <FaCheck className="text-green-500" /> Access to 10 free tools
              </li>
              <li className="flex items-center gap-2">
                <FaCheck className="text-green-500" /> Basic templates
              </li>
              <li className="flex items-center gap-2">
                <FaCheck className="text-green-500" /> Community support
              </li>
              <li className="flex items-center gap-2">
                <FaCheck className="text-green-500" /> 1 project per month
              </li>
            </ul>

            <button className="mt-22 w-full bg-gradient-to-r  from-blue-600 to-purple-500 text-white py-2 rounded-full">
              Get Started Free
            </button>
          </div>

          {/* Pro (Highlighted) */}
          <div className="relative rounded-2xl p-8 shadow bg-gradient-to-r  from-blue-600 to-purple-500 text-white text-left">

            {/* Badge */}
            <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#FEF3C6] text-[#BB4D00] text-[14px] px-4 py-1 rounded-full">
              Most Popular
            </span>

            <h3 className="text-2xl font-bold">Pro</h3>
            <p className="text-white text-[16px] mt-1">Best for professionals</p>

            <h2 className="text-5xl font-bold mt-4">$29
              <span className="text-[20px] text-white">/Month</span>
            </h2>

            <ul className="mt-6 space-y-2 text-left">
              <li className="flex items-center gap-2">
                <FaCheck /> Access to all premium tools
              </li>
              <li className="flex items-center gap-2">
                <FaCheck /> Unlimited templates
              </li>
              <li className="flex items-center gap-2">
                <FaCheck /> Priority support
              </li>
              <li className="flex items-center gap-2">
                <FaCheck /> Unlimited projects
              </li>
              <li className="flex items-center gap-2">
                <FaCheck /> Cloud sync
              </li>
              <li className="flex items-center gap-2">
                <FaCheck /> Advanced analytics
              </li>
            </ul>

            <button className="mt-8 w-full bg-white text-purple-700 py-2 rounded-full font-semibold">
              Start Pro Trial
            </button>
          </div>

          {/* Enterprise */}
          <div className="bg-gray-100 text-black rounded-2xl p-8 shadow text-left">
            <h3 className="text-2xl text-[#101727] font-bold">Enterprise</h3>
            <p className="text-[#627382] text-[16px] mt-1">For teams and businesses</p>

            <h2 className="text-5xl text-[#101727] font-bold mt-4">$99
              <span className="text-[20px] text-[#627382]">/Month</span>
            </h2>

            <ul className="mt-6 space-y-2 text-left">
              <li className="flex items-center gap-2">
                <FaCheck className="text-green-500" /> Everything in Pro
              </li>
              <li className="flex items-center gap-2">
                <FaCheck className="text-green-500" /> Team collaboration
              </li>
              <li className="flex items-center gap-2">
                <FaCheck className="text-green-500" /> Custom integrations
              </li>
              <li className="flex items-center gap-2">
                <FaCheck className="text-green-500" /> Dedicated support
              </li>
              <li className="flex items-center gap-2">
                <FaCheck className="text-green-500" /> SLA guarantee
              </li>
              <li className="flex items-center gap-2">
                <FaCheck className="text-green-500" /> Custom branding
              </li>
            </ul>

            <button className="mt-8 w-full bg-gradient-to-r  from-blue-600 to-purple-500 text-white py-2 rounded-full">
              Contact Sales
            </button>
          </div>

        </div>
      </div>
    </section>
    );
};

export default Pricing;