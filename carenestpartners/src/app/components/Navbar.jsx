"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [isSticky, setIsSticky] = useState(false);
  const [open, setOpen] = useState(false);

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
        <div className="">
          {/* md:flex flex-col */}
        <ul className="hidden lg:flex gap-6 text-md items-center">
          <li>
          <Link href="/" className="px-4 py-2 hover:bg-gray-100 rounded">
            Home
          </Link>
          </li>
           <li className="relative group">
            <button className="px-4 py-1 hover:bg-gray-100 rounded flex items-center gap-1">
              <Link href='/about'>About Us</Link>
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
                  href="/about/news"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  News
                </Link>
              </li>
            </ul>
          </li>


          <li>
          <Link href="/contact-us" className="px-4 py-2 hover:bg-gray-100 rounded">
            Contact Us
          </Link>
          </li>

          <li>
          <Link href="/apply" className="px-4 py-2 hover:bg-gray-100 rounded">
            Apply Now
          </Link>
          </li>

          <li>
          <Link href="/services" className="px-4 py-2 hover:bg-gray-100 rounded">
            Services
            {/* include In Home Care, Skilled Nursing Facilities, and Health Systems + Hospitals */}
          </Link>
          </li>
        </ul>
        <button type="button" className= "bg-transparent shadow-sm py-2 px-2 rounded hover:bg-gray-100 lg:hidden" aria-expanded={open} aria-controls="chm15-menu" aria-label={open ? "Close menu": "Open menu"} onClick={()=>setOpen(!open)}> 
            <svg className={open ? "hidden":"icon-open"} viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round" aria-hidden="true">
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg className={open ? "icon-close":"hidden"} viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round" aria-hidden="true">
              <path d="m6 6 12 12M18 6 6 18" />
            </svg>
          </button>
      </div>
      </div>
       {open &&(
          <div id="chm15-menu" className="lg:hidden bg-white shadow-md">
          <ul className="flex flex-col p-4 gap-2 text-lg">
            <li className="px-2 py-2 hover:bg-gray-100">
              <Link href="/" className="" onClick={() => setOpen(false)}>
                Home
              </Link>
            </li>
            <li className="px-2 py-2 hover:bg-gray-100">
              <Link href="/about" className="" onClick={() => setOpen(false)}>
                About Us
              </Link>
            </li>
            <li className="px-2 py-2 hover:bg-gray-100">
              <Link href="/about/news" className="" onClick={() => setOpen(false)}>
                News
              </Link>
            </li>
            <li className="px-2 py-2 hover:bg-gray-100">
              <Link href="/contact-us" className="" onClick={() => setOpen(false)}>
                Contact Us
              </Link>
            </li>
            <li className="px-2 py-2 hover:bg-gray-100">
              <Link href="/services" className="" onClick={() => setOpen(false)}>
                Services
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
