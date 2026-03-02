import React from "react";
import ContactAdd from "../Components/Contact/ContactAdd";
import ContactHero from "../Components/Contact/ContactHero";

const Contact = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center bg-[#F9F7F2]">
      <ContactHero />
      <div className="cart-shadow main border-b border-[#e6e0db] rounded-xl"></div>
      <ContactAdd />
    </div>
  );
};

export default Contact;
