import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import MenuHeader from '../Components/Menu/MenuHeader';
import MenuSection from '../Components/Menu/MenuSection';
import { menuData } from '../Data/MenuData';

const Menu = () => {
    const categories = menuData.map(data => data.category);
    const [activeCategory, setActiveCategory] = useState(categories[0]);

    // Use scroll into view logic to navigate between categories for a longer page feel
    const handleCategoryChange = (category) => {
        setActiveCategory(category);
        const element = document.getElementById(category.toLowerCase());
        if (element) {
            const topOffset = element.getBoundingClientRect().top + window.scrollY - 100;
            window.scrollTo({ top: topOffset, behavior: 'smooth' });
        }
    };

    // Setup intersection observer to update active tab on scroll
    useEffect(() => {
        const handleScroll = () => {
            let currentActive = activeCategory;
            for (const cat of categories) {
                const el = document.getElementById(cat.toLowerCase());
                if (el) {
                    const rect = el.getBoundingClientRect();
                    if (rect.top <= 150 && rect.bottom >= 150) {
                        currentActive = cat;
                    }
                }
            }
            if (currentActive !== activeCategory) {
                setActiveCategory(currentActive);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [activeCategory, categories]);

    return (
        <div className="min-h-screen bg-[#FAFAFA] font-sans pb-24">
            <MenuHeader
                categories={categories}
                activeCategory={activeCategory}
                onCategoryChange={handleCategoryChange}
            />

            <div className="max-w-7xl mx-auto px-5 sm:px-10 lg:px-20 mt-12">
                {menuData.map((sectionData) => (
                    <MenuSection
                        key={sectionData.category}
                        category={sectionData.category}
                        subtitle={sectionData.subtitle}
                        items={sectionData.items}
                    />
                ))}
            </div>
        </div>
    );
};

export default Menu;
