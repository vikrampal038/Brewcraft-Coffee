import React from "react";
import ContactAdd from "../Components/Contact/ContactAdd";
import ContactHero from "../Components/Contact/contactHero";

const Contact = () => {
  return (
    <div className="w-full">
      <ContactHero />
      <ContactAdd />
    </div>
  );
};

export default Contact;
