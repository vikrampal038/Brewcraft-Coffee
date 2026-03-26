import React from "react";
import { motion } from "framer-motion";
import philosophyImg from "../../Assets/about_philosophy.png";

const AboutPhilosophy = () => {
    return (
        <section className="bg-[#f9f9f9] py-24 w-full">
            <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                {/* Left Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col space-y-6 max-w-lg"
                >
                    <p className="text-[#d97736] tracking-[0.2em] text-xs font-bold uppercase">
                        Philosophy
                    </p>
                    <h2 className="text-4xl lg:text-5xl font-black text-[#1a1a1a] leading-tight flex-wrap tracking-tight">
                        The soul of the <br /> bean starts with <br /> the soil.
                    </h2>
                    <div className="space-y-6 text-gray-500 font-medium leading-relaxed">
                        <p>
                            We believe coffee is more than a commodity. It's a complex tapestry of chemistry, culture, and climate. Our philosophy is simple: intervene only as much as necessary to let the bean's origin speak for itself.
                        </p>
                        <p>
                            By bypassing traditional auctions and working directly with estates, we ensure that 100% of our beans are sourced through relationships that prioritize soil health and community longevity.
                        </p>
                    </div>
                </motion.div>

                {/* Right Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="w-full relative rounded-2xl overflow-hidden"
                >
                    <img
                        src={philosophyImg}
                        alt="Hands holding green coffee beans"
                        className="w-full h-auto object-cover rounded-2xl shadow-lg"
                    />
                </motion.div>
            </div>
        </section>
    );
};

export default AboutPhilosophy;
