import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import NeonButton from "@/components/NeonButton";
import { useParams, Link } from "react-router-dom";
import { Calendar, MapPin, Users, Clock, CheckCircle } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import seminarStage from "@/assets/seminar-stage.jpg";

const SeminarDetails = () => {
  const { id } = useParams();
  const { t } = useLanguage();

  const event = {
    title: "Fade Masterclass: Athens",
    date: "October 15, 2024",
    time: "10:00 AM - 5:00 PM",
    location: "The Athens Gate Hotel, Athens, Greece",
    price: 150,
    seatsRemaining: 5,
    totalSeats: 50,
    image: seminarStage,
    description: "Join Alex Bogeas for an intensive full-day masterclass focusing on the art of the fade. Learn the techniques that have made him one of the most sought-after educators in the industry.",
    agenda: [
      "10:00 AM - Theory & Mindset",
      "11:30 AM - Live Demonstration: Skin Fade",
      "1:00 PM - Lunch Break (Included)",
      "2:00 PM - Hands-on Practice",
      "4:00 PM - Photography & Social Media",
      "5:00 PM - Q&A and Certification",
    ],
    includes: [
      "Certificate of Completion",
      "Goodie Bag (Value €50)",
      "Lunch & Refreshments",
      "Access to Private Community",
    ],
  };

  return (
    <div className="bg-background min-h-screen text-foreground">
      <Navbar />

      <div className="relative h-[60vh] w-full">
        <div className="absolute inset-0">
          <img src={event.image} alt={event.title} className="w-full h-full object-cover filter brightness-50" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
        </div>
        <div className="absolute bottom-0 left-0 w-full p-6 md:p-12">
          <div className="container mx-auto">
            <Link to="/seminars" className="text-accent uppercase tracking-widest text-xs font-bold mb-4 block hover:underline">{t.seminarDetails.back}</Link>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-4">{event.title}</h1>
            <div className="flex flex-wrap gap-6 text-gray-300">
              <div className="flex items-center gap-2"><Calendar className="w-5 h-5 text-accent" /><span>{event.date}</span></div>
              <div className="flex items-center gap-2"><Clock className="w-5 h-5 text-accent" /><span>{event.time}</span></div>
              <div className="flex items-center gap-2"><MapPin className="w-5 h-5 text-accent" /><span>{event.location}</span></div>
            </div>
          </div>
        </div>
      </div>

      <Section>
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-serif font-bold text-white mb-6">{t.seminarDetails.aboutEvent}</h2>
              <p className="text-gray-400 leading-relaxed mb-12 text-lg">{event.description}</p>

              <div className="mb-12">
                <h3 className="text-xl font-bold text-white mb-6 uppercase tracking-widest text-sm">{t.seminarDetails.agenda}</h3>
                <ul className="space-y-4">
                  {event.agenda.map((item, index) => (
                    <li key={index} className="flex items-start gap-4 border-l-2 border-accent/20 pl-6 py-2 hover:border-accent transition-colors">
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white mb-6 uppercase tracking-widest text-sm">{t.seminarDetails.includes}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {event.includes.map((item, index) => (
                    <div key={index} className="flex items-center gap-3 bg-white/5 p-4 border border-white/5">
                      <CheckCircle className="w-5 h-5 text-accent" />
                      <span className="text-gray-300">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-24 bg-card border border-white/10 p-8">
                <div className="flex justify-between items-end mb-8 border-b border-white/10 pb-6">
                  <div>
                    <span className="block text-sm text-muted-foreground mb-1">{t.seminarDetails.priceLabel}</span>
                    <span className="text-3xl font-bold text-white">€{event.price}</span>
                  </div>
                  <div className="text-right">
                    <span className="block text-sm text-accent font-bold mb-1">{t.seminarDetails.spotsLeft.replace("{n}", String(event.seatsRemaining))}</span>
                    <span className="text-xs text-muted-foreground">{t.seminarDetails.dontMiss}</span>
                  </div>
                </div>
                <NeonButton fullWidth className="mb-4">{t.seminarDetails.reserveSpot}</NeonButton>
                <p className="text-xs text-center text-muted-foreground mb-6">{t.seminarDetails.stripeNote}</p>
                <div className="space-y-4 pt-6 border-t border-white/10">
                  <div className="flex items-center gap-3 text-sm text-gray-400">
                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center"><Users size={14} /></div>
                    <span>{t.seminarDetails.limitedTo.replace("{n}", String(event.totalSeats))}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-400">
                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center"><CheckCircle size={14} /></div>
                    <span>{t.seminarDetails.instantConfirm}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Footer />
    </div>
  );
};

export default SeminarDetails;
