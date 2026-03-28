import React from "react";
import HomeHero from "../../Components/User/Home/HomeHero";
import Premium from "../../Components/User/Home/Premium";
import Reserve from "../../Components/User/Home/Reserve";
import Roster from "../../Components/User/Home/Roster";
import CoffeeFeatures from "../../Components/User/Home/CoffeeFeatures";
import PerfectCupCta from "../../Components/User/Home/PerfectCupCta";
import SingleOrigin from "../../Components/User/Home/SingleOrigin";
import Touch from "../../Components/User/Home/Touch";
import { motion } from "framer-motion";   

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const Home = () => {
  return (
    <div className="w-full">
      <HomeHero />
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={fadeInUp}>
        <SingleOrigin />
      </motion.div>
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={fadeInUp}>
        <Premium />
      </motion.div>
  
      <CoffeeFeatures />
      
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={fadeInUp}>
        <Roster />
      </motion.div>
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={fadeInUp}>
        <Reserve />
      </motion.div>
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={fadeInUp}>
        <PerfectCupCta />
      </motion.div>
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={fadeInUp}>
        <Touch />
      </motion.div>
    </div>
  );
};

export default Home;
