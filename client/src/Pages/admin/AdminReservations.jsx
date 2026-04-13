import React from 'react';
import AdminLayout from '../../Common/Admin/AdminLayout';
import { Search, Plus, Bell, List, Calendar as CalendarIcon, ChevronDown, Filter, Edit2, MoreVertical, Trash2, CheckCircle2 } from 'lucide-react';
import { adminReservationStats, adminReservationsList } from '../../Data/AdminData';

const AdminReservations = () => {
    return (
        <AdminLayout>
            <div className="flex flex-col gap-6 max-w-[1400px]">
                
                {/* Header elements usually outside but here integrated in page layout */}
                <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-6">
                        <h2 className="text-[22px] font-black text-[#111111]">Reservations</h2>
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[#A3A3A3]" size={16} />
                            <input 
                                type="text" 
                                placeholder="Search guests..." 
                                className="pl-10 pr-4 py-2 bg-[#F9F9F9] border-none rounded-full text-[13px] font-medium text-[#111111] focus:ring-2 focus:ring-[#D46C11] outline-none w-[200px] md:w-[300px]"
                            />
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <button className="flex items-center justify-center w-10 h-10 rounded-full bg-[#F4F4F4] text-[#111111] hover:bg-[#EAEAEA] transition-colors">
                            <Bell size={18} />
                        </button>
                        <button className="flex items-center gap-2 bg-[#D46C11] text-white px-5 py-2.5 rounded-full text-[13px] font-bold hover:bg-[#B5590D] transition-colors shadow-sm">
                            <Plus size={16} strokeWidth={3} />
                            New Booking
                        </button>
                    </div>
                </div>

                {/* Stats Row */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* TOTAL TODAY Card */}
                    <div className="bg-white rounded-3xl p-6 border border-[#EEEEEE] shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
                        <div className="flex justify-between items-start mb-4">
                            <h3 className="text-[12px] font-bold text-[#8A8A8A] uppercase tracking-wider">Total Today</h3>
                            <div className="text-[#D46C11]">
                                {/* Use an arm chair/seat icon similar to image */}
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 9V6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v3"/><path d="M3 11v5a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v2H7v-2a2 2 0 0 0-4 0Z"/><path d="M5 18v2"/><path d="M19 18v2"/></svg>
                            </div>
                        </div>
                        <h2 className="text-[36px] font-black text-[#111111] leading-none mb-3">42</h2>
                        <div className="text-[11px] font-bold text-[#10B981] flex items-center gap-1">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m3 17 6-6 4 4 8-8"/><path d="M17 7h4v4"/></svg>
                            +12% from yesterday
                        </div>
                    </div>

                    {/* PENDING REQUESTS Card */}
                    <div className="bg-white rounded-3xl p-6 border border-[#EEEEEE] shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
                        <div className="flex justify-between items-start mb-4">
                            <h3 className="text-[12px] font-bold text-[#8A8A8A] uppercase tracking-wider">Pending Requests</h3>
                            <div className="text-[#D46C11]">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 22h14"/><path d="M5 2h14"/><path d="M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22"/><path d="M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2"/></svg>
                            </div>
                        </div>
                        <h2 className="text-[36px] font-black text-[#111111] leading-none mb-3">14</h2>
                        <div className="text-[11px] font-bold text-[#D46C11]">
                            Needs attention
                        </div>
                    </div>

                    {/* VIP BOOKINGS Card */}
                    <div className="bg-white rounded-3xl p-6 border border-[#EEEEEE] shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
                        <div className="flex justify-between items-start mb-4">
                            <h3 className="text-[12px] font-bold text-[#8A8A8A] uppercase tracking-wider">VIP Bookings</h3>
                            <div className="text-[#D46C11]">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                            </div>
                        </div>
                        <h2 className="text-[36px] font-black text-[#111111] leading-none mb-3">03</h2>
                        <div className="text-[11px] font-bold text-[#8A8A8A]">
                            2 confirmed for dinner
                        </div>
                    </div>
                </div>

                {/* Main Content Area */}
                <div className="bg-white rounded-3xl border border-[#EEEEEE] shadow-[0_4px_20px_rgba(0,0,0,0.02)] overflow-hidden">
                    {/* Controls */}
                    <div className="flex justify-between items-center px-6 py-5 border-b border-[#F4F4F4]">
                        <div className="flex items-center p-1 bg-[#F9F9F9] rounded-full border border-[#EEEEEE]">
                            <button className="flex items-center gap-2 px-6 py-2 bg-white rounded-full text-[13px] font-bold text-[#111111] shadow-sm">
                                <List size={16} />
                                List View
                            </button>
                            <button className="flex items-center gap-2 px-6 py-2 text-[13px] font-bold text-[#8A8A8A] hover:text-[#111111] transition-colors">
                                <CalendarIcon size={16} />
                                Calendar View
                            </button>
                        </div>

                        <div className="flex items-center gap-3">
                            <button className="flex items-center gap-2 px-4 py-2 border border-[#EEEEEE] rounded-full text-[13px] font-bold text-[#111111] hover:bg-[#F9F9F9] transition-colors bg-white">
                                All Status <ChevronDown size={14} className="text-[#8A8A8A]" />
                            </button>
                            <button className="flex items-center gap-2 px-4 py-2 border border-[#EEEEEE] rounded-full text-[13px] font-bold text-[#111111] hover:bg-[#F9F9F9] transition-colors bg-white">
                                Date Range <CalendarIcon size={14} className="text-[#8A8A8A]" />
                            </button>
                            <button className="flex items-center justify-center w-10 h-10 border border-[#EEEEEE] rounded-full text-[#8A8A8A] hover:bg-[#F9F9F9] transition-colors bg-white">
                                <Filter size={16} />
                            </button>
                        </div>
                    </div>

                    {/* Table */}
                    <div className="w-full overflow-x-auto">
                        <table className="w-full text-left border-collapse min-w-[900px]">
                            <thead>
                                <tr className="border-b border-[#F4F4F4]">
                                    <th className="py-5 px-6 text-[10px] font-black text-[#A3A3A3] uppercase tracking-widest w-[30%]">Guest Name</th>
                                    <th className="py-5 px-6 text-[10px] font-black text-[#A3A3A3] uppercase tracking-widest w-[15%]">Date</th>
                                    <th className="py-5 px-6 text-[10px] font-black text-[#A3A3A3] uppercase tracking-widest w-[15%]">Time</th>
                                    <th className="py-5 px-6 text-[10px] font-black text-[#A3A3A3] uppercase tracking-widest text-center w-[10%]">Guests</th>
                                    <th className="py-5 px-6 text-[10px] font-black text-[#A3A3A3] uppercase tracking-widest text-center w-[15%]">Status</th>
                                    <th className="py-5 px-6 text-[10px] font-black text-[#A3A3A3] uppercase tracking-widest text-right w-[15%]">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {adminReservationsList.map((res) => (
                                    <tr key={res.id} className="border-b border-[#F9F9F9] last:border-0 hover:bg-[#FAFAFA] transition-colors">
                                        <td className="py-5 px-6">
                                            <div className="flex items-center gap-4">
                                                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-black ${res.avatarBg} ${res.avatarColor} text-[13px]`}>
                                                    {res.name.split(' ').map(n => n[0]).join('')}
                                                </div>
                                                <div>
                                                    <div className="flex items-center gap-1.5">
                                                        <span className="text-[14px] font-black text-[#111111]">{res.name}</span>
                                                        {res.isVip && (
                                                            <div className="w-1.5 h-1.5 rounded-full bg-[#D46C11]"></div>
                                                        )}
                                                    </div>
                                                    <span className="text-[12px] font-medium text-[#8A8A8A]">{res.email}</span>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="py-5 px-6 text-[13px] font-bold text-[#111111]">{res.date}</td>
                                        <td className="py-5 px-6 text-[13px] font-bold text-[#111111]">{res.time}</td>
                                        <td className="py-5 px-6 text-center">
                                            <span className="inline-flex w-7 h-7 bg-[#F4F4F4] rounded-full items-center justify-center text-[12px] font-black text-[#111111]">
                                                {res.guests}
                                            </span>
                                        </td>
                                        <td className="py-5 px-6 text-center">
                                            <span className={`inline-block px-3 py-1.5 rounded-full text-[10px] font-black tracking-widest uppercase ${
                                                res.status === 'PENDING' ? 'bg-[#FFF8E1] text-[#F57C00]' :
                                                res.status === 'CONFIRMED' ? 'bg-[#E6F4EA] text-[#1E8E3E]' :
                                                res.status === 'CANCELLED' ? 'bg-[#FEE2E2] text-[#DC2626]' : ''
                                            }`}>
                                                {res.status}
                                            </span>
                                        </td>
                                        <td className="py-5 px-6 text-right">
                                            {res.status === 'PENDING' && (
                                                <div className="flex items-center justify-end gap-2">
                                                    <button className="px-4 py-1.5 bg-[#D46C11] text-white rounded-full text-[11px] font-bold hover:bg-[#B5590D] transition-colors">
                                                        Accept
                                                    </button>
                                                    <button className="px-4 py-1.5 bg-[#F4F4F4] text-[#111111] rounded-full text-[11px] font-bold hover:bg-[#EAEAEA] transition-colors">
                                                        Cancel
                                                    </button>
                                                </div>
                                            )}
                                            {res.status === 'CONFIRMED' && (
                                                <div className="flex items-center justify-end gap-3 text-[#A3A3A3]">
                                                    <button className="hover:text-[#111111] transition-colors"><Edit2 size={16} strokeWidth={2.5} /></button>
                                                    <button className="hover:text-[#111111] transition-colors"><MoreVertical size={16} strokeWidth={2.5} /></button>
                                                </div>
                                            )}
                                            {res.status === 'CANCELLED' && (
                                                <div className="flex items-center justify-end gap-3 text-[#A3A3A3]">
                                                    <button className="hover:text-[#DC2626] transition-colors"><Trash2 size={16} strokeWidth={2.5} /></button>
                                                </div>
                                            )}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Pagination */}
                    <div className="flex flex-col sm:flex-row justify-between items-center px-6 py-5 border-t border-[#F4F4F4] gap-4">
                        <p className="text-[12px] font-medium text-[#8A8A8A]">Showing <strong>1</strong> to <strong>4</strong> of <strong>24</strong> reservations</p>
                        <div className="flex items-center gap-1.5">
                            <button className="w-8 h-8 rounded-full flex items-center justify-center border border-[#EEEEEE] text-[#8A8A8A] hover:bg-[#FAFAFA] transition-colors bg-white">
                                <span className="sr-only">Previous</span>
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
                            </button>
                            <button className="w-8 h-8 rounded-full flex items-center justify-center bg-[#D46C11] text-white font-black text-[13px]">
                                1
                            </button>
                            <button className="w-8 h-8 rounded-full flex items-center justify-center border border-[#EEEEEE] text-[#111111] font-bold text-[13px] hover:bg-[#FAFAFA] transition-colors bg-white">
                                2
                            </button>
                            <button className="w-8 h-8 rounded-full flex items-center justify-center border border-[#EEEEEE] text-[#111111] font-bold text-[13px] hover:bg-[#FAFAFA] transition-colors bg-white">
                                3
                            </button>
                            <button className="w-8 h-8 rounded-full flex items-center justify-center border border-[#EEEEEE] text-[#8A8A8A] hover:bg-[#FAFAFA] transition-colors bg-white">
                                <span className="sr-only">Next</span>
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </AdminLayout>
    );
};

export default AdminReservations;
