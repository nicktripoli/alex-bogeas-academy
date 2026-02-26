import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import EventCard from "@/components/EventCard";
import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import seminarStage from "@/assets/seminar-stage.jpg";
import fadeCloseup from "@/assets/fade-closeup.jpg";
import masterclassCrowd from "@/assets/masterclass-crowd.jpg";
import luxuryWorkspace from "@/assets/luxury-workspace.jpg";

const ALL_SEMINARS = [
  { id: "athens-masterclass", title: "Fade Masterclass: Athens", date: "OCT 15, 2024", location: "Athens, Greece", seatsRemaining: 5, totalSeats: 50, price: 150, image: seminarStage },
  { id: "thessaloniki-workshop", title: "Precision Workshop", date: "NOV 02, 2024", location: "Thessaloniki, Greece", seatsRemaining: 12, totalSeats: 30, price: 120, image: fadeCloseup },
  { id: "london-expo", title: "European Tour: London", date: "DEC 10, 2024", location: "London, UK", seatsRemaining: 0, totalSeats: 100, price: 250, image: masterclassCrowd, isSoldOut: true },
  { id: "milan-intensive", title: "Milan Intensive", date: "JAN 20, 2025", location: "Milan, Italy", seatsRemaining: 18, totalSeats: 40, price: 180, image: luxuryWorkspace },
  { id: "berlin-summit", title: "Berlin Barber Summit", date: "FEB 14, 2025", location: "Berlin, Germany", seatsRemaining: 25, totalSeats: 60, price: 200, image: seminarStage },
  { id: "athens-advanced", title: "Advanced Techniques: Athens", date: "MAR 08, 2025", location: "Athens, Greece", seatsRemaining: 3, totalSeats: 20, price: 300, image: fadeCloseup },
];

const Seminars = () => {
  const { t } = useLanguage();
  const s = t.seminarsPage;

  return (
    <div className="bg-background min-h-screen text-foreground">
      <Navbar />

      {/* Hero */}
      <section className="relative h-[50vh] w-full flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img src={masterclassCrowd} alt="Seminars" className="w-full h-full object-cover filter brightness-[0.3]" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        </div>
        <div className="relative z-10 container mx-auto px-6 pb-16">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h2 className="text-accent text-sm font-bold uppercase tracking-[0.3em] mb-4">{s.label}</h2>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-4">{s.heroTitle}</h1>
            <p className="text-xl text-muted-foreground max-w-2xl">{s.heroSubtitle}</p>
          </motion.div>
        </div>
      </section>

      {/* Events Grid */}
      <Section>
        <div className="container mx-auto px-6">
          <div className="mb-12">
            <h2 className="text-accent text-sm font-bold uppercase tracking-widest mb-4">{s.upcomingLabel}</h2>
            <h3 className="text-3xl font-serif font-bold text-white">{s.upcomingTitle}</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ALL_SEMINARS.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </div>
      </Section>

      {/* Info Banner */}
      <Section darker>
        <div className="container mx-auto px-6">
          <div className="bg-card border border-white/10 p-12 md:p-16 text-center">
            <h3 className="text-3xl font-serif font-bold text-white mb-4">{s.privateTitle}</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8 text-lg">{s.privateDesc}</p>
            <a href="mailto:info@fadeplayers.com" className="text-accent font-bold uppercase tracking-widest text-sm border-b border-accent pb-1 hover:text-white hover:border-white transition-colors">
              {s.privateCta}
            </a>
          </div>
        </div>
      </Section>

      <Footer />
    </div>
  );
};

export default Seminars;
