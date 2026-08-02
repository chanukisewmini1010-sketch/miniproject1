import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import eventApi from '../api/eventApi';
import '../styles/ui.css';

function dateParts(value) {
  if (!value) {
    return null;
  }

  const parsed = new Date(value);
  if (Number.isNaN(parsed.getTime())) {
    return null;
  }

  return {
    date: parsed,
    month: parsed.toLocaleString(undefined, { month: 'short' }).toUpperCase(),
    day: parsed.toLocaleString(undefined, { day: 'numeric' }),
    time: parsed.toLocaleString(undefined, { hour: 'numeric', minute: '2-digit' }),
  };
}

function startOfDay(value) {
  return new Date(value.getFullYear(), value.getMonth(), value.getDate());
}

function relativeWhen(date) {
  const days = Math.round((startOfDay(date) - startOfDay(new Date())) / 86400000);

  if (days <= 0) {
    return 'Today';
  }

  if (days === 1) {
    return 'Tomorrow';
  }

  if (days < 14) {
    return `In ${days} days`;
  }

  // floor rather than round, so "in 2 weeks" never means 20 days away
  return `In ${Math.floor(days / 7)} weeks`;
}

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
        {events.map((event) => {
          const parts = dateParts(event.eventDate);

          return (
            <li key={event.id} className="upcoming-item">
              <span className="upcoming-date" aria-hidden="true">
                <span className="upcoming-month">{parts ? parts.month : '--'}</span>
                <span className="upcoming-day">{parts ? parts.day : '-'}</span>
              </span>

              <span className="upcoming-body">
                <span className="upcoming-title">{event.title}</span>
                <span className="upcoming-meta">
                  {parts ? parts.time : 'Date not set'}
                  {event.location ? ` · ${event.location}` : ''}
                </span>
                {parts && (
                  <span className="upcoming-when">{relativeWhen(parts.date)}</span>
                )}
              </span>
            </li>
          );
        })}
      </ul>

      <Link className="upcoming-all" to="/events">
        View all events →
      </Link>
    </>
  );
}

export default UpcomingEvents;
