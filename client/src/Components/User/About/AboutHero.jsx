import React from "react";
import { motion } from "framer-motion";
import bgImage from "../../../Assets/about_hero.png";

const AboutHero = () => {
  return (
    <section className="relative w-full min-h-[80vh] flex flex-col items-center justify-center overflow-hidden">
      {/* Background Image with Gradient Fade */}
      <div className="absolute inset-0 w-full h-full z-0">
        <img
          src={bgImage}
          alt="Sunrise over coffee mountains"
          className="w-full h-full object-cover object-top"
        />
        {/* Gradient that fades to the page background color at the bottom */}
        <div className="absolute inset-0 bg-linear-to-b from-white/30 via-white/50 to-[#f9f9f9]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 flex flex-col items-center text-center mt-20">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-[#d97736] tracking-[0.2em] text-sm font-semibold uppercase mb-4"
        >
          Est. 2026
        </motion.p>
        
        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-6xl md:text-8xl font-black text-[#1a1a1a] tracking-tight mb-8"
        >
          Our Story
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-2xl text-lg md:text-xl text-gray-700 leading-relaxed font-medium"
        >
          A relentless pursuit of the perfect cup, rooted in radical transparency and the artistry of the craft.
        </motion.p>
      </div>
    </section>
  );
};

export default AboutHero;
