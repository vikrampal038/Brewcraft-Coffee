import React from "react";
import HomeHero from "../Components/Home/HomeHero";
import Premium from "../Components/Home/Premium";
import Reserve from "../Components/Home/Reserve";
import Roster from "../Components/Home/Roster";
import SingleOrigin from "../Components/Home/SingleOrigin";
import Touch from "../Components/Home/Touch";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const Home = () => {
  return (
    <div className="w-full">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={fadeInUp}>
        <HomeHero />
      </motion.div>
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={fadeInUp}>
        <SingleOrigin />
      </motion.div>
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={fadeInUp}>
        <Premium />
      </motion.div>
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={fadeInUp}>
        <Roster />
      </motion.div>
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={fadeInUp}>
        <Reserve />
      </motion.div>
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={fadeInUp}>
        <Touch />
      </motion.div>
    </div>
  );
};

export default Home;
