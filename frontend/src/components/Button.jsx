import React from 'react';

/**
 * Reusable button component.
 * TODO (team): extend with variants (primary/secondary/danger) as needed.
 */
function Button({ children, onClick, type = 'button', className = '' }) {
  return (
    <button type={type} className={`btn ${className}`} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
