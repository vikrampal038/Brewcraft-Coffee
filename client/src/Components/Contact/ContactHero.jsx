import React from "react";

const contactHero = () => {
  return (
    <section className="routemein bg-[#F9F7F2] border mb-1 mt-16">
      <div className="main">
        {/* Heading Part */}
        <div className="flex flex-col justify-items-center gap-4">
          <h1 className="mainHeading text-[#181411] font-serif text-4xl lg:text-6xl text-center ">
            Get in Touch
          </h1>
          <p className="paregraph text-[#181411]/70 text-lg lg:text-xl max-w-2xl text-center ">
            We'd love to hear from you. Visit our flagship roastery or drop us a
            line below for inquiries about subscriptions or wholesale.
          </p>
        </div>
        <div className='border w-full p-1 grid grid-cols-1 lg:grid-cols-2 items-center gap-12'>
          <div className='flex flex-col p-8 rounded-lg border border-[#e6e0db] shadow-md w-full bg-white '>
            <div className='w-full flex cursor-pointer items-center justify-center rounded-full px-4 h-14 bg-[#8B5E3C] text-white text-lg font-bold leading-normal 
            tracking-wider hover:brightness-110 transition-all font-sans'>
              Send Message</div>
          </div>
          <div className='order-2 border w-full'>Map</div>
        </div>
      </div>
    </section>
  );
};

export default contactHero;
