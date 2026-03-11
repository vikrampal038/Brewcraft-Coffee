import React, { useEffect, useMemo, useState } from "react";
import { RosterData } from "../../Data/HomeData";
import { useNavigate } from "react-router-dom";
import { menuData } from "../../Data/MenuData";
import MenuItemCard from "../Menu/MenuItemCard";
import { categoryId } from "../../utils/categoryId";


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
          </div>
          {/* subHeading and Button part */}
          <div className="w-full flex flex-col sm:flex-row items-end-safe sm:justify-between sm:items-center gap-3">
            <h2 className="mainHeading w-full sm:w-1/2 font-serif">Signature Coffees</h2>
            <div className="flex flex-wrap justify-end gap-3 sm:gap-5 border-b border-[#EAEAEA] pb-2 w-full sm:w-auto">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => scrollToCategory(cat)}
                  className={`text-[12px] xl:text-[13px] font-bold tracking-[0.15em] uppercase transition-colors relative pb-2 ${activeCategory === cat ? "text-[#0A0A0A]" : "text-[#A3A3A3] hover:text-[#0A0A0A]"
                    }`}
                >
                  {cat}
                  {activeCategory === cat && (
                    <span className="absolute bottom-[-2px] left-0 right-0 h-[2px] bg-[#0A0A0A]" />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Category Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-center items-center gap-8 w-full mt-12">
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

        {/* Category Sections (same scroll behavior as Menu page) */}
        <div className="mt-16">
          {menuData.map((sectionData) => (
            <section
              key={sectionData.category}
              id={`home-${categoryId(sectionData.category)}`}
              className="mt-16"
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between border-b border-[#EAEAEA] pb-4 mb-8">
                <h3 className="text-[24px] sm:text-[28px] font-black tracking-tight text-[#0A0A0A] uppercase mb-2 sm:mb-0 leading-none">
                  {sectionData.category}
                </h3>
                <span className="text-[11px] font-bold tracking-[0.15em] text-[#A3A3A3] uppercase">
                  {sectionData.subtitle}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {sectionData.items.slice(0, 3).map((menuItem) => (
                  <MenuItemCard key={menuItem.id} item={menuItem} />
                ))}
              </div>

              <div className="mt-8 flex justify-center">
                <button
                  onClick={() => handleViewMore(sectionData.category)}
                  className="px-6 py-2 border rounded-full bg-transparent border-[#D46c11] text-[#D46c11] font-bold hover:bg-[#D46c11] hover:text-white transition-all duration-700 ease-in-out"
                >
                  View All {sectionData.category}
                </button>
              </div>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Roster;
