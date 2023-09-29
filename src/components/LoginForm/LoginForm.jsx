// LoginForm.jsx

import { useState } from 'react';
import * as usersService from '../../utilities/users-service';

export default function LoginForm({ setUser }) {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');

  function handleChange(evt) {
    setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
    setError('');
  }

  async function handleSubmit(evt) {
    // Prevent form from being submitted to the server
    evt.preventDefault();
    try {
      const user = await usersService.login(credentials);
      setUser(user);
    } catch {
      setError('Log In Failed - Try Again');
    }
  }

  return (
    
      <div className="form-container" >
        <form autoComplete="off" onSubmit={handleSubmit} >
          <label>Email</label>
          <input type="text" placeholder="Enter email to login..." name="email" value={credentials.email} onChange={handleChange} required />
          <label>Password</label>
          <input type="password" placeholder="Enter password to login..." name="password" value={credentials.password} onChange={handleChange} required />
          <button type="submit">LOG IN</button>
        </form>
        <p className="error-message">&nbsp;{error}</p>
      </div>
      
  
  );
}