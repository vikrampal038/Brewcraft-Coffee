import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { MdOutlineHandshake } from "react-icons/md";
import { RiPsychotherapyLine } from "react-icons/ri";

const SingleOrigin = () => {
  return (
    <section className="routemein bg-[#FDFCF8]">
      <div className="main">
        <div className="grid gird-cols-1 lg:grid-cols-2 justify-center items-center gap-25 w-full">
          {/* Image Part */}
          <div className="order-2 lg:order-1 relative w-full rounded-2xl">
              <img src="/src/Assets/singleOriginImg.jpg" alt="singleOrigin Image" className="h-[512px] w-full rounded-2xl shadow-2xl"/>
              <div className="absolute inset-0 bg-[#C68F5D]/25"></div>
              <div className="absolute bg-white -bottom-8 md:-right-4 lg:-right-12   rounded-2xl p-8 shadow-xl w-95 border border-[#A68966]/10 hidden md:block ">
                <p className="title italic text-[#8B5E3C] font-serif leading-relaxed tracking-wider">"Sustainability is not a choice, it's our core identity."</p>
                <div className="mt-4 flex items-center gap-3">
                  <div className="h-[2px] w-8 bg-[#C68F5D]"></div>
                  <p className="title tracking-widest text-[#3D2B1F] uppercase text-[12px] font-sans">Our Founding Principle</p>
                </div>
              </div>
          </div>

          <div className="order-1 lg:order-2 flex flex-col items-start gap-8 w-full">
            <h1 className="text-4xl md:text-[48px] font-serif font-bold tracking-tight text-[#3D2B1F]">
              The Soul of Every <br />
              <span className="italic text-[#8B5E3C]">Single Origin</span>
            </h1>

            <p className="paragraph text-[#A68966] text-lg max-w-xl text-start">
              Since 1994, we've navigated the globe to find the most exceptional
              cherries. Our philosophy centers on radical transparency and
              micro-batch excellence.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full">
              <div className="space-y-2">
                <RiPsychotherapyLine className="text-3xl text-[#8B5E3C]" />
                <h2 className="title text-start  font-serif">Curated Roast Profiles</h2>
                <p className="paragraph text-start  font-sana w-60">
                  Each bean profile is tested 100+ times before release.
                </p>
              </div>

              <div className="space-y-2">
                <MdOutlineHandshake className="text-3xl text-[#8B5E3C]" />
                <h2 className="title text-start  font-serif">Direct Trade Partners</h2>
                <p className="paragraph text-start  font-sana w-60">
                  Paying 50% above fair-trade standards for quality.
                </p>
              </div>
            </div>

            <button className="subHeading group text-[15px] tracking-wider items-center gap-4 normal-case inline-flex">
              Learn more about our heritage
              <FaArrowRightLong className="transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleOrigin;

