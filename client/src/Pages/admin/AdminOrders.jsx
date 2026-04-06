import React, { useState } from 'react';
import AdminLayout from '../../Common/Admin/AdminLayout';
import { Eye, Edit2, Calendar, Download, Package, Coffee, DollarSign, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

const AdminOrders = () => {
    const [activeTab, setActiveTab] = useState('All Orders');
    const tabs = ['All Orders', 'Pending', 'Preparing', 'Completed'];

    const stats = [
        { title: "Today's Orders", value: "42", trend: "+5% vs yesterday", trendUp: true, icon: Package, iconColor: "text-[#D46C11]" },
        { title: "Pending Prep", value: "12", trend: "High volume", trendUp: false, icon: Coffee, iconColor: "text-[#D46C11]", trendColor: "text-[#DC2626]", trendBg: "bg-[#FEE2E2]" },
        { title: "Total Revenue", value: "$1,240.50", trend: "+10% vs avg", trendUp: true, icon: DollarSign, iconColor: "text-[#10B981]", trendColor: "text-[#10B981]", trendBg: "bg-[#D1FAE5]" }
    ];

    const orders = [
        { id: '#BB-8921', customer: 'James Wilson', email: 'james.w@email.com', items: '1x Oat Latte, 2x Espresso', total: '$18.50', status: 'PENDING', statusColor: 'bg-[#FEF3C7] text-[#D97706]' },
        { id: '#BB-8920', customer: 'Sarah Miller', email: 'smiller@mail.org', items: '2x Cappuccino, 1x Croissant', total: '$24.00', status: 'PREPARING', statusColor: 'bg-[#FFEDD5] text-[#EA580C]' },
        { id: '#BB-8919', customer: 'Elena Rodriguez', email: 'elena_rod@test.com', items: '1x Pour Over, 1x Blueberry Muffin', total: '$12.75', status: 'COMPLETED', statusColor: 'bg-[#D1FAE5] text-[#059669]' },
        { id: '#BB-8918', customer: 'Marcus Thorne', email: 'mthorne@company.com', items: '4x Espresso Shot', total: '$14.00', status: 'COMPLETED', statusColor: 'bg-[#D1FAE5] text-[#059669]' },
    ];

    return (
        <AdminLayout title="Orders Management" breadcrumb="Admin / Orders">
            <div className="flex flex-col gap-6 max-w-[1400px]">
                
                {/* Stats Row */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {stats.map((stat, idx) => (
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            key={idx} 
                            className="bg-white rounded-3xl p-6 md:p-8 border border-[#EEEEEE] shadow-[0_4px_20px_rgba(0,0,0,0.02)]"
                        >
                            <div className="flex justify-between items-start mb-4">
                                <h3 className="text-[14px] font-bold text-[#8A8A8A]">{stat.title}</h3>
                                <div className={`w-10 h-10 bg-[#FAFAFA] ${stat.iconColor} rounded-xl flex items-center justify-center`}>
                                    <stat.icon size={20} strokeWidth={2.5} />
                                </div>
                            </div>
                            <h2 className="text-[36px] font-black text-[#111111] leading-none mb-4">{stat.value}</h2>
                            <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-black tracking-wide rounded-md ${stat.trendColor || 'text-[#1E8E3E]'} ${stat.trendBg || 'bg-[#E6F4EA]'}`}>
                                {stat.trendUp && <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m3 17 6-6 4 4 8-8"/><path d="M17 7h4v4"/></svg>}
                                {!stat.trendUp && <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m21 7-8 8-4-4-6 6"/><path d="M21 13v-6h-6"/></svg>}
                                {stat.trend}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Orders List Content */}
                <div className="bg-white rounded-3xl border border-[#EEEEEE] shadow-[0_4px_20px_rgba(0,0,0,0.02)] overflow-hidden">
                    {/* Header Controls */}
                    <div className="flex flex-col md:flex-row justify-between items-center p-6 border-b border-[#F4F4F4] gap-4 relative md:static">
                        <div className="flex items-center gap-2 md:gap-6 w-full md:w-auto overflow-x-auto pb-2 md:pb-0 [&::-webkit-scrollbar]:hidden">
                            {tabs.map((tab) => (
                                <button 
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    className={`text-[13px] font-black whitespace-nowrap px-4 py-2 mt-1 rounded-full transition-all ${
                                        activeTab === tab 
                                        ? 'bg-[#D46C11] text-white shadow-md' 
                                        : 'text-[#8A8A8A] hover:bg-[#FAFAFA]'
                                    }`}
                                >
                                    {tab}
                                </button>
                            ))}
                        </div>
                        
                        <div className="flex items-center gap-3 md:ml-auto w-full md:w-auto justify-end">
                            <button className="flex items-center gap-2 border border-[#EEEEEE] px-4 py-2.5 rounded-xl text-[13px] font-bold text-[#111111] hover:bg-[#FAFAFA] transition-all">
                                <Calendar size={16} className="text-[#8A8A8A]" />
                                Today
                            </button>
                            <button className="flex items-center gap-2 border border-[#EEEEEE] px-4 py-2.5 rounded-xl text-[13px] font-bold text-[#111111] hover:bg-[#FAFAFA] transition-all">
                                <Download size={16} className="text-[#8A8A8A]" />
                                Export
                            </button>
                        </div>
                    </div>

                    {/* Table */}
                    <div className="w-full overflow-x-auto">
                        <table className="w-full text-left border-collapse min-w-[800px]">
                            <thead>
                                <tr className="border-b border-[#F4F4F4]">
                                    <th className="py-5 px-6 text-[10px] font-black text-[#A3A3A3] uppercase tracking-widest w-[12%]">Order ID</th>
                                    <th className="py-5 px-6 text-[10px] font-black text-[#A3A3A3] uppercase tracking-widest w-[25%]">Customer</th>
                                    <th className="py-5 px-6 text-[10px] font-black text-[#A3A3A3] uppercase tracking-widest w-[25%]">Items</th>
                                    <th className="py-5 px-6 text-[10px] font-black text-[#A3A3A3] uppercase tracking-widest w-[13%]">Total</th>
                                    <th className="py-5 px-6 text-[10px] font-black text-[#A3A3A3] uppercase tracking-widest w-[15%]">Status</th>
                                    <th className="py-5 px-6 text-[10px] font-black text-[#A3A3A3] uppercase tracking-widest w-[10%] text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {orders.map((order, index) => (
                                    <tr key={index} className="border-b border-[#F9F9F9] last:border-0 hover:bg-[#FAFAFA] transition-colors">
                                        <td className="py-5 px-6 text-[14px] font-black text-[#D46C11]">{order.id}</td>
                                        <td className="py-5 px-6">
                                            <div className="flex flex-col">
                                                <span className="text-[13px] font-bold text-[#111111]">{order.customer}</span>
                                                <span className="text-[11px] font-medium text-[#8A8A8A]">{order.email}</span>
                                            </div>
                                        </td>
                                        <td className="py-5 px-6 text-[13px] font-medium text-[#666666]">{order.items}</td>
                                        <td className="py-5 px-6 text-[14px] font-black text-[#111111]">{order.total}</td>
                                        <td className="py-5 px-6">
                                            <span className={`px-2.5 py-1.5 rounded-full text-[10px] font-black tracking-widiest uppercase ${order.statusColor}`}>
                                                {order.status}
                                            </span>
                                        </td>
                                        <td className="py-5 px-6">
                                            <div className="flex items-center justify-end gap-3 text-[#A3A3A3]">
                                                <button className="hover:text-[#D46C11] transition-colors"><Eye size={18} /></button>
                                                <button className="hover:text-[#D46C11] transition-colors"><Edit2 size={18} /></button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Pagination */}
                    <div className="flex flex-col sm:flex-row justify-between items-center p-6 border-t border-[#F4F4F4] gap-4">
                        <p className="text-[12px] font-medium text-[#8A8A8A]">Showing 1 to 4 of 42 results</p>
                        <div className="flex items-center gap-1.5">
                            <button className="w-8 h-8 rounded-xl flex items-center justify-center border border-[#EEEEEE] text-[#8A8A8A] hover:bg-[#FAFAFA] transition-colors">
                                <ChevronLeft size={16} />
                            </button>
                            <button className="w-8 h-8 rounded-xl flex items-center justify-center bg-[#D46C11] text-white font-bold text-[13px] shadow-sm">
                                1
                            </button>
                            <button className="w-8 h-8 rounded-xl flex items-center justify-center bg-white border border-[#EEEEEE] text-[#111111] font-bold text-[13px] hover:bg-[#FAFAFA] transition-colors">
                                2
                            </button>
                            <button className="w-8 h-8 rounded-xl flex items-center justify-center bg-white border border-[#EEEEEE] text-[#111111] font-bold text-[13px] hover:bg-[#FAFAFA] transition-colors">
                                3
                            </button>
                            <button className="w-8 h-8 rounded-xl flex items-center justify-center border border-[#EEEEEE] text-[#8A8A8A] hover:bg-[#FAFAFA] transition-colors">
                                <ChevronRight size={16} />
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </AdminLayout>
    );
};

export default AdminOrders;
