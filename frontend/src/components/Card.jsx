import React from 'react';

/**
 * Reusable card component for displaying summarized content
 * (e.g. a club, event, or announcement preview).
 */
function Card({ title, children }) {
  return (
    <div className="card">
      {title && <h3 className="card-title">{title}</h3>}
      <div className="card-body">{children}</div>
    </div>
  );
}

export default Card;
