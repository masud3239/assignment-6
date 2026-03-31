import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-[#101727] text-white pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-4">


        <div className="grid grid-cols-1 md:grid-cols-6 gap-8" >

         
          <div className="md:col-span-2">
            <h2 className="text-3xl font-bold text-white mb-4">
              DigiTools
            </h2>
            <p className="text-[16px] leading-6">
              Premium digital tools for creators, professionals, and businesses.
              Work smarter with our suite of powerful tools.
            </p>
          </div>

         
          <div>
            <h3 className="text-white text-xl font-medium mb-3">Product</h3>
            <ul className="space-y-2 text-[16px]">
              <li className="hover:text-white cursor-pointer">Features</li>
              <li className="hover:text-white cursor-pointer">Pricing</li>
              <li className="hover:text-white cursor-pointer">Templates</li>
              <li className="hover:text-white cursor-pointer">Integrations</li>
            </ul>
          </div>

         
          <div>
            <h3 className="text-white text-xl font-medium mb-3">Company</h3>
            <ul className="space-y-2 text-[16px]">
              <li className="hover:text-white cursor-pointer">About</li>
              <li className="hover:text-white cursor-pointer">Blog</li>
              <li className="hover:text-white cursor-pointer">Careers</li>
              <li className="hover:text-white cursor-pointer">Press</li>
            </ul>
          </div>

         
          <div>
            <h3 className="text-white text-xl font-medium mb-3">Resources</h3>
            <ul className="space-y-2 text-[16px]">
              <li className="hover:text-white cursor-pointer">Documentation</li>
              <li className="hover:text-white cursor-pointer">Help Center</li>
              <li className="hover:text-white cursor-pointer">Community</li>
              <li className="hover:text-white cursor-pointer">Contact</li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-white text-xl font-medium mb-3">Social Links</h3>

            <div className="flex gap-3 mt-2">
              <div className="bg-white text-black p-2 rounded-full cursor-pointer hover:scale-110 transition">
                <FaInstagram />
              </div>
              <div className="bg-white text-black p-2 rounded-full cursor-pointer hover:scale-110 transition">
                <FaFacebookF />
              </div>
              <div className="bg-white text-black p-2 rounded-full cursor-pointer hover:scale-110 transition">
                <FaTwitter />
              </div>
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-gray-600 my-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm gap-4">

          <p>© 2026 Digitools. All rights reserved.</p>

          <div className="flex gap-6">
            <span className="hover:text-white cursor-pointer">
              Privacy Policy
            </span>
            <span className="hover:text-white cursor-pointer">
              Terms of Service
            </span>
            <span className="hover:text-white cursor-pointer">
              Cookies
            </span>
          </div>

        </div>

      </div>
    </footer>
    );
};

export default Footer;