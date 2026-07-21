import React from 'react';
import Table from '../components/Table';

/**
 * Clubs listing page.
 * TODO (Member 3): fetch real data from clubApi and render it here.
 */
function Clubs() {
  const columns = [
    { key: 'name', label: 'Club Name' },
    { key: 'description', label: 'Description' },
  ];

  const placeholderData = [];

  return (
    <div className="page">
      <h1>Clubs</h1>
      <p>Placeholder page - club list will be loaded from the API.</p>
      <Table columns={columns} data={placeholderData} />
    </div>
  );
}

export default Clubs;
