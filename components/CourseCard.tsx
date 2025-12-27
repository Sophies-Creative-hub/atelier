import React from 'react';
import { Course, CourseStatus } from '../types';
import WatercolorBadge from './WatercolorBadge';
import { useBooking } from '../context/BookingContext';
import { Clock, BarChart, ChevronRight } from 'lucide-react';

interface Props {
  course: Course;
}

const CourseCard: React.FC<Props> = ({ course }) => {
  const { openBooking } = useBooking();
  
  // Show max 3 sessions
  const visibleSessions = course.sessions.slice(0, 3);
  const hasMoreSessions = course.sessions.length > 3;

  return (
    <div className="group relative flex flex-col bg-white rounded-tl-3xl rounded-tr-sm rounded-br-3xl rounded-bl-sm shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border border-stone-100 overflow-hidden h-full">
      {/* Image Area */}
      <div className="relative h-56 overflow-hidden cursor-pointer" onClick={() => openBooking(course)}>
        <img 
          src={course.image} 
          alt={course.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
        <div className="absolute top-3 right-3">
          <span className="bg-white/95 backdrop-blur-md px-3 py-1.5 font-serif font-bold text-lg text-terracotta-700 rounded-lg shadow-sm border border-terracotta-100">
            €{course.price.toFixed(2)}
          </span>
        </div>
      </div>

      {/* Content Area */}
      <div className="flex flex-col flex-grow p-6 bg-gradient-to-b from-white to-stone-50/80">
        
        {/* Header */}
        <div className="mb-5">
          <div className="flex items-center gap-3 text-xs text-stone-500 uppercase tracking-wider mb-2">
            <span className="bg-terracotta-100 text-terracotta-800 px-2.5 py-1 rounded-full font-bold shadow-sm">{course.category}</span>
            <div className="flex items-center gap-1">
              <Clock size={12} className="text-terracotta-500" /> {course.duration}
            </div>
            <div className="flex items-center gap-1">
              <BarChart size={12} className="text-terracotta-500" /> {course.level}
            </div>
          </div>
          <h3 
            className="text-2xl font-serif text-stone-800 leading-tight mb-2 group-hover:text-terracotta-700 transition-colors cursor-pointer"
            onClick={() => openBooking(course)}
          >
            {course.title}
          </h3>
          <p className="text-stone-600 text-sm font-sans leading-relaxed line-clamp-2">
            {course.description}
          </p>
        </div>

        {/* Dates Section */}
        <div className="mt-auto bg-white rounded-xl p-4 border border-stone-100 shadow-inner">
          <h4 className="text-xs font-bold text-stone-400 mb-3 uppercase tracking-widest border-b border-stone-100 pb-2">
            Nächste Termine
          </h4>
          
          {visibleSessions.length > 0 ? (
            <div className="space-y-2">
              {visibleSessions.map(session => (
                <div 
                  key={session.id} 
                  onClick={() => session.status !== CourseStatus.SOLD_OUT && openBooking(course, session)}
                  className={`
                    flex items-center justify-between p-2 rounded-lg transition-colors
                    ${session.status !== CourseStatus.SOLD_OUT ? 'hover:bg-sage-100 cursor-pointer' : 'opacity-60 cursor-not-allowed'}
                  `}
                >
                  <div className="flex flex-col">
                    <span className="font-bold text-stone-700 font-serif text-sm">{session.dateStr}</span>
                    <span className="text-stone-500 text-xs">{session.timeStr}</span>
                  </div>
                  <WatercolorBadge status={session.status} />
                </div>
              ))}
              {hasMoreSessions && (
                <button onClick={() => openBooking(course)} className="w-full text-xs text-terracotta-600 hover:text-terracotta-800 italic text-center pt-2 hover:underline">
                  + weitere Termine ansehen
                </button>
              )}
            </div>
          ) : (
            <div className="text-center py-4">
              <span className="text-stone-400 font-hand text-lg block mb-1">
                Neue Termine folgen bald...
              </span>
              <button 
                onClick={() => openBooking(course)} 
                className="text-xs text-terracotta-600 underline hover:text-terracotta-800"
              >
                Auf die Warteliste
              </button>
            </div>
          )}
        </div>

        {/* Action Button */}
        <div className="mt-6 pt-2">
            <button 
              onClick={() => openBooking(course)}
              className="group/btn w-full flex items-center justify-center gap-2 bg-stone-800 text-cream font-serif text-lg py-3 px-4 rounded-tl-2xl rounded-br-2xl hover:bg-terracotta-600 hover:shadow-lg transition-all active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={course.sessions.every(s => s.status === CourseStatus.SOLD_OUT) && course.sessions.length > 0}
            >
              <span>Platz reservieren</span>
              <ChevronRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
            </button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;