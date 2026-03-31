import React, { useState, useContext } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, User, CreditCard, Lock, Info, ChevronRight, Apple, X, Footprints, Coffee, Eye, EyeOff } from 'lucide-react';
import { FcGoogle } from 'react-icons/fc';
import { CartContext } from '../../Context/CartContext';

const Checkout = () => {
    const { cartItems, getCartSubtotal, clearCart } = useContext(CartContext);
    const navigate = useNavigate();

    const subtotal = getCartSubtotal();
    const estTax = subtotal * 0.08;
    const total = subtotal + estTax;
    const [orderType, setOrderType] = useState('pickup');
    const [showCvv, setShowCvv] = useState(false);
    const [formData, setFormData] = useState({
        fullName: '',
        phone: '',
        email: '',
        cardNumber: '',
        expiry: '',
        cvv: ''
    });

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleCheckout = (e) => {
        e.preventDefault();

        // Build items list to pass to success screen
        const orderDetails = {
            items: cartItems,
            totalAmount: total,
            orderDate: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
            orderNumber: `#BC-${Math.floor(10000 + Math.random() * 90000)}`
        };

        clearCart();
        navigate('/ordersuccess', { state: orderDetails });
    };

    return (
        <div className="min-h-screen bg-[#F4F5F7] font-sans pb-20 pt-28">
            <div className="max-w-[1100px] mx-auto px-5 sm:px-10">
                <div className="flex flex-col lg:flex-row gap-10 xl:gap-14">

                    {/* Left Column: Forms */}
                    <div className="flex-1">
                        <div className="flex items-center gap-2 text-[13px] text-[#4B5563] mb-5 font-semibold">
                            <ArrowLeft size={16} strokeWidth={2.5} className="text-[#9CA3AF]" />
                            <Link to="/menu" className="hover:text-[#1D7AF2] transition-colors">Back to Menu</Link>
                            <span className="text-[#D1D5DB] font-normal mx-0.5">/</span>
                            <span className="text-[#111827] font-bold">Checkout</span>
                        </div>

                        <h1 className="text-[42px] font-black text-[#111827] leading-none mb-3 tracking-tight">Checkout</h1>
                        <p className="text-[#6B7280] text-[15px] mb-10 font-medium">Finish your order by providing few details.</p>

                        <form onSubmit={handleCheckout} className="space-y-6">

                            {/* Order Type */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4 }}
                                className="bg-white rounded-3xl p-6 sm:p-8 shadow-[0_2px_10px_rgba(0,0,0,0.02)] border border-gray-100"
                            >
                                <h3 className="text-lg font-bold text-[#111827] mb-6">How would you like your order?</h3>

                                <div className="bg-[#F3F4F6] rounded-2xl p-1.5 flex gap-2">
                                    <button
                                        type="button"
                                        onClick={() => setOrderType('pickup')}
                                        className={`flex-1 flex items-center justify-center gap-2.5 py-3 rounded-xl font-bold text-[14px] transition-all duration-300 ${orderType === 'pickup' ? 'bg-white text-[#111827] shadow-sm' : 'text-[#6B7280] hover:text-[#111827] hover:bg-gray-200/50'}`}
                                    >
                                        <Footprints size={18} strokeWidth={2.5} /> Pick-up
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => setOrderType('dinein')}
                                        className={`flex-1 flex items-center justify-center gap-2.5 py-3 rounded-xl font-bold text-[14px] transition-all duration-300 ${orderType === 'dinein' ? 'bg-white text-[#111827] shadow-sm' : 'text-[#6B7280] hover:text-[#111827] hover:bg-gray-200/50'}`}
                                    >
                                        <Coffee size={18} strokeWidth={2.5} /> Dine-in
                                    </button>
                                </div>
                            </motion.div>

                            {/* Contact Info */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: 0.1 }}
                                className="bg-white rounded-3xl p-6 sm:p-8 shadow-[0_2px_10px_rgba(0,0,0,0.02)] border border-gray-100"
                            >
                                <div className="flex items-center gap-3 mb-8">
                                    <User size={20} strokeWidth={2.5} className="text-[#1D7AF2]" />
                                    <h3 className="text-lg font-bold text-[#111827]">Contact Information</h3>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                                    <div>
                                        <label className="block text-[13px] font-bold text-[#111827] mb-2.5">Full Name</label>
                                        <input
                                            type="text"
                                            name="fullName"
                                            value={formData.fullName}
                                            onChange={handleInputChange}
                                            placeholder="John Doe"
                                            className="w-full bg-white border border-[#E5E7EB] rounded-2xl px-5 py-3.5 text-[15px] font-medium text-[#111827] placeholder:text-[#9CA3AF] placeholder:font-normal focus:outline-none focus:border-[#1D7AF2] focus:ring-1 focus:ring-[#1D7AF2] transition-shadow"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-[13px] font-bold text-[#111827] mb-2.5">Phone Number</label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                            placeholder="+1 (555) 000-0000"
                                            className="w-full bg-white border border-[#E5E7EB] rounded-2xl px-5 py-3.5 text-[15px] font-medium text-[#111827] placeholder:text-[#9CA3AF] placeholder:font-normal focus:outline-none focus:border-[#1D7AF2] focus:ring-1 focus:ring-[#1D7AF2] transition-shadow"
                                            required
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-[13px] font-bold text-[#111827] mb-2.5">Email Address</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        placeholder="john@example.com"
                                        className="w-full bg-white border border-[#E5E7EB] rounded-2xl px-5 py-3.5 text-[15px] font-medium text-[#111827] placeholder:text-[#9CA3AF] placeholder:font-normal focus:outline-none focus:border-[#1D7AF2] focus:ring-1 focus:ring-[#1D7AF2] transition-shadow"
                                        required
                                    />
                                </div>
                            </motion.div>

                            {/* Payment Method */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: 0.2 }}
                                className="bg-white rounded-3xl p-6 sm:p-8 shadow-[0_2px_10px_rgba(0,0,0,0.02)] border border-gray-100"
                            >
                                <div className="flex items-center gap-3 mb-8">
                                    <div className="bg-[#1D7AF2] p-1.5 rounded text-white inline-flex items-center justify-center">
                                        <CreditCard size={14} strokeWidth={3} />
                                    </div>
                                    <h3 className="text-lg font-bold text-[#111827]">Payment Method</h3>
                                </div>

                                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                                    <button type="button" className="flex-1 bg-black text-white rounded-2xl py-4 font-bold text-[15px] flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors shadow-sm">
                                        <Apple size={20} strokeWidth={2.5} className="-mt-1" /> Apple Pay
                                    </button>
                                    <button type="button" className="flex-1 bg-white border-2 border-[#E5E7EB] text-[#111827] rounded-2xl py-4 font-bold text-[15px] flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors shadow-sm">
                                        <FcGoogle size={20} /> Google Pay
                                    </button>
                                </div>

                                <div className="flex items-center mb-8">
                                    <div className="flex-1 border-t border-[#E5E7EB]"></div>
                                    <span className="px-4 text-[10px] font-bold text-[#9CA3AF] tracking-widest uppercase">OR PAY WITH CARD</span>
                                    <div className="flex-1 border-t border-[#E5E7EB]"></div>
                                </div>

                                <div className="space-y-6">
                                    <div>
                                        <label className="block text-[13px] font-bold text-[#111827] mb-2.5">Card Number</label>
                                        <div className="relative">
                                            <input
                                                type="text"
                                                name="cardNumber"
                                                value={formData.cardNumber}
                                                onChange={handleInputChange}
                                                placeholder="0000 0000 0000 0000"
                                                className="w-full bg-white border border-[#E5E7EB] rounded-2xl pl-5 pr-12 py-3.5 text-[15px] font-medium text-[#111827] placeholder:text-[#9CA3AF] placeholder:font-normal focus:outline-none focus:border-[#1D7AF2] focus:ring-1 focus:ring-[#1D7AF2] transition-shadow"
                                                required
                                            />
                                            <CreditCard size={20} strokeWidth={2} className="absolute right-5 top-1/2 -translate-y-1/2 text-[#9CA3AF]" />
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-[13px] font-bold text-[#111827] mb-2.5">Expiry Date</label>
                                            <input
                                                type="text"
                                                name="expiry"
                                                value={formData.expiry}
                                                onChange={handleInputChange}
                                                placeholder="MM/YY"
                                                className="w-full bg-white border border-[#E5E7EB] rounded-2xl px-5 py-3.5 text-[15px] font-medium text-[#111827] placeholder:text-[#9CA3AF] placeholder:font-normal focus:outline-none focus:border-[#1D7AF2] focus:ring-1 focus:ring-[#1D7AF2] transition-shadow"
                                                required
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-[13px] font-bold text-[#111827] mb-2.5">CVV</label>
                                            <div className="relative">
                                                <input
                                                    type={showCvv ? "text" : "password"}
                                                    name="cvv"
                                                    value={formData.cvv}
                                                    onChange={handleInputChange}
                                                    placeholder="123"
                                                    maxLength="4"
                                                    className="w-full bg-white border border-[#E5E7EB] rounded-2xl px-5 pr-12 py-3.5 text-[15px] font-medium text-[#111827] placeholder:text-[#9CA3AF] placeholder:font-normal focus:outline-none focus:border-[#1D7AF2] focus:ring-1 focus:ring-[#1D7AF2] transition-shadow"
                                                    required
                                                />
                                                <button
                                                    type="button"
                                                    onClick={() => setShowCvv((prev) => !prev)}
                                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-[#9CA3AF] hover:text-[#111827] transition-colors"
                                                >
                                                    {showCvv ? <EyeOff size={18} strokeWidth={2.25} /> : <Eye size={18} strokeWidth={2.25} />}
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                        </form>
                    </div>

                    {/* Right Column: Order Summary */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="w-full lg:w-[420px]"
                    >
                        <div className="sticky top-32 flex flex-col gap-5">
                            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100/50">
                                <h3 className="text-[22px] font-black text-[#111827] mb-1.5 tracking-tight">Your Order</h3>
                                <p className="text-[14px] text-[#6B7280] font-medium mb-8">{cartItems.length} items in your cart</p>

                                {/* Items */}
                                <div className="space-y-6 mb-6">
                                    {cartItems.map((item, index) => (
                                        <div key={index} className="flex gap-4 items-center">
                                            <div className="w-[60px] h-[60px] bg-[#111827] rounded-[16px] overflow-hidden shrink-0 flex items-center justify-center">
                                                <img src={item.image} alt={item.name} className="w-[45px] h-[45px] object-cover rounded-[10px] opacity-90" />
                                            </div>
                                            <div className="flex-1">
                                                <h4 className="font-black text-[#111827] text-[13px] tracking-tight">{item.name}</h4>
                                                <p className="text-[#9CA3AF] text-[11px] font-bold mt-0.5 tracking-wide">{item.grind} • {item.roast}</p>
                                                <p className="text-[#111827] text-[11px] font-black mt-1">Qty: {item.quantity}</p>
                                            </div>
                                            <div className="font-black text-[#111827] text-[15px]">₹{(item.price * item.quantity).toFixed(2)}</div>
                                        </div>
                                    ))}
                                </div>

                                {/* Price Breakdown */}
                                <div className="border-t border-[#F3F4F6] pt-5 space-y-3 mb-8">
                                    <div className="flex justify-between text-[13px] font-bold text-[#9CA3AF]">
                                        <p>Subtotal</p><p className="text-[#4B5563] font-black">₹{subtotal.toFixed(2)}</p>
                                    </div>
                                    <div className="flex justify-between text-[13px] font-bold text-[#9CA3AF]">
                                        <p>Taxes (8%)</p><p className="text-[#4B5563] font-black">₹{estTax.toFixed(2)}</p>
                                    </div>
                                    <div className="flex justify-between text-[13px] font-bold text-[#9CA3AF]">
                                        <p>Service Fee</p><p className="text-[#4B5563] font-black">₹0.00</p>
                                    </div>
                                </div>

                                {/* Total */}
                                <div className="flex justify-between items-end mb-8 pt-2">
                                    <h4 className="text-[20px] font-black text-[#111827]">Total</h4>
                                    <p className="text-[32px] font-black text-[#111827] leading-none tracking-tight">₹{total.toFixed(2)}</p>
                                </div>

                                {/* Place Order CTA */}
                                <button
                                    onClick={handleCheckout}
                                    className="w-full bg-[#1D7AF2] hover:bg-[#1565C0] text-white font-bold text-[16px] py-4 rounded-[16px] shadow-[0_4px_16px_rgba(29,122,242,0.25)] hover:shadow-[0_8px_24px_rgba(29,122,242,0.35)] transition-all flex items-center justify-center gap-2 active:scale-[0.98]"
                                >
                                    Place Order <ChevronRight size={20} strokeWidth={2.5} />
                                </button>

                                <div className="flex flex-col items-center justify-center gap-2 mt-6">
                                    <div className="flex items-center gap-1.5 text-[#9CA3AF] text-[10px] font-bold tracking-[0.14em] uppercase">
                                        <Lock size={12} strokeWidth={2.5} /> SECURE SSL ENCRYPTED CHECKOUT
                                    </div>
                                    {/* Mocking the little card logos */}
                                    <div className="flex items-center gap-2 opacity-30 mt-1">
                                        <div className="w-6 h-4 bg-gray-400 rounded-sm"></div>
                                        <div className="w-6 h-4 bg-gray-400 rounded-sm"></div>
                                    </div>
                                </div>
                            </div>

                            {/* Help Widget */}
                            <div className="bg-white rounded-3xl p-6 border border-dashed border-[#D1D5DB] flex gap-4 items-start shadow-sm">
                                <div className="bg-[#1D7AF2] text-white rounded-full p-2 shrink-0 mt-0.5 shadow-sm">
                                    <Info size={16} strokeWidth={3} />
                                </div>
                                <div>
                                    <h5 className="text-[13px] font-bold text-[#111827] mb-1.5">Need help with your order?</h5>
                                    <p className="text-[12px] text-[#6B7280] leading-relaxed font-medium">
                                        Visit our <a href="#" className="text-[#1D7AF2] font-semibold hover:underline">FAQ</a> or call our support at <span className="font-semibold text-[#111827]">1-800-COFFEE</span>. Our expert baristas are standing by.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                </div>

                <div className="mt-20 text-center border-t border-[#E5E7EB] pt-8">
                    <p className="text-[13px] text-[#9CA3AF] font-medium">
                        © 2024 Premium Coffee Store. All payments are processed securely. <a href="#" className="underline hover:text-[#6B7280]">Privacy Policy</a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
