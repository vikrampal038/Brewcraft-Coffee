import React from "react";
import { motion } from "framer-motion";
import leader1 from "../../../Assets/about_leader_1.png";
import leader2 from "../../../Assets/about_leader_2.png";
import leader3 from "../../../Assets/about_leader_3.png";

const LeaderCard = ({ image, name, role, delay, children }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, delay }}
        className="flex flex-col items-center space-y-6 group"
    >
        <div className="w-56 h-56 md:w-64 md:h-64 rounded-full overflow-hidden shadow-xl ring-4 ring-transparent group-hover:ring-[#d97736]/30 transition-all duration-500 bg-[#1a1a1a] flex items-center justify-center relative">
            {image ? (
                <img
                    src={image}
                    alt={name}
                    className="w-full h-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-105"
                />
            ) : (
                children
            )}
        </div>
        <div className="text-center space-y-1">
            <h3 className="text-lg font-bold text-[#1a1a1a]">{name}</h3>
            <p className="text-[#d97736] text-xs font-extrabold uppercase tracking-widest">
                {role}
            </p>
        </div>
    </motion.div>
);

const AboutLeadership = () => {
    return (
        <section className="bg-[#f9f9f9] py-24 w-full">
            <div className="container mx-auto px-6 md:px-12 flex flex-col space-y-16">

                {/* Header Area */}
                <div className="flex flex-col md:flex-row justify-between items-end border-b border-gray-200 pb-8 space-y-6 md:space-y-0">
                    <div className="space-y-4 max-w-lg">
                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-[#d97736] tracking-[0.2em] text-xs font-bold uppercase hover:text-[#c4652c] transition-colors"
                        >
                            Leadership
                        </motion.p>
                        <motion.h2
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-5xl font-black text-[#1a1a1a] tracking-tight"
                        >
                            Guided by Expertise
                        </motion.h2>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="max-w-xs text-gray-500 font-medium text-sm leading-relaxed text-left md:text-right"
                    >
                        <p>
                            Meet the specialists who ensure every bag of Premium Co. coffee lives up to our exacting standards.
                        </p>
                    </motion.div>
                </div>

                {/* Team Grid */}
                <div className="flex flex-wrap justify-center gap-8 md:gap-12 lg:gap-16">
                    <LeaderCard
                        image={leader1}
                        name="Marcus Thorne"
                        role="Master Roaster"
                        delay={0.1}
                    />
                    <LeaderCard
                        image={leader2}
                        name="Elena Rodriguez"
                        role="Sourcing Lead"
                        delay={0.2}
                    />
                    <LeaderCard
                        image={leader3}
                        name="Julian Vane"
                        role="Head Barista"
                        delay={0.3}
                    />
                    <LeaderCard
                        name="Sarah Chen"
                        role="Quality Control"
                        delay={0.4}
                    >
                        <div className="text-white flex flex-col items-center justify-center p-4 transform transition-transform duration-500 group-hover:scale-110">
                            <span className="text-5xl md:text-6xl font-black tracking-tighter">QC<span className="text-2xl font-light ml-1">LEAD</span></span>
                            <span className="text-[10px] uppercase tracking-[0.3em] font-medium mt-2 opacity-80 border-t border-white/30 pt-2">No Compromises</span>
                        </div>
                    </LeaderCard>
                </div>

            </div>
        </section>
    );
};

export default AboutLeadership;
