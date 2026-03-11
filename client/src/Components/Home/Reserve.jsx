import React from "react";
import { useNavigate } from "react-router-dom";
import { FaRegCalendarAlt } from "react-icons/fa";
import { BsClockHistory } from "react-icons/bs";
import { MdOutlineStorefront } from "react-icons/md";
import { motion } from "framer-motion";
import reservationImg1 from "../../Assets/reservation.png";
import reservationImg2 from "../../Assets/reservation(1).png";
const Reserve = () => {
  const navigate = useNavigate();

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const imageVibrate = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1, ease: "easeOut", delay: 0.2 } }
  };

  return (
    <section className="bg-[#FBF8EF] py-20 px-4 sm:px-6 lg:px-8 font-sans overflow-hidden">
      <div className="max-w-[1280px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">

        {/* Left Side: Content */}
        <motion.div
          className="flex-1 flex flex-col items-start gap-6 w-full lg:max-w-[55%]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
        >
          {/* Tag */}
          <div className="px-4 py-1.5 rounded-full bg-[#faebd7] text-[#D46c11] text-[11px] font-bold tracking-wider uppercase inline-block">
            Exclusive Experience
          </div>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[#3D2B1F] leading-[1.15] tracking-tight">
            Reserve Your Table <br className="hidden sm:block" /> for Pure Comfort
          </h2>

          {/* Paragraph */}
          <p className="text-[#3D2B1F]/70 text-[15px] sm:text-[17px] leading-relaxed max-w-[500px]">
            Plan your visit to Brewcraft Coffee and enjoy handcrafted coffee, cozy ambiance, and unforgettable moments in our premium sanctuary.
          </p>

          {/* List Items */}
          <ul className="flex flex-col gap-5 mt-2 mb-2">
            <li className="flex items-center gap-4">
              <span className="w-[34px] h-[34px] rounded-full bg-[#D46c11] text-white flex items-center justify-center text-[15px] shadow-sm flex-shrink-0">
                <FaRegCalendarAlt />
              </span>
              <span className="text-[#3D2B1F]/90 font-bold text-[14px] sm:text-[15px]">
                Choose your preferred date and time
              </span>
            </li>

            <li className="flex items-center gap-4">
              <span className="w-[34px] h-[34px] rounded-full bg-[#D46c11] text-white flex items-center justify-center text-[15px] shadow-sm flex-shrink-0">
                <BsClockHistory />
              </span>
              <span className="text-[#3D2B1F]/90 font-bold text-[14px] sm:text-[15px]">
                Skip waiting lines
              </span>
            </li>

            <li className="flex items-center gap-4">
              <span className="w-[34px] h-[34px] rounded-full bg-[#D46c11] text-white flex items-center justify-center text-[15px] shadow-sm flex-shrink-0">
                <MdOutlineStorefront />
              </span>
              <span className="text-[#3D2B1F]/90 font-bold text-[14px] sm:text-[15px]">
                Perfect for meetings and casual hangouts
              </span>
            </li>
          </ul>

          {/* Button */}
          <button
            onClick={() => navigate('/table-reservation')}
            className="mt-2 px-8 py-3.5 bg-[#D46c11] hover:bg-[#c26210] text-white rounded-full font-bold text-[15px] shadow-[0_4px_14px_0_rgba(212,108,17,0.39)] transition-all transform active:scale-[0.98]"
          >
            Reserve a Table
          </button>
        </motion.div>

        {/* Right Side: Images */}
        <motion.div
          className="relative w-full max-w-[400px] sm:max-w-[500px] lg:max-w-none lg:w-[500px] h-[450px] sm:h-[550px] lg:h-[600px] mt-8 lg:mt-0 flex-shrink-0 mx-auto lg:mx-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={imageVibrate}
        >
          {/* Back Image (Man) */}
          <div className="absolute bottom-0 left-0 w-[220px] h-[280px] sm:w-[280px] sm:h-[350px] lg:w-[320px] lg:h-[400px] rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden border-[10px] sm:border-[16px] border-[#FBF8EF] shadow-sm z-0">
            <img
              src={reservationImg2}
              alt="Man sitting at cafe"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Front Image (Couple) */}
          <div className="absolute top-0 right-0 w-[240px] h-[280px] sm:w-[320px] sm:h-[380px] lg:w-[360px] lg:h-[440px] rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden border-[10px] sm:border-[16px] border-[#FBF8EF] shadow-sm z-10 transition-transform duration-500 hover:scale-[1.02]">
            <img
              src={reservationImg1}
              alt="Couple enjoying coffee"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Reserve;
