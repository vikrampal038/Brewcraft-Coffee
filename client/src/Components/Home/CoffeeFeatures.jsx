import React from "react";
import { motion } from "framer-motion";
import coffeeVideo from "../../Assets/coffee.mp4";

const CoffeeFeatures = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.2, duration: 0.8 }
    }
  };

  const textVariantsLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
  };

  const textVariantsRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
  };

  return (
    <section className="relative py-32 px-4 md:px-8 xl:px-16 overflow-hidden min-h-[100vh] flex items-center justify-center">
      
      {/* Torn Edge Effect (Matches Premium background) */}
      <div className="absolute top-0 left-0 w-full z-20">
        <svg 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none" 
          className="w-full h-[60px] sm:h-[80px] md:h-[120px] text-[#EFECE5]" 
          fill="currentColor"
        >
          <path d="M0,0 L0,85.5 L4.5,84.5 L9.5,88.5 L15,86 L23,89.5 L31.5,89.5 L34,80 L39.5,81 L46.5,85.5 L55,83.5 L59.5,76 L66,74 L75,76 L83,72.5 L88,75 L96,80 L102,81.5 L106,75 L116,73 L125,76 L131.5,70 L139.5,73 L144,79.5 L152,78 L159,71 L167,73 L173.5,77.5 L180.5,73 L185,69 L195,65.5 L200,67 L206,62 L212,65.5 L217,66 L226,62 L234,60 L242.5,58.5 L247.5,60.5 L252.5,64.5 L260,67.5 L268,66 L277.5,60 L287,55 L296.5,56.5 L306,56.5 L311.5,61.5 L318.5,59.5 L328.5,58 L334.5,56 L345.5,50 L351,54.5 L360.5,61.5 L367,61.5 L376.5,65 L383.5,66 L392.5,59.5 L399,65.5 L405,62 L411.5,58 L418,52 L422.5,57.5 L433.5,60.5 L443.5,60 L452,65 L460,62 L468,68 L475.5,64 L482,53 L486,63 L490.5,75.5 L496.5,59.5 L502.5,60 L507.5,58.5 L516.5,58 L524.5,67.5 L530,68.5 L538.5,71 L545,67.5 L555,67.5 L563,65 L570,68.5 L578.5,71 L584,72.5 L590.5,75 L597,71.5 L605,74.5 L614,75.5 L622.5,70 L627.5,68.5 L636,66 L641.5,58 L648,56.5 L654,60 L663,60.5 L672,66 L680.5,72.5 L686,70 L692,72 L699,68.5 L703,63.5 L709.5,71 L718,65.5 L726.5,66 L735,71.5 L743,73 L748,82 L754.5,76.5 L764,74 L768.5,69 L775.5,67.5 L784,73 L792,66 L798.5,67.5 L802,64.5 L806.5,65.5 L813,63 L821,60.5 L825,58 L831.5,63.5 L837,60 L843,59.5 L848.5,58.5 L858,54 L865.5,58 L872.5,56 L880,52.5 L887.5,57.5 L896.5,60 L905.5,56.5 L916,56.5 L926,62 L933,63.5 L944,59.5 L951.5,55 L960,60 L972,56.5 L979.5,62 L989,61.5 L997.5,55 L1007.5,59.5 L1014.5,59 L1022.5,54.5 L1030,55.5 L1035,53 L1041.5,58 L1046,54.5 L1054,54 L1061.5,58 L1067.5,61.5 L1080.5,60 L1086,57 L1092,52 L1096.5,55 L1103.5,57.5 L1111,63.5 L1118,66 L1125.5,66.5 L1134.5,72 L1140.5,84.5 L1148,80.5 L1155.5,80.5 L1161.5,76.5 L1168.5,79 L1175.5,77.5 L1185,79.5 L1192,76.5 L1200,75 L1200,0 Z"/>
        </svg>
      </div>

      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full z-0">
        <video 
          src={coffeeVideo}
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover"
        />
        {/* Overlay to ensure text readability */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      <motion.div 
        className="relative z-10 w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        
        {/* Left Features */}
        <div className="flex flex-col gap-12 md:gap-32 w-full md:w-[40%] text-center md:text-left">
          <motion.div variants={textVariantsLeft}>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 uppercase">- PREMIUM QUALITY</h3>
            <p className="text-gray-200 text-lg">
              Beans that have been hand-picked from the finest coffee regions around the world have been used to make this coffee
            </p>
          </motion.div>
          <motion.div variants={textVariantsLeft}>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 uppercase">- EXPERT ROASTING</h3>
            <p className="text-gray-200 text-lg">
              The best way to make sure that every cup of coffee has the perfect flavor is to roast it in small batches
            </p>
          </motion.div>
        </div>

        {/* Right Features */}
        <div className="flex flex-col gap-12 md:gap-32 w-full md:w-[40%] text-center md:text-right">
          <motion.div variants={textVariantsRight}>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 uppercase">SUSTAINABLE -</h3>
            <p className="text-gray-200 text-lg">
              From farms that are committed to caring for the environment, our products are ethically sourced
            </p>
          </motion.div>
          <motion.div variants={textVariantsRight}>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 uppercase">FRESH ALWAYS -</h3>
            <p className="text-gray-200 text-lg">
              Our products are roasted to order, and they are delivered within days of the roasting process
            </p>
          </motion.div>
        </div>

      </motion.div>
    </section>
  );
};

export default CoffeeFeatures;