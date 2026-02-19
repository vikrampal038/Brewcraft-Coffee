import React from "react";
import { FaUsers } from "react-icons/fa";
// import cafeInterrior from "../../../public/Assets/cafeInterrior.jpg";

const Reserve = () => {
  return (
    <section className="flex justify-center items-center w-full">
      <div className="main flex justify-center items-start gap-8 w-full border">
        {/* Heading section */}
        <div className="flex flex-col justify-center items-start w-full gap-2 ">
          <h1 className="subHeading text-[#C68F5D] font-sans">
            Reserve Your Experience
          </h1>
          <h2 className="mainHeading text-white font-serif xl:text-[48px]">
            Secure Your <span className="text-[#C68F5D] italic">Quiet Corner</span>
          </h2>
          <p className="paragraph w-full lg:w-1/2 sm:text-start font-sans text-[16px]">
            Whether it's a focused morning session or a slow weekend brunch,
            we'll have your favorite table waiting for you.
          </p>
        </div>
        {/* Form section */}
        <form className="space-y-6 text-white w-200 w-full">
          {/* For Name and Number */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* For Name */}
            <div className="space-y-2  flex flex-col gap-1">
              <label htmlFor="name" className="label">
                Date
              </label>
              <input type="text" name="name" id="name" placeholder="Your Name" className="input" />
            </div>

            {/* For Phone */}
            <div className="space-y-2 flex flex-col gap-1">
              <label htmlFor="phone" className="label">
                Time
              </label>
              <input type="tel" name="phone" id="phone" max="10" min="10" placeholder="Your Phone Number" className="input"/>
            </div>
          </div>

          {/* For Date and Time */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* For date */}
            <div className="space-y-2  flex flex-col gap-1">
              <label htmlFor="date" className="label">
                Date
              </label>
              <input type="date" name="date" id="date" className="input" />
            </div>

            {/* For time */}
            <div className="space-y-2 flex flex-col gap-1">
              <label htmlFor="time" className="label">
                Time
              </label>
              <select type="time" name="time" id="time" className="input">
                <option className="bg-[#3D2B1F] pr-1">08:00 Am</option>
                <option className="bg-[#3D2B1F] pr-1">10:00 Am</option>
                <option className="bg-[#3D2B1F] pr-1">01:00 Am</option>
                <option className="bg-[#3D2B1F] pr-1">04:00 Am</option>
                <option className="bg-[#3D2B1F] pr-1">07:00 Am</option>
              </select>
            </div>
          </div>

          {/* For Number Of Guest */}
          <div className="space-y-2 flex flex-col gap-1">
            <label htmlFor="guest" className="label">
              Number Of Guest
            </label>

            <div
              className="input flex items-center gap-4 rounded-md px-4 py-3 focus-within:border-[#8B5E3C] focus-within:ring-1 focus-within:ring-[#8B5E3C]"
            >
              <FaUsers className="text-gray-500 text-lg" />

              <input
                type="number"
                name="guest"
                id="guest"
                min="1"
                max="10"
                placeholder="Number of Guest"
                className="
        w-full bg-transparent
        outline-none border-none
        focus:outline-none focus:ring-0
      "
              />
            </div>
          </div>

          {/* Submit Button */}
          
          <button type="submit" className="w-full py-4 rounded-lg text-white bg-[#8B5E3C] hover:bg-[#C68F5D] transition-all font-bold shadow-xl shadow-black/40">Confirm Reservation</button>
        </form>
        {/* description section */}
        <p className="paragraph font-sans text-start text-gray-200">
          Reservations are held for 15 minutes past scheduled time. For groups
          over 6, please call us directly.
        </p>
      </div>
    </section>
  );
};

export default Reserve;
