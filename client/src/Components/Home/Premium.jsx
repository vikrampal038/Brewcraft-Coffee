import React, { useState, useEffect, useContext } from "react";
import { PremiumData } from "../../Data/HomeData";
import { FaChevronLeft, FaChevronRight, FaStar, FaPlus } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { CartContext } from "../../Context/CartContext";

const Primium = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [numVisible, setNumVisible] = useState(3);
    const { addToCart } = useContext(CartContext);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setNumVisible(1);
            } else if (window.innerWidth < 1024) {
                setNumVisible(2);
            } else {
                setNumVisible(3);
            }
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % PremiumData.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + PremiumData.length) % PremiumData.length);
    };

    // Calculate visible items based on current index combining items based on screen size
    const getVisibleItems = () => {
        const items = [];
        for (let i = 0; i < numVisible; i++) {
            const index = (currentIndex + i) % PremiumData.length;
            items.push({ ...PremiumData[index] });
        }
        return items;
    };

    return (
        <section className="py-16 md:py-20 bg-[#EFECE5] overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 md:mb-32">
                    <div className="max-w-2xl">
                        <h2 className="text-[3.5rem] md:text-[5rem] font-bold text-[#443B33] mb-4 uppercase tracking-tight leading-none font-sans">
                            Our Coffee
                        </h2>
                        <p className="text-[#6B5A4D] font-serif text-[1.1rem] md:text-[1.25rem] italic leading-relaxed max-w-lg">
                            There's always room for coffe, it's not just coffee,
                            its's an experience, life is better with coffee.
                        </p>
                    </div>
                    {/* Navigation Buttons */}
                    <div className="hidden md:flex gap-4">
                        <button
                            onClick={prevSlide}
                            className="w-[3.5rem] h-[3.5rem] rounded-full bg-[#3D332D] text-white flex items-center justify-center hover:bg-[#564840] transition-colors"
                        >
                            <FaChevronLeft />
                        </button>
                        <button
                            onClick={nextSlide}
                            className="w-[3.5rem] h-[3.5rem] rounded-full bg-[#3D332D] text-white flex items-center justify-center hover:bg-[#564840] transition-colors"
                        >
                            <FaChevronRight />
                        </button>
                    </div>
                </div>

                {/* Cards Section */}
                <div className="relative w-full h-[550px] mt-16 md:mt-24">
                    <div className="flex justify-center md:justify-start items-center gap-6 md:gap-8 lg:gap-10 h-full relative px-4 sm:px-6 md:px-8">
                        <AnimatePresence mode="popLayout">
                            {getVisibleItems().map((item, idx) => (
                                <motion.div
                                    key={item.id + "-" + idx}
                                    layout
                                    initial={{ opacity: 0, x: 50, scale: 0.9 }}
                                    animate={{ 
                                        opacity: 1, 
                                        x: 0, 
                                        scale: (numVisible === 3 && idx === 1) ? 1.05 : 1, // Make middle item slightly larger only on desktop
                                        zIndex: (numVisible === 3 && idx === 1) ? 20 : 10
                                    }}
                                    exit={{ opacity: 0, x: -50, scale: 0.9 }}
                                    transition={{ duration: 0.5, type: "spring" }}
                                    className={`bg-[#443A34] rounded-none w-[85vw] sm:w-[320px] md:w-[360px] lg:w-[380px] ${(numVisible === 3 && idx === 1) ? 'h-[440px] md:h-[460px]' : 'h-[400px] md:h-[420px]'} relative flex-shrink-0 flex flex-col justify-end p-6 md:p-8`}
                                >
                                    {/* Coffee Image overlap */}
                                    <div className={`absolute rounded-full -top-[80px] md:-top-[110px] left-1/2 transform -translate-x-1/2 rounded-full shadow-lg ${(numVisible === 3 && idx === 1) ? 'w-48 h-48 md:w-60 md:h-60' : 'w-40 h-40 md:w-52 md:h-52'}`}>
                                        <img
                                            src={item.Image}
                                            alt={item.title}
                                            className="w-full h-full object-cover drop-shadow-2xl rounded-full"
                                        />
                                    </div>

                                    {/* Card Content */}
                                    <div className="text-white mt-12 md:mt-16">
                                        <h3 className="text-2xl md:text-[28px] lg:text-[32px] font-bold tracking-wide mb-3 uppercase font-sans whitespace-nowrap">{item.title}</h3>
                                        
                                        <div className="inline-flex items-center gap-2 bg-[#5E514A] px-2 py-1 md:px-3 md:py-1.5 mb-4 text-xs md:text-sm font-semibold rounded">
                                            <FaStar className="text-white text-[10px] md:text-xs" />
                                            <span>{item.rating}</span>
                                        </div>
                                        
                                        <p className="text-[#B5AAA1] font-serif mb-6 md:mb-8 text-sm md:text-base">
                                            Volume <span className="text-white italic text-base md:text-lg lg:text-xl">{item.volume}</span>
                                        </p>
                                        
                                        <div className="flex justify-between items-center border border-[#64564E] font-sans">
                                            <span className="text-xl md:text-2xl lg:text-3xl font-bold ml-4 md:ml-6 tracking-wide">{item.price}</span>
                                            <button 
                                                onClick={() => addToCart(item, 1, { grind: 'Whole Bean', roast: 'Medium Roast' })}
                                                className="bg-[#EFECE5] w-12 h-12 md:w-16 md:h-16 flex items-center justify-center text-[#443B33] hover:bg-white text-lg md:text-xl transition-colors active:scale-95"
                                            >
                                                <FaPlus />
                                            </button>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
                </div>
                
                {/* Mobile Navigation */}
                <div className="flex justify-center gap-4 mt-8 md:hidden">
                    <button
                        onClick={prevSlide}
                        className="w-12 h-12 rounded-full bg-[#3D332D] text-white flex items-center justify-center hover:bg-[#564840] transition-colors"
                    >
                        <FaChevronLeft />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="w-12 h-12 rounded-full bg-[#3D332D] text-white flex items-center justify-center hover:bg-[#564840] transition-colors"
                    >
                        <FaChevronRight />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Primium;
