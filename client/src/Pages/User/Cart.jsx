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
        <div className="min-h-screen bg-[#181511] font-sans pb-24 pt-32 text-[#EAEAEA]">
            <div className="max-w-[1200px] mx-auto px-5 sm:px-10">
                <div className="mb-10 lg:mb-14">
                    <h1 className="text-[36px] lg:text-[42px] font-black text-[#E8DCC2] tracking-tight mb-2">Your Cart</h1>
                    <p className="text-[#A3998C] text-[15px] font-medium tracking-wide">Review your selected blends before we brew them for you.</p>
                </div>

                {cartItems.length === 0 ? (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center py-20 bg-[#241F1A] rounded-3xl"
                    >
                        <h2 className="text-2xl font-bold text-[#D99B58] mb-4">Your cart is empty</h2>
                        <p className="text-[#A3998C] mb-8">Looks like you haven't added any coffee yet.</p>
                        <Link to="/menu" className="inline-block bg-[#D99B58] hover:bg-[#C28546] text-[#14110E] font-bold px-8 py-3 rounded-full transition-colors">
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
                                        className="bg-[#241F1A] rounded-2xl p-4 sm:p-6 flex flex-col sm:flex-row gap-5 items-center sm:items-start border border-[#3A322A]"
                                    >
                                        <div className="w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] shrink-0 bg-[#E8DCC2] rounded-xl overflow-hidden flex items-center justify-center p-2">
                                            <img src={item.image} alt={item.name} className="w-full h-full object-cover rounded-lg" />
                                        </div>

                                        <div className="flex-1 w-full flex flex-col justify-between h-full py-1 gap-4 sm:gap-0">
                                            <div className="flex justify-between items-start w-full">
                                                <div>
                                                    <h3 className="text-[18px] sm:text-[20px] font-bold text-[#EAEAEA] tracking-tight leading-tight mb-1">{item.name}</h3>
                                                    <p className="text-[#A3998C] text-[13px] font-medium">{item.grind} | {item.roast}</p>
                                                    <p className="text-[#D99B58] font-bold text-[14px] mt-1.5 sm:mt-2">₹{item.price.toFixed(2)}</p>
                                                </div>

                                                <div className="hidden sm:flex flex-col items-end gap-3">
                                                    <span className="font-bold text-[18px] text-[#EAEAEA]">₹{(item.price * item.quantity).toFixed(2)}</span>
                                                    <button
                                                        onClick={() => removeFromCart(item.id, item.grind, item.roast)}
                                                        className="text-[#A3998C] hover:text-[#EF4444] transition-colors flex items-center gap-1.5 text-[12px] font-semibold"
                                                    >
                                                        <Trash2 size={14} strokeWidth={2.5} /> Remove
                                                    </button>
                                                </div>
                                            </div>

                                            <div className="flex items-center justify-between w-full mt-auto">
                                                <div className="flex items-center gap-4 bg-[#14110E] rounded-full px-4 py-2 border border-[#3A322A]">
                                                    <button onClick={() => updateQuantity(item.id, item.grind, item.roast, item.quantity - 1)} className="text-[#A3998C] hover:text-[#EAEAEA] transition-colors">
                                                        <Minus size={16} strokeWidth={2.5} />
                                                    </button>
                                                    <span className="font-bold text-[15px] text-[#EAEAEA] w-6 text-center">{item.quantity}</span>
                                                    <button onClick={() => updateQuantity(item.id, item.grind, item.roast, item.quantity + 1)} className="text-[#A3998C] hover:text-[#EAEAEA] transition-colors">
                                                        <Plus size={16} strokeWidth={2.5} />
                                                    </button>
                                                </div>

                                                <div className="sm:hidden flex flex-col items-end gap-2">
                                                    <span className="font-bold text-[18px] text-[#EAEAEA]">₹{(item.price * item.quantity).toFixed(2)}</span>
                                                    <button
                                                        onClick={() => removeFromCart(item.id, item.grind, item.roast)}
                                                        className="text-[#A3998C] hover:text-[#EF4444] transition-colors flex items-center gap-1.5 text-[12px] font-semibold"
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
                                <Link to="/menu" className="inline-flex items-center gap-2 text-[#D99B58] hover:text-[#E8DCC2] font-semibold text-[14px] transition-colors group">
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
                            <div className="bg-[#241F1A] rounded-[24px] p-6 sm:p-8 border border-[#3A322A] sticky top-32">
                                <h3 className="text-[22px] font-bold text-[#E8DCC2] mb-8 pb-4 border-b border-[#3A322A]">Order Summary</h3>

                                <div className="space-y-4 mb-8">
                                    <div className="flex justify-between items-center text-[14px] font-medium text-[#A3998C]">
                                        <span>Subtotal</span>
                                        <span className="text-[#EAEAEA] font-semibold">₹{subtotal.toFixed(2)}</span>
                                    </div>
                                    <div className="flex justify-between items-center text-[14px] font-medium text-[#A3998C]">
                                        <span>Estimated Tax</span>
                                        <span className="text-[#D99B58] font-semibold">₹{estTax.toFixed(2)}</span>
                                    </div>
                                    <div className="flex justify-between items-center text-[14px] font-medium text-[#A3998C]">
                                        <span>Shipping</span>
                                        <span className="text-[#22C55E] font-semibold">Calculated at checkout</span>
                                    </div>
                                </div>

                                <div className="flex justify-between items-center mb-8 border-t border-[#3A322A] pt-6">
                                    <span className="text-[18px] font-bold text-[#EAEAEA]">Total</span>
                                    <span className="text-[26px] font-black text-[#D99B58]">₹{total.toFixed(2)}</span>
                                </div>

                                <div className="mb-8">
                                    <label className="block text-[10px] font-bold tracking-[0.15em] uppercase text-[#A3998C] mb-3">PROMO CODE</label>
                                    <div className="flex gap-3">
                                        <input
                                            type="text"
                                            value={promoCode}
                                            onChange={(e) => setPromoCode(e.target.value)}
                                            placeholder="CODE10"
                                            className="flex-1 bg-[#14110E] border border-[#3A322A] rounded-xl px-4 py-3 text-[14px] text-[#EAEAEA] placeholder:text-[#6B6358] focus:outline-none focus:border-[#D99B58] transition-colors uppercase"
                                        />
                                        <button className="bg-[#3A322A] hover:bg-[#4A4137] text-[#EAEAEA] font-bold px-6 py-3 rounded-xl text-[14px] transition-colors">
                                            Apply
                                        </button>
                                    </div>
                                </div>

                                <button
                                    onClick={() => navigate('/checkout')}
                                    className="w-full bg-[#E5B684] hover:bg-[#D4A373] text-[#14110E] font-black text-[16px] py-4 rounded-xl shadow-[0_4px_16px_rgba(229,182,132,0.15)] transition-all active:scale-[0.98] flex items-center justify-center gap-2"
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
