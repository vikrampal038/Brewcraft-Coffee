import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import MenuItemCard from '../Menu/MenuItemCard';
import { menuData } from '../../../Data/MenuData';

const RelatedProducts = ({ currentProductId }) => {
    // Get all items in a single flat array
    const allItems = useMemo(() => 
        menuData.flatMap(category => category.items),
    []);

    // Filter out the current product and grab 4 random ones
    const relatedProducts = useMemo(() => {
        const filteredProducts = allItems.filter(item => item.id !== currentProductId);
        const seed = String(currentProductId ?? '');

        const hashString = (value) => {
            let hash = 0;
            for (let i = 0; i < value.length; i += 1) {
                hash = (hash * 31 + value.charCodeAt(i)) % 2147483647;
            }
            return hash;
        };

        const score = (item) => hashString(`${seed}:${item.id}`);

        return [...filteredProducts]
            .sort((a, b) => score(a) - score(b))
            .slice(0, 4);
    }, [allItems, currentProductId]);

    return (
        <div className="w-full max-w-7xl mx-auto px-5 sm:px-10 lg:px-20 py-24">

            {/* Header */}
            <div className="flex items-end justify-between mb-10">
                <div>
                    <h2 className="text-[28px] font-extrabold text-[#0A0A0A] mb-2 tracking-tight">
                        You might also like
                    </h2>
                    <p className="text-[15px] font-medium text-[#7A7A7A]">
                        Explore our other single origins and limited roasts
                    </p>
                </div>

                {/* Navigation Buttons */}
                <div className="hidden sm:flex gap-3">
                    <button className="w-10 h-10 rounded-full border border-[#EAEAEA] flex items-center justify-center text-[#A3A3A3] hover:text-[#0A0A0A] hover:border-[#0A0A0A] transition-colors">
                        <ChevronLeft size={20} strokeWidth={2.5} />
                    </button>
                    <button className="w-10 h-10 rounded-full border border-[#EAEAEA] flex items-center justify-center text-[#A3A3A3] hover:text-[#0A0A0A] hover:border-[#0A0A0A] transition-colors">
                        <ChevronRight size={20} strokeWidth={2.5} />
                    </button>
                </div>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {relatedProducts.map((product, index) => (
                    <motion.div
                        key={product.id}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "100px" }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                    >
                        <MenuItemCard item={product} />
                    </motion.div>
                ))}
            </div>

        </div>
    );
};

export default RelatedProducts;
