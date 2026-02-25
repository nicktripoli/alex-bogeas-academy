import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import NeonButton from "@/components/NeonButton";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Instagram, Facebook, Youtube, Send } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import { toast } from "sonner";

const Contact = () => {
  const { t } = useLanguage();
  const c = t.contactPage;
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success(c.successMessage);
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  const contactInfo = [
    { icon: Mail, label: "Email", value: "info@fadeplayers.com", href: "mailto:info@fadeplayers.com" },
    { icon: Phone, label: c.phoneLabel, value: "+30 210 123 4567", href: "tel:+302101234567" },
    { icon: MapPin, label: c.locationLabel, value: "Athens, Greece", href: "#" },
  ];

  const socials = [
    { icon: Instagram, label: "Instagram", href: "#" },
    { icon: Facebook, label: "Facebook", href: "#" },
    { icon: Youtube, label: "YouTube", href: "#" },
  ];

  return (
    <div className="bg-background min-h-screen text-foreground">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-16">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h2 className="text-accent text-sm font-bold uppercase tracking-[0.3em] mb-4">{c.label}</h2>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-4">{c.heroTitle}</h1>
            <p className="text-xl text-muted-foreground max-w-2xl">{c.heroSubtitle}</p>
          </motion.div>
        </div>
      </section>

      <Section>
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Form */}
            <div>
              <h3 className="text-2xl font-serif font-bold text-white mb-8">{c.formTitle}</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm text-muted-foreground uppercase tracking-widest mb-2">{c.nameLabel}</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full bg-card border border-white/10 px-4 py-3 text-white focus:border-accent focus:outline-none transition-colors"
                      placeholder={c.namePlaceholder}
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-muted-foreground uppercase tracking-widest mb-2">Email</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full bg-card border border-white/10 px-4 py-3 text-white focus:border-accent focus:outline-none transition-colors"
                      placeholder={c.emailPlaceholder}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm text-muted-foreground uppercase tracking-widest mb-2">{c.subjectLabel}</label>
                  <input
                    type="text"
                    required
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    className="w-full bg-card border border-white/10 px-4 py-3 text-white focus:border-accent focus:outline-none transition-colors"
                    placeholder={c.subjectPlaceholder}
                  />
                </div>
                <div>
                  <label className="block text-sm text-muted-foreground uppercase tracking-widest mb-2">{c.messageLabel}</label>
                  <textarea
                    required
                    rows={6}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full bg-card border border-white/10 px-4 py-3 text-white focus:border-accent focus:outline-none transition-colors resize-none"
                    placeholder={c.messagePlaceholder}
                  />
                </div>
                <NeonButton className="flex items-center gap-2">
                  <Send className="w-4 h-4" />
                  {c.sendButton}
                </NeonButton>
              </form>
            </div>

            {/* Info */}
            <div>
              <h3 className="text-2xl font-serif font-bold text-white mb-8">{c.infoTitle}</h3>
              <div className="space-y-6 mb-12">
                {contactInfo.map((item) => (
                  <a key={item.label} href={item.href} className="flex items-start gap-4 group">
                    <div className="w-12 h-12 border border-white/10 flex items-center justify-center group-hover:border-accent transition-colors flex-shrink-0">
                      <item.icon className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground uppercase tracking-widest mb-1">{item.label}</div>
                      <div className="text-white group-hover:text-accent transition-colors">{item.value}</div>
                    </div>
                  </a>
                ))}
              </div>

              <h4 className="text-lg font-bold text-white mb-4 uppercase tracking-widest text-sm">{c.followUs}</h4>
              <div className="flex gap-4">
                {socials.map((s) => (
                  <a key={s.label} href={s.href} className="w-12 h-12 border border-white/10 flex items-center justify-center hover:border-accent hover:text-accent transition-all">
                    <s.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>

              {/* FAQ mini */}
              <div className="mt-12 bg-card border border-white/5 p-8">
                <h4 className="text-lg font-bold text-white mb-4 font-serif">{c.faqTitle}</h4>
                <div className="space-y-4">
                  <div>
                    <h5 className="text-white text-sm font-bold mb-1">{c.faq1Q}</h5>
                    <p className="text-muted-foreground text-sm">{c.faq1A}</p>
                  </div>
                  <div className="border-t border-white/5 pt-4">
                    <h5 className="text-white text-sm font-bold mb-1">{c.faq2Q}</h5>
                    <p className="text-muted-foreground text-sm">{c.faq2A}</p>
                  </div>
                  <div className="border-t border-white/5 pt-4">
                    <h5 className="text-white text-sm font-bold mb-1">{c.faq3Q}</h5>
                    <p className="text-muted-foreground text-sm">{c.faq3A}</p>
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

export default Contact;
