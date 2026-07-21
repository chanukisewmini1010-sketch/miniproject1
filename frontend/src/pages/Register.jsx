import React, { useState } from 'react';

/**
 * Simple registration page with a role selector (ADMIN/STUDENT).
 * TODO (Member 2): connect this form to POST /api/users once implemented.
 */
function Register() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    role: 'STUDENT',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: call register API
    console.log('Register submitted', form);
  };

  return (
    <div className="page">
      <h1>Register</h1>
      <form className="form" onSubmit={handleSubmit}>
        <label>
          Full Name
          <input name="name" value={form.name} onChange={handleChange} placeholder="Jane Doe" />
        </label>
        <label>
          Email
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="you@campushub.edu"
          />
        </label>
        <label>
          Password
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            placeholder="********"
          />
        </label>
        <label>
          Role
          <select name="role" value={form.role} onChange={handleChange}>
            <option value="STUDENT">Student</option>
            <option value="ADMIN">Admin</option>
          </select>
        </label>
        <button type="submit" className="btn">Register</button>
      </form>
    </div>
  );
}

export default Register;
