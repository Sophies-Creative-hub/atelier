import React from 'react';
import { Instagram, Mail, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-100 text-stone-600 pt-16 pb-8 border-t-4 border-terracotta-200">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12">
        
        {/* Brand */}
        <div>
           <h3 className="font-hand text-3xl font-bold text-stone-800 mb-4">Atelier Blau</h3>
           <p className="font-sans leading-relaxed mb-4">
             Ein Ort für Kreativität, Ruhe und Handwerk. <br/>
             Komm vorbei und mach dir die Hände schmutzig.
           </p>
           <div className="flex gap-4">
             <a href="#" className="p-2 bg-white rounded-full shadow-sm hover:text-terracotta-600 transition"><Instagram size={20} /></a>
             <a href="#" className="p-2 bg-white rounded-full shadow-sm hover:text-terracotta-600 transition"><Mail size={20} /></a>
           </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-serif font-bold text-stone-800 text-lg mb-4">Infos</h4>
          <ul className="space-y-2 font-sans">
            <li><a href="#" className="hover:text-terracotta-600 transition">Häufige Fragen (FAQ)</a></li>
            <li><a href="#" className="hover:text-terracotta-600 transition">Gutscheine kaufen</a></li>
            <li><a href="#" className="hover:text-terracotta-600 transition">Privat-Events</a></li>
            <li><a href="#" className="hover:text-terracotta-600 transition">Datenschutz & Impressum</a></li>
          </ul>
        </div>

        {/* Location */}
        <div>
          <h4 className="font-serif font-bold text-stone-800 text-lg mb-4">Finde uns</h4>
          <div className="flex items-start gap-3 mb-2">
            <MapPin className="text-terracotta-500 mt-1 flex-shrink-0" size={18} />
            <p className="font-sans">
              Kreativstraße 42<br/>
              Hinterhof, 2. Etage<br/>
              10115 Berlin
            </p>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 mt-12 pt-8 border-t border-stone-200 text-center text-sm font-sans text-stone-400">
        © {new Date().getFullYear()} Atelier Blau. Mit Liebe gemacht.
      </div>
    </footer>
  );
};

export default Footer;