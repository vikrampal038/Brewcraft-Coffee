import React from "react";
import { RosterData } from "../../Data/HomeData";

const Roster = () => {
  return (
    <section className="flex justify-center items-center ">
      <div className="main">
        {/* Heading Part */}
        <div className="flex flex-col  justify-center items-start w-full">
          {/* Maine Heading part */}
          <div className=" w-full">
            <h1 className="subHeading text-[#8B5E3C] font-sans">The Roaster's Choice</h1>
          </div>
          {/* subHeading and Button part */}
          <div className="w-full flex flex-col sm:flex-row items-end-safe sm:justify-between sm:items-center gap-3">
            <h2 className="mainHeading w-full sm:w-1/2 font-serif">Signature Coffees</h2>
            <a
              href="#"
              className="px-4 py-1.5 xl:px-6 xl:py-3 border rounded-full bg-transparent border-[#8B5E3C] text-[#8B5E3C] font-bold hover:bg-[#8B5E3C] text-end hover:text-white transition-all duration-700 ease-in-out ">
              View Full Menu
            </a>
          </div>
        </div>

        {/* Maine Contain */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-center items-center gap-8 w-full">
          {RosterData.map((item, index) => {
            return (
              <div key={index} className="group">
                <div className="relative aspect-4/5 mb-4 overflow-hidden rounded-2xl bg-gray-100">
                  <img
                    alt={item.title}
                    src={item.Image}
                    className="w-full h-full object-cover transition-transform duration-700 group:hover:scale-110 rounded-xl"
                  ></img>
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors"></div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 text-[#3D2B1F] px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-deep-coffee">
                      {item.subtitle}
                    </span>
                  </div>
                  <button className="absolute bottom-4 left-4 right-4 bg-white py-3 rounded-xl font-bold text-sm translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 hover:bg-[#8B5E3C] hover:text-white">
                    Add to Cart
                  </button>
                </div>

                <div className="flex flex-col justify-center items:center xl:items-start">
                  <h3 className="title font-serif">{item.title}</h3>
                  <p className="paragraph font-sans">{item.description}</p>
                  <p className="font-bold font-sans text-[#8B5E3C] text-center lg:text-start text-[16px]">{item.price}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Roster;
