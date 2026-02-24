import logo from "@/assets/logo.png";
import { Link } from "react-router-dom";
import { Instagram, Facebook, Youtube, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black border-t border-white/5 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
             <img 
              src={logo} 
              alt="Fade Players Logo" 
              className="h-12 w-auto invert brightness-0 mb-6" 
              style={{ filter: "brightness(0) invert(1)" }}
            />
            <p className="text-muted-foreground text-sm leading-relaxed">
              Elevating barbering to an art form. Join the elite academy for advanced techniques and professional growth.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-widest mb-6">Explore</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li><Link to="/seminars" className="hover:text-accent transition-colors">Seminars</Link></li>
              <li><Link to="/mentorship" className="hover:text-accent transition-colors">Mentorship</Link></li>
              <li><Link to="/about" className="hover:text-accent transition-colors">About Alex</Link></li>
              <li><Link to="/showcase" className="hover:text-accent transition-colors">Showcase</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-widest mb-6">Legal</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li><Link to="/terms" className="hover:text-accent transition-colors">Terms of Service</Link></li>
              <li><Link to="/privacy" className="hover:text-accent transition-colors">Privacy Policy</Link></li>
              <li><Link to="/cookies" className="hover:text-accent transition-colors">Cookie Policy</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-widest mb-6">Connect</h4>
            <div className="flex gap-4 mb-6">
              <a href="#" className="w-10 h-10 border border-white/10 flex items-center justify-center rounded-full hover:border-accent hover:text-accent transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 border border-white/10 flex items-center justify-center rounded-full hover:border-accent hover:text-accent transition-all">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 border border-white/10 flex items-center justify-center rounded-full hover:border-accent hover:text-accent transition-all">
                <Youtube size={18} />
              </a>
            </div>
            <a href="mailto:info@fadeplayers.com" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors">
              <Mail size={16} />
              info@fadeplayers.com
            </a>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Fade Players Academy. All rights reserved.</p>
          <p>Designed for the Elite.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
