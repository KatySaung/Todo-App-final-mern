// UpdateForm.jsx

import { useState } from 'react';
import * as usersService from '../../utilities/users-service';


export default function UpdateForm({ setUser }) {
const [credentials, setCredentials] = useState({
  email: '',
  password: '',
  id: usersService._id,
});
const [error, setError] = useState('');

function handleChange(evt) {
  setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
  setError('');
}

// handleLogOut 
const handleLogOut = () => {
  // Delegate to the users-service
  usersService.logOut();
  // Update state will also cause a re-render
  props.setUser(null);
}
async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      await usersService.update(credentials);
      setUser(null);
    } catch {
      setError('Delete Account Unsuccessful - Try Again');
    }
  }
  return (
    <div>
   
        <form autoComplete="off" onSubmit={handleSubmit} >
          <label>Email</label>
          <input type="text" name="email" value={credentials.email} onChange={handleChange} required />
          <label>Password</label>
          <input type="password" name="password" value={credentials.password} onChange={handleChange} required />
          <button type="submit">UpdateUser Account</button>
        </form>
    
      <p className="error-message">&nbsp;{error}</p>
    </div>
  );
  }