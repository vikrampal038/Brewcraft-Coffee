import React from "react";
import HomeHero from "../Components/Home/HomeHero";
import Premium from "../Components/Home/Premium";
import Reserve from "../Components/Home/Reserve";
import Roster from "../Components/Home/Roster";
import SingleOrigin from "../Components/Home/SingleOrigin";
import Touch from "../Components/Home/Touch";

const Home = () => {
  return (
    <div className="w-full">
      <section
        className="routemein relative bg-cover bg-center bg-fixed flex items-start justify-start "
        style={{ backgroundImage: "url('/src/Assets/HeroSectionImg.png')" }}
      >
        {/* content */}
        <div className="relative z-10 items-start">
          <HomeHero />
        </div>
      </section>

      <section className=" bg-[#FDFCF8]">
        <SingleOrigin />
      </section>
      <section className=" bg-[#F9F7F2]">
        <Premium />
      </section>
      <section className=" bg-[#FDFCF8]">
        <Roster />
      </section>
      <section
        className="routemein h-260  sm:h-190 lg:h-200 relative bg-cover bg-center bg-fixed"
        // style={{ backgroundImage: "url('/src/Assets/cafeInterrior.jpg')" }}
        style={{ backgroundImage: "url('/src/Assets/reservationbgImg.jpg')" }}
      >
        {/* overlay */}
        <div className="absolute inset-0   bg-[#3D2B1F]/75"></div>

        {/* content */}
        <div className="relative z-10">
          <Reserve />
        </div>
      </section>
      <section className="bg-[#F9F7F2]">
        <Touch />
      </section>
    </div>
  );
};

export default Home;
