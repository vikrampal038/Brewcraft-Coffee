import React from "react";
import ContactAdd from "../../Components/User/Contact/ContactAdd";
import ContactHero from "../../Components/User/Contact/ContactHero";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const Contact = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center bg-[#F9F7F2]">
      <motion.div className="w-full" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={fadeInUp}>
        <ContactHero />
      </motion.div>
      <motion.div className="cart-shadow main border-b border-[#e6e0db] rounded-xl" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}></motion.div>
      <motion.div className="w-full" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={fadeInUp}>
        <ContactAdd />
      </motion.div>
    </div>
  );
};

export default Contact;
