import React from 'react';

/**
 * Simple footer shown on every page.
 */
function Footer() {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} CampusHub. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
