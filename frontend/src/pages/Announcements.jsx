import React from 'react';
import Card from '../components/Card';

/**
 * Announcements page.
 * TODO (Member 6): fetch real data from announcementApi and render it here.
 */
function Announcements() {
  return (
    <div className="page">
      <h1>Announcements</h1>
      <p>Placeholder page - announcements will be loaded from the API.</p>
      <Card title="Sample Announcement">
        This is placeholder content until real announcements are wired up.
      </Card>
    </div>
  );
}

export default Announcements;
