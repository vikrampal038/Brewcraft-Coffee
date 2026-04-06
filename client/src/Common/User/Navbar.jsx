import React, { useState, useEffect, useContext } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { HiMenuAlt3, HiX, HiOutlineShoppingBag } from "react-icons/hi";
import {
  Calendar,
  User,
  LogOut,
  ShoppingBag,
  Settings,
  ChevronDown,
} from "lucide-react";
import { CartContext } from "../../Context/CartContext";
import { motion, AnimatePresence } from "framer-motion";
import { useAuth } from "../../Hooks/useAuth";
import logo from "../../Assets/logo1.png";
import { useAuthModal } from "../../Context/AuthContext";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Menu", path: "/menu" },
  { name: "Our Specials", path: "/specials" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const { cartItems } = useContext(CartContext);
  const { isSignedIn, user, signOut } = useAuth();
  const { openLogin } = useAuthModal();
  const navigate = useNavigate();

  const cartCount = cartItems?.length
    ? cartItems.reduce((acc, item) => acc + item.quantity, 0)
    : 0;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogout = async () => {
    await signOut();
    navigate("/");
    setProfileOpen(false);
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-[#1A1A1A]/95 backdrop-blur-md py-2 shadow-xl border-b border-white/10" : "bg-[#1A1A1A]/80 backdrop-blur-md py-4 border-b border-white/5"}`}
    >
      <div className="flex items-center justify-between xl:px-35 px-5 sm:px-10 md:px-15 lg:px-20 h-16">
        {/* Logo */}
        <NavLink to="/" className="inline-flex items-center">
          <img
            src={logo}
            alt="Brewcraft Caffee"
            className="w-24 sm:w-28 md:w-32 lg:w-36 h-auto object-contain"
          />
        </NavLink>

        {/* Desktop Nav */}
        <div className="hidden xl:flex gap-8 text-[15px] tracking-wide font-medium text-white">
          {navLinks.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `transition-colors hover:text-[#e09825] ${isActive ? "text-[#e09825]" : "text-white"}`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>

        {/* Desktop Auth Section */}
        <div className="hidden xl:flex items-center gap-6">
          {isSignedIn ? (
            <div className="flex items-center gap-6">
              {/* Cart Icon */}
              <Link
                to="/cart"
                className="text-white hover:text-[#e09825] transition-colors"
              >
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

              {/* Profile Avatar with Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setProfileOpen(!profileOpen)}
                  className="flex items-center gap-2 group p-1 rounded-full hover:bg-white/10 transition-all"
                >
                  <div className="w-9 h-9 rounded-full overflow-hidden border-2 border-white/20 group-hover:border-white transition-colors">
                    <img
                      src={user.imageUrl}
                      alt={user.fullName}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* <ChevronDown
                    size={14}
                    className={`text-white transition-transform duration-300 ${profileOpen ? "rotate-180" : ""}`}
                  /> */}
                </button>

                <AnimatePresence>
                  {profileOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      className="absolute right-0 mt-4 w-64 bg-white rounded-3xl shadow-2xl overflow-hidden py-3 border border-black/5"
                    >
                      <div className="px-6 py-4 border-b border-[#F4F5F7] mb-2">
                        <p className="text-[14px] font-black text-[#0A0A0A] line-clamp-1">
                          {user.fullName}
                        </p>
                        <p className="text-[12px] font-bold text-[#7A7A7A] line-clamp-1">
                          {user.primaryEmailAddress?.emailAddress}
                        </p>
                      </div>

                      <div className="px-3 space-y-1">
                        <Link
                          to="/profile"
                          onClick={() => setProfileOpen(false)}
                          className="flex items-center gap-3 px-4 py-3 rounded-2xl text-[14px] font-bold text-[#0A0A0A] hover:bg-[#FCF8F5] hover:text-[#D46C11] transition-all"
                        >
                          <User size={18} /> My Profile
                        </Link>
                        <Link
                          to="/order-history"
                          onClick={() => setProfileOpen(false)}
                          className="flex items-center gap-3 px-4 py-3 rounded-2xl text-[14px] font-bold text-[#0A0A0A] hover:bg-[#FCF8F5] hover:text-[#D46C11] transition-all"
                        >
                          <ShoppingBag size={18} /> Order History
                        </Link>
                        <Link
                          to="/reservation-history"
                          onClick={() => setProfileOpen(false)}
                          className="flex items-center gap-3 px-4 py-3 rounded-2xl text-[14px] font-bold text-[#0A0A0A] hover:bg-[#FCF8F5] hover:text-[#D46C11] transition-all"
                        >
                          <Calendar size={18} /> Reservations
                        </Link>
                      </div>

                      <div className="mt-2 pt-2 border-t border-[#F4F5F7] px-3">
                        <button
                          onClick={handleLogout}
                          className="w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-[14px] font-bold text-red-500 hover:bg-red-50 transition-all"
                        >
                          <LogOut size={18} /> Logout
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          ) : (
            <button
              onClick={() => openLogin()}
              className="bg-[#e09825] hover:bg-[#c68520] text-white px-8 py-2.5 rounded-full font-black text-[15px] uppercase tracking-wider transition-all duration-300 shadow-lg shadow-black/20"
            >
              Sign In
            </button>
          )}
        </div>

        {/* Mobile / Tablet Menu & Header Buttons */}
        <div className="xl:hidden flex items-center gap-4 text-white">
          {isSignedIn && (
            <Link to="/cart" className="hover:text-[#e09825] transition-colors">
              <div className="relative flex items-center justify-center">
                <HiOutlineShoppingBag className="text-2xl" />
                {cartCount > 0 && (
                  <span className="absolute -top-1.5 -right-1.5 bg-[#e09825] text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">
                    {cartCount}
                  </span>
                )}
              </div>
            </Link>
          )}
          <button onClick={() => setMenuOpen(true)} className="text-3xl">
            <HiMenuAlt3 />
          </button>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {menuOpen && (
          <div className="fixed inset-0 z-[100]">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute top-0 right-0 w-full max-w-sm h-full bg-[#1A1A1A] p-8 flex flex-col shadow-2xl"
            >
              <div className="flex justify-between items-center mb-12">
                <img
                  src={logo}
                  alt="Logo"
                  className="w-24 grayscale brightness-200"
                />
                <button
                  onClick={() => setMenuOpen(false)}
                  className="p-2 text-white hover:text-[#e09825]"
                >
                  <HiX size={32} />
                </button>
              </div>

              {isSignedIn && (
                <div className="mb-10 p-6 bg-white/5 rounded-3xl flex items-center gap-4 border border-white/10">
                  <img
                    src={user.imageUrl}
                    className="w-14 h-14 rounded-full border-2 border-[#e09825]"
                    alt=""
                  />
                  <div>
                    <p className="text-white font-bold">{user.fullName}</p>
                    <p className="text-white/50 text-xs">
                      {user.primaryEmailAddress?.emailAddress}
                    </p>
                  </div>
                </div>
              )}

              <div className="flex flex-col gap-6 text-xl font-bold text-white mb-auto">
                {navLinks.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.path}
                    onClick={() => setMenuOpen(false)}
                    className="hover:text-[#e09825]"
                  >
                    {item.name}
                  </NavLink>
                ))}
                {isSignedIn && (
                  <>
                    <div className="h-px bg-white/10 my-2" />
                    <NavLink
                      to="/profile"
                      onClick={() => setMenuOpen(false)}
                      className="flex items-center gap-3 text-lg hover:text-[#e09825]"
                    >
                      <User size={20} /> My Profile
                    </NavLink>
                    <NavLink
                      to="/order-history"
                      onClick={() => setMenuOpen(false)}
                      className="flex items-center gap-3 text-lg hover:text-[#e09825]"
                    >
                      <ShoppingBag size={20} /> My Orders
                    </NavLink>
                    <NavLink
                      to="/reservation-history"
                      onClick={() => setMenuOpen(false)}
                      className="flex items-center gap-3 text-lg hover:text-[#e09825]"
                    >
                      <Calendar size={20} /> My Reservations
                    </NavLink>
                  </>
                )}
              </div>

              <div className="mt-10">
                {!isSignedIn ? (
                  <button
                    onClick={() => {
                      setMenuOpen(false);
                      openLogin();
                    }}
                    className="w-full h-14 bg-[#e09825] text-white font-black rounded-full text-lg shadow-xl shadow-[#e09825]/20"
                  >
                    SIGN IN
                  </button>
                ) : (
                  <button
                    onClick={handleLogout}
                    className="w-full flex items-center justify-center gap-2 text-red-500 font-bold py-4"
                  >
                    <LogOut size={20} /> Logout
                  </button>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
