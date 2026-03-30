import React from 'react';
import { useAuth } from '../../Hooks/useAuth';
import { motion } from 'framer-motion';
import { User, Mail, Phone, Edit3, LogOut, ChevronRight, ShoppingBag, Calendar } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const Profile = () => {
    const { user, signOut } = useAuth();
    const navigate = useNavigate();

    const handleLogout = async () => {
        await signOut();
        navigate('/');
    };

    if (!user) return null;

    return (
        <div className="min-h-screen bg-[#FCF8F5] pt-32 pb-20">
            <div className="max-w-4xl mx-auto px-5 sm:px-10">
                
                {/* Profile Header */}
                <div className="flex flex-col md:flex-row items-center gap-8 mb-16">
                    <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-xl relative group">
                        <img 
                            src={user.imageUrl} 
                            alt={user.fullName} 
                            className="w-full h-full object-cover" 
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center cursor-pointer">
                            <Edit3 className="text-white" size={24} />
                        </div>
                    </div>
                    
                    <div className="text-center md:text-left flex-1">
                        <h1 
                            className="text-4xl font-bold text-[#3e2723] mb-2 tracking-tight"
                            style={{ fontFamily: "'Playfair Display', serif" }}
                        >
                            {user.fullName || 'Brewcraft Connoisseur'}
                        </h1>
                        <p className="text-[#7A7A7A] font-medium mb-6">Premium Member since {new Date(user.createdAt).getFullYear()}</p>
                        
                        <div className="flex flex-wrap justify-center md:justify-start gap-3">
                            <button className="h-10 px-6 bg-[#D46C11] text-white text-[13px] font-black uppercase tracking-wider rounded-full hover:bg-[#B5590D] transition-all flex items-center gap-2">
                                <Edit3 size={14} /> Edit Profile
                            </button>
                            <button 
                                onClick={handleLogout}
                                className="h-10 px-6 bg-white border-2 border-[#EAEAEA] text-[#0A0A0A] text-[13px] font-black uppercase tracking-wider rounded-full hover:border-red-500 hover:text-red-500 transition-all flex items-center gap-2"
                            >
                                <LogOut size={14} /> Logout
                            </button>
                        </div>
                    </div>
                </div>

                {/* Info Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                    <div className="bg-white rounded-[28px] p-8 shadow-[0_4px_25px_rgba(0,0,0,0.03)] border border-black/5">
                        <h3 className="text-[11px] font-black text-[#D46C11] uppercase tracking-[0.15em] mb-6">Contact Information</h3>
                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-[#FCF8F5] flex items-center justify-center text-[#D46C11]">
                                    <Mail size={18} />
                                </div>
                                <div>
                                    <p className="text-[10px] uppercase font-black tracking-widest text-[#A3A3A3] mb-0.5">Email Address</p>
                                    <p className="text-[15px] font-bold text-[#0A0A0A]">{user.primaryEmailAddress?.emailAddress}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-[#FCF8F5] flex items-center justify-center text-[#D46C11]">
                                    <Phone size={18} />
                                </div>
                                <div>
                                    <p className="text-[10px] uppercase font-black tracking-widest text-[#A3A3A3] mb-0.5">Phone Number</p>
                                    <p className="text-[15px] font-bold text-[#0A0A0A]">{user.primaryPhoneNumber?.phoneNumber || 'Not provided'}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-[28px] p-8 shadow-[0_4px_25px_rgba(0,0,0,0.03)] border border-black/5">
                        <h3 className="text-[11px] font-black text-[#D46C11] uppercase tracking-[0.15em] mb-6">Quick Actions</h3>
                        <div className="space-y-3">
                            <Link to="/order-history" className="flex items-center justify-between p-4 bg-[#FCF8F5] rounded-2xl hover:bg-[#F2EAE4] transition-colors group">
                                <div className="flex items-center gap-3">
                                    <ShoppingBag size={18} className="text-[#D46C11]" />
                                    <span className="text-[14px] font-bold text-[#0A0A0A]">My Orders</span>
                                </div>
                                <ChevronRight size={18} className="text-[#A3A3A3] group-hover:text-[#0A0A0A] transform group-hover:translate-x-1 transition-all" />
                            </Link>
                            <Link to="/reservation-history" className="flex items-center justify-between p-4 bg-[#FCF8F5] rounded-2xl hover:bg-[#F2EAE4] transition-colors group">
                                <div className="flex items-center gap-3">
                                    <Calendar size={18} className="text-[#D46C11]" />
                                    <span className="text-[14px] font-bold text-[#0A0A0A]">My Reservations</span>
                                </div>
                                <ChevronRight size={18} className="text-[#A3A3A3] group-hover:text-[#0A0A0A] transform group-hover:translate-x-1 transition-all" />
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Profile;
