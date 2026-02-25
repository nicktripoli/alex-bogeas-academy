import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import NeonButton from "@/components/NeonButton";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Award, Users, Globe, Scissors, Target, Zap } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import alexPortrait from "@/assets/alex.jpg";
import seminarStage from "@/assets/seminar-stage.jpg";

const fadeIn = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };

const About = () => {
  const { t } = useLanguage();
  const a = t.aboutPage;

  const stats = [
    { icon: Scissors, value: "50+", label: a.statSeminars },
    { icon: Users, value: "2000+", label: a.statStudents },
    { icon: Globe, value: "8", label: a.statCountries },
    { icon: Award, value: "15+", label: a.statYears },
  ];

  const values = [
    { icon: Target, title: a.value1Title, desc: a.value1Desc },
    { icon: Zap, title: a.value2Title, desc: a.value2Desc },
    { icon: Award, title: a.value3Title, desc: a.value3Desc },
  ];

  return (
    <div className="bg-background min-h-screen text-foreground">
      <Navbar />

      {/* Hero */}
      <section className="relative h-[70vh] w-full flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img src={seminarStage} alt="About" className="w-full h-full object-cover filter brightness-[0.3]" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        </div>
        <div className="relative z-10 container mx-auto px-6 pb-16">
          <motion.div initial="hidden" animate="visible" variants={fadeIn} transition={{ duration: 0.8 }}>
            <h2 className="text-accent text-sm font-bold uppercase tracking-[0.3em] mb-4">{a.label}</h2>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-4">{a.heroTitle}</h1>
            <p className="text-xl text-muted-foreground max-w-2xl">{a.heroSubtitle}</p>
          </motion.div>
        </div>
      </section>

      {/* Stats Strip */}
      <div className="bg-accent text-black py-8">
        <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <s.icon className="w-6 h-6 mx-auto mb-2 opacity-70" />
              <div className="text-3xl font-bold font-serif">{s.value}</div>
              <div className="text-sm uppercase tracking-widest font-bold opacity-70">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Bio Section */}
      <Section>
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -inset-4 border border-accent/20 z-0 translate-x-4 translate-y-4" />
              <div className="relative z-10 aspect-[3/4] overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
                <img src={alexPortrait} alt="Alex Bogeas" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-60" />
              </div>
            </div>
            <div>
              <h2 className="text-accent text-sm font-bold uppercase tracking-widest mb-4">{a.storyLabel}</h2>
              <h3 className="text-4xl md:text-5xl font-serif font-bold text-white mb-8">{a.storyTitle}</h3>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">{a.storyP1}</p>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">{a.storyP2}</p>
              <p className="text-muted-foreground text-lg leading-relaxed">{a.storyP3}</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Values */}
      <Section darker>
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-accent text-sm font-bold uppercase tracking-widest mb-4">{a.valuesLabel}</h2>
            <h3 className="text-4xl md:text-5xl font-serif font-bold text-white">{a.valuesTitle}</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((v) => (
              <div key={v.title} className="bg-card border border-white/5 p-10 hover:border-accent/30 transition-colors group">
                <v.icon className="w-8 h-8 text-accent mb-6 group-hover:scale-110 transition-transform" />
                <h4 className="text-xl font-bold text-white mb-4 font-serif">{v.title}</h4>
                <p className="text-muted-foreground leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section className="text-center py-32">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl md:text-7xl font-serif font-bold text-white mb-8">{a.ctaTitle}</h2>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link to="/seminars"><NeonButton>{a.ctaSeminars}</NeonButton></Link>
            <Link to="/mentorship"><NeonButton variant="outline">{a.ctaMentorship}</NeonButton></Link>
          </div>
        </div>
      </Section>

      <Footer />
    </div>
  );
};

export default About;
