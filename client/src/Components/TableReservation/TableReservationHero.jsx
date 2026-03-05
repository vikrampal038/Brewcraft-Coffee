import React, { useState } from "react";
import { FaCalendarAlt } from "react-icons/fa";
import { MdOutlineWindow, MdOutlineOutdoorGrill } from "react-icons/md";
import { GrLounge } from "react-icons/gr";
import { Calendar } from "../../Common/Calendar";

const TableReservationHero = () => {
  const [activeSeat, setActiveSeat] = useState("window");

  const baseClass =
    "flex flex-col items-center justify-center gap-2 py-4 rounded-xl border-2 transition-all duration-300 w-full cursor-pointer";

  const activeClass = "border-[#D46c11] text-[#D46c11] bg-white shadow-sm";

  const normalClass =
    "border-transparent bg-[#F9F7F2]/80 text-[#181411]/60 hover:bg-[#F9F7F2] hover:text-[#181411]/90";

  return (
    <section className="bg-[#F9F7F2] py-16 px-4 sm:px-6 lg:px-8 font-sans min-h-screen flex items-center mt-12">
      <div className="main w-full mx-auto">
        {/* Heading Part */}
        <div className="flex flex-col items-center justify-center gap-4 mb-12">
          <h1 className="text-[#181411] font-bold text-4xl md:text-5xl text-center tracking-tight font-serif">
            Reserve Your Experience
          </h1>
          <p className="text-[#181411]/70 md:text-[17px] text-medium max-w-2xl text-center leading-relaxed">
            Secure your spot in our artisanal lounge. Whether it's a quiet
            morning brew or an afternoon gathering, we curate the perfect
            atmosphere for your visit.
          </p>
        </div>

        {/* Main Section */}
        <div className="bg-white rounded-4xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] overflow-hidden flex flex-col md:flex-row border border-[#e6e0db] w-full">
          {/* Left Side: Date Picker */}
          <div className="flex-1 p-6 sm:p-8 md:p-12 border-b md:border-b-0 md:border-r border-[#e6e0db] bg-white md:max-w-[45%]">
            <div className="flex justify-between items-center mb-8 w-full">
              <h2 className="text-xl font-bold text-[#181411] font-serif">
                1. Select Date
              </h2>
              <FaCalendarAlt className="text-[#D46c11] text-xl" />
            </div>

            <div className="flex justify-center md:justify-start w-full">
              <Calendar />
            </div>
          </div>

          {/* Right Side: Booking Details */}
          <div className="flex-[1.2] p-6 sm:p-8 md:p-12 space-y-8 bg-white">
            <h2 className="text-xl font-bold text-[#181411] font-serif">
              2. Booking Details
            </h2>

            {/* Date and Time */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 w-full">
              {/* Select Time */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="time"
                  className="text-[13px] font-bold text-[#181411]/90 tracking-wide"
                >
                  Select Time
                </label>
                <div className="relative">
                  <select
                    id="time"
                    name="time"
                    defaultValue="10:00 AM"
                    className="w-full appearance-none bg-white border border-[#e6e0db] rounded-[10px] px-4 py-3.5 text-[#181411] text-[15px] hover:border-[#D46c11]/40 focus:outline-none focus:ring-2 focus:ring-[#D46c11]/20 focus:border-[#D46c11] transition-all cursor-pointer"
                  >
                    <option>09:00 AM</option>
                    <option>10:00 AM</option>
                    <option>12:30 PM</option>
                    <option>01:00 PM</option>
                    <option>03:30 PM</option>
                    <option>05:00 PM</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-[#181411]/40">
                    <svg
                      className="fill-current h-4 w-4 shadow-sm"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Number of Guests */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="guest"
                  className="text-[13px] font-bold text-[#181411]/90 tracking-wide"
                >
                  Number of Guests
                </label>
                <div className="relative">
                  <select
                    id="guest"
                    name="guest"
                    defaultValue="2 Guests"
                    className="w-full appearance-none bg-white border border-[#e6e0db] rounded-[10px] px-4 py-3.5 text-[#181411] text-[15px] hover:border-[#D46c11]/40 focus:outline-none focus:ring-2 focus:ring-[#D46c11]/20 focus:border-[#D46c11] transition-all cursor-pointer"
                  >
                    <option>1 Guest</option>
                    <option>2 Guests</option>
                    <option>3 Guests</option>
                    <option>4 Guests</option>
                    <option>5 Guests</option>
                    <option>6+ Guests</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-[#181411]/40">
                    <svg
                      className="fill-current h-4 w-4 shadow-sm"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* SEATING PREFERENCES */}
            <div className="flex flex-col gap-3">
              <label className="text-[13px] font-bold text-[#181411]/90 tracking-wide">
                Seating Preference
              </label>
              <div className="grid grid-cols-3 gap-3">
                {/* Window */}
                <button
                  type="button"
                  onClick={() => setActiveSeat("window")}
                  className={`${baseClass} ${
                    activeSeat === "window" ? activeClass : normalClass
                  }`}
                >
                  <MdOutlineWindow className="text-[24px] mb-0.5" />
                  <span className="text-[11px] font-bold uppercase tracking-widest mt-0.5">
                    Window
                  </span>
                </button>

                {/* Lounge */}
                <button
                  type="button"
                  onClick={() => setActiveSeat("lounge")}
                  className={`${baseClass} ${
                    activeSeat === "lounge" ? activeClass : normalClass
                  }`}
                >
                  <GrLounge className="text-[24px] mb-0.5" />
                  <span className="text-[11px] font-bold uppercase tracking-widest mt-0.5">
                    Lounge
                  </span>
                </button>

                {/* Outdoor */}
                <button
                  type="button"
                  onClick={() => setActiveSeat("outdoor")}
                  className={`${baseClass} ${
                    activeSeat === "outdoor" ? activeClass : normalClass
                  }`}
                >
                  <MdOutlineOutdoorGrill className="text-[24px] mb-0.5" />
                  <span className="text-[11px] font-bold uppercase tracking-widest mt-0.5">
                    Outdoor
                  </span>
                </button>
              </div>
            </div>

            {/* SPECIAL REQUESTS */}
            <div className="flex flex-col gap-2">
              <label className="text-[13px] font-bold text-[#181411]/90 tracking-wide">
                Special Requests or Occasion
              </label>
              <textarea
                className="w-full bg-white border border-[#e6e0db] rounded-[10px] px-4 py-3.5 text-[#181411] text-[15px] placeholder:text-[#181411]/40 focus:outline-none focus:ring-2 focus:ring-[#D46c11]/20 focus:border-[#D46c11] transition-all resize-none hover:border-[#D46c11]/40"
                placeholder="Birthday, Anniversary, or specific dietary notes..."
                rows="3"
              ></textarea>
            </div>

            {/* SUBMIT ACTION */}
            <div className="pt-2 flex flex-col items-center gap-4">
              <button className="w-full bg-[#D46c11] hover:bg-[#c26210] text-white font-bold py-4 rounded-[10px] text-[16px] shadow-[0_4px_14px_0_rgba(212,108,17,0.39)] transition-all transform active:scale-[0.98]">
                Reserve Now
              </button>
              <p className="text-[12px] text-[#181411]/50 text-center leading-relaxed">
                A confirmation email will be sent to your registered account.
                <br />
                Cancellations must be made 24 hours in advance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TableReservationHero;
