import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp, ArrowDown } from 'lucide-react';

const FloatingScroll = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isAtBottom, setIsAtBottom] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;
            
            // Show when past the hero section (roughly 1 viewport height, or 400px)
            if (scrollY > windowHeight * 0.5) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }

            // Check if user has reached bottom (within 50px)
            if (scrollY + windowHeight >= documentHeight - 50) {
                setIsAtBottom(true);
            } else {
                setIsAtBottom(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        // Initial check
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleClick = () => {
        if (isAtBottom) {
            // Scroll to top
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        } else {
            // Scroll to bottom
            window.scrollTo({
                top: document.documentElement.scrollHeight,
                behavior: 'smooth'
            });
        }
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.button
                    initial={{ opacity: 0, scale: 0.5, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.5, y: 20 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={handleClick}
                    className="fixed bottom-8 right-8 z-[100] w-12 h-12 rounded-full bg-[#D46C11] text-white flex items-center justify-center shadow-[0_8px_30px_rgba(212,108,17,0.4)] hover:bg-[#B5590D] transition-colors focus:outline-none focus:ring-2 focus:ring-[#D46C11] focus:ring-offset-2"
                    aria-label="Scroll page direction"
                >
                    <motion.div
                        animate={{ rotate: isAtBottom ? 0 : 180 }}
                        transition={{ duration: 0.4, type: "spring", stiffness: 200, damping: 15 }}
                        className="flex items-center justify-center"
                    >
                        <ArrowUp size={24} strokeWidth={2.5} />
                    </motion.div>
                </motion.button>
            )}
        </AnimatePresence>
    );
};

export default FloatingScroll;
