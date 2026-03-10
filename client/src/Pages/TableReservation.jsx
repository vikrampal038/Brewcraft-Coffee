import React from "react";
import TableReservationHero from "../Components/TableReservation/TableReservationHero";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const TableReservation = () => {
  return (
    <div className="w-full">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={fadeInUp}>
        <TableReservationHero />
      </motion.div>
    </div>
  );
};

export default TableReservation;
