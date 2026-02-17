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
            <h1 className="subHeading text-[#8B5E3C]">The Roaster's Choice</h1>
          </div>
          {/* subHeading and Button part */}
          <div className="w-full flex justify-between items-center">
            <h2 className="mainHeading font-sans w-1/2 ">Signature Coffees</h2>
            <a
              href="#"
              className=" px-6 py-3 border rounded-full bg-transparent border-[#8B5E3C] text-[#8B5E3C] font-bold hover:bg-[#8B5E3C] hover:text-white transition-all duration-700 ease-in-out "
            >
              View Full Menu
            </a>
          </div>
        </div>

        {/* Maine Contain */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-center items-center gap-8 w-full">
          {RosterData.map((item, index) => {
            return (
              <div key={index} className="group">
                <div className="relative aspect-4/5 mb-6 overflow-hidden rounded-2xl bg-gray-100 p-1">
                  <img
                    alt={item.title}
                    src={item.Image}
                    className="w-full h-full object-cover transition-transform
              duration-700 group:hover:scale-110 rounded-xl"
                  ></img>
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors"></div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-deep-coffee">
                      {item.subtitle}
                    </span>
                  </div>
                  <button className="absolute bottom-4 left-4 right-4 bg-white py-3 rounded-xl font-bold text-sm translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 hover:bg-[#8B5E3C] hover:text-white">
                    Add to Cart
                  </button>
                </div>
                <div className="flex flex-col justify-items-start gap-2">
                  <h3 className="title">{item.title}</h3>
                  <p className="paragraph">{item.description}</p>
                  <p className="font-bold text-[#8B5E3C]">{item.price}</p>
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
