import React from 'react';
import Table from '../components/Table';

/**
 * Events listing page.
 * TODO (Member 4): fetch real data from eventApi and render it here.
 */
function Events() {
  const columns = [
    { key: 'title', label: 'Event Title' },
    { key: 'eventDate', label: 'Date' },
    { key: 'location', label: 'Location' },
  ];

  const placeholderData = [];

  return (
    <div className="page">
      <h1>Events</h1>
      <p>Placeholder page - event list will be loaded from the API.</p>
      <Table columns={columns} data={placeholderData} />
    </div>
  );
}

export default Events;
