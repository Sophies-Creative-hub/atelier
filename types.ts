export enum CourseStatus {
  AVAILABLE = 'AVAILABLE',
  WAITLIST = 'WAITLIST',
  SOLD_OUT = 'SOLD_OUT'
}

export interface CourseSession {
  id: string;
  dateStr: string; // e.g., "Di, 12.03."
  timeStr: string; // e.g., "18:00–21:00"
  status: CourseStatus;
}

export interface Course {
  id: string;
  title: string;
  category: string;
  price: number;
  duration: string;
  level: string; // e.g., "Anfänger", "Fortgeschritten"
  image: string;
  rating: number; // 1-5
  sessions: CourseSession[];
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  text: string;
  course: string;
}