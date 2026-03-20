"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import Logo from "../../../../../public/logo.svg";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToRegister = () => {
    const registerElement = document.getElementById("registerForm");
    if (registerElement) {
      registerElement.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false); // Close mobile menu after click
  };

  const scrollToFAQs = () => {
    const faqElement = document.getElementById("faqs");
    if (faqElement) {
      faqElement.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false); // Close mobile menu after click
  };

  return (
    <nav className="relative !mt-8">
      {/* Mobile Navbar */}
      <div className="flex justify-between items-center p-4 md:hidden w-full h-[46px]">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image src={Logo} alt="Plentytask Logo" className="w-30 h-30" />
        </Link>

        {/* Hamburger/X Menu Toggle */}
        <button
          onClick={toggleMenu}
          className="flex items-center"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <svg
              className="w-6 h-6 text-gray-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6 text-gray-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden absolute left-0 top-full z-50 w-full">
          <div className="bg-white shadow-lg w-48">
            <div className="flex flex-col p-4 space-y-4">
              <button
                onClick={scrollToRegister}
                className="text-gray-600 font-medium text-left"
              >
                Join Waitlist
              </button>
              <button
                onClick={scrollToFAQs}
                className="text-gray-600 font-medium text-left"
              >
                FAQs
              </button>
              <button

                className="flex items-center px-4 py-3 rounded-xl bg-[#f1f5fd] border border-[#0a65fc]/20 text-[#0a65fc]"
              >
                Coming Soon
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Desktop Navbar - Adjusted to match your specifications */}
      <div className="hidden md:flex justify-between items-center h-[46px] px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image src={Logo} className="w-30 h-30" alt="Plentytask logo" />
        </Link>

        {/* Middle section - Navigation Links */}
        <div className="flex items-center gap-8">
          <button
            onClick={scrollToRegister}
            className="text-base font-medium text-[#757d85] hover:rounded-xl hover:bg-[#0a65fc] hover:px-4 hover:py-2 hover:text-white transition-all duration-200"
          >
            Join Waitlist
          </button>
          <button
            onClick={scrollToFAQs}
            className="text-base font-medium text-[#757d85] hover:rounded-xl hover:bg-[#0a65fc] hover:px-4 hover:py-2 hover:text-white transition-all duration-200"
          >
            FAQs
          </button>
        </div>

        {/* Search button */}
        <Link
          href="/"
          className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#f1f5fd] border border-[#0a65fc]/20"
        >
          <p className="text-base text-[#0a65fc]">Coming Soon!</p>
        </Link>
      </div>
    </nav>
  );
};
export default Navbar;