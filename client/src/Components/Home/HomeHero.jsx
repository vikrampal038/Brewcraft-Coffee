import React from "react";

const HomeHero = () => {
  return (
    <>
      <div className="main h-screen  border border-red-800 p-1">
        <div className="text-center text-2xl font-bold ">
          This is Home Hero Section
        </div>
        <div className="flex justify-center items-center gap-5">
          <button className="submitbtn">Explore Menu ➡</button>
          <button className="clickbtn">Reserve a Table</button>
        </div>
      </div>
    </>
  );
};

export default HomeHero;
