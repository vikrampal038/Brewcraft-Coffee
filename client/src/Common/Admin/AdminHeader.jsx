import React from 'react';
import { Search, Bell } from 'lucide-react';

const AdminHeader = ({ title = "Dashboard Overview", breadcrumb }) => {
    return (
        <div className="h-[90px] border-b border-[#EEEEEE] flex items-center justify-between px-10 bg-[#FAFAFA] sticky top-0 z-40 ml-64">
            <div className="flex items-center gap-4">
                <h1 className="text-[22px] font-black text-[#111111] tracking-tight">{title}</h1>
                {breadcrumb && (
                    <div className="flex items-center gap-2 mt-1">
                        <div className="w-px h-4 bg-[#DDDDDD]"></div>
                        <span className="text-[13px] font-bold text-[#A3A3A3] tracking-widest uppercase">{breadcrumb}</span>
                    </div>
                )}
            </div>
            
            <div className="flex items-center gap-8">
                {/* Search Bar */}
                <div className="relative">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#A3A3A3]" size={16} strokeWidth={3} />
                    <input 
                        type="text" 
                        placeholder="Search orders, customers..."
                        className="w-[320px] h-[40px] bg-[#F1F1F1] rounded-full pl-11 pr-4 text-[13px] font-medium text-[#111111] placeholder:text-[#A3A3A3] focus:outline-none focus:ring-2 focus:ring-[#D46C11]/20 transition-all"
                    />
                </div>

                <div className="flex items-center gap-6">
                    {/* Notification Bell */}
                    <button className="relative text-[#666666] hover:text-[#111111] transition-colors">
                        <Bell size={20} strokeWidth={2.5} />
                        <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-[#D46C11] rounded-full ring-2 ring-white"></span>
                    </button>

                    {/* Separator */}
                    <div className="h-6 w-px bg-[#EEEEEE]"></div>

                    {/* Status */}
                    <div className="flex items-center gap-3">
                        <span className="text-[11px] font-bold text-[#8A8A8A] tracking-wider uppercase">Status:</span>
                        <div className="flex items-center gap-1.5 bg-[#E6F4EA] px-2.5 py-1 rounded-full">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#1E8E3E]"></span>
                            <span className="text-[10px] font-black text-[#1E8E3E] uppercase tracking-widest">Live</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminHeader;
