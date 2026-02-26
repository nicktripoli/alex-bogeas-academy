import logo from "@/assets/logo.png";
import { Link } from "react-router-dom";
import { Instagram, Facebook, Youtube, Mail } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-black border-t border-white/5 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1">
            <img src={logo} alt="Fade Players Logo" className="h-12 w-auto invert brightness-0 mb-6" style={{ filter: "brightness(0) invert(1)" }} />
            <p className="text-muted-foreground text-sm leading-relaxed">{t.footer.description}</p>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-widest mb-6">{t.footer.explore}</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li><Link to="/seminars" className="hover:text-accent transition-colors">{t.nav.seminars}</Link></li>
              <li><Link to="/mentorship" className="hover:text-accent transition-colors">{t.nav.mentorship}</Link></li>
              <li><Link to="/about" className="hover:text-accent transition-colors">{t.nav.about}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-widest mb-6">{t.footer.legal}</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li><Link to="/terms" className="hover:text-accent transition-colors">{t.footer.terms}</Link></li>
              <li><Link to="/privacy" className="hover:text-accent transition-colors">{t.footer.privacy}</Link></li>
              <li><Link to="/cookies" className="hover:text-accent transition-colors">{t.footer.cookies}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-widest mb-6">{t.footer.connect}</h4>
            <div className="flex gap-4 mb-6">
              <a href="#" className="w-10 h-10 border border-white/10 flex items-center justify-center rounded-full hover:border-accent hover:text-accent transition-all"><Instagram size={18} /></a>
              <a href="#" className="w-10 h-10 border border-white/10 flex items-center justify-center rounded-full hover:border-accent hover:text-accent transition-all"><Facebook size={18} /></a>
              <a href="#" className="w-10 h-10 border border-white/10 flex items-center justify-center rounded-full hover:border-accent hover:text-accent transition-all"><Youtube size={18} /></a>
            </div>
            <a href="mailto:info@fadeplayers.com" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors">
              <Mail size={16} /> info@fadeplayers.com
            </a>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
          <p>{t.footer.rights.replace("{year}", String(new Date().getFullYear()))}</p>
          <p>{t.footer.tagline}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
