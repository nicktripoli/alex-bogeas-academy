import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Section from "@/components/Section";
import EventCard from "@/components/EventCard";
import NeonButton from "@/components/NeonButton";
import TestimonialsSection from "@/components/TestimonialsSection";
import { Link } from "react-router-dom";
import alexPortrait from "@/assets/alex.jpg";
import fadeCloseup from "@/assets/fade-closeup.jpg";
import seminarStage from "@/assets/seminar-stage.jpg";
import masterclassCrowd from "@/assets/masterclass-crowd.jpg";
import luxuryWorkspace from "@/assets/luxury-workspace.jpg";

// Dummy data for seminars
const UPCOMING_SEMINARS = [
  {
    id: "athens-masterclass",
    title: "Fade Masterclass: Athens",
    date: "OCT 15, 2024",
    location: "Athens, Greece",
    seatsRemaining: 5,
    totalSeats: 50,
    price: 150,
    image: seminarStage,
  },
  {
    id: "thessaloniki-workshop",
    title: "Precision Workshop",
    date: "NOV 02, 2024",
    location: "Thessaloniki, Greece",
    seatsRemaining: 12,
    totalSeats: 30,
    price: 120,
    image: fadeCloseup,
  },
  {
    id: "london-expo",
    title: "European Tour: London",
    date: "DEC 10, 2024",
    location: "London, UK",
    seatsRemaining: 0,
    totalSeats: 100,
    price: 250,
    image: masterclassCrowd,
    isSoldOut: true,
  },
];

const Index = () => {
  return (
    <div className="bg-background min-h-screen text-foreground selection:bg-accent selection:text-black">
      <Navbar />
      
      <HeroSection />

      {/* Authority Strip */}
      <div className="bg-accent text-black py-6 overflow-hidden">
        <div className="container mx-auto px-6 flex flex-wrap justify-between items-center gap-8 md:gap-4">
          <span className="text-xl md:text-2xl font-bold uppercase tracking-widest font-serif">Trusted by</span>
          <div className="flex gap-8 md:gap-16 overflow-x-auto no-scrollbar">
            {["50+ Seminars", "2000+ Students", "8 Countries", "Premium Education"].map((stat) => (
              <span key={stat} className="font-bold text-lg whitespace-nowrap opacity-80">
                {stat}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* About Section */}
      <Section darker>
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -inset-4 border border-accent/20 rounded-none z-0 translate-x-4 translate-y-4" />
              <div className="relative z-10 aspect-[3/4] overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
                <img src={alexPortrait} alt="Alex Bogeas" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-60" />
              </div>
            </div>
            
            <div>
              <h2 className="text-accent text-sm font-bold uppercase tracking-widest mb-4">About Alex Bogeas</h2>
              <h3 className="text-4xl md:text-5xl font-serif font-bold text-white mb-8">
                Not Just a Barber.<br />An Educator.
              </h3>
              <p className="text-gray-400 text-lg mb-6 leading-relaxed">
                With over a decade of experience on international stages, Alex Bogeas has redefined what it means to be a modern barber. His unique approach blends traditional precision with street-style creativity.
              </p>
              <p className="text-gray-400 text-lg mb-10 leading-relaxed">
                From Athens to London, his seminars are more than just haircuts—they are immersive educational experiences designed to elevate your career and business mindset.
              </p>
              <Link to="/about">
                <NeonButton variant="outline">Read Full Bio</NeonButton>
              </Link>
            </div>
          </div>
        </div>
      </Section>

      {/* Seminars Section */}
      <Section>
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-accent text-sm font-bold uppercase tracking-widest mb-4">Upcoming Events</h2>
              <h3 className="text-4xl md:text-5xl font-serif font-bold text-white">
                Secure Your Seat
              </h3>
            </div>
            <Link to="/seminars">
              <span className="text-white border-b border-accent pb-1 hover:text-accent transition-colors cursor-pointer uppercase tracking-widest text-sm font-bold">
                View Full Calendar
              </span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {UPCOMING_SEMINARS.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </div>
      </Section>

      {/* Showcase Section */}
      <Section darker className="border-t border-white/5">
        <div className="container mx-auto px-6 text-center mb-16">
          <h2 className="text-accent text-sm font-bold uppercase tracking-widest mb-4">The Experience</h2>
          <h3 className="text-4xl md:text-5xl font-serif font-bold text-white">
            Excellence in Motion
          </h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 h-[600px] md:h-[400px]">
          {[seminarStage, fadeCloseup, masterclassCrowd, luxuryWorkspace].map((img, idx) => (
            <div key={idx} className="relative group overflow-hidden h-full">
              <img 
                src={img} 
                alt={`Showcase ${idx}`} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter grayscale group-hover:grayscale-0" 
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500" />
            </div>
          ))}
        </div>
      </Section>

      {/* Mentorship CTA */}
      <TestimonialsSection />

      {/* Mentorship CTA */}
      <Section className="py-32">
        <div className="container mx-auto px-6">
          <div className="bg-zinc-900/50 border border-white/10 p-12 md:p-24 text-center relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-50" />
            
            <h2 className="relative z-10 text-3xl md:text-5xl font-serif font-bold text-white mb-6">
              Private 1-on-1 Mentorship
            </h2>
            <p className="relative z-10 text-gray-400 max-w-2xl mx-auto mb-10 text-lg">
              Direct access to Alex Bogeas. Tailored guidance on cutting techniques, social media branding, and business scaling. Limited slots available per month.
            </p>
            
            <div className="relative z-10">
              <Link to="/mentorship">
                <NeonButton>Apply for Mentorship</NeonButton>
              </Link>
            </div>

            {/* Background Glow Effect */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/5 blur-[150px] rounded-full pointer-events-none group-hover:bg-accent/10 transition-colors duration-700" />
          </div>
        </div>
      </Section>

      {/* Final CTA */}
      <Section darker className="text-center py-32">
         <div className="container mx-auto px-6">
           <h2 className="text-5xl md:text-7xl font-serif font-bold text-white mb-8">
             Ready to Level Up?
           </h2>
           <Link to="/seminars">
             <NeonButton className="text-xl px-12 py-6">
               See Upcoming Dates
             </NeonButton>
           </Link>
         </div>
      </Section>
      
      <Footer />
    </div>
  );
};

export default Index;
