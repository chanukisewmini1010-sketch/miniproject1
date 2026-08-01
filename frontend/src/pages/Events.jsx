import React, { useEffect, useState } from 'react';
import Table from '../components/Table';
import eventApi from '../api/eventApi';

const columns = [
  { key: 'title', label: 'Event Title' },
  { key: 'eventDate', label: 'Date' },
  { key: 'location', label: 'Location' },
];

/**
 * Formats the ISO date string returned by the API (e.g. 2026-08-22T09:00:00)
 * into something readable. An ISO string with no timezone is parsed as local
 * time, which is what we want for campus event times.
 */
function formatEventDate(value) {
  if (!value) {
    return '-';
  }

  const parsed = new Date(value);
  if (Number.isNaN(parsed.getTime())) {
    return value;
  }

  return parsed.toLocaleString(undefined, {
    dateStyle: 'medium',
    timeStyle: 'short',
  });
}

/**
 * Matches an event against the search term. Only the columns the user can
 * actually see are searched (title and location) - matching on description
 * would hide the reason a row appeared.
 */
function matchesSearch(event, term) {
  if (!term) {
    return true;
  }

  const needle = term.trim().toLowerCase();
  if (!needle) {
    return true;
  }

  const haystack = [event.title, event.location]
    .filter(Boolean)
    .join(' ')
    .toLowerCase();

  return haystack.includes(needle);
}

/**
 * Events listing page - loads events from GET /api/events.
 * TODO (Member 4): show the club name instead of relying on clubId (step 7),
 * and add create/edit/delete controls.
 */
function Events() {
  const [events, setEvents] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let ignore = false;

    eventApi
      .getAll()
      .then((response) => {
        if (!ignore) {
          setEvents(Array.isArray(response.data) ? response.data : []);
        }
      })
      .catch(() => {
        if (!ignore) {
          setError('Could not load events. Is the backend running on port 8080?');
        }
      })
      .finally(() => {
        if (!ignore) {
          setLoading(false);
        }
      });

    // avoids setting state if the page unmounts before the request finishes
    return () => {
      ignore = true;
    };
  }, []);

  const filtered = events.filter((event) => matchesSearch(event, search));

  // description may be absent entirely - the API omits null fields
  const rows = filtered.map((event) => ({
    id: event.id,
    title: event.title,
    eventDate: formatEventDate(event.eventDate),
    location: event.location || '-',
  }));

  const searching = search.trim().length > 0;

  return (
    <div className="page">
      <h1>Events</h1>

      {loading && <p>Loading events...</p>}

      {error && <p className="error">{error}</p>}

      {!loading && !error && (
        <>
          <div className="form">
            <label>
              Search events
              <input
                type="search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Filter by title or location"
              />
            </label>
          </div>

          <p>
            {searching
              ? `Showing ${rows.length} of ${events.length} events.`
              : `${events.length} ${events.length === 1 ? 'event' : 'events'} found.`}
          </p>

          {searching && rows.length === 0 ? (
            <p className="table-empty">No events match &quot;{search.trim()}&quot;.</p>
          ) : (
            <Table columns={columns} data={rows} />
          )}
        </>
      )}
    </div>
  );
}

export default Events;
