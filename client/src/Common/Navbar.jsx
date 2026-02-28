import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="cart-shadow fixed top-0 left-0 w-full bg-white h-16 z-40">
      <div className="flex items-center justify-between xl:px-35 px-5 sm:px-10 md:px-15 lg:px-20 h-16">

        {/* Logo */}
        <NavLink to="/" className="inline-flex items-center">
          <img
            src="/src/Assets/logo1.png"
            alt="Brewcraft Caffee"
            className="w-28 sm:w-30 md:w-35 lg:w-42 xl:w-48 h-auto object-contain"
          />
        </NavLink>

        {/* Desktop Nav (ONLY xl and above) */}
        <div className="hidden xl:flex gap-6 text-[16px] tracking-wider font-semibold">
          {navLinks.map((item) => (
            <NavLink key={item.name} to={item.path}>
              {item.name}
            </NavLink>
          ))}
        </div>

        {/* Desktop CTA (ONLY xl and above) */}
        <div className="hidden xl:block cart-shadow relative group px-5 py-1.5 overflow-hidden w-fit text-center border rounded-full hover:scale-110 transition-all duration-700">
          <span className="absolute inset-0 bg-[#A689663f] -translate-x-full group-hover:translate-x-0 transition-transform duration-700 z-0" />
          <a
            href="https://wa.me/919029965109?text=Hello,%20I’m%20interested%20in%20your%20services."
            target="_blank"
            rel="noopener noreferrer"
            className="relative z-10 subHeading capitalize text-black xl:text-[16px]"
          >
             Sign In
          </a>
        </div>

        {/* Menu Button (Tablet + Mobile) */}
        <button
          onClick={() => setMenuOpen(true)}
          className="xl:hidden text-3xl"
        >
          <HiMenuAlt3 />
        </button>
      </div>

      {/* Mobile / Tablet Menu */}
      <div
        className={`fixed top-0 right-0 w-50 sm:w-70 h-95 rounded-bl-md bg-gradient-brand-500-300-200 z-50 transform transition-transform duration-500 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-5">
          <button onClick={() => setMenuOpen(false)} className="text-3xl">
            <HiX />
          </button>
        </div>

        <div className="flex flex-col items-center gap-4 text-xl font-bold">
          {navLinks.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              onClick={() => setMenuOpen(false)}
            >
              {item.name}
            </NavLink>
          ))}

          {/* CTA inside menu */}
          <a
            href="https://wa.me/919029965109?text=Hello,%20I’m%20interested%20in%20your%20services."
            target="_blank"
            rel="noopener noreferrer"
            className=" px-6 py-1 border rounded cart-shadow"
          >
            Sign In
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
