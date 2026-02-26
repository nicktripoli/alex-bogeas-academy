import { motion } from "framer-motion";
import NeonButton from "./NeonButton";
import { Link } from "react-router-dom";
import { useLanguage } from "@/i18n/LanguageContext";
import stageImage from "@/assets/seminar-stage.jpg";

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/60 z-20" />
        <motion.img initial={{ scale: 1.1 }} animate={{ scale: 1 }} transition={{ duration: 10, repeat: Infinity, repeatType: "reverse", ease: "linear" }} src={stageImage} alt="Barber Seminar Stage" className="w-full h-full object-cover opacity-70" />
      </div>

      {/* Cement column accents - left */}
      <div className="absolute left-0 top-0 bottom-0 w-16 md:w-24 z-20 bg-gradient-to-r from-neutral-700/60 via-neutral-600/30 to-transparent" />
      <div className="absolute left-0 top-0 bottom-0 w-[3px] z-20 bg-neutral-500/40" />
      <div className="absolute left-6 md:left-10 top-0 bottom-0 w-[1px] z-20 bg-neutral-600/20" />

      {/* Cement column accents - right */}
      <div className="absolute right-0 top-0 bottom-0 w-16 md:w-24 z-20 bg-gradient-to-l from-neutral-700/60 via-neutral-600/30 to-transparent" />
      <div className="absolute right-0 top-0 bottom-0 w-[3px] z-20 bg-neutral-500/40" />
      <div className="absolute right-6 md:right-10 top-0 bottom-0 w-[1px] z-20 bg-neutral-600/20" />

      <div className="relative z-30 container mx-auto px-6 text-center mt-16">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
          <h2 className="text-accent text-sm md:text-base font-bold uppercase tracking-[0.3em] mb-4">{t.hero.subtitle}</h2>
        </motion.div>

        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-6 leading-tight">
          {t.hero.title} <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">{t.hero.titleHighlight}</span>
        </motion.h1>

        <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }} className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
          {t.hero.description}
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.8 }} className="flex flex-col md:flex-row items-center justify-center gap-4">
          <Link to="/seminars"><NeonButton>{t.hero.cta}</NeonButton></Link>
          <Link to="/about"><NeonButton variant="outline">{t.hero.learnMore}</NeonButton></Link>
        </motion.div>
      </div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5, duration: 1 }} className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30">
        <div className="w-[1px] h-20 bg-gradient-to-b from-accent to-transparent mx-auto" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
