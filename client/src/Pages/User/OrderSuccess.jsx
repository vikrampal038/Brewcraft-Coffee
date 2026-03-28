import React, { useMemo, useId } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Check, Truck, ShoppingCart, MapPin } from 'lucide-react';

const OrderSuccess = () => {
    const location = useLocation();
    const fallbackId = useId();

    // Provide fallback dummy data so the UI always works when navigating directly
    const fallbackOrderNumber = `#BC-${fallbackId.replace(/[^a-zA-Z0-9]/g, '').slice(-5).toUpperCase().padStart(5, '0')}`;
    const orderDetails = useMemo(() => location.state || {
        orderNumber: fallbackOrderNumber,
        orderDate: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
        items: [
            {
                name: "Ethiopian Yirgacheffe",
                image: "https://images.unsplash.com/photo-1559525839-b184a4d698c7?w=150&h=150&fit=crop",
                grind: "Whole Bean",
                quantity: 1,
                price: 2206.32
            },
            {
                name: "Signature Latte",
                image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?w=150&h=150&fit=crop",
                grind: "Oat Milk",
                quantity: 1,
                price: 597.55
            }
        ],
        totalAmount: 2803.87
    }, [location.state, fallbackOrderNumber]);

    return (
        <div className="min-h-screen bg-[#FCF8F5] font-sans pb-20 pt-32">
            <div className="max-w-[700px] mx-auto px-5">

                {/* Header Section */}
                <div className="flex flex-col items-center text-center mb-10">
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 200, damping: 20 }}
                        className="w-16 h-16 rounded-full bg-[#FCF8F5] border-2 border-[#D46C11] flex items-center justify-center mb-6"
                    >
                        <Check size={32} strokeWidth={3} className="text-[#D46C11]" />
                    </motion.div>

                    <h1 className="text-[36px] md:text-[42px] font-bold text-[#0A0A0A] tracking-tight mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                        Order Placed Successfully
                    </h1>
                    <p className="text-[#555555] text-[15px] font-medium leading-relaxed max-w-[400px]">
                        Thank you for your purchase. Our artisans are now preparing your premium selection.
                    </p>
                </div>

                {/* Receipt Card */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="bg-white rounded-[24px] overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.04)] mb-8"
                >
                    {/* Top image banner */}
                    <div className="h-32 w-full bg-[#111827]">
                        <img
                            src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&h=300&fit=crop"
                            alt="Coffee Beans Sack"
                            className="w-full h-full object-cover opacity-90"
                        />
                    </div>

                    <div className="p-8 sm:p-10">
                        {/* Order Meta */}
                        <div className="flex justify-between items-center mb-10 border-b border-[#F4F5F7] pb-8">
                            <div>
                                <h4 className="text-[11px] font-black text-[#D46C11] uppercase tracking-[0.15em] mb-1.5">Order Number</h4>
                                <p className="text-[18px] font-black text-[#0A0A0A]">{orderDetails.orderNumber}</p>
                            </div>
                            <div className="text-right">
                                <h4 className="text-[11px] font-black text-[#D46C11] uppercase tracking-[0.15em] mb-1.5">Order Date</h4>
                                <p className="text-[15px] font-bold text-[#0A0A0A]">{orderDetails.orderDate}</p>
                            </div>
                        </div>

                        {/* Items List */}
                        <div className="space-y-6 mb-10">
                            {orderDetails.items.map((item, index) => (
                                <div key={index} className="flex items-center gap-5">
                                    <div className="w-14 h-14 bg-[#F4F5F7] rounded-xl overflow-hidden shrink-0">
                                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                                    </div>
                                    <div className="flex-1">
                                        <h5 className="font-bold text-[#0A0A0A] text-[14px] leading-tight mb-1">{item.name}</h5>
                                        <p className="text-[#A3A3A3] text-[12px] font-medium">{item.grind}, {item.quantity > 1 ? `${item.quantity}x ` : ''}{item.quantity === 1 ? '250g' : ''}</p>
                                    </div>
                                    <div className="font-black text-[#0A0A0A] text-[15px]">
                                        ₹{(item.price * item.quantity).toFixed(2)}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Total */}
                        <div className="flex justify-between items-center py-6 border-t border-b border-[#F4F5F7] mb-8">
                            <span className="text-[15px] font-medium text-[#7A7A7A]">Total Amount</span>
                            <span className="text-[24px] font-black text-[#D46C11]">₹{orderDetails.totalAmount.toFixed(2)}</span>
                        </div>

                        {/* Address Box */}
                        <div className="bg-[#FFF9F2] rounded-2xl p-5 flex gap-4 items-start">
                            <MapPin size={20} strokeWidth={2.5} className="text-[#D46C11] shrink-0 mt-0.5" />
                            <div>
                                <h5 className="text-[11px] font-black text-[#D46C11] uppercase tracking-[0.15em] mb-1">Delivery Address</h5>
                                <p className="text-[#0A0A0A] text-[14px] font-bold leading-relaxed">
                                    123 Luxury Lane, Suite 400,<br />
                                    New York, NY 10001
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Bottom CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                >
                    <button className="flex-1 max-w-[280px] h-14 bg-[#D46C11] hover:bg-[#B5590D] text-white font-bold text-[15px] rounded-full shadow-[0_4px_14px_rgba(212,108,17,0.3)] transition-all flex items-center justify-center gap-2">
                        <Truck size={18} strokeWidth={2.5} /> Track Order
                    </button>
                    <Link to="/menu" className="flex-1 max-w-[280px] h-14 bg-white border-2 border-[#EAEAEA] hover:border-[#D46C11] text-[#0A0A0A] font-bold text-[15px] rounded-full shadow-sm transition-all flex items-center justify-center gap-2">
                        <ShoppingCart size={18} strokeWidth={2.5} /> Continue Shopping
                    </Link>
                </motion.div>

                <p className="text-center mt-12 text-[#7A7A7A] text-[13px] font-medium">
                    Need help with your order? <a href="#" className="font-bold text-[#D46C11] hover:underline">Contact Support</a>
                </p>

                <div className="mt-16 text-center pb-8 opacity-50">
                    <div className="flex justify-center mb-4">
                        <span className="text-[#D46C11] text-lg">✦</span>
                    </div>
                    <p className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#A3A3A3]">
                        © 2024 Brewcraft Coffee Artisans. All rights reserved.
                    </p>
                </div>

            </div>
        </div>
    );
};

export default OrderSuccess;
