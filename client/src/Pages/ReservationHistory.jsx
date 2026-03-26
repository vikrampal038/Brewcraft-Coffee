import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Clock, Users, ArrowRight, Table, Plus } from "lucide-react";
import { reservationData } from "../Data/ReservationData";

const ReservationHistory = () => {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState("Upcoming");

    const filteredReservations = reservationData.filter(res => {
        if (activeTab === "Upcoming") return res.type === "Upcoming";
        if (activeTab === "Past") return res.type === "Past";
        if (activeTab === "Cancelled") return res.type === "Cancelled";
        return true;
    });

    const upcomingCount = reservationData.filter(r => r.type === "Upcoming").length;

    return (
        <div className="min-h-screen bg-[#FCF8F5] pt-32 pb-20">
            <div className="max-w-4xl mx-auto px-5 sm:px-10">
                
                {/* Header */}
                <div className="mb-12">
                    <h1 
                        className="text-4xl md:text-5xl font-bold text-[#3e2723] mb-4 tracking-tight"
                        style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                        Reservation History
                    </h1>
                    <p className="text-[#555555] text-[15px] font-medium max-w-lg leading-relaxed">
                        Refine your dining experience. Manage your upcoming visits and revisit memories of past moments shared over our premium roasts.
                    </p>
                </div>

                {/* Tabs */}
                <div className="flex border-b border-black/5 mb-10 gap-8 overflow-x-auto scrollbar-hide">
                    {["Upcoming", "Past Reservations", "Cancelled"].map((tab) => {
                        const tabKey = tab === "Past Reservations" ? "Past" : tab;
                        const isActive = activeTab === tabKey;
                        return (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tabKey)}
                                className={`pb-4 text-[14px] font-black uppercase tracking-wider relative whitespace-nowrap transition-colors ${
                                    isActive ? "text-[#3e2723]" : "text-[#A3A3A3] hover:text-[#3e2723]"
                                }`}
                            >
                                {tab} {tab === "Upcoming" && `(${upcomingCount})`}
                                {isActive && (
                                    <motion.div 
                                        layoutId="tab-underline"
                                        className="absolute bottom-0 left-0 w-full h-0.5 bg-[#D46C11]" 
                                    />
                                )}
                            </button>
                        );
                    })}
                </div>

                {/* Reservations List */}
                <div className="space-y-6">
                    <AnimatePresence mode="wait">
                        {filteredReservations.map((res, idx) => (
                            <motion.div
                                key={res.id}
                                layout
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ delay: idx * 0.1 }}
                                className="bg-white rounded-[28px] overflow-hidden flex flex-col md:flex-row shadow-[0_4px_25px_rgba(0,0,0,0.03)] border border-black/5"
                            >
                                {/* Left: Image */}
                                <div className="md:w-64 h-48 md:h-auto shrink-0 relative">
                                    <img 
                                        src={res.image} 
                                        alt={res.title} 
                                        className="w-full h-full object-cover" 
                                    />
                                    {res.type === "Upcoming" && (
                                        <div className="absolute top-4 left-4 bg-[#e09825]/90 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full backdrop-blur-sm">
                                            Upcoming
                                        </div>
                                    )}
                                </div>

                                {/* Right: Content */}
                                <div className="p-6 md:p-8 flex-1 flex flex-col justify-center">
                                    <div className="flex justify-between items-start mb-4">
                                        <h3 className="text-[20px] font-bold text-[#0A0A0A] tracking-tight">
                                            {res.title}
                                        </h3>
                                        <span className={`px-3 py-1 rounded-full text-[11px] font-black uppercase tracking-wider flex items-center gap-1.5 ${
                                            res.status === "Confirmed" ? "bg-[#E6F4EA] text-[#1E8E3E]" :
                                            res.status === "Completed" ? "bg-[#E8F0FE] text-[#1967D2]" :
                                            "bg-[#FCE8E6] text-[#D93025]"
                                        }`}>
                                            <span className={`w-1.5 h-1.5 rounded-full ${
                                                res.status === "Confirmed" ? "bg-[#1E8E3E]" :
                                                res.status === "Completed" ? "bg-[#1967D2]" :
                                                "bg-[#D93025]"
                                            }`}></span>
                                            {res.status}
                                        </span>
                                    </div>

                                    {/* Sub-details */}
                                    <div className="flex flex-wrap gap-5 text-[#7A7A7A] mb-8">
                                        <div className="flex items-center gap-2">
                                            <Calendar size={14} className="text-[#D46C11]" />
                                            <span className="text-[13px] font-bold">{res.date}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Clock size={14} className="text-[#D46C11]" />
                                            <span className="text-[13px] font-bold">{res.time}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Users size={14} className="text-[#D46C11]" />
                                            <span className="text-[13px] font-bold">{res.guests}</span>
                                        </div>
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-[#F4F5F7]">
                                        <div className="flex gap-3">
                                            {res.type === "Upcoming" ? (
                                                <>
                                                    <button className="h-10 px-5 bg-[#3e2723] text-white text-[13px] font-bold rounded-full hover:bg-black transition-all flex items-center gap-2">
                                                        <Table size={14} /> Modify
                                                    </button>
                                                    <button className="h-10 px-5 bg-white border border-[#EAEAEA] text-[#0A0A0A] text-[13px] font-bold rounded-full hover:border-[#D93025] hover:text-[#D93025] transition-all">
                                                        Cancel
                                                    </button>
                                                </>
                                            ) : (
                                                <>
                                                    <button className="text-[13px] font-bold text-[#D46C11] hover:underline" onClick={() => navigate('/table-reservation')}>
                                                        Rebook this table
                                                    </button>
                                                    <span className="w-1 h-1 rounded-full bg-[#EAEAEA]" />
                                                    <button className="text-[13px] font-bold text-[#7A7A7A] hover:text-[#0A0A0A]">
                                                        Add a Review
                                                    </button>
                                                </>
                                            )}
                                        </div>
                                        
                                        <button className="text-[13px] font-bold text-[#0A0A0A] flex items-center gap-1 group">
                                            View Details <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>

                    {filteredReservations.length === 0 && (
                        <div className="text-center py-20 bg-white/50 rounded-[28px] border-2 border-dashed border-[#EAEAEA]">
                            <p className="text-[#7A7A7A] font-bold">No reservations found in this category.</p>
                        </div>
                    )}
                </div>

                {/* Footer CTA */}
                <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="mt-20 bg-[#FFF5EE] p-10 md:p-14 rounded-[40px] text-center border border-[#D46C11]/10"
                >
                    <h2 className="text-[28px] md:text-[32px] font-bold text-[#3e2723] mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                        Planning your next visit?
                    </h2>
                    <p className="text-[#555555] text-[15px] font-medium max-w-md mx-auto mb-10 leading-relaxed">
                        Book your preferred spot and ensure the perfect atmosphere for your next coffee meeting or solo retreat.
                    </p>
                    <button 
                        onClick={() => navigate('/table-reservation')}
                        className="h-14 px-10 bg-[#3e2723] text-white font-bold rounded-full shadow-[0_8px_25px_rgba(62,39,35,0.25)] hover:scale-105 transition-all"
                    >
                        Book a New Table
                    </button>
                </motion.div>

            </div>
        </div>
    );
};

export default ReservationHistory;
