import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Course, CourseSession } from '../types';

interface BookingContextType {
  openBooking: (course: Course, session?: CourseSession) => void;
  closeBooking: () => void;
  bookingState: {
    isOpen: boolean;
    course: Course | null;
    session: CourseSession | null;
  };
}

const BookingContext = createContext<BookingContextType | undefined>(undefined);

export const BookingProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [bookingState, setBookingState] = useState<{
    isOpen: boolean;
    course: Course | null;
    session: CourseSession | null;
  }>({
    isOpen: false,
    course: null,
    session: null,
  });

  const openBooking = (course: Course, session?: CourseSession) => {
    setBookingState({ isOpen: true, course, session: session || null });
  };

  const closeBooking = () => {
    setBookingState(prev => ({ ...prev, isOpen: false }));
  };

  return (
    <BookingContext.Provider value={{ openBooking, closeBooking, bookingState }}>
      {children}
    </BookingContext.Provider>
  );
};

export const useBooking = () => {
  const context = useContext(BookingContext);
  if (!context) {
    throw new Error('useBooking must be used within a BookingProvider');
  }
  return context;
};