import React from "react";
import { TbArrowMoveRightFilled } from "react-icons/tb";

const HomeHero = () => {
  return (
    <section className="routemein relative md:h-screen overflow-hidden">
      {/* bgImge code */}
      <div className="absolute inset-0 z-0">
        <img
          alt="Brewcrafe-coffee Image"
          className="h-full w-full object-cover brightness-65"
          src="/src/Assets/HeroSectionImg.png"
        />
      </div>

      <div className="main relative z-10 w-full text-white flex items-start">
        <div className="max-w-2xl flex  flex-col  gap-8">
          <h1 className="subHeading font-sans inline-block w-fit text-white bg-[#8B5E3C]/30 backdrop:blur-md border border-white/20 rounded-full px-4 py-1">
            Exquisite Blends
          </h1>

          <h2 className="mainHeading text-6xl md:text-8xl tracking-wider font-serif text-white">
            Crafted Coffee,
            <br />
            <span className="italic font-medium text-[#C68F5D] font-serif">
              Pure Comfort
            </span>
          </h2>
          <p className="text-lg md:text-xl leading-8 max-w-lg text-[#FDFCF8]/90 font-normal">
            Experience the zenith of roasting craftsmanship. From ethically
            sourced beans to your favorite corner table.
          </p>
        </div>
        <div className="flex flex-wrap gap-4">
          <a
            href="#"
            className="px-10 py-4 bg-[#8B5E3C] hover:bg-[#C68F5D] rounded-full flex text-white font-bold transition-all duration-700 items-center gap-2 shadow-lg shadow-black/20"
          >
            Explore Menu <TbArrowMoveRightFilled className="text-[22px]" />
          </a>
          <a
            href="#"
            className="px-10 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 rounded-full text-white font-bold transition-all duration-700"
          >
            Reserve a Table
          </a>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
