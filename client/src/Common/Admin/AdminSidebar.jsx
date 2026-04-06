import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { LayoutDashboard, ShoppingBag, Calendar, Package, Mail, Settings, LogOut } from 'lucide-react';
import { useAuth } from '../../Hooks/useAuth';

const AdminSidebar = () => {
    const { user, signOut } = useAuth();
    
    const navItems = [
        { name: 'Dashboard', icon: LayoutDashboard, path: '/admin' },
        { name: 'Orders', icon: ShoppingBag, path: '/admin/orders' },
        { name: 'Reservations', icon: Calendar, path: '/admin/reservations' },
        { name: 'Products', icon: Package, path: '/admin/products' },
        { name: 'Newsletter', icon: Mail, path: '/admin/newsletter' },
        { name: 'Settings', icon: Settings, path: '/admin/settings' },
    ];

    return (
        <div className="w-64 h-screen bg-[#FDFDFD] border-r border-[#EEEEEE] flex flex-col justify-between fixed left-0 top-0 pb-6 pt-8 z-50">
            <div>
                {/* Logo Section */}
                <Link to="/" className="flex items-center gap-3 px-8 mb-12">
                    <div className="w-10 h-10 bg-[#D46C11] rounded-[10px] flex items-center justify-center text-white shrink-0">
                        {/* Coffee cup icon simple SVG */}
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M17 8h1a4 4 0 1 1 0 8h-1" />
                            <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z" />
                        </svg>
                    </div>
                    <div>
                        <h2 className="text-[16px] font-black tracking-tight text-[#111111]">Bean & Roast</h2>
                        <p className="text-[10px] font-bold text-[#D46C11] tracking-widest uppercase">Store Manager</p>
                    </div>
                </Link>

                {/* Navigation Links */}
                <nav className="flex flex-col gap-1 px-4">
                    {navItems.map((item, index) => (
                        <NavLink
                            key={index}
                            to={item.path}
                            className={({ isActive }) => 
                                `flex items-center gap-4 px-4 py-3.5 rounded-xl text-[14px] font-bold transition-all ${
                                    isActive
                                    ? 'bg-[#FDF4EB] text-[#D46C11] shadow-sm' 
                                    : 'text-[#8A8A8A] hover:bg-[#FAFAFA] hover:text-[#444444]'
                                }`
                            }
                        >
                            <item.icon size={18} strokeWidth={2.5} className="shrink-0" />
                            {item.name}
                        </NavLink>
                    ))}
                </nav>
            </div>

            {/* Admin Profile Bottom */}
            <div className="px-6 border-t border-[#EEEEEE] pt-6 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <img 
                        src={user?.imageUrl || "https://i.pravatar.cc/150?u=sarah"} 
                        alt="Admin" 
                        className="w-10 h-10 rounded-full object-cover border-2 border-white shadow-sm"
                    />
                    <div>
                        <h4 className="text-[13px] font-bold text-[#111111] leading-tight">Sarah Jenkins</h4>
                        <p className="text-[11px] font-medium text-[#8A8A8A]">Admin</p>
                    </div>
                </div>
                <button onClick={() => {/* Handle Logout */}} className="text-[#8A8A8A] hover:text-[#D46C11] transition-colors">
                    <LogOut size={18} strokeWidth={2.5} />
                </button>
            </div>
        </div>
    );
};

export default AdminSidebar;
