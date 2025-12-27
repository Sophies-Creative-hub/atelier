import React from 'react';
import { Link } from 'react-router-dom';
import { COURSES, TESTIMONIALS } from '../data';
import CourseCard from '../components/CourseCard';
import { ArrowRight, Star, Heart, Palette, Sun } from 'lucide-react';

const Home: React.FC = () => {
  const featuredCourses = COURSES.slice(0, 3);

  return (
    <div className="flex flex-col w-full">
      
      {/* Hero Section */}
      <section className="relative bg-cream overflow-hidden">
        {/* Vibrant Watercolor Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
           <div className="absolute -top-20 -left-20 w-[600px] h-[600px] bg-terracotta-200/80 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-pulse"></div>
           <div className="absolute top-20 right-[-100px] w-[500px] h-[500px] bg-sage-300/60 rounded-full mix-blend-multiply filter blur-3xl opacity-60"></div>
           <div className="absolute bottom-[-100px] left-1/3 w-[500px] h-[500px] bg-yellow-200/70 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-pulse delay-700"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 py-24 md:py-36 flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1 space-y-8 relative z-10">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/80 border border-terracotta-100 text-terracotta-800 font-hand text-xl shadow-sm backdrop-blur-sm transform -rotate-2 hover:rotate-0 transition-transform cursor-default">
              <Sun size={20} className="text-yellow-500" />
              <span>Dein Raum für Kreativität</span>
            </div>
            
            <h1 className="font-serif text-6xl md:text-8xl text-stone-900 leading-[1.05] drop-shadow-sm">
              Atelier ohne Termine <br/>
              <span className="relative inline-block mt-2">
                 <span className="italic text-terracotta-600 relative z-10">ist nur Deko.</span>
                 <span className="absolute bottom-2 left-0 w-full h-4 bg-terracotta-200/50 -rotate-1 z-0"></span>
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-stone-600 font-sans max-w-lg leading-relaxed">
              Komm vorbei, mach dir die Hände schmutzig und den Kopf frei. 
              Wir bieten echte Handwerkskunst in entspannter Atmosphäre.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link to="/workshops" className="bg-terracotta-600 text-white px-10 py-4 rounded-tl-2xl rounded-br-2xl font-serif text-xl font-bold shadow-lg hover:bg-terracotta-700 hover:shadow-terracotta-200/50 hover:-translate-y-1 transition-all flex items-center justify-center gap-3 group">
                Kurse ansehen <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <button className="px-10 py-4 rounded-tl-2xl rounded-br-2xl font-serif text-xl font-bold text-stone-700 border-2 border-stone-200 hover:border-stone-800 hover:bg-stone-50 transition-all">
                Über uns
              </button>
            </div>
          </div>
          
          <div className="flex-1 relative hidden md:block">
            <div className="relative z-10 grid grid-cols-2 gap-6 p-4">
              <div className="space-y-6 transform translate-y-12">
                 <img src="https://picsum.photos/400/500?random=10" alt="Pottery hands" className="w-full h-64 object-cover rounded-tl-[60px] rounded-br-[30px] shadow-2xl hover:scale-105 transition-transform duration-500 border-4 border-white" />
                 <img src="https://picsum.photos/400/500?random=92" alt="Art Supplies" className="w-full h-48 object-cover rounded-2xl shadow-xl hover:scale-105 transition-transform duration-500 border-4 border-white" />
              </div>
              <div className="space-y-6">
                 <img src="https://picsum.photos/400/500?random=11" alt="Painting brush" className="w-full h-80 object-cover rounded-tr-[60px] rounded-bl-[30px] shadow-2xl hover:scale-105 transition-transform duration-500 border-4 border-white" />
                 <div className="p-6 bg-white rounded-3xl shadow-xl border border-stone-100 flex flex-col items-center justify-center text-center transform rotate-3 hover:rotate-0 transition-transform">
                    <span className="font-hand text-5xl text-terracotta-500 font-bold mb-0">4.9</span>
                    <div className="flex text-yellow-400 mb-1"><Star fill="currentColor" size={20}/><Star fill="currentColor" size={20}/><Star fill="currentColor" size={20}/><Star fill="currentColor" size={20}/><Star fill="currentColor" size={20}/></div>
                    <span className="text-xs text-stone-400 font-bold uppercase">Sterne Bewertung</span>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust / Philosophy Section */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="font-hand text-5xl text-terracotta-700 mb-6 transform -rotate-1">Unsere Philosophie</h2>
            <p className="font-sans text-stone-600 text-xl leading-relaxed">Kein Druck, keine Noten, nur purer Ausdruck. <br/>Wir sorgen für das Material, du bringst die Neugier mit.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
             {[
               { icon: <Heart size={36} />, title: 'Kleine Gruppen', text: 'Maximal 8 Teilnehmer für individuelle Betreuung.' },
               { icon: <Palette size={36} />, title: 'Material inklusive', text: 'Hochwertige Farben, Ton und Werkzeuge vor Ort.' },
               { icon: <Star size={36} />, title: 'Für Anfänger', text: 'Keine Vorkenntnisse nötig. Einfach anfangen.' },
             ].map((item, idx) => (
               <div key={idx} className="group flex flex-col items-center text-center p-10 bg-cream/30 rounded-[30px] border border-stone-100 hover:border-terracotta-200 hover:bg-terracotta-50/30 transition-all hover:-translate-y-2 duration-300 shadow-sm hover:shadow-xl">
                 <div className="text-terracotta-500 mb-6 p-5 bg-white rounded-full shadow-md group-hover:scale-110 transition-transform duration-300">
                   {item.icon}
                 </div>
                 <h3 className="font-serif text-2xl font-bold text-stone-800 mb-3">{item.title}</h3>
                 <p className="font-sans text-stone-500 text-lg">{item.text}</p>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* Course Preview */}
      <section className="py-24 bg-stone-50 relative overflow-hidden">
        {/* Decorative background shape */}
        <div className="absolute top-0 right-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20"></div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <span className="text-terracotta-600 font-bold uppercase tracking-widest text-sm mb-2 block">Kalender</span>
              <h2 className="font-serif text-5xl text-stone-900">Aktuelle Kurse</h2>
            </div>
            <Link to="/workshops" className="flex items-center gap-2 text-stone-800 font-bold hover:text-terracotta-600 transition-colors text-lg group border-b-2 border-transparent hover:border-terracotta-600 pb-1">
              Alle Kurse ansehen <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {featuredCourses.map(course => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>

          <div className="mt-16 text-center md:hidden">
            <Link to="/workshops" className="inline-block bg-white border-2 border-stone-200 text-stone-800 px-8 py-3 rounded-xl font-bold hover:border-stone-800 transition-colors">
              Alle Kurse ansehen
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white overflow-hidden relative">
        <div className="absolute left-0 bottom-0 w-64 h-64 bg-yellow-100 rounded-full mix-blend-multiply blur-3xl opacity-40"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <h2 className="font-hand text-5xl text-center text-terracotta-700 mb-20">Liebesbriefe unserer Teilnehmer</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {TESTIMONIALS.map((t, i) => (
              <div key={t.id} className={`relative bg-cream p-10 rounded-tr-[40px] rounded-bl-[40px] shadow-sm border border-stone-100 hover:shadow-lg transition-shadow duration-300 ${i === 1 ? 'md:-translate-y-6' : ''}`}>
                <div className="text-terracotta-200 absolute top-6 left-6">
                  <span className="text-8xl font-serif leading-none opacity-40 font-bold">“</span>
                </div>
                <p className="font-serif text-xl text-stone-700 italic relative z-10 mb-8 pt-6 leading-relaxed">
                  {t.text}
                </p>
                <div className="flex items-center gap-4 border-t border-stone-200 pt-6">
                  <div className="w-12 h-12 bg-stone-200 rounded-full overflow-hidden ring-4 ring-white shadow-sm">
                    <img src={`https://picsum.photos/100/100?random=${t.id}`} alt={t.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <div className="font-bold text-stone-900 font-sans text-lg">{t.name}</div>
                    <div className="text-xs text-terracotta-600 font-bold uppercase tracking-wide">{t.course}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram Placeholder */}
      <section className="py-16 bg-stone-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between mb-10">
             <div className="flex items-center gap-3">
               <div className="bg-gradient-to-tr from-yellow-400 to-purple-600 text-white p-2 rounded-lg">
                 <Heart fill="white" size={20} />
               </div>
               <h3 className="font-serif text-3xl text-stone-800">Folge uns auf Instagram</h3>
             </div>
             <a href="#" className="text-terracotta-600 font-bold font-sans text-lg hover:underline">@atelier.blau</a>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map(i => (
              <div key={i} className="aspect-square bg-stone-200 relative group overflow-hidden cursor-pointer rounded-xl">
                 <img src={`https://picsum.photos/400/400?random=${i+20}`} alt="Instagram" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                 <div className="absolute inset-0 bg-stone-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white backdrop-blur-sm">
                   <div className="flex items-center gap-2 font-bold">
                      <Heart className="fill-white" /> 124
                   </div>
                 </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;