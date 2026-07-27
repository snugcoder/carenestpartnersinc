"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0.5);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        isSticky ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between p-4 ">
        {/* Logo & Brand */}
        <div className="flex items-center gap-4">
          <img
            src="/images/carenestpartnerslogo.png"
            alt="Logo"
            className="h-11 w-auto"
          />
          <Link href="/" className="text-4xl logo-font">
            CARENEST PARTNERS INC.
          </Link>
        </div>

        {/* Nav Links */}
        <ul className="hidden lg:flex gap-6 text-lg">
          <li>
          <Link href="/" className="hover:underline">
            Home
          </Link>
          </li>
           <li className="relative group">
            <button className="hover:underline flex items-center gap-1">
              About Us
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-4 h-4 mt-0.5"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
              </svg>
            </button>

            {/* Dropdown menu */}
            <ul className="absolute left-0 mt-2 w-40 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200">
              <li>
                <Link
                  href="/about/partners"
                  className="block px-4 py-2 hover:bg-gray-100 cursor-not-allowed"
                >
                  Partners
                </Link>
              </li>
              <li>
                <Link
                  href="/about/news"
                  className="block px-4 py-2 hover:bg-gray-100 cursor-not-allowed"
                >
                  News
                </Link>
              </li>
            </ul>
          </li>


          <li>
          <Link href="/join-our-network/contact-us" className="hover:underline">
            Contact
          </Link>
          </li>

          <li>
          <Link href="/apply" className="hover:underline">
            Apply Now
          </Link>
          </li>

          <li className="relative group">
          <button className="hover:underline flex items-center gap-1">
              Services
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-4 h-4 mt-0.5"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
              </svg>
            </button>
            <ul className="absolute left-0 mt-2 w-40 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200">
              <li>
                <Link
                  href="/services/in-home-care"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  In-Home Care
                </Link>
              </li>
              <li>
                <Link
                  href="/services/facilities"
                  className="block px-4 py-2 hover:bg-gray-100 cursor-not-allowed"
                >
                  Skilled Nursing Facilities
                </Link>
              </li>
                <li>
                <Link
                  href="/services/facilities"
                  className="block px-4 py-2 hover:bg-gray-100 cursor-not-allowed"
                >
                  Health Systems & Hospitals
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  );
}
