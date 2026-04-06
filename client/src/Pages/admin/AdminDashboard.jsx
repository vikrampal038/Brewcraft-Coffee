import React from 'react';
import AdminLayout from '../../Common/Admin/AdminLayout';
import { FileText, Calendar, DollarSign, Users, ChevronDown, MoreHorizontal, Send } from 'lucide-react';
import { motion } from 'framer-motion';

const AdminDashboard = () => {
    // Dummy Data
    const statCards = [
        { title: 'Total Orders', value: '1,284', trend: '+5.2% vs last week', trendUp: true, icon: FileText },
        { title: 'Active Reservations', value: '24', trend: '+2.1% from today', trendUp: true, icon: Calendar },
        { title: 'Revenue', value: '$12,450.00', trend: '+12.5% this month', trendUp: true, icon: DollarSign },
        { title: 'Subscribers', value: '892', trend: '+14 new today', trendUp: true, icon: Users, trendColor: 'text-[#D46C11]' }
    ];

    const recentOrders = [
        { id: '#ORD-7721', customer: 'Liam Hudson', product: 'Colombian Whole Bean 1kg', date: 'Oct 12, 2023', amount: '$34.50', status: 'DELIVERED' },
        { id: '#ORD-7722', customer: 'Elena Petrova', product: 'Ceramic Coffee Set', date: 'Oct 12, 2023', amount: '$120.00', status: 'PENDING' },
        { id: '#ORD-7723', customer: 'Michael Chen', product: 'Espresso Roast 500g', date: 'Oct 11, 2023', amount: '$22.00', status: 'DELIVERED' },
        { id: '#ORD-7724', customer: 'Sarah Jenkins', product: 'Pour Over Brewer', date: 'Oct 11, 2023', amount: '$45.00', status: 'DELIVERED' },
        { id: '#ORD-7725', customer: 'David O\'Connor', product: 'Ethiopian Yirgacheffe 1kg', date: 'Oct 10, 2023', amount: '$38.50', status: 'PENDING' },
        { id: '#ORD-7726', customer: 'Emma Watson', product: 'Cold Brew Pitcher', date: 'Oct 10, 2023', amount: '$29.99', status: 'DELIVERED' }
    ];

    return (
        <AdminLayout>
            <div className="flex flex-col gap-8 max-w-[1400px]">
                
                {/* Stats Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {statCards.map((stat, idx) => (
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            key={idx} 
                            className="bg-white rounded-3xl p-6 border border-[#EEEEEE] shadow-[0_4px_20px_rgba(0,0,0,0.02)]"
                        >
                            <div className="flex justify-between items-start mb-4">
                                <h3 className="text-[13px] font-bold text-[#8A8A8A]">{stat.title}</h3>
                                <div className="w-10 h-10 bg-[#FCF8F5] text-[#D46C11] rounded-xl flex items-center justify-center">
                                    <stat.icon size={18} strokeWidth={2.5} />
                                </div>
                            </div>
                            <h2 className="text-[32px] font-black text-[#111111] leading-none mb-4">{stat.value}</h2>
                            <div className={`flex items-center gap-1.5 text-[11px] font-black tracking-wide ${stat.trendColor || 'text-[#1E8E3E]'}`}>
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m3 17 6-6 4 4 8-8"/><path d="M17 7h4v4"/></svg>
                                {stat.trend}
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Revenue Chart */}
                    <div className="lg:col-span-2 bg-white rounded-3xl border border-[#EEEEEE] p-6 sm:p-8 shadow-[0_4px_20px_rgba(0,0,0,0.02)] flex flex-col">
                        <div className="flex justify-between items-start mb-8">
                            <div>
                                <h3 className="text-[18px] font-bold text-[#111111] mb-1">Revenue Overview</h3>
                                <p className="text-[13px] font-medium text-[#A3A3A3]">Daily store earnings over the last 7 days</p>
                            </div>
                            <div className="flex items-center gap-2 bg-[#F9F9F9] px-4 py-2 rounded-xl text-[12px] font-bold text-[#111111] cursor-pointer hover:bg-[#F0F0F0] transition-colors">
                                Last 7 Days <ChevronDown size={14} strokeWidth={2.5} />
                            </div>
                        </div>
                        
                        <div className="flex-1 w-full min-h-[250px] relative mt-auto flex items-end">
                            {/* Dummy Chart SVG perfectly matching the image aesthetic */}
                            <svg className="w-full h-full" viewBox="0 0 800 250" preserveAspectRatio="none">
                                <defs>
                                    <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="0%" stopColor="#D46C11" stopOpacity="0.2" />
                                        <stop offset="100%" stopColor="#D46C11" stopOpacity="0" />
                                    </linearGradient>
                                </defs>
                                <path 
                                    d="M0 200 C 100 200, 150 180, 200 150 C 250 120, 280 110, 350 110 C 420 110, 450 120, 500 90 C 550 60, 600 50, 700 45 C 750 42, 780 20, 800 20 L 800 250 L 0 250 Z" 
                                    fill="url(#gradient)" 
                                />
                                <path 
                                    d="M0 200 C 100 200, 150 180, 200 150 C 250 120, 280 110, 350 110 C 420 110, 450 120, 500 90 C 550 60, 600 50, 700 45 C 750 42, 780 20, 800 20" 
                                    fill="none" 
                                    stroke="#D46C11" 
                                    strokeWidth="5" 
                                    strokeLinecap="round"
                                />
                                <circle cx="500" cy="90" r="5" fill="#111111" stroke="white" strokeWidth="2" />
                            </svg>
                            
                            {/* X-Axis labels */}
                            <div className="absolute bottom-[-10px] left-0 w-full flex justify-between px-2 text-[10px] font-black text-[#A3A3A3] tracking-[0.1em] uppercase">
                                <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span className="text-[#D46C11]">Sun</span>
                            </div>
                        </div>
                    </div>

                    {/* Newsletter Performance */}
                    <div className="bg-white rounded-3xl border border-[#EEEEEE] p-6 sm:p-8 shadow-[0_4px_20px_rgba(0,0,0,0.02)] flex flex-col">
                        <div>
                            <h3 className="text-[18px] font-bold text-[#111111] mb-1">Newsletter Performance</h3>
                            <p className="text-[13px] font-medium text-[#A3A3A3] mb-10">Audience engagement metrics</p>
                        </div>

                        <div className="space-y-8 flex-1">
                            <div>
                                <div className="flex justify-between text-[11px] font-bold mb-2">
                                    <span className="text-[#8A8A8A]">Open Rate</span>
                                    <span className="text-[#111111]">64.8%</span>
                                </div>
                                <div className="w-full h-2.5 bg-[#F4F4F4] rounded-full overflow-hidden">
                                    <div className="h-full bg-[#D46C11] rounded-full" style={{ width: '64.8%' }}></div>
                                </div>
                            </div>

                            <div>
                                <div className="flex justify-between text-[11px] font-bold mb-2">
                                    <span className="text-[#8A8A8A]">Click-Through Rate</span>
                                    <span className="text-[#111111]">12.2%</span>
                                </div>
                                <div className="w-full h-2.5 bg-[#F4F4F4] rounded-full overflow-hidden">
                                    <div className="h-full bg-[#D46C11] rounded-full" style={{ width: '12.2%' }}></div>
                                </div>
                            </div>

                            <div>
                                <div className="flex justify-between text-[11px] font-bold mb-2">
                                    <span className="text-[#8A8A8A]">Conversion Rate</span>
                                    <span className="text-[#111111]">3.5%</span>
                                </div>
                                <div className="w-full h-2.5 bg-[#F4F4F4] rounded-full overflow-hidden">
                                    <div className="h-full bg-[#D46C11] rounded-full" style={{ width: '3.5%' }}></div>
                                </div>
                            </div>
                        </div>

                        <button className="w-full bg-[#D46C11] hover:bg-[#B5590D] text-white font-bold text-[14px] py-4 rounded-2xl flex items-center justify-center gap-2 mt-8 transition-colors">
                            <Send size={16} strokeWidth={2.5} className="-mt-0.5" /> Create Campaign
                        </button>
                    </div>
                </div>

                {/* Recent Orders Table */}
                <div className="bg-white rounded-3xl border border-[#EEEEEE] px-8 pt-8 pb-4 shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
                    <div className="flex justify-between items-center mb-8">
                        <div>
                            <h3 className="text-[18px] font-bold text-[#111111] mb-1">Recent Orders</h3>
                            <p className="text-[13px] font-medium text-[#A3A3A3]">Manage your latest transactions</p>
                        </div>
                        <button onClick={() => window.location.href = '/admin/orders'} className="text-[13px] font-black text-[#D46C11] hover:text-[#B5590D] uppercase tracking-wider">
                            View All Orders
                        </button>
                    </div>

                    <div className="w-full overflow-x-auto overflow-y-auto max-h-[380px] pr-2 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-[#E0E0E0] [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-[#C0C0C0]">
                        <table className="w-full text-left border-collapse relative">
                            <thead className="bg-white sticky top-0 z-10 before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-full before:border-b before:border-[#F4F4F4]">
                                <tr>
                                    <th className="pb-4 text-[10px] font-black text-[#A3A3A3] uppercase tracking-widest w-[15%]">Order ID</th>
                                    <th className="pb-4 text-[10px] font-black text-[#A3A3A3] uppercase tracking-widest w-[20%]">Customer</th>
                                    <th className="pb-4 text-[10px] font-black text-[#A3A3A3] uppercase tracking-widest w-[25%]">Product</th>
                                    <th className="pb-4 text-[10px] font-black text-[#A3A3A3] uppercase tracking-widest w-[15%]">Date</th>
                                    <th className="pb-4 text-[10px] font-black text-[#A3A3A3] uppercase tracking-widest w-[10%]">Amount</th>
                                    <th className="pb-4 text-[10px] font-black text-[#A3A3A3] uppercase tracking-widest w-[10%]">Status</th>
                                    <th className="pb-4 text-[10px] font-black text-[#A3A3A3] uppercase tracking-widest w-[5%] text-center">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {recentOrders.map((order, index) => (
                                    <tr key={index} className="border-b border-[#F9F9F9] last:border-0 hover:bg-[#FAFAFA] transition-colors">
                                        <td className="py-5 text-[14px] font-black text-[#111111]">{order.id}</td>
                                        <td className="py-5 flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-full bg-[#EAEAEA] border-2 border-white shadow-sm flex items-center justify-center overflow-hidden">
                                                <div className="w-full h-full bg-[#E4E4E4]"></div>
                                            </div>
                                            <span className="text-[13px] font-bold text-[#111111]">{order.customer}</span>
                                        </td>
                                        <td className="py-5 text-[13px] font-medium text-[#666666]">{order.product}</td>
                                        <td className="py-5 text-[13px] font-medium text-[#8A8A8A]">
                                            {order.date.split(',')[0]}<br />
                                            <span className="text-[11px]">{order.date.split(',')[1]}</span>
                                        </td>
                                        <td className="py-5 text-[14px] font-black text-[#111111]">{order.amount}</td>
                                        <td className="py-5">
                                            <span className={`px-2.5 py-1 rounded-full text-[10px] font-black tracking-widest uppercase ${
                                                order.status === 'DELIVERED' ? 'bg-[#E6F4EA] text-[#1E8E3E]' : 'bg-[#FFF8E1] text-[#F57C00]'
                                            }`}>
                                                {order.status}
                                            </span>
                                        </td>
                                        <td className="py-5 text-center text-[#A3A3A3] hover:text-[#111111] cursor-pointer transition-colors">
                                            <MoreHorizontal size={20} className="mx-auto" />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        </AdminLayout>
    );
};

export default AdminDashboard;
