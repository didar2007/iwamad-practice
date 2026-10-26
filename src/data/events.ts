export type CampusEvent = {
  id: string
  title: string
  date: string
  time: string
  location: string
  description: string
  seats: number
}

export const events: CampusEvent[] = [
  {
    id: 'tech-talk',
    title: 'Technology and AI Talk',
    date: '2026-11-05',
    time: '15:00',
    location: 'KBTU, Room 301',
    description: 'Discover how artificial intelligence is changing everyday life and future careers.',
    seats: 12,
  },
  {
    id: 'startup-day',
    title: 'Student Startup Day',
    date: '2026-11-08',
    time: '14:00',
    location: 'KBTU, Main Hall',
    description: 'Meet students with business ideas and learn how to turn an idea into a startup.',
    seats: 3,
  },
  {
    id: 'design-workshop',
    title: 'Creative Design Workshop',
    date: '2026-11-12',
    time: '16:00',
    location: 'KBTU, Lab 204',
    description: 'Practice creative thinking and learn the basics of modern digital design.',
    seats: 8,
  },
  {
    id: 'game-night',
    title: 'Campus Game Night',
    date: '2026-11-15',
    time: '18:00',
    location: 'KBTU, Student Lounge',
    description: 'Spend an evening playing games, meeting classmates, and having fun.',
    seats: 15,
  },
]