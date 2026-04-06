import React, { useContext, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { Minus, Plus, Trash2, ArrowLeft } from 'lucide-react';
import { CartContext } from '../../Context/CartContext';

const Cart = () => {
    const { cartItems, removeFromCart, updateQuantity, getCartSubtotal } = useContext(CartContext);
    const [promoCode, setPromoCode] = useState('');
    const navigate = useNavigate();

    const subtotal = getCartSubtotal();
    const estTax = subtotal * 0.08;
    const total = subtotal + estTax;

    return (
        <div className="min-h-screen bg-[#FCF8F5] font-sans pb-24 pt-32 text-[#0A0A0A]">
            <div className="max-w-[1200px] mx-auto px-5 sm:px-10">
                <div className="mb-10 lg:mb-14">
                    <h1 className="text-[36px] lg:text-[42px] font-black text-[#3e2723] tracking-tight mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>Your Cart</h1>
                    <p className="text-[#555555] text-[15px] font-medium tracking-wide">Review your selected blends before we brew them for you.</p>
                </div>

                {cartItems.length === 0 ? (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center py-20 bg-white rounded-[28px] border border-black/5 shadow-[0_4px_25px_rgba(0,0,0,0.03)]"
                    >
                        <h2 className="text-2xl font-bold text-[#D46C11] mb-4">Your cart is empty</h2>
                        <p className="text-[#7A7A7A] mb-8">Looks like you haven't added any coffee yet.</p>
                        <Link to="/menu" className="inline-block bg-[#D46C11] hover:bg-[#B5590D] text-white font-bold px-8 py-3 rounded-full transition-colors shadow-md">
                            Explore Menu
                        </Link>
                    </motion.div>
                ) : (
                    <div className="flex flex-col lg:flex-row gap-10 xl:gap-14 items-start">

                        {/* Left Side: Cart Items */}
                        <div className="flex-1 w-full space-y-6">
                            <AnimatePresence>
                                {cartItems.map((item, index) => (
                                    <motion.div
                                        key={`${item.id}-${item.grind}-${item.roast}-${index}`}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, height: 0, marginBottom: 0 }}
                                        className="bg-white rounded-2xl p-4 sm:p-6 flex flex-col sm:flex-row gap-5 items-center sm:items-start border border-black/5 shadow-[0_4px_20px_rgba(0,0,0,0.02)]"
                                    >
                                        <div className="w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] shrink-0 bg-[#F4F5F7] rounded-xl overflow-hidden flex items-center justify-center p-2">
                                            <img src={item.image} alt={item.name} className="w-full h-full object-cover rounded-lg" />
                                        </div>

                                        <div className="flex-1 w-full flex flex-col justify-between h-full py-1 gap-4 sm:gap-0">
                                            <div className="flex justify-between items-start w-full">
                                                <div>
                                                    <h3 className="text-[18px] sm:text-[20px] font-bold text-[#0A0A0A] tracking-tight leading-tight mb-1">{item.name}</h3>
                                                    <p className="text-[#7A7A7A] text-[13px] font-medium">{item.grind} | {item.roast}</p>
                                                    <p className="text-[#D46C11] font-bold text-[14px] mt-1.5 sm:mt-2">₹{item.price.toFixed(2)}</p>
                                                </div>

                                                <div className="hidden sm:flex flex-col items-end gap-3">
                                                    <span className="font-bold text-[18px] text-[#0A0A0A]">₹{(item.price * item.quantity).toFixed(2)}</span>
                                                    <button
                                                        onClick={() => removeFromCart(item.id, item.grind, item.roast)}
                                                        className="text-[#A3A3A3] hover:text-[#EF4444] transition-colors flex items-center gap-1.5 text-[12px] font-semibold"
                                                    >
                                                        <Trash2 size={14} strokeWidth={2.5} /> Remove
                                                    </button>
                                                </div>
                                            </div>

                                            <div className="flex items-center justify-between w-full mt-auto">
                                                <div className="flex items-center gap-4 bg-[#F4F5F7] rounded-full px-4 py-2 border border-transparent">
                                                    <button onClick={() => updateQuantity(item.id, item.grind, item.roast, item.quantity - 1)} className="text-[#7A7A7A] hover:text-[#0A0A0A] transition-colors">
                                                        <Minus size={16} strokeWidth={2.5} />
                                                    </button>
                                                    <span className="font-bold text-[15px] text-[#0A0A0A] w-6 text-center">{item.quantity}</span>
                                                    <button onClick={() => updateQuantity(item.id, item.grind, item.roast, item.quantity + 1)} className="text-[#7A7A7A] hover:text-[#0A0A0A] transition-colors">
                                                        <Plus size={16} strokeWidth={2.5} />
                                                    </button>
                                                </div>

                                                <div className="sm:hidden flex flex-col items-end gap-2">
                                                    <span className="font-bold text-[18px] text-[#0A0A0A]">₹{(item.price * item.quantity).toFixed(2)}</span>
                                                    <button
                                                        onClick={() => removeFromCart(item.id, item.grind, item.roast)}
                                                        className="text-[#A3A3A3] hover:text-[#EF4444] transition-colors flex items-center gap-1.5 text-[12px] font-semibold"
                                                    >
                                                        <Trash2 size={14} strokeWidth={2.5} /> Remove
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </AnimatePresence>

                            <div className="pt-6">
                                <Link to="/menu" className="inline-flex items-center gap-2 text-[#D46C11] hover:text-[#B5590D] font-semibold text-[14px] transition-colors group">
                                    <ArrowLeft size={16} strokeWidth={2.5} className="group-hover:-translate-x-1 transition-transform" /> Continue Shopping
                                </Link>
                            </div>
                        </div>

                        {/* Right Side: Order Summary */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="w-full lg:w-[380px] shrink-0"
                        >
                            <div className="bg-white rounded-[24px] p-6 sm:p-8 border border-black/5 shadow-[0_4px_25px_rgba(0,0,0,0.03)] sticky top-32">
                                <h3 className="text-[22px] font-bold text-[#0A0A0A] mb-8 pb-4 border-b border-[#F4F5F7]">Order Summary</h3>

                                <div className="space-y-4 mb-8">
                                    <div className="flex justify-between items-center text-[14px] font-medium text-[#555555]">
                                        <span>Subtotal</span>
                                        <span className="text-[#0A0A0A] font-semibold">₹{subtotal.toFixed(2)}</span>
                                    </div>
                                    <div className="flex justify-between items-center text-[14px] font-medium text-[#555555]">
                                        <span>Estimated Tax</span>
                                        <span className="text-[#D46C11] font-semibold">₹{estTax.toFixed(2)}</span>
                                    </div>
                                    <div className="flex justify-between items-center text-[14px] font-medium text-[#555555]">
                                        <span>Shipping</span>
                                        <span className="text-[#1E8E3E] font-semibold">Calculated at checkout</span>
                                    </div>
                                </div>

                                <div className="flex justify-between items-center mb-8 border-t border-[#F4F5F7] pt-6">
                                    <span className="text-[18px] font-bold text-[#0A0A0A]">Total</span>
                                    <span className="text-[26px] font-black text-[#D46C11]">₹{total.toFixed(2)}</span>
                                </div>

                                <div className="mb-8">
                                    <label className="block text-[10px] font-bold tracking-[0.15em] uppercase text-[#A3A3A3] mb-3">PROMO CODE</label>
                                    <div className="flex gap-3">
                                        <input
                                            type="text"
                                            value={promoCode}
                                            onChange={(e) => setPromoCode(e.target.value)}
                                            placeholder="CODE10"
                                            className="flex-1 bg-[#F4F5F7] border border-transparent rounded-xl px-4 py-3 text-[14px] text-[#0A0A0A] placeholder:text-[#A3A3A3] focus:outline-none focus:border-[#D46C11] focus:ring-1 focus:ring-[#D46C11]/30 transition-colors uppercase"
                                        />
                                        <button className="bg-[#D46C11] hover:bg-[#B5590D] text-white font-bold px-6 py-3 rounded-xl text-[14px] transition-colors">
                                            Apply
                                        </button>
                                    </div>
                                </div>

                                <button
                                    onClick={() => navigate('/checkout')}
                                    className="w-full bg-[#D46C11] hover:bg-[#B5590D] text-white font-black text-[16px] py-4 rounded-xl shadow-[0_4px_16px_rgba(212,108,17,0.25)] hover:shadow-[0_6px_20px_rgba(212,108,17,0.35)] transition-all flex items-center justify-center gap-2"
                                >
                                    Proceed to Checkout
                                </button>
                            </div>
                        </motion.div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Cart;
