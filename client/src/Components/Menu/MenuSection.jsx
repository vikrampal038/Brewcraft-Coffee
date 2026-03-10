import React from 'react';
import { motion } from 'framer-motion';
import MenuItemCard from './MenuItemCard';

const MenuSection = ({ category, subtitle, items }) => {
    return (
        <section className="mb-20" id={category.toLowerCase()}>
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between border-b border-[#EAEAEA] pb-4 mb-8">
                <h2 className="text-[28px] font-black tracking-tight text-[#0A0A0A] uppercase mb-2 sm:mb-0 leading-none">
                    {category}
                </h2>
                <span className="text-[11px] font-bold tracking-[0.15em] text-[#A3A3A3] uppercase">
                    {subtitle}
                </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {items.map((item, index) => (
                    <MenuItemCard key={item.id} item={item} />
                ))}
            </div>
        </section>
    );
};

export default MenuSection;
