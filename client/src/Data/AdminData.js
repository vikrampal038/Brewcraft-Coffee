import { FileText, Calendar, DollarSign, Users, Package, Coffee } from 'lucide-react';

export const adminStatCards = [
    { title: 'Total Orders', value: '1,284', trend: '+5.2% vs last week', trendUp: true, icon: FileText },
    { title: 'Active Reservations', value: '24', trend: '+2.1% from today', trendUp: true, icon: Calendar },
    { title: 'Revenue', value: '$12,450.00', trend: '+12.5% this month', trendUp: true, icon: DollarSign },
    { title: 'Subscribers', value: '892', trend: '+14 new today', trendUp: true, icon: Users, trendColor: 'text-[#D46C11]' }
];

export const adminRecentOrders = [
    { id: '#ORD-7721', customer: 'Liam Hudson', product: 'Colombian Whole Bean 1kg', date: 'Oct 12, 2023', amount: '$34.50', status: 'DELIVERED' },
    { id: '#ORD-7722', customer: 'Elena Petrova', product: 'Ceramic Coffee Set', date: 'Oct 12, 2023', amount: '$120.00', status: 'PENDING' },
    { id: '#ORD-7723', customer: 'Michael Chen', product: 'Espresso Roast 500g', date: 'Oct 11, 2023', amount: '$22.00', status: 'DELIVERED' },
    { id: '#ORD-7724', customer: 'Sarah Jenkins', product: 'Pour Over Brewer', date: 'Oct 11, 2023', amount: '$45.00', status: 'DELIVERED' },
    { id: '#ORD-7725', customer: 'David O\'Connor', product: 'Ethiopian Yirgacheffe 1kg', date: 'Oct 10, 2023', amount: '$38.50', status: 'PENDING' },
    { id: '#ORD-7726', customer: 'Emma Watson', product: 'Cold Brew Pitcher', date: 'Oct 10, 2023', amount: '$29.99', status: 'DELIVERED' }
];

export const adminOrderStats = [
    { title: "Today's Orders", value: "42", trend: "+5% vs yesterday", trendUp: true, icon: Package, iconColor: "text-[#D46C11]" },
    { title: "Pending Prep", value: "12", trend: "High volume", trendUp: false, icon: Coffee, iconColor: "text-[#D46C11]", trendColor: "text-[#DC2626]", trendBg: "bg-[#FEE2E2]" },
    { title: "Total Revenue", value: "$1,240.50", trend: "+10% vs avg", trendUp: true, icon: DollarSign, iconColor: "text-[#10B981]", trendColor: "text-[#10B981]", trendBg: "bg-[#D1FAE5]" }
];

export const adminOrdersList = [
    { id: '#BB-8921', customer: 'James Wilson', email: 'james.w@email.com', items: '1x Oat Latte, 2x Espresso', total: '$18.50', status: 'PENDING', statusColor: 'bg-[#FEF3C7] text-[#D97706]' },
    { id: '#BB-8920', customer: 'Sarah Miller', email: 'smiller@mail.org', items: '2x Cappuccino, 1x Croissant', total: '$24.00', status: 'PREPARING', statusColor: 'bg-[#FFEDD5] text-[#EA580C]' },
    { id: '#BB-8919', customer: 'Elena Rodriguez', email: 'elena_rod@test.com', items: '1x Pour Over, 1x Blueberry Muffin', total: '$12.75', status: 'COMPLETED', statusColor: 'bg-[#D1FAE5] text-[#059669]' },
    { id: '#BB-8918', customer: 'Marcus Thorne', email: 'mthorne@company.com', items: '4x Espresso Shot', total: '$14.00', status: 'COMPLETED', statusColor: 'bg-[#D1FAE5] text-[#059669]' },
];

export const adminReservationStats = [
    { title: "TOTAL TODAY", value: "42", trend: "↗ +12% from yesterday", trendColor: "text-[#10B981]" },
    { title: "PENDING REQUESTS", value: "14", trend: "Needs attention", trendColor: "text-[#D46C11]" },
    { title: "VIP BOOKINGS", value: "03", trend: "2 confirmed for dinner", trendColor: "text-[#8A8A8A]" }
];

export const adminReservationsList = [
    { id: '1', name: 'Sophia Martinez', email: 'sophia.m@email.com', avatarBg: 'bg-[#FDF4EB]', avatarColor: 'text-[#D46C11]', date: 'Mon, Oct 24', time: '10:30 AM', guests: 4, status: 'PENDING', isVip: false },
    { id: '2', name: 'James Wilson', email: 'jwilson@corp.com', avatarBg: 'bg-[#FFF8E1]', avatarColor: 'text-[#F57C00]', date: 'Mon, Oct 24', time: '12:15 PM', guests: 2, status: 'CONFIRMED', isVip: true },
    { id: '3', name: 'Elena Lopez', email: 'elena.l@mail.es', avatarBg: 'bg-[#FEE2E2]', avatarColor: 'text-[#DC2626]', date: 'Tue, Oct 25', time: '09:00 AM', guests: 6, status: 'PENDING', isVip: false },
    { id: '4', name: 'Marcus Thorne', email: 'm.thorne@web.com', avatarBg: 'bg-[#FDF4EB]', avatarColor: 'text-[#D46C11]', date: 'Tue, Oct 25', time: '02:30 PM', guests: 3, status: 'CANCELLED', isVip: false }
];

export const adminProductsMock = [
    {
        id: '1',
        name: 'Midnight Velvet Roast',
        sku: 'BC-DS-931',
        categories: ['Espresso', 'Blend'],
        price: '24.00',
        status: 'Available',
        image: 'https://images.unsplash.com/photo-1559525839-b184a4d698c7?w=100&q=80',
    },
    {
        id: '2',
        name: 'Ethiopian Yirgacheffe',
        sku: 'BC-SO-942',
        categories: ['Single Origin'],
        price: '32.50',
        status: 'Available',
        image: 'https://images.unsplash.com/photo-1514432324607-a2c622ac6d16?w=100&q=80',
    },
    {
        id: '3',
        name: 'Morning Bloom Ground',
        sku: 'BC-GC-915',
        categories: ['Ground Coffee'],
        price: '18.00',
        status: 'Out of Stock',
        image: 'https://images.unsplash.com/photo-1587734195503-904fca47e0e9?w=100&q=80',
    },
    {
        id: '4',
        name: 'Artisan Dark Whole Bean',
        sku: 'BC-WB-999',
        categories: ['Whole Bean'],
        price: '29.99',
        status: 'Available',
        image: 'https://images.unsplash.com/photo-1558138838-76292eb5002b?w=100&q=80',
    }
];
