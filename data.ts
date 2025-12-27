import { Course, CourseStatus, Testimonial } from './types';

export const COURSES: Course[] = [
  {
    id: 'c1',
    title: 'Aquarell Basics',
    category: 'Malerei',
    price: 49.99,
    duration: '3 Std.',
    level: 'Anfänger',
    image: 'https://picsum.photos/600/400?random=1',
    rating: 5,
    description: 'Lerne die Grundlagen der Aquarellmalerei in entspannter Atmosphäre.',
    sessions: [
      { id: 's1', dateStr: 'Di, 12.03.', timeStr: '18:00–21:00', status: CourseStatus.AVAILABLE },
      { id: 's2', dateStr: 'Sa, 23.03.', timeStr: '10:00–13:00', status: CourseStatus.WAITLIST },
    ]
  },
  {
    id: 'c2',
    title: 'Keramik am Abend',
    category: 'Töpfern',
    price: 65.00,
    duration: '4 Std.',
    level: 'Alle Level',
    image: 'https://picsum.photos/600/400?random=2',
    rating: 4.8,
    description: 'Forme deine eigenen Tassen und Schalen aus Ton. Material inklusive.',
    sessions: [
      { id: 's3', dateStr: 'Mi, 13.03.', timeStr: '18:00–22:00', status: CourseStatus.SOLD_OUT },
      { id: 's4', dateStr: 'Mi, 20.03.', timeStr: '18:00–22:00', status: CourseStatus.AVAILABLE },
      { id: 's5', dateStr: 'Mi, 27.03.', timeStr: '18:00–22:00', status: CourseStatus.AVAILABLE },
    ]
  },
  {
    id: 'c3',
    title: 'Freies Zeichnen',
    category: 'Zeichnung',
    price: 35.00,
    duration: '2.5 Std.',
    level: 'Fortgeschritten',
    image: 'https://picsum.photos/600/400?random=3',
    rating: 5,
    description: 'Experimentelle Techniken mit Kohle und Bleistift für Mutige.',
    sessions: [
      { id: 's6', dateStr: 'Fr, 15.03.', timeStr: '17:00–19:30', status: CourseStatus.AVAILABLE },
    ]
  },
  {
    id: 'c4',
    title: 'Floral Sketching',
    category: 'Illustration',
    price: 55.00,
    duration: '3 Std.',
    level: 'Anfänger',
    image: 'https://picsum.photos/600/400?random=4',
    rating: 4.9,
    description: 'Blumen und Pflanzen locker und modern skizzieren.',
    sessions: [] // Empty to test "More dates coming soon"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Sophie M.',
    text: 'Das Atelier ist ein Traum! Ich habe mich sofort wohlgefühlt und konnte beim Töpfern total abschalten.',
    course: 'Keramik am Abend'
  },
  {
    id: 't2',
    name: 'Lukas B.',
    text: 'Endlich ein Kurs, bei dem man nicht perfekt sein muss. Die Aquarell-Techniken wurden super erklärt.',
    course: 'Aquarell Basics'
  },
  {
    id: 't3',
    name: 'Anna K.',
    text: 'Wunderschöne Atmosphäre und tolle Leute. Ich komme auf jeden Fall wieder!',
    course: 'Freies Zeichnen'
  }
];