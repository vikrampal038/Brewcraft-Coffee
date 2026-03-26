import React from "react";
import { motion } from "framer-motion";
import precisionImg from "../../Assets/about_process_precision.png";
import terroirImg from "../../Assets/about_process_terroir.png";
import extractionImg from "../../Assets/about_process_extraction.png";

const ProcessCard = ({ image, title, description, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, delay }}
        className="flex flex-col space-y-6"
    >
        <div className="w-full relative rounded-[2rem] overflow-hidden aspect-[4/5] shadow-md">
            <img
                src={image}
                alt={title}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
        </div>
        <div className="space-y-3 px-2">
            <h3 className="text-xl font-bold text-[#1a1a1a]">{title}</h3>
            <p className="text-gray-500 font-medium leading-relaxed text-sm">
                {description}
            </p>
        </div>
    </motion.div>
);

const AboutProcess = () => {
    return (
        <section className="bg-white py-24 w-full">
            <div className="container mx-auto px-6 md:px-12 flex flex-col items-center">
                {/* Header */}
                <div className="text-center mb-16 space-y-4">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-[#d97736] tracking-[0.2em] text-xs font-bold uppercase"
                    >
                        Process
                    </motion.p>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-black text-[#1a1a1a] tracking-tight"
                    >
                        The Roasting Ritual
                    </motion.h2>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 w-full max-w-6xl">
                    <ProcessCard
                        image={precisionImg}
                        title="Precision"
                        description="Each batch is monitored by 14 real-time thermal sensors, ensuring the 'Maillard reaction' occurs at the exact millisecond of peak flavor potential."
                        delay={0.2}
                    />
                    <motion.div className="md:mt-16">
                        <ProcessCard
                            image={terroirImg}
                            title="Terroir"
                            description="We roast to highlight the specific minerals of the volcanic soil where our beans were grown, never masking it with excessive char."
                            delay={0.4}
                        />
                    </motion.div>
                    <ProcessCard
                        image={extractionImg}
                        title="Extraction"
                        description="The final step of the journey. Our brewing protocols are calibrated daily to account for humidity and barometric pressure changes."
                        delay={0.6}
                    />
                </div>
            </div>
        </section>
    );
};

export default AboutProcess;
