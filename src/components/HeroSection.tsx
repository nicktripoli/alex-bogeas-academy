import { motion } from "framer-motion";
import NeonButton from "./NeonButton";
import { Link } from "react-router-dom";
import stageImage from "@/assets/seminar-stage.jpg";

const HeroSection = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/70 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/80 z-20" />
        <motion.img
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
          src={stageImage}
          alt="Barber Seminar Stage"
          className="w-full h-full object-cover opacity-60"
        />
      </div>

      {/* Content */}
      <div className="relative z-30 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-accent text-sm md:text-base font-bold uppercase tracking-[0.3em] mb-4">
            Elite Barber Education
          </h2>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-6 leading-tight"
        >
          BUILT <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">DIFFERENT</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed font-light"
        >
          Master the art of precision fading and business scaling. 
          Advanced seminars across Greece & Europe for the modern barber.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col md:flex-row items-center justify-center gap-4"
        >
          <Link to="/seminars">
            <NeonButton>View Upcoming Seminars</NeonButton>
          </Link>
          <Link to="/about">
            <NeonButton variant="outline">Learn More</NeonButton>
          </Link>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30"
      >
        <div className="w-[1px] h-20 bg-gradient-to-b from-accent to-transparent mx-auto" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
