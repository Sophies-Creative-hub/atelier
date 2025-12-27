import React, { useState, useEffect } from 'react';
import { useBooking } from '../context/BookingContext';
import { X, Calendar, Check, ArrowRight, User, Mail, CreditCard } from 'lucide-react';
import { CourseStatus } from '../types';

const BookingModal: React.FC = () => {
  const { bookingState, closeBooking } = useBooking();
  const { isOpen, course, session } = bookingState;
  const [step, setStep] = useState<'form' | 'success'>('form');
  const [selectedSessionId, setSelectedSessionId] = useState<string>('');
  
  // Form State
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    participants: 1
  });

  useEffect(() => {
    if (isOpen) {
      setStep('form');
      if (session) {
        setSelectedSessionId(session.id);
      } else if (course && course.sessions.length > 0) {
        // Default to first available session
        const firstAvailable = course.sessions.find(s => s.status === CourseStatus.AVAILABLE);
        if (firstAvailable) setSelectedSessionId(firstAvailable.id);
      }
    }
  }, [isOpen, session, course]);

  if (!isOpen || !course) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setStep('success');
    }, 800);
  };

  const selectedSessionData = course.sessions.find(s => s.id === selectedSessionId);
  const totalPrice = course.price * formData.participants;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-stone-900/60 backdrop-blur-sm transition-opacity" 
        onClick={closeBooking}
      ></div>

      {/* Modal Content */}
      <div className="relative bg-white w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300 flex flex-col md:flex-row max-h-[90vh]">
        
        {/* Close Button */}
        <button 
          onClick={closeBooking}
          className="absolute top-4 right-4 z-20 p-2 bg-white/50 hover:bg-white rounded-full transition-colors text-stone-500 hover:text-terracotta-600"
        >
          <X size={24} />
        </button>

        {/* Left Side: Summary (Hidden on mobile if step is success to save space, or just stacked) */}
        <div className="hidden md:block w-2/5 bg-stone-50 border-r border-stone-100 p-8 relative overflow-hidden">
          {/* Decorative Blob */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-terracotta-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 -translate-x-1/2 -translate-y-1/2"></div>
          
          <div className="relative z-10">
            <img src={course.image} alt={course.title} className="w-full h-40 object-cover rounded-lg shadow-md mb-6 rotate-1" />
            <h3 className="font-serif text-2xl text-stone-800 mb-2 leading-tight">{course.title}</h3>
            <p className="font-sans text-stone-500 text-sm mb-6">{course.description.substring(0, 80)}...</p>
            
            <div className="space-y-3 font-sans text-sm">
              <div className="flex items-center gap-2 text-stone-700">
                <div className="w-6"><Calendar size={16} className="text-terracotta-500" /></div>
                <span>{course.duration}</span>
              </div>
              <div className="flex items-center gap-2 text-stone-700">
                <div className="w-6"><CreditCard size={16} className="text-terracotta-500" /></div>
                <span>{course.price.toFixed(2)} € p.P.</span>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-stone-200">
              <div className="flex justify-between items-end">
                <span className="text-stone-500 font-sans text-sm">Gesamtpreis</span>
                <span className="font-serif text-3xl text-terracotta-700 font-bold">{totalPrice.toFixed(2)} €</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="flex-1 p-6 md:p-10 overflow-y-auto bg-paper-texture">
          {step === 'form' ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <h2 className="font-hand text-4xl text-stone-800 mb-2">Platz reservieren</h2>
                <p className="text-stone-500 font-sans">Fülle das Formular aus, um deine kreative Auszeit zu buchen.</p>
              </div>

              {/* Session Selection */}
              <div className="space-y-2">
                <label className="block text-sm font-bold text-stone-700 uppercase tracking-wide">Termin wählen</label>
                <div className="grid grid-cols-1 gap-2">
                  {course.sessions.length > 0 ? (
                    course.sessions.map(s => (
                      <label 
                        key={s.id} 
                        className={`
                          flex items-center justify-between p-3 rounded-lg border cursor-pointer transition-all
                          ${selectedSessionId === s.id 
                            ? 'border-terracotta-500 bg-terracotta-50 ring-1 ring-terracotta-500' 
                            : 'border-stone-200 hover:border-terracotta-300 bg-white'
                          }
                          ${s.status === CourseStatus.SOLD_OUT ? 'opacity-50 cursor-not-allowed bg-stone-100' : ''}
                        `}
                      >
                        <div className="flex items-center gap-3">
                          <input 
                            type="radio" 
                            name="session" 
                            value={s.id}
                            checked={selectedSessionId === s.id}
                            onChange={(e) => setSelectedSessionId(e.target.value)}
                            disabled={s.status === CourseStatus.SOLD_OUT}
                            className="text-terracotta-600 focus:ring-terracotta-500 h-4 w-4"
                          />
                          <div className="flex flex-col">
                            <span className="font-bold text-stone-800 font-serif">{s.dateStr}</span>
                            <span className="text-xs text-stone-500">{s.timeStr}</span>
                          </div>
                        </div>
                        {s.status === CourseStatus.SOLD_OUT && <span className="text-xs font-bold text-stone-400">Ausgebucht</span>}
                      </label>
                    ))
                  ) : (
                    <div className="p-3 bg-orange-50 text-orange-800 rounded-lg text-sm border border-orange-100">
                      Aktuell keine Termine. Du kommst auf die Warteliste.
                    </div>
                  )}
                </div>
              </div>

              {/* Personal Data */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-stone-500 uppercase">Vorname</label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 text-stone-400" size={16} />
                    <input 
                      type="text" 
                      required 
                      className="w-full pl-9 pr-3 py-2.5 rounded-lg border border-stone-200 focus:border-terracotta-400 focus:ring-2 focus:ring-terracotta-100 transition-all outline-none bg-white"
                      placeholder="Max"
                      value={formData.firstName}
                      onChange={e => setFormData({...formData, firstName: e.target.value})}
                    />
                  </div>
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold text-stone-500 uppercase">Nachname</label>
                  <input 
                    type="text" 
                    required 
                    className="w-full px-3 py-2.5 rounded-lg border border-stone-200 focus:border-terracotta-400 focus:ring-2 focus:ring-terracotta-100 transition-all outline-none bg-white"
                    placeholder="Mustermann"
                    value={formData.lastName}
                    onChange={e => setFormData({...formData, lastName: e.target.value})}
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-stone-500 uppercase">Email Adresse</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 text-stone-400" size={16} />
                  <input 
                    type="email" 
                    required 
                    className="w-full pl-9 pr-3 py-2.5 rounded-lg border border-stone-200 focus:border-terracotta-400 focus:ring-2 focus:ring-terracotta-100 transition-all outline-none bg-white"
                    placeholder="hallo@beispiel.de"
                    value={formData.email}
                    onChange={e => setFormData({...formData, email: e.target.value})}
                  />
                </div>
              </div>

              <div className="space-y-1">
                 <label className="text-xs font-bold text-stone-500 uppercase">Teilnehmer</label>
                 <select 
                    className="w-full px-3 py-2.5 rounded-lg border border-stone-200 focus:border-terracotta-400 outline-none bg-white"
                    value={formData.participants}
                    onChange={e => setFormData({...formData, participants: parseInt(e.target.value)})}
                 >
                   {[1, 2, 3, 4, 5].map(n => <option key={n} value={n}>{n} Person{n > 1 ? 'en' : ''}</option>)}
                 </select>
              </div>

              <button 
                type="submit" 
                className="w-full bg-terracotta-600 text-white font-serif font-bold text-lg py-3 rounded-xl hover:bg-terracotta-700 hover:shadow-lg transform active:scale-98 transition-all flex items-center justify-center gap-2 group"
              >
                Kostenpflichtig buchen
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              
              <p className="text-center text-xs text-stone-400">
                Mit dem Klick akzeptierst du unsere AGB und Datenschutzbestimmungen.
              </p>

            </form>
          ) : (
            <div className="h-full flex flex-col items-center justify-center text-center animate-in zoom-in duration-500">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6 shadow-sm">
                <Check size={40} className="text-green-600" />
              </div>
              <h2 className="font-hand text-4xl text-stone-800 mb-4">Juhu! Du bist dabei.</h2>
              <p className="text-stone-600 font-sans text-lg mb-2">
                Deine Buchung für <strong>{course.title}</strong> wurde bestätigt.
              </p>
              {selectedSessionData && (
                <div className="bg-terracotta-50 px-6 py-3 rounded-lg border border-terracotta-100 my-6">
                  <p className="font-serif font-bold text-terracotta-800 text-xl">{selectedSessionData.dateStr}</p>
                  <p className="text-terracotta-600 text-sm">{selectedSessionData.timeStr}</p>
                </div>
              )}
              <p className="text-stone-500 text-sm max-w-xs mx-auto mb-8">
                Wir haben dir eine Bestätigung an <strong>{formData.email}</strong> gesendet.
              </p>
              <button 
                onClick={closeBooking}
                className="bg-stone-800 text-white px-8 py-3 rounded-xl font-serif hover:bg-stone-700 transition-colors shadow-md"
              >
                Zurück zur Übersicht
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookingModal;