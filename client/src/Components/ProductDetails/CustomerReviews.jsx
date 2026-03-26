import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const CustomerReviews = () => {
    const bars = [
        { stars: 5, percentage: 82 },
        { stars: 4, percentage: 12 },
        { stars: 3, percentage: 4 },
        { stars: 2, percentage: 1 },
        { stars: 1, percentage: 1 },
    ];

    return (
        <div className="w-full bg-[#FAFAFA] border-t border-b border-[#EAEAEA] py-24 mt-10">
            <div className="max-w-7xl mx-auto px-5 sm:px-10 lg:px-20">

                <h2 className="text-[28px] font-extrabold text-[#0A0A0A] mb-12 border-b border-[#EAEAEA] pb-5">
                    Customer Reviews
                </h2>

                <div className="flex flex-col md:flex-row gap-16 md:gap-24 items-start">

                    {/* Left: Score Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-col w-full md:w-auto min-w-[200px]"
                    >
                        <div className="text-[85px] font-black text-[#0A0A0A] leading-none mb-3">4.8</div>
                        <div className="flex items-center gap-1.5 mb-4">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <Star key={star} size={20} className="fill-[#D46C11] text-[#D46C11]" />
                            ))}
                        </div>
                        <p className="text-[14px] text-[#7A7A7A] font-medium tracking-wide">
                            124 reviews from verified buyers
                        </p>
                    </motion.div>

                    {/* Right: Review Bars */}
                    <div className="flex-grow w-full space-y-4">
                        {bars.map((bar, index) => (
                            <motion.div
                                key={bar.stars}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                className="flex items-center gap-4"
                            >
                                <div className="font-bold text-[#0A0A0A] text-[15px] w-3">{bar.stars}</div>

                                {/* Visual Bar */}
                                <div className="flex-grow h-[6px] bg-[#E8E4E0] rounded-full overflow-hidden flex items-center">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: `${bar.percentage}%` }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 1, delay: 0.2 + (index * 0.1), ease: "easeOut" }}
                                        className={`h-full rounded-full ${bar.stars >= 4 ? 'bg-[#D46C11]' : 'bg-[#D46C11]'}`}
                                    />
                                </div>

                                <div className="text-[13px] font-bold text-[#7A7A7A] w-10 text-right">
                                    {bar.percentage}%
                                </div>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </div>
        </div>
    );
};

export default CustomerReviews;
