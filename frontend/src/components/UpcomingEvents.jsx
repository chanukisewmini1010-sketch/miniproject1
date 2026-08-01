import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import eventApi from '../api/eventApi';
import { formatEventDate } from '../utils/dateFormat';
import '../styles/ui.css';

function UpcomingEvents({ limit = 5 }) {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let ignore = false;

    eventApi
      .getUpcoming(limit)
      .then((response) => {
        if (!ignore) {
          setEvents(Array.isArray(response.data) ? response.data : []);
        }
      })
      .catch(() => {
        if (!ignore) {
          setError('Could not load upcoming events.');
        }
      })
      .finally(() => {
        if (!ignore) {
          setLoading(false);
        }
      });

    return () => {
      ignore = true;
    };
  }, [limit]);

  if (loading) {
    return <p>Loading upcoming events...</p>;
  }

  if (error) {
    return <p className="error">{error}</p>;
  }

  if (events.length === 0) {
    return <p className="table-empty">No upcoming events scheduled.</p>;
  }

  return (
    <>
      <ul className="upcoming-list">
        {events.map((event) => (
          <li key={event.id} className="upcoming-item">
            <span className="upcoming-title">{event.title}</span>
            <span className="upcoming-meta">
              {formatEventDate(event.eventDate)}
              {event.location ? ` · ${event.location}` : ''}
            </span>
          </li>
        ))}
      </ul>

      <Link to="/events">View all events</Link>
    </>
  );
}

export default UpcomingEvents;
