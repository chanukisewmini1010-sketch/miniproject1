import React from 'react';

/**
 * Feedback submission page for events.
 * TODO (Member 6): connect this form to feedbackApi.
 */
function Feedback() {
  return (
    <div className="page">
      <h1>Feedback</h1>
      <p>Placeholder page - event feedback form will go here.</p>
      <form className="form">
        <label>
          Rating (1-5)
          <input type="number" min="1" max="5" placeholder="5" />
        </label>
        <label>
          Comments
          <textarea placeholder="Share your thoughts about the event..." />
        </label>
        <button type="button" className="btn">Submit</button>
      </form>
    </div>
  );
}

export default Feedback;
