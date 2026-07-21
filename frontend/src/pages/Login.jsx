import React, { useState } from 'react';

/**
 * Simple login page (no JWT / Spring Security yet).
 * TODO (Member 2): connect this form to POST /api/users/login (or similar)
 * once authentication logic is implemented.
 */
function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: call login API
    console.log('Login submitted', { email, password });
  };

  return (
    <div className="page">
      <h1>Login</h1>
      <form className="form" onSubmit={handleSubmit}>
        <label>
          Email
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@campushub.edu"
          />
        </label>
        <label>
          Password
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="********"
          />
        </label>
        <button type="submit" className="btn">Login</button>
      </form>
    </div>
  );
}

export default Login;
