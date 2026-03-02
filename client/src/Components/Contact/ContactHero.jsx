import React from "react";
import { FaLocationDot } from "react-icons/fa6";

const contactHero = () => {
  return (
    <section className="routemein bg-[#F9F7F2]">
      <div className="main">
        {/* Heading Part */}
        <div className="flex flex-col justify-center items-center gap-4">
          <h1 className="mainHeading text-[#181411] font-serif text-4xl lg:text-6xl text-center ">
            Get in Touch
          </h1>
          <p className="paregraph text-[#181411]/70 text-lg lg:text-xl max-w-2xl text-center ">
            We'd love to hear from you. Visit our flagship roastery or drop us a
            line below for inquiries about subscriptions or wholesale.
          </p>
        </div>

        {/* main section start Here */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
          <div className="flex flex-col gap-6 p-8 rounded-lg border border-[#e6e0db] shadow-md w-full bg-white">
            {/* contact Form Section */}
            <div className="flex flex-col gap-4 w-full">
              {/* For Name */}
              <div className="flex flex-col w-full gap-2">
                <label htmlFor="name" className="contactLabel">
                  Full Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  className="form-input contactInput"
                  placeholder="Your Name"
                />
              </div>
              {/* For Email */}
              <div className="flex flex-col w-full gap-2">
                <label htmlFor="email" className="contactLabel">
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="form-input contactInput"
                  placeholder="example@example.com"
                />
              </div>
              {/* For Subject */}
              <div className="flex flex-col w-full gap-2">
                <label htmlFor="subject" className="contactLabel">
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  className="form-select contactInput">
                    <option>Select</option>
                    <option>General Inquiry</option>
                    <option>Wholesale Partnerships</option>
                    <option>Subscription Support</option>
                    <option>Careers</option>
                  </select>
              </div>
              {/* For Message */}
              <div className="flex flex-col w-full gap-2">
                <label htmlFor="message" className="contactLabel">
                  Full Name
                </label>
                <textarea
                  id="message"
                  name="message"
                  type="text"
                  className="form-textarea contactInput"
                  placeholder="How can we help you?"
                  rows="4"
                />
              </div>
            </div>

            {/* button code */}
            <button
              className="w-full flex cursor-pointer items-center justify-center rounded-full h-10 lg:px-4  lg:h-14 bg-[#D46c11] text-white text-lg font-bold leading-normal 
            tracking-wider hover:brightness-110 transition-all font-sans"
            >
              Send Message
            </button>
          </div>

          {/* Map Section */}
          <div className="h-full min-h-[500px] w-full rounded-xl overflow-hidden border-[#e6e0db] dark:border-white/10 relative group ">
            <img
              alt="stylized map showing location"
              className="absolute inset-0 w-full h-full object-cover brightness-95 contrast-75 group-hover:scale-3d transition-transform duration-700"
              src="/src/Assets/contactImg.png"
            />
            <div className="absolute inset-0 bg-[#D46c11]/10 mix-blend-multiply"></div>
            <div className="absolute bottom-6 right-6 left-6 bg-white p-6 rounded-lg shadow-lg border border-[#e6e0db] dark:border-white/10">
              <div className="flex items-start gap-4">
                <FaLocationDot className="text-[#D46c11] text-3xl" />
                <div className="flex flex-col gap-1">
                  <h4 className="title font-serif text-xl font-bold text-start">
                    Our Roastery
                  </h4>
                  <p className="paragraph w-full text-start">
                    123 Artisan Way, Roaster’s District <br />
                    Seattle, WA 98191
                  </p>
                  <a
                    className="inline-block mb-3 text-[#D46c11] text-sm font-bold hover:underline"
                    href="#"
                  >
                    Get Directions
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default contactHero;
