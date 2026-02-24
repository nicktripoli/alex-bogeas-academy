import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import Section from "./Section";
import { useLanguage } from "@/i18n/LanguageContext";

const testimonials = [
  { id: 1, name: "Dimitris K.", role: "Barber Shop Owner", content: "The Fade Masterclass completely changed my perspective on precision cutting. Alex's attention to detail is unmatched. My shop's revenue increased by 30% after implementing his techniques.", location: "Athens" },
  { id: 2, name: "Sarah M.", role: "Senior Stylist", content: "I flew in from London for this seminar and it was worth every penny. The business mindset section was a game changer for me. Highly recommended for any barber serious about their career.", location: "London" },
  { id: 3, name: "Nikos P.", role: "Freelance Barber", content: "Best educational event I've attended. The hands-on practice gave me the confidence I was missing. Alex is a fantastic teacher who really cares about his students' success.", location: "Thessaloniki" },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);
  const { t } = useLanguage();
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);
  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <Section className="border-t border-white/5">
      <div className="container mx-auto px-6">
        <h2 className="text-accent text-sm font-bold uppercase tracking-widest mb-12 text-center">{t.testimonials.label}</h2>
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div className="flex transition-transform duration-500 ease-out" style={{ transform: `translateX(-${current * 100}%)` }}>
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <div className="bg-card border border-white/5 p-10 md:p-14 relative group hover:border-accent/30 transition-colors">
                    <div className="absolute top-6 right-8 text-6xl text-white/5 font-serif">"</div>
                    <div className="flex gap-1 mb-6">
                      {[1, 2, 3, 4, 5].map((star) => (<Star key={star} size={16} className="fill-accent text-accent" />))}
                    </div>
                    <p className="text-xl md:text-2xl text-white font-serif italic leading-relaxed mb-8">{testimonial.content}</p>
                    <div>
                      <h4 className="text-white font-bold text-lg">{testimonial.name}</h4>
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <span>{testimonial.role}</span>
                        <span className="w-1 h-1 bg-accent rounded-full" />
                        <span>{testimonial.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button onClick={prev} className="absolute top-1/2 -left-4 md:-left-12 -translate-y-1/2 p-2 text-white/50 hover:text-accent transition-colors"><ChevronLeft size={32} /></button>
          <button onClick={next} className="absolute top-1/2 -right-4 md:-right-12 -translate-y-1/2 p-2 text-white/50 hover:text-accent transition-colors"><ChevronRight size={32} /></button>
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, idx) => (
              <button key={idx} onClick={() => setCurrent(idx)} className={`w-2 h-2 rounded-full transition-all duration-300 ${current === idx ? "bg-accent w-6" : "bg-white/20 hover:bg-white/40"}`} />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default TestimonialsSection;
