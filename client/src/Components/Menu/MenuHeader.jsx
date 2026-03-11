import React from 'react';
import { motion } from 'framer-motion';

const MenuHeader = ({ categories, activeCategory, onCategoryChange }) => {
    return (
        <div className="flex flex-col items-center pt-32 pb-16 px-5 text-center bg-[#FAFAFA]">
            <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-[40px] md:text-[46px] font-black text-[#0A0A0A] mb-4 tracking-tight leading-none"
            >
                Unified Coffee Menu
            </motion.h1>
            <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-[15px] font-medium text-[#555555] max-w-xl mx-auto mb-16 leading-relaxed"
            >
                Explore our curated selection of sustainably sourced beans, precision-brewed to perfection.
            </motion.p>

            {/* Category Navigation */}
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex flex-wrap justify-center gap-6 md:gap-10 border-b border-[#EAEAEA] pb-2"
            >
                {categories.map((cat, idx) => (
                    <button
                        key={idx}
                        onClick={() => onCategoryChange(cat)}
                        className={`text-[14px] font-bold tracking-[0.15em] uppercase transition-colors relative pb-3 ${activeCategory === cat ? 'text-[#0A0A0A]' : 'text-[#A3A3A3] hover:text-[#0A0A0A]'}`}
                    >
                        {cat}
                        {activeCategory === cat && (
                            <motion.div
                                layoutId="activeTab"
                                className="absolute bottom-[-2px] left-0 right-0 h-[2px] bg-[#0A0A0A]"
                            />
                        )}
                    </button>
                ))}
            </motion.div>
        </div>
    );
};

export default MenuHeader;
