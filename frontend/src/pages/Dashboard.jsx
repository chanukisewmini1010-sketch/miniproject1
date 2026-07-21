import React from 'react';
import Card from '../components/Card';

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
        <Card title="Upcoming Events">Placeholder content - upcoming registered events.</Card>
        <Card title="Recent Announcements">Placeholder content - latest announcements.</Card>
      </div>
    </div>
  );
}

export default Dashboard;
