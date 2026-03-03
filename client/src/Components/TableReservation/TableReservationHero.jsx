import React from "react";
import { useState } from "react";
import { FaCalendarAlt } from "react-icons/fa";
import { MdOutlineWindow } from "react-icons/md";
import { GrLounge } from "react-icons/gr";
import { MdOutlineOutdoorGrill } from "react-icons/md";
import { Calendar } from "../ui/calendar";

const TableReservationHero = () => {
  const [activeSeat, setActiveSeat] = useState("window"); // default selected

  const baseClass =
    "flex flex-col items-center justify-center gap-2 p-4 rounded-xl border-2 transition-colors duration-300";

  const activeClass = "border-[#D46c11] bg-[#D46c11]/5 text-[#D46c11]";

  const normalClass =
    "border-transparent bg-[#F9F7F2] text-[#181411] hover:border-[#D46c11]/30";

  return (
    <section className="routemein bg-[#F9F7F2] mt-12">
      <div className="main">
        {/* Heading Part */}
        <div className="flex flex-col justify-center items-center gap-4">
          <h1 className="mainHeading text-[#181411] font-serif text-4xl lg:text-[42px] text-center ">
            Reserve Your Experience
          </h1>
          <p className="paregraph text-[#181411]/70 text-lg lg:text-xl max-w-2xl text-center ">
            Secure your spot in our artisanal lounge. Whether it's a quiet
            morning brew or an afternoon gathering, we curate the perfect
            atmosphere for your visit.
          </p>
        </div>

        {/* main section start Here */}
        <div className=" max-w-[1100px] bg-white rounded-xl shadow-xl border border-[#e6e0db] overflow-hidden flex flex-col lg:flex-row w-full">
          {/* left side date picker */}
          <div className="flex-1 p-8 bg-[#fdfcfb]  border-r border-[#e6e0db]">
            <div className="flex flex-col gap-6">
              {/* heading */}
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-bold text-[#181411] font-serif">
                  1. Select Date
                </h2>
                <FaCalendarAlt className="text-[#D46c11] text-[24px]" />
              </div>
              {/* calendar */}
              <div className="h-full w-full p-8 border">
                <Calendar />
              </div>
            </div>
          </div>

          {/* right side detail & preferences */}
          <div className="flex-[1.5] p-8 space-y-8">
            <h2 className="text-xl font-bold text-[#181411] font-serif">
              2. Booking Details
            </h2>
            {/* date and time  */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* for time */}
              <div className="flex flex-col gap-2 w-full">
                <label htmlFor="time" className="contactLabel w-full">
                  Select Time
                </label>
                <select
                  id="time"
                  name="time"
                  className="custom-select-arrow contactInput w-full"
                >
                  <option>09:00 AM</option>
                  <option selected>10:00 AM</option>
                  <option>12:30 AM</option>
                  <option>01:00 AM</option>
                  <option>03:30 AM</option>
                  <option>05:00 AM</option>
                </select>
              </div>
              <div className="flex flex-col gap-2 w-full">
                <label htmlFor="guests" className="contactLabel w-full">
                  Number of Guests
                </label>
                <select
                  id="guest"
                  name="guest"
                  className="custom-select-arrow contactInput w-full"
                >
                  <option>1 Guests</option>
                  <option selected>2 Guests</option>
                  <option>3 Guests</option>
                  <option>4 Guests</option>
                  <option>5 Guests</option>
                  <option>6+ Guests</option>
                </select>
              </div>
            </div>

            {/* SEATING PREFERENCES */}
            <div className="flex flex-col gap-4">
              <label className="contactLabel w-full">Seating Preference</label>
              <div className="grid grid-cols-3 gap-4">
                {/* Window */}
                <button
                  onClick={() => setActiveSeat("window")}
                  className={`${baseClass} ${
                    activeSeat === "window" ? activeClass : normalClass
                  }`}
                >
                  <MdOutlineWindow className="text-2xl" />
                  <span className="text-xs font-bold uppercase tracking-wider">
                    Window
                  </span>
                </button>

                {/* Lounge */}
                <button
                  onClick={() => setActiveSeat("lounge")}
                  className={`${baseClass} ${
                    activeSeat === "lounge" ? activeClass : normalClass
                  }`}
                >
                  <GrLounge className="text-2xl" />
                  <span className="text-xs font-bold uppercase tracking-wider">
                    Lounge
                  </span>
                </button>

                {/* Outdoor */}
                <button
                  onClick={() => setActiveSeat("outdoor")}
                  className={`${baseClass} ${
                    activeSeat === "outdoor" ? activeClass : normalClass
                  }`}
                >
                  <MdOutlineOutdoorGrill className="text-2xl" />
                  <span className="text-xs font-bold uppercase tracking-wider">
                    Outdoor
                  </span>
                </button>
              </div>
            </div>

            {/* SEATING PREFERENCES */}
            <div className="flex flex-col gap-4">
              <label className="contactLabel w-full">
                Special Requests or Occasion
              </label>
              <textarea
                className="w-full contactInput"
                placeholder="Birthday, Anniversary, or specific dietary notes..."
                rows="3"
              ></textarea>
            </div>

            {/* submit Action */}
            <div className="space-y-4 pt-4">
              <button className="w-full bg-[#D46c11] hover:bg-[#D46c11]/90 text-white font-bold py-4 rounded-xl text-lg shadow-lg shadow-[#D46c11]/20 transition-all active:scale-[0.98]">
                Reserve Now
              </button>
              <p className="text-center text-sm opactity-60 text-[#181411]">
                A confirmation email will be sent to your registered account.{" "}
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
