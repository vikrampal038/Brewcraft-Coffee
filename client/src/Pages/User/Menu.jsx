import React, { useCallback, useEffect, useMemo, useState } from 'react';
import MenuHeader from '../../Components/User/Menu/MenuHeader';
import MenuSection from '../../Components/User/Menu/MenuSection';
import { menuData } from '../../Data/MenuData';
import { useLocation } from 'react-router-dom';
import { categoryId } from '../../utils/categoryId';

const Menu = () => {
    const location = useLocation();
    const categories = useMemo(() => menuData.map(data => data.category), []);
    const [activeCategory, setActiveCategory] = useState(categories[0]);

    // Use scroll into view logic to navigate between categories for a longer page feel
    const handleCategoryChange = useCallback((category) => {
        setActiveCategory(category);
        const element = document.getElementById(categoryId(category));
        if (element) {
            const topOffset = element.getBoundingClientRect().top + window.scrollY - 100;
            window.scrollTo({ top: topOffset, behavior: 'smooth' });
        }
    }, []);

    // Allow deep-linking: /menu?category=ESPRESSO (or navigation state)
    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const requested = params.get('category') || location.state?.category;
        if (!requested) return;

        const match = categories.find(c => c.toLowerCase() === String(requested).toLowerCase());
        if (!match) return;

        // Scroll only; the scroll listener will update activeCategory.
        const element = document.getElementById(categoryId(match));
        if (element) {
            const topOffset = element.getBoundingClientRect().top + window.scrollY - 100;
            window.scrollTo({ top: topOffset, behavior: 'smooth' });
            window.dispatchEvent(new Event('scroll'));
        }
    }, [location.search, location.state, categories]);

    // Setup intersection observer to update active tab on scroll
    useEffect(() => {
        const handleScroll = () => {
            let currentActive = activeCategory;
            for (const cat of categories) {
                const el = document.getElementById(categoryId(cat));
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
