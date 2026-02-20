import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { BsFillClockFill } from "react-icons/bs";

const Touch = () => {
  return (
    <section className="routemein ">
      <div className="main">
        <div className="flex flex-col lg:flex-row justify-center items-start gap-14 w-full">
          <div className="flex flex-col items-start gap-8 w-full">
            <div className="flex flex-col gap-1">
              <h1 className="subHeading font-sans">Get In Touch</h1>
              <h2 className="mainHeading font-serif">Visit Us</h2>
            </div>

            <div className="grid grid-cols-1 gap-8 w-full">
              {/* contact-1 */}
              <div className="flex  gap-8">
                <div className="h-10 w-10 bg-white flex items-center justify-center rounded-full">
                  <FaLocationDot className="text-lg text-[#8B5E3C]" />
                </div>
                <div className="space-y-2">
                  <h2 className="title text-start  font-serif">
                    Flagship Roastery
                  </h2>
                  <div className="flex flex-col">
                    <p className="paragraph text-start  font-sana w-60">
                      123 Brew Street, Portland, OR 97201.
                    </p>
                    <p className="paragraph text-start text-[#8B5E3C] font-semibold  font-sana w-60">
                      +1 (503) 555-0123
                    </p>
                  </div>
                </div>
              </div>

              {/* contact-2 */}
              <div className="flex  gap-8">
                <div className="h-10 w-10 bg-white flex items-center justify-center rounded-full">
                  <BsFillClockFill className="text-lg text-[#8B5E3C]" />
                </div>
                <div className="space-y-2">
                  <h2 className="title text-start  font-serif">
                    Hours of Service
                  </h2>
                  <div className="flex flex-col">
                    <p className="paragraph text-start  font-sana w-60">
                      Mon-Fri: 6am - 8pm
                    </p>
                    <p className="paragraph text-start  font-sana w-60">
                      Sat-Sun: 7am - 9pm
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4 border-t border-[#A68966]/20 w-full">
              <h3 className="subHeading uppercase text-[#A68966] text-[14px] tracking-widest font-serif pt-5">Roaster's Newsletter</h3>
              <div className="flex gap-4">
                <input className="w-full bg-white rounded-lg border border-[#A68966]/10 px-4 py-2 focus:ring-1 focus:ring-[#8B5E3C] flex-1 focus:border-[#8B5E3C] text-sm outline-none transition-all; text-black" type="email" name="email" id="email" placeholder="your@email.com"/>
                <button className="text-white px-6 py-2 rounded-lg text-sm font-bold bg-[#3D2B1F] hover:bg-[#8B5E3C] transition-color">join</button>
              </div>
            </div>
          </div>

          {/* Image Part */}
          {/* <div className="w-full">
            <img
              src="/public/BrandName.jpg"
              alt="singleOrigin Image"
              className="h-150 w-full"
            />
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Touch;
