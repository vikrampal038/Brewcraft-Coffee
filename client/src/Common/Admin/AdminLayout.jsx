import React from 'react';
import AdminSidebar from './AdminSidebar';
import AdminHeader from './AdminHeader';

const AdminLayout = ({ children, title = "Dashboard Overview", breadcrumb }) => {
    return (
        <div className="min-h-screen bg-[#FAFAFA] font-sans">
            <AdminSidebar />
            <AdminHeader title={title} breadcrumb={breadcrumb} />
            <div className="ml-64 p-10">
                {children}
            </div>
        </div>
    );
};

export default AdminLayout;
