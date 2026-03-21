import React, { useState, useEffect, useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import { HiMenuAlt3, HiX, HiOutlineShoppingBag } from "react-icons/hi";
import { CartContext } from "../Context/CartContext";
import { motion } from "framer-motion";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Menu", path: "/menu" },
  { name: "Our Specials", path: "/specials" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { cartItems } = useContext(CartContext);

  const cartCount = cartItems?.length ? cartItems.reduce((acc, item) => acc + item.quantity, 0) : 0;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-[#3e2723]/60 backdrop-blur-md py-2 shadow-lg border-b border-white/10" : "bg-transparent py-4"}`}>
      <div className="flex items-center justify-between xl:px-35 px-5 sm:px-10 md:px-15 lg:px-20 h-16">

        {/* Logo */}
        <NavLink to="/" className="inline-flex items-center">
          <img
            src="/src/Assets/logo1.png"
            alt="Brewcraft Caffee"
            className="w-24 sm:w-28 md:w-32 lg:w-36 h-auto object-contain"
          />
        </NavLink>

        {/* Desktop Nav (ONLY xl and above) */}
        <div className="hidden xl:flex gap-8 text-[15px] tracking-wide font-medium text-white">
          {navLinks.map((item) => (
            <NavLink 
              key={item.name} 
              to={item.path}
              className={({isActive}) => `transition-colors hover:text-[#e09825] ${isActive ? "text-[#e09825]" : "text-white"}`}
            >
              {item.name}
            </NavLink>
          ))}
        </div>

        {/* Desktop CTA & Cart (ONLY xl and above) */}
        <div className="hidden xl:flex items-center gap-6">
          <Link to="/cart" className="text-white hover:text-[#e09825] transition-colors">
            <motion.div 
              key={cartCount}
              initial={{ scale: 1 }}
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 0.3 }}
              className="relative flex items-center justify-center"
            >
              <HiOutlineShoppingBag className="text-2xl" />
              {cartCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-[#e09825] text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">
                  {cartCount}
                </span>
              )}
            </motion.div>
          </Link>
          <Link
            to="/login"
            className="text-white hover:text-[#e09825] transition-colors font-medium text-[15px]"
          >
            Sign In
          </Link>

          <Link
            to="/register"
            className="bg-[#e09825] hover:bg-[#c68520] text-white px-6 py-2 rounded-full font-medium text-[15px] transition-all duration-300 shadow-md shadow-black/20"
          >
            Sign Up
          </Link>
        </div>

        {/* Mobile / Tablet Menu & Cart */}
        <div className="xl:hidden flex items-center gap-4 text-white">
          <Link to="/cart" className="hover:text-[#e09825] transition-colors mt-1">
            <motion.div 
              key={cartCount}
              initial={{ scale: 1 }}
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 0.3 }}
              className="relative flex items-center justify-center"
            >
              <HiOutlineShoppingBag className="text-2xl" />
              {cartCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-[#e09825] text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">
                  {cartCount}
                </span>
              )}
            </motion.div>
          </Link>
          <button
            onClick={() => setMenuOpen(true)}
            className="text-3xl"
          >
            <HiMenuAlt3 />
          </button>
        </div>
      </div>

      {/* Mobile / Tablet Menu */}
      <div
        className={`fixed top-0 right-0 w-full h-screen bg-black/95 backdrop-blur-xl z-50 transform transition-transform duration-500 flex flex-col ${menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="flex justify-end p-6">
          <button onClick={() => setMenuOpen(false)} className="text-3xl text-white hover:text-[#e09825]">
            <HiX />
          </button>
        </div>

        <div className="flex flex-col items-center gap-8 mt-10 text-xl font-medium text-white">
          {navLinks.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              onClick={() => setMenuOpen(false)}
              className={({isActive}) => `transition-colors hover:text-[#e09825] ${isActive ? "text-[#e09825]" : "text-white"}`}
            >
              {item.name}
            </NavLink>
          ))}

          <div className="flex flex-col items-center gap-4 mt-8 w-full px-10">
            <Link
              to="/login"
              onClick={() => setMenuOpen(false)}
              className="text-white hover:text-[#e09825] transition-colors py-2"
            >
              Sign In
            </Link>
            <Link
              to="/register"
              onClick={() => setMenuOpen(false)}
              className="bg-[#e09825] hover:bg-[#c68520] text-white px-8 py-3 rounded-full w-full max-w-xs text-center transition-all duration-300"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
