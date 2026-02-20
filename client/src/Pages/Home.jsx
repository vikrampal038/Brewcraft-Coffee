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
        style={{ backgroundImage: "url('/src/Assets/cafeInterrior.jpg')" }}
      >
        {/* overlay */}
        <div className="absolute inset-0 bg-[#3D2B1F]/65"></div>

        {/* content */}
        <div className="relative z-10">
          <Reserve />
        </div>
        <div className="border-2 cart-shadow cart hidden lg:block border-[#8B5E3C] absolute right-10 top-10  bg-[#c6905d7e] rounded-[50%]">
          <img
            alt="logoImage"
            src="/public/BrewCoffee.png"
            className="h-25 w-25 rounded-full shadow-2xs object-cover"
          />
        </div>
      </section>
      <section className="bg-[#F9F7F2]">
        <Touch />
      </section>
    </div>
  );
};

export default Home;
