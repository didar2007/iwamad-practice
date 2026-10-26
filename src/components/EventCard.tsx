
import { Link } from 'react-router'
import type { CampusEvent } from '../data/events'

type EventCardProps = {
  event: CampusEvent
}

export default function EventCard({ event }: EventCardProps) {
  return (
    <article className="event-card">
      <span className="eyebrow">CAMPUS EVENT</span>

      <h2>{event.title}</h2>

      <p>{event.description}</p>

      <div className="event-meta">
        <p><strong>Date:</strong> {event.date}</p>
        <p><strong>Time:</strong> {event.time}</p>
        <p><strong>Location:</strong> {event.location}</p>
        <p><strong>Seats:</strong> {event.seats}</p>
      </div>

      <Link
        to={`/events/${event.id}`}
        className="primary-button"
      >
        Details and sign-up
      </Link>
    </article>
  )
}
