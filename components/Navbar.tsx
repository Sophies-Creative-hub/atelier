import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, Brush } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `font-sans text-lg tracking-wide hover:text-terracotta-600 transition-colors ${
      isActive ? 'text-terracotta-700 font-bold border-b-2 border-terracotta-300/50' : 'text-stone-600'
    }`;

  return (
    <nav className="sticky top-0 z-50 bg-cream/95 backdrop-blur-md border-b border-stone-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
            <div className="bg-terracotta-100 p-2 rounded-full transform -rotate-6">
                <Brush size={24} className="text-terracotta-600" />
            </div>
            <span className="font-hand text-3xl font-bold text-stone-800 tracking-tighter">
              Atelier <span className="text-terracotta-600">Blau</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            <NavLink to="/" className={linkClass}>Start</NavLink>
            <NavLink to="/workshops" className={linkClass}>Kurse & Termine</NavLink>
            <NavLink to="/about" className={linkClass}>Über uns</NavLink>
            <button className="bg-stone-800 text-cream px-6 py-2 rounded-tl-lg rounded-br-lg font-serif hover:bg-terracotta-700 transition-colors shadow-md">
              Kontakt
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-stone-600 hover:text-stone-900">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-stone-100">
          <div className="px-4 pt-2 pb-6 space-y-2 sm:px-3 flex flex-col">
            <NavLink to="/" onClick={toggleMenu} className="block px-3 py-2 text-stone-700 font-sans text-xl hover:bg-stone-50 rounded-md">Start</NavLink>
            <NavLink to="/workshops" onClick={toggleMenu} className="block px-3 py-2 text-stone-700 font-sans text-xl hover:bg-stone-50 rounded-md">Kurse & Termine</NavLink>
            <NavLink to="/about" onClick={toggleMenu} className="block px-3 py-2 text-stone-700 font-sans text-xl hover:bg-stone-50 rounded-md">Über uns</NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;