import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { MdOutlineHandshake } from "react-icons/md";
import { RiPsychotherapyLine } from "react-icons/ri";

const SingleOrigin = () => {
  return (
    <section className="routemein ">
      <div className="main">
        <div className="grid gird-cols-1 lg:grid-cols-2 justify-center items-center gap-14 w-full">
          {/* Image Part */}
          <div className="order-2 lg:order-1 flex flex-col justify-items-center w-full">
              <img src="/public/BrandName.jpg" alt="singleOrigin Image" className="h-150 w-100"/>
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

