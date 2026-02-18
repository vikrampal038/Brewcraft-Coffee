import React from "react";
import HomeHero from "../Components/Home/HomeHero";
import Premium from "../Components/Home/Premium";
import Reserve from "../Components/Home/Reserve";
import Roster from "../Components/Home/Roster";
import SingleOrigin from "../Components/Home/SingleOrigin";
import Touch from "../Components/Home/Touch";

const Home = () => {
  return (
    <div className="bg-[#FDFCF8] w-full overflow-x:hidden">
      <section className="routemein" >
        <HomeHero />
      </section>

      <section className="routemein" >
        <SingleOrigin />
      </section>

      <section className="routemein bg-[#F9F7F2]" >
        <Premium />
      </section>

      <section className="routemein" >
        <Roster />
      </section>

      <section className="routemein bg-red-950" >
        <Reserve />
      </section>

      <section className="routemein" >
        <Touch />
      </section>
    </div>
  );
};

export default Home;
