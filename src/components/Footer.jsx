import React from "react";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-300 mt-20">

      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-14">

        {/* TOP */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* BRAND */}
          <div>
            <h2 className="text-3xl font-extrabold text-cyan-400 mb-4">
              DriveNow
            </h2>

            <p className="text-sm leading-7 text-slate-400">
              Premium car rental platform providing smooth booking,
              reliable vehicles, and seamless travel experiences.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h3>

            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/"
                  className="hover:text-cyan-400 transition"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="/explorecars"
                  className="hover:text-cyan-400 transition"
                >
                  Explore Cars
                </Link>
              </li>

              <li>
                <Link
                  href="/mybookings"
                  className="hover:text-cyan-400 transition"
                >
                  My Bookings
                </Link>
              </li>

              <li>
                <Link
                  href="/addcar"
                  className="hover:text-cyan-400 transition"
                >
                  Add Car
                </Link>
              </li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Contact
            </h3>

            <div className="space-y-3 text-sm text-slate-400">
              <p>📍 Dhaka, Bangladesh</p>
              <p>📞 +880 1234-556677</p>
              <p>✉ support@drivenow.com</p>
            </div>
          </div>

          {/* SOCIAL */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Follow Us
            </h3>

            <div className="flex gap-4">

              <a
                href="#"
                className="h-11 w-11 rounded-full bg-slate-800 flex items-center justify-center hover:bg-cyan-500 hover:text-white transition duration-300"
              >
                <FaInstagram size={18} />
              </a>

              <a
                href="#"
                className="h-11 w-11 rounded-full bg-slate-800 flex items-center justify-center hover:bg-cyan-500 hover:text-white transition duration-300"
              >
                <FaFacebookF size={18} />
              </a>

              <a
                href="#"
                className="h-11 w-11 rounded-full bg-slate-800 flex items-center justify-center hover:bg-cyan-500 hover:text-white transition duration-300"
              >
                <FaTwitter size={18} />
              </a>
            </div>

            <p className="text-xs text-slate-500 mt-4 leading-6">
              Stay connected for offers, new cars, and travel updates.
            </p>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="border-t border-slate-800 my-10"></div>

        {/* BOTTOM */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">

          <p>
            © 2026 DriveNow. All rights reserved.
          </p>

          <div className="flex gap-5">
            <Link
              href="/privacy"
              className="hover:text-cyan-400 transition"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms"
              className="hover:text-cyan-400 transition"
            >
              Terms
            </Link>

            <Link
              href="/cookies"
              className="hover:text-cyan-400 transition"
            >
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;