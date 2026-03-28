import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const PerfectCupCta = () => {
  const navigate = useNavigate();

  // Using high-quality unsplash coffee images for the collage placeholders to match the layout beautifully
  const images = [
    "https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=800&auto=format&fit=crop", // Top middle
    "https://images.unsplash.com/photo-1606791405792-1004f1718d0c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fGNvZmZlZXxlbnwwfHwwfHx8MA%3D%3D", // Top right
    "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=800&auto=format&fit=crop", // Left middle
    "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=800&auto=format&fit=crop", // Center square
    "https://images.unsplash.com/photo-1444418185997-1145401101e0?q=80&w=800&auto=format&fit=crop", // Right middle
    "https://images.unsplash.com/photo-1610632380989-680fe40816c6?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Bottom middle
    "https://plus.unsplash.com/premium_photo-1675237625862-d982e7f44696?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fGNvZmZlZXxlbnwwfHwwfHx8MA%3D%3D"  // Bottom right
  ];

  return (
    <section className="bg-[#e5dfd3] w-full min-h-[500px] py-16 px-4 md:px-10 xl:px-20 flex items-center justify-center overflow-hidden">
      <div className="max-w-[1400px] w-full flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-8">
        
        {/* Left Content */}
        <motion.div 
          className="flex-1 flex flex-col items-start justify-center gap-6"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-[3rem] md:text-[4rem] lg:text-[4.5rem] font-bold text-[#433933] leading-[1.1] tracking-wide uppercase font-sans">
            YOUR PERFECT CUP<br />AWAITS
          </h2>
          <p className="text-[#433933] text-lg font-medium max-w-[450px] leading-snug">
            There's always room for coffe, it's not just coffee, its's an experience, life is better with coffee.
          </p>
          <button 
            onClick={() => navigate('/menu')}
            className="mt-2 px-8 py-3.5 bg-[#433933] text-[#e5dfd3] text-[15px] font-semibold tracking-wider hover:bg-[#2d2520] transition-colors duration-300"
          >
            Order Now
          </button>
        </motion.div>

        {/* Right Collage */}
        <motion.div 
          className="flex flex-1 justify-center lg:justify-end items-center w-full"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* A 5:6 aspect ratio grid perfectly matches the 1:2:2 column / equal row design */}
          <div className="grid grid-cols-[1fr_2fr_2fr] grid-rows-3 gap-2 sm:gap-3 w-full max-w-[400px] md:max-w-[500px] aspect-[5/6] mr-0 lg:mr-8">
            
            {/* Row 1 */}
            <div className="opacity-0"></div>
            <div className="w-full h-full overflow-hidden" style={{ borderRadius: '0 0 500px 500px' }}>
              <img src={images[0]} alt="coffee art top" className="w-full h-full object-cover" />
            </div>
            <div className="w-full h-full overflow-hidden" style={{ clipPath: 'polygon(100% 0, 0 100%, 100% 100%)' }}>
              <img src={images[1]} alt="coffee art top right" className="w-full h-full object-cover scale-110 translate-x-2 translate-y-2" />
            </div>

            {/* Row 2 */}
            <div className="w-full h-full overflow-hidden" style={{ borderRadius: '0 500px 500px 0' }}>
              <img src={images[2]} alt="coffee art middle left" className="w-full h-full object-cover" />
            </div>
            <div className="w-full h-full overflow-hidden relative shadow-2xl z-10">
              <img src={images[3]} alt="coffee art center" className="w-full h-full object-cover transform scale-105" />
            </div>
            <div className="w-full h-full p-1 md:p-3 flex items-center justify-center">
              <div className="w-full h-full overflow-hidden rounded-full border-4 border-[#3D332D]/10">
                <img src={images[4]} alt="coffee art middle right" className="w-full h-full object-cover" />
              </div>
            </div>

            {/* Row 3 */}
            <div className="opacity-0"></div>
            <div className="w-[115%] h-[115%] rounded-full overflow-hidden -translate-x-[7.5%] relative z-20 shadow-xl border-[6px] border-[#EADDCC]">
              <img src={images[5]} alt="coffee art bottom middle" className="w-full h-full object-cover" />
            </div>
            <div className="w-full h-full overflow-hidden" style={{ clipPath: 'polygon(0 0, 100% 0, 0 100%)' }}>
              <img src={images[6]} alt="coffee art bottom right" className="w-full h-full object-cover" />
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PerfectCupCta;
