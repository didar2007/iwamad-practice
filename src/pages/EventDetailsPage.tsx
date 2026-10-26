
import { Link, useParams } from 'react-router'
import { events } from '../data/events'

export default function EventDetailsPage() {
  const { eventId } = useParams()

  const event = events.find((item) => item.id === eventId)

  if (!event) {
    return (
      <section className="page-section">
        <h1>Event not found</h1>
        <p>The event you are looking for does not exist.</p>

        <Link to="/events" className="primary-button">
          Back to events
        </Link>
      </section>
    )
  }

  return (
    <section className="page-section">
      <span className="eyebrow">EVENT DETAILS</span>

      <h1>{event.title}</h1>
      <p>{event.description}</p>

      <div className="event-meta">
        <p><strong>Date:</strong> {event.date}</p>
        <p><strong>Time:</strong> {event.time}</p>
        <p><strong>Location:</strong> {event.location}</p>
        <p><strong>Available seats:</strong> {event.seats}</p>
      </div>

      <div id="event-signup">
        <h2>Sign up</h2>
        <p>The registration form will be added shortly.</p>
      </div>

      <Link to="/events" className="primary-button">
        Back to events
      </Link>
    </section>
  )
}
