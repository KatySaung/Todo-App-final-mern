// DeleteForm.jsx

import { useState } from 'react';
import * as usersService from '../../utilities/users-service';

export default function DeleteForm({ setUser }) {
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
  userService.logOut();
  // Update state will also cause a re-render
  props.setUser(null);
}

async function handleSubmit(evt) {
  // Prevent form from being submitted to the server
  evt.preventDefault();
  try {
    // The promise returned by the signUp service method
    // will resolve to the user object included in the
    // payload of the JSON Web Token (JWT)
    await usersService.delete(credentials);
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
        <button type="submit">Delete User Account</button>
      </form>
  
    <p className="error-message">&nbsp;{error}</p>
  </div>
);
}