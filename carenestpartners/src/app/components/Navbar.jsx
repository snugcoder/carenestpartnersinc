"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        isSticky ? "bg-[#F9FBED] shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between p-4">
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
        <div className="hidden lg:flex gap-6">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <Link href="/about" className="hover:underline">
            About
          </Link>
          <Link href="/services" className="hover:underline">
            Services
          </Link>
          <Link href="/join-our-network/contact-us" className="hover:underline">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
