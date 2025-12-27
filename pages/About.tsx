import React from 'react';

const About: React.FC = () => {
  return (
    <div className="bg-cream">
       {/* Hero */}
       <div className="relative h-[40vh] bg-stone-200 overflow-hidden">
         <img src="https://picsum.photos/1200/600?random=99" alt="Atelier Interior" className="w-full h-full object-cover opacity-80" />
         <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
            <h1 className="font-serif text-5xl md:text-6xl text-white text-center drop-shadow-lg">Über das Atelier</h1>
         </div>
       </div>

       <div className="max-w-4xl mx-auto px-4 py-20">
         <div className="bg-white p-8 md:p-16 shadow-xl rounded-2xl -mt-32 relative z-10">
            <h2 className="font-hand text-4xl text-terracotta-600 mb-8 text-center">Ein Raum für alle</h2>
            
            <div className="prose prose-stone prose-lg mx-auto font-serif">
              <p>
                Willkommen im Atelier Blau. Was als kleines Experiment begann, ist heute ein lebendiger Treffpunkt für Menschen, die mit ihren Händen arbeiten wollen.
              </p>
              <p>
                Wir glauben daran, dass Kreativität kein Talent ist, das man hat oder nicht hat – sondern ein Muskel, den man trainiert. Oder besser: ein Spielplatz, den man betritt.
              </p>
              
              <div className="my-12 flex flex-col md:flex-row gap-8 items-center bg-sage-100/50 p-6 rounded-xl">
                 <img src="https://picsum.photos/200/200?random=88" alt="Founder" className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-md" />
                 <div>
                   <h4 className="font-bold text-lg mb-1">Anna & Team</h4>
                   <p className="text-base italic m-0">"Wir sorgen dafür, dass der Tee warm ist, der Ton weich und die Pinsel sauber. Den Rest machst du."</p>
                 </div>
              </div>

              <h3 className="font-sans font-bold text-xl uppercase tracking-wide text-stone-800 mt-12 mb-4">Warum feste Termine?</h3>
              <p>
                Früher dachten wir: "Komm wann du willst". Das Ergebnis? Niemand kam, weil immer etwas "Wichtigeres" dazwischen kam. 
              </p>
              <p>
                Ein Termin ist ein Versprechen an dich selbst. Eine reservierte Zeitinsel im Kalender, die nur dir und deiner Kreativität gehört. Deswegen sind unsere Kurse verbindlich – und deswegen sind sie so wertvoll.
              </p>
            </div>
         </div>
       </div>
    </div>
  );
};

export default About;