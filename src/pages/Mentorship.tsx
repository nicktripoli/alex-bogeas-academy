import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import NeonButton from "@/components/NeonButton";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CheckCircle, Clock, Video, MessageSquare, Target, Star } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import alexPortrait from "@/assets/alex.jpg";
import luxuryWorkspace from "@/assets/luxury-workspace.jpg";

const Mentorship = () => {
  const { t } = useLanguage();
  const m = t.mentorshipPage;

  const plans = [
    {
      title: m.plan1Title,
      price: "€500",
      period: m.perMonth,
      features: [m.plan1F1, m.plan1F2, m.plan1F3, m.plan1F4],
      popular: false,
    },
    {
      title: m.plan2Title,
      price: "€1200",
      period: m.perMonth,
      features: [m.plan2F1, m.plan2F2, m.plan2F3, m.plan2F4, m.plan2F5],
      popular: true,
    },
    {
      title: m.plan3Title,
      price: m.plan3Price,
      period: "",
      features: [m.plan3F1, m.plan3F2, m.plan3F3, m.plan3F4],
      popular: false,
    },
  ];

  const process = [
    { icon: MessageSquare, title: m.step1Title, desc: m.step1Desc },
    { icon: Target, title: m.step2Title, desc: m.step2Desc },
    { icon: Video, title: m.step3Title, desc: m.step3Desc },
    { icon: Star, title: m.step4Title, desc: m.step4Desc },
  ];

  return (
    <div className="bg-background min-h-screen text-foreground">
      <Navbar />

      {/* Hero */}
      <section className="relative h-[70vh] w-full flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img src={luxuryWorkspace} alt="Mentorship" className="w-full h-full object-cover filter brightness-[0.25]" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        </div>
        <div className="relative z-10 container mx-auto px-6 pb-16">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h2 className="text-accent text-sm font-bold uppercase tracking-[0.3em] mb-4">{m.label}</h2>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-4">{m.heroTitle}</h1>
            <p className="text-xl text-muted-foreground max-w-2xl">{m.heroSubtitle}</p>
          </motion.div>
        </div>
      </section>

      {/* What You Get */}
      <Section>
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-accent text-sm font-bold uppercase tracking-widest mb-4">{m.whatLabel}</h2>
              <h3 className="text-4xl md:text-5xl font-serif font-bold text-white mb-8">{m.whatTitle}</h3>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">{m.whatDesc}</p>
              <div className="space-y-4">
                {[m.benefit1, m.benefit2, m.benefit3, m.benefit4].map((b) => (
                  <div key={b} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-white">{b}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 border border-accent/20 z-0 translate-x-4 translate-y-4" />
              <div className="relative z-10 aspect-square overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
                <img src={alexPortrait} alt="Alex Bogeas Mentorship" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Process */}
      <Section darker>
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-accent text-sm font-bold uppercase tracking-widest mb-4">{m.processLabel}</h2>
            <h3 className="text-4xl md:text-5xl font-serif font-bold text-white">{m.processTitle}</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, idx) => (
              <div key={step.title} className="relative bg-card border border-white/5 p-8 hover:border-accent/30 transition-colors group">
                <div className="text-accent/20 text-6xl font-bold font-serif absolute top-4 right-6">0{idx + 1}</div>
                <step.icon className="w-8 h-8 text-accent mb-6" />
                <h4 className="text-lg font-bold text-white mb-3">{step.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Pricing */}
      <Section>
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-accent text-sm font-bold uppercase tracking-widest mb-4">{m.pricingLabel}</h2>
            <h3 className="text-4xl md:text-5xl font-serif font-bold text-white">{m.pricingTitle}</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {plans.map((plan) => (
              <div key={plan.title} className={`relative bg-card border p-8 flex flex-col ${plan.popular ? "border-accent" : "border-white/10"}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-black px-4 py-1 text-xs font-bold uppercase tracking-widest">
                    {m.popular}
                  </div>
                )}
                <h4 className="text-xl font-bold text-white mb-2 font-serif">{plan.title}</h4>
                <div className="mb-6">
                  <span className="text-3xl font-bold text-white">{plan.price}</span>
                  {plan.period && <span className="text-muted-foreground text-sm ml-1">/{plan.period}</span>}
                </div>
                <ul className="space-y-3 mb-8 flex-grow">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <NeonButton variant={plan.popular ? "primary" : "outline"} fullWidth>
                  {m.apply}
                </NeonButton>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Footer />
    </div>
  );
};

export default Mentorship;
