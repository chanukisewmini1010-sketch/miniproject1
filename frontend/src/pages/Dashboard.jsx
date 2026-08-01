import React from 'react';
import Card from '../components/Card';
import UpcomingEvents from '../components/UpcomingEvents';

/**
 * Landing page after login.
 * TODO (team): replace placeholder cards with real summary data per role.
 */
function Dashboard() {
  return (
    <div className="page">
      <h1>Dashboard</h1>
      <div className="card-grid">
        <Card title="My Clubs">Placeholder content - list of joined clubs.</Card>
        <Card title="Upcoming Events">
          <UpcomingEvents limit={5} />
        </Card>
        <Card title="Recent Announcements">Placeholder content - latest announcements.</Card>
      </div>
    </div>
  );
}

export default Dashboard;
