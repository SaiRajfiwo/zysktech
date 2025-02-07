import React, { useState } from "react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md border-b-2 border-gray-100 p-6">
      <div className="container mx-auto flex items-center ">
        {/* Brand Logo */}
        <a href="#">
          <img src="/zysk.png" alt="Zysk Logo" className="h-8" />
        </a>

        {/* Hamburger icon for mobile */}
        <button
          className="md:hidden ml-52 text-black"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-10">
          <li><a href="#" className="hover:text-rose-600 font-bold ml-15">Home</a></li>
          <li><a href="#" className="hover:text-rose-600 font-bold">Products ⮟</a></li>
          <li><a href="#" className="hover:text-rose-600 font-bold">Resources ⮟</a></li>
          <li><a href="#" className="hover:text-rose-600 font-bold">Pricing</a></li>
        </ul>

        {/* Profile image on the right (Desktop) */}
        <a href="#" className="hidden md:flex justify-end absolute right-30">
          <img src="/pfp1.png" alt="profile1" className="h-10" />
        </a>
      </div>

      {/* Mobile Dropdown Menu (Right Side) */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-black"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Mobile Menu Items */}
        <ul className="mt-16 space-y-6 text-center">
          <li><a href="#" className="block text-black font-bold">Home</a></li>
          <li><a href="#" className="block text-black font-bold">Products ⮟</a></li>
          <li><a href="#" className="block text-black font-bold">Resources ⮟</a></li>
          <li><a href="#" className="block text-black font-bold">Pricing</a></li>
        </ul>

        {/* Profile Image in Mobile Menu */}
        <div className="mt-8 flex justify-center">
          <img src="/pfp1.png" alt="Profile" className="h-12" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
