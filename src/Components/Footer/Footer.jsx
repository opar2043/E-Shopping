import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-100 mt-6 text-black py-10 px-5 md:px-20">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8  text-left">
        {/* Company Info */}
        <div>
          <h2 className="text-lg font-semibold flex justify-start gap-2 items-center"> <img src="/public/e-shopping.jpeg" alt="" className='w-8 h-8' /> E-Shopping</h2>
          <p className="mt-2 text-sm">
            Leading the industry with innovative solutions and customer satisfaction.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold">Quick Links</h3>
          <nav className="mt-2 space-y-2">
            <a className="block hover:text-gray-700 transition" href="#">About Us</a>
            <a className="block hover:text-gray-700 transition" href="#">Contact</a>
            <a className="block hover:text-gray-700 transition" href="#">Jobs</a>
            <a className="block hover:text-gray-700 transition" href="#">Press Kit</a>
          </nav>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold">Follow Us</h3>
          <div className="flex justify-center md:justify-start mt-3 space-x-4">
            <a href="#" className="hover:text-gray-700 transition text-xl">
              <FaFacebook />
            </a>
            <a href="#" className="hover:text-gray-700 transition text-xl">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-gray-700 transition text-xl">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-gray-700 transition text-xl">
              <FaYoutube />
            </a>
          </div>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold">Subscribe to Our Newsletter</h3>
          <div className="mt-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 bg-gray-200 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
            <button className="mt-3 w-full bg-slate-900 hover:bg-gray-400 text-white py-2 rounded-md transition">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="text-center text-sm mt-8 border-t border-gray-400 pt-5">
        <p>Copyright &copy; {new Date().getFullYear()} E-Shopping. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;