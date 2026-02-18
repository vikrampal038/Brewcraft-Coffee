import React from "react";
// import cafeInterrior from "../../../public/Assets/cafeInterrior.jpg";

const Reserve = () => {
  return (
    <section className="flex justify-center items-center">
      <div className="main flex justify-center items-start">
        {/* Heading section */}
        <div className="flex flex-col justify-center items-start w-full">
          <h1 className="subHeading text-[#C68F5D] font-sans">
            Reserve Your Experience
          </h1>
          <h2 className="mainHeading text-white font-serif xl:text-[48px]">
            Secure Your <span className="text-[#C68F5D]">Quiet Corner</span>
          </h2>
          <p className="paragraph w-1/2 font-sans text-[16px]">
            Whether it's a focused morning session or a slow weekend brunch,
            we'll have your favorite table waiting for you.
          </p>
        </div>
        {/* Form section */}
        <form className="space-y-6 text-white w-200">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* For Date and Time */}
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
              <select
                type="time"
                name="time"
                id="time"
                className="input"
              >
              <option className="bg-[#3D2B1F] pr-1">08:00 Am</option>
              <option className="bg-[#3D2B1F] pr-1">10:00 Am</option>
              <option className="bg-[#3D2B1F] pr-1">01:00 Am</option>
              <option className="bg-[#3D2B1F] pr-1">04:00 Am</option>
              <option className="bg-[#3D2B1F] pr-1">07:00 Am</option>
              </select>
            </div>
          </div>

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
