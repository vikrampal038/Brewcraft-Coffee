import React from "react";
import { PremiumData } from "../../Data/HomeData";

const Primium = () => {
  return (
    <section className="flex justify-center items-center ">
      <div className="main">
        {/* Heading Part */}
        <div className="flex flex-col justify-items-center">
          <h1 className="subHeading text-[#8B5E3C] font-sans text-center ">The Premium Difference</h1>
          <h2 className="mainHeading text-center font-serif ">The Premium Experience</h2>
        </div>

        {/* Maine Contain */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-12 w-full">
          {PremiumData.map((item, index) => {
            const Icon = item.icons;

            return (
              <div
                key={index}
                className="p-2 lg:p-4 xl:p-8 bg-white flex flex-col justify-center items-center gap-3 xl:gap-6 rounded-2xl shadow-sm border-soft-brown/10 transition-transform hover:translate-y-2"
              >
                <div className="w-16 h-16 bg-[#FDFCF8] rounded-full flex items-center justify-center mx-auto">
                  <Icon className="text-[#8B5E3C] text-3xl" />
                </div>

                <div className="flex flex-col items-center gap-4 text-center">
                  <h3 className="title text-[20px] font-serif text-center">{item.title}</h3>
                  <p className="paragraph font-sans  text-center">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Primium;
