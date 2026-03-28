import React from "react";
import { useNavigate } from "react-router-dom";
import landVideo from "../../../Assets/land-video.mp4";

const HomeHero = () => {
  const navigate = useNavigate();

  return (
    <section className="routemein relative md:px-26 px-10 h-screen w-full overflow-hidden">
      {/* bg Video */}
      <div className="absolute inset-0 z-0 before:absolute before:inset-0 before:bg-black/40 before:z-10">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover"
        >
          <source src={landVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="relative z-20 h-full w-full text-white flex items-center ">
        <div className="max-w-2xl flex flex-col mt-10 md:mt-15 gap-4 md:gap-5 text-left">
          <div className="flex items-center gap-4">
            <h1 className="font-sans text-sm md:text-base tracking-wider text-gray-200">
              Cleveland-based Coffee shop
            </h1>
            <div className="h-[1px] w-24 bg-gray-400"></div>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight font-serif text-white leading-[1.1]">
            Discover Art of
            <br />
            Perfect Coffee.
          </h2>

          <p className="text-sm md:text-base lg:text-lg leading-relaxed max-w-xl text-gray-200 font-light font-sans mt-2">
            Experience the difference as we meticulously select and roast the finest
            beans to create a truly unforgettable cup of coffee. Join us on a journey of
            taste and awaken your senses, one sip at a time.
          </p>

          <div className="flex flex-wrap items-center gap-2 sm:gap-2 mt-2 md:mt-4">
            <button
              onClick={() => navigate("/menu")}
              className="px-6 sm:px-8 py-3 bg-[#e09825] hover:bg-[#c68520] rounded-full text-white font-medium text-sm transition-all duration-300 shadow-lg shadow-black/20"
            >
              Order Now
            </button>
            <span className="text-white text-sm sm:text-md md:text-xl font-dancing font-light tracking-wider">
              Coffee
            </span>
          </div>

          {/* Stats Section - inside the same container for alignment */}
          <div className="flex flex-wrap items-center gap-6 sm:gap-8 md:gap-12 mt-6 md:mt-10">
            <div className="flex flex-col gap-1">
              <span className="text-3xl sm:text-4xl md:text-5xl font-serif text-white">50+</span>
              <span className="text-xs sm:text-sm text-gray-300 font-sans tracking-wide">Item Of Coffee</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-3xl sm:text-4xl md:text-5xl font-serif text-white">25+</span>
              <span className="text-xs sm:text-sm text-gray-300 font-sans tracking-wide">Order Running</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-3xl sm:text-4xl md:text-5xl font-serif text-white">100+</span>
              <span className="text-xs sm:text-sm text-gray-300 font-sans tracking-wide">Happy Costumers</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
