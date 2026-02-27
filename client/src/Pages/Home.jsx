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
      <HomeHero />
      <SingleOrigin />
      <Premium />
      <Roster />
      <Reserve />
      <Touch />
    </div>
  );
};

export default Home;
