import React from 'react';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { IoLogoInstagram } from 'react-icons/io5';

const Footer = () => {
  return (
    <footer className="w-full bg-amber-50 ">

      <div className="max-w-7xl mx-auto px-6 lg:px-20 py-14">

        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* About */}
          <div>
            <h2 className="text-3xl font-bold mb-4">QurbaniHat</h2>
            <p className="text-sm  leading-relaxed">
              A modern livestock marketplace where users can explore animals for Qurbani such as cows and goats.
              Users can view details and place a booking after authentication.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Contact Info</h2>

            <div className="space-y-2 text-sm ">
              <p> Dhaka, Bangladesh</p>
              <p> +880 1234-556677</p>
              <p> support@qurbanihat.com</p>
            </div>
          </div>

          {/* Social */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Follow Us</h2>

            <div className="flex gap-3">

              <a className="h-10 w-10 rounded-full flex items-center justify-center text-black hover:scale-110 transition">
                <IoLogoInstagram />
              </a>

              <a className="h-10 w-10 rounded-full flex items-center justify-center text-black hover:scale-110 transition">
                <FaFacebookSquare />
              </a>

              <a className="h-10 w-10  rounded-full flex items-center justify-center text-black hover:scale-110 transition">
                <FaXTwitter />
              </a>

            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="h-[1px]  my-8"></div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between text-sm  gap-3">

          <p>© 2026 QurbaniHat. All rights reserved.</p>

          <div className="flex gap-5">
            <span className=" cursor-pointer">Privacy Policy</span>
            <span className=" cursor-pointer">Terms</span>
            <span className=" cursor-pointer">Cookies</span>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;