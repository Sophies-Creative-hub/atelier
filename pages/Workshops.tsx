import React, { useState } from 'react';
import { COURSES } from '../data';
import CourseCard from '../components/CourseCard';
import { Filter, Search } from 'lucide-react';

const Workshops: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('Alle');
  const filters = ['Alle', 'Malerei', 'Töpfern', 'Zeichnung', 'Wochenende'];

  const filteredCourses = activeFilter === 'Alle' 
    ? COURSES 
    : COURSES.filter(c => c.category === activeFilter || (activeFilter === 'Wochenende' && c.sessions.some(s => s.dateStr.startsWith('Sa') || s.dateStr.startsWith('So'))));

  return (
    <div className="bg-cream min-h-screen pb-20 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-40 left-0 w-96 h-96 bg-sage-200/40 rounded-full mix-blend-multiply blur-3xl -translate-x-1/2"></div>
      <div className="absolute top-96 right-0 w-[500px] h-[500px] bg-terracotta-200/30 rounded-full mix-blend-multiply blur-3xl translate-x-1/3"></div>

      {/* Header */}
      <div className="bg-white/80 backdrop-blur-sm py-16 border-b border-stone-100 relative z-10">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="font-serif text-5xl md:text-6xl text-stone-800 mb-6 relative inline-block">
            Unser Kursangebot
            <span className="absolute -bottom-2 right-0 w-24 h-2 bg-terracotta-400/50 rounded-full transform -rotate-1"></span>
          </h1>
          <p className="text-stone-600 font-sans max-w-2xl mx-auto text-xl leading-relaxed">
            Hier findest du alle aktuellen Termine. Wähle deinen Kurs, sieh nach freien Plätzen und buch dich direkt ein. 
            <span className="font-hand text-terracotta-600 block mt-3 text-3xl transform -rotate-1">Es ist ganz einfach.</span>
          </p>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="bg-white sticky top-20 z-40 border-b border-stone-200 shadow-sm transition-all">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
          
          <div className="flex overflow-x-auto gap-3 items-center w-full md:w-auto no-scrollbar pb-2 md:pb-0">
            <div className="flex items-center gap-2 text-stone-400 font-sans mr-2 flex-shrink-0">
              <Filter size={18} />
              <span className="text-sm font-bold uppercase tracking-wider">Filter:</span>
            </div>
            {filters.map(filter => (
              <button 
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`
                  whitespace-nowrap px-5 py-2 rounded-full font-sans text-sm font-bold transition-all transform active:scale-95
                  ${activeFilter === filter 
                    ? 'bg-terracotta-600 text-white shadow-md scale-105' 
                    : 'bg-stone-100 text-stone-600 hover:bg-stone-200 hover:text-stone-900'}
                `}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-auto hidden md:block">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" size={16} />
            <input 
              type="text" 
              placeholder="Suchen..." 
              className="pl-9 pr-4 py-2 rounded-full border border-stone-200 bg-stone-50 focus:bg-white focus:border-terracotta-400 focus:outline-none focus:ring-2 focus:ring-terracotta-100 transition-all text-sm w-64"
            />
          </div>

        </div>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-4 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {filteredCourses.map(course => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
        
        {/* Empty State / Call to Action */}
        <div className="mt-24 p-8 md:p-16 bg-white rounded-[2rem] border-2 border-dashed border-terracotta-200 text-center max-w-4xl mx-auto relative overflow-hidden shadow-sm group">
          <div className="absolute inset-0 bg-paper-texture opacity-50"></div>
          <div className="relative z-10">
            <h3 className="font-hand text-4xl text-stone-800 mb-4 transform group-hover:-translate-y-1 transition-transform">Dein Wunschtermin ist nicht dabei?</h3>
            <p className="font-sans text-stone-600 mb-8 text-lg max-w-xl mx-auto">
              Wir aktualisieren unseren Kalender monatlich. Melde dich für den Newsletter an, um als erstes von neuen Plätzen zu erfahren.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-lg mx-auto">
              <input type="email" placeholder="Deine E-Mail Adresse" className="flex-1 px-5 py-3 border border-stone-300 rounded-xl focus:outline-none focus:border-terracotta-400 focus:ring-2 focus:ring-terracotta-100 font-sans shadow-inner" />
              <button className="bg-stone-800 text-white px-8 py-3 rounded-xl font-serif font-bold text-lg hover:bg-terracotta-600 transition-colors shadow-lg hover:shadow-xl transform active:scale-95">
                Info erhalten
              </button>
            </div>
          </div>
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-48 h-48 bg-sage-200 rounded-full blur-3xl opacity-50 transform translate-x-1/2 -translate-y-1/2 group-hover:scale-110 transition-transform duration-700"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-terracotta-200 rounded-full blur-3xl opacity-50 transform -translate-x-1/2 translate-y-1/2 group-hover:scale-110 transition-transform duration-700"></div>
        </div>
      </div>
    </div>
  );
};

export default Workshops;