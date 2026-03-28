import React, { useEffect, useMemo, useState } from "react";
import { RosterData } from "../../../Data/HomeData";
import { useNavigate } from "react-router-dom";
import { menuData } from "../../../Data/MenuData";
import MenuItemCard from "../Menu/MenuItemCard";
import { categoryId } from "../../../utils/categoryId";


const Roster = () => {
  const navigate = useNavigate();
  const categories = useMemo(() => menuData.map((d) => d.category), []);
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  const scrollToCategory = (category) => {
    setActiveCategory(category);
    const element = document.getElementById(`home-${categoryId(category)}`);
    if (element) {
      const topOffset = element.getBoundingClientRect().top + window.scrollY - 110;
      window.scrollTo({ top: topOffset, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      let currentActive = activeCategory;
      for (const cat of categories) {
        const el = document.getElementById(`home-${categoryId(cat)}`);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 170 && rect.bottom >= 170) currentActive = cat;
        }
      }
      if (currentActive !== activeCategory) setActiveCategory(currentActive);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeCategory, categories]);

  const handleViewMore = (category) => {
    navigate(`/menu?category=${encodeURIComponent(category)}`);
  };

  return (
    <section className="routemein bg-[#FDFCF8]">
      <div className="main">
        {/* Heading Part */}
        <div className="flex flex-col  justify-center items-start w-full">
          {/* Maine Heading part */}
          <div className=" w-full">
            <h1 className="subHeading text-[#D46c11] font-sans">The Roaster's Choice</h1>
            <h2 className="mainHeading w-full sm:w-1/2 font-serif">Signature Coffees</h2>
          </div>
        </div>

        {/* Category Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-center items-center gap-8 w-full">
          {RosterData.map((item, index) => {
            return (
              <div key={index} className="group" onClick={() => scrollToCategory(item.category)}>
                <div className="relative aspect-4/5 mb-4 overflow-hidden rounded-2xl bg-gray-100">
                  <img
                    alt={item.category}
                    src={item.Image}
                    className="w-full h-full object-cover transition-transform duration-700 group:hover:scale-110 rounded-xl"
                  ></img>
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors"></div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 text-[#3D2B1F] px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-deep-coffee">
                      {item.category}
                    </span>
                  </div>
                  <div className="absolute bottom-3 left-4 right-4 h-[85%] bg-white py-3 rounded-xl font-semibold p-4 text-sm translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 hover:bg-[#ffffff5d] hover:text-black flex flex-col justify-center items-center gap-3 text-center">
                    <span>{item.description}</span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleViewMore(item.category);
                      }}
                      className="mt-2 px-4 py-1.5 bg-white text-[#D46c11] font-bold rounded-full hover:bg-[#D46c11] hover:text-white duration-700 ease-in-out transition-colors"
                    >
                      View More
                    </button>
                  </div >
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
