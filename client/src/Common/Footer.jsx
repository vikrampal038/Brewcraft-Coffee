import React from "react";
import { MdAdminPanelSettings, MdPublic } from "react-icons/md";
import { FaCamera } from "react-icons/fa";

const Footer = () => {
  return (
    <section className="routemein bg-[#3D2B1F] text-[#FDFCF8] pt-20 pb-10">
      <div className="main w-full gap-16">
        <div className=" w-full px-6 grid grid-cols-1 md:grid-cols-4 gap-12 ">
          <div className="col-span-1 md:col-span-1">
            <img src="/src/Assets/logo1.png" alt="footer logo" className="w-50" />
            <div className="flex flex-col gap-6">
              <p className="text-sm text-[#A68966] leading-relaxed">
                Crafting the world's finest coffee since 1994. Dedicated to
                ethics, precision, and the art of the roast.
              </p>
              <div className="flex gap-4">
                <a
                  className="border size-9 rounded-full border-white/20 flex justify-center items-center hover:bg-[#8B5E3C] transition-colors duration-700"
                  href="#"
                >
                  <MdPublic className="text-lg" />
                </a>
                <a
                  className="border size-9 rounded-full border-white/20 flex justify-center items-center hover:bg-[#8B5E3C] transition-colors duration-700"
                  href="#"
                >
                  <FaCamera className="text-lg" />
                </a>
              </div>
            </div>
          </div>
          {/* for Shops */}
          <div className="flex flex-col justify-start gap-4">
            <h4 className="title text-start text-[#FDFCF8] font-serif tracking-wider">
              Shop
            </h4>
            <ul className="label font-medium capitalize font-sans space-y-4 text-[#A68966]">
              <li>
                <a
                  className=" hover:text-white transition-colors duration-700"
                  href="#"
                >
                  Single Origins
                </a>
              </li>
              <li>
                <a
                  className=" hover:text-white transition-colors duration-700"
                  href="#"
                >
                  House Blends
                </a>
              </li>
              <li>
                <a
                  className=" hover:text-white transition-colors duration-700"
                  href="#"
                >
                  Brewing Kits
                </a>
              </li>
              <li>
                <a
                  className=" hover:text-white transition-colors duration-700"
                  href="#"
                >
                  Subscription
                </a>
              </li>
            </ul>
          </div>

          {/* for companys */}
          <div className="flex flex-col justify-start gap-4">
            <h4 className="title text-start text-[#FDFCF8] font-serif tracking-wider">
              Company
            </h4>
            <ul className="label font-medium capitalize font-sans space-y-4 text-[#A68966]">
              <li>
                <a
                  className=" hover:text-white transition-colors duration-700"
                  href="#"
                >
                  Our Story
                </a>
              </li>
              <li>
                <a
                  className=" hover:text-white transition-colors duration-700"
                  href="#"
                >
                  Sustainability
                </a>
              </li>
              <li>
                <a
                  className=" hover:text-white transition-colors duration-700"
                  href="#"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  className=" hover:text-white transition-colors duration-700"
                  href="#"
                >
                  Wholesale
                </a>
              </li>
            </ul>
          </div>

          {/* for Hours */}
          <div className="flex flex-col justify-start gap-4">
            <h4 className="title text-start text-[#FDFCF8] font-serif tracking-wider">
              Hourse
            </h4>
            <ul className="label font-medium capitalize font-sans space-y-4 text-[#A68966]">
              <li className="flex justify-between md:flex-col lg:flex-row">
                <span>Mon - Fri</span>
                <span>6:00 - 20:00</span>
              </li>
              <li className="flex justify-between md:flex-col lg:flex-row">
                <span>Saturday</span>
                <span>7:00 - 21:00</span>
              </li>
              <li className="flex justify-between md:flex-col lg:flex-row">
                <span>Sunday</span>
                <span>7:00 - 18:00</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 w-full flex flex-col md:flex-row justify-between items-center gap-4 px-8 pt-8">
          <p className="text-sm font-medium font-sans text-[#A68966]">
            © 2024 Premium Coffee Co. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-[#A68966] text-medium">
            <a
              className="hover:text-white transition-colors duration-700"
              href="#"
            >
              Privacy Policy
            </a>
            <a
              className="hover:text-white transition-colors duration-700"
              href="#"
            >
              Terms & Services
            </a>
            <div className="flex items-center gap-1 hover:text-white transition-colors duration-700">
              <MdAdminPanelSettings />
              A justify-startdmin
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
