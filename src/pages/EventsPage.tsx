
import { events } from '../data/events'
import EventCard from '../components/EventCard'

export default function EventsPage() {
  return (
    <section className="page-section">
      <span className="eyebrow">CAMPUS ACTIVITIES</span>

      <h1>Upcoming events.</h1>

      <p>
        Discover campus events, meet new people, and book your seat.
      </p>

      <div className="events-grid">
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </section>
  )
}
