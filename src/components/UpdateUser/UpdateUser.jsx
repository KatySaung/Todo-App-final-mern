// UpdateForm.jsx

import { useState } from 'react';
import * as usersService from '../../utilities/users-service';


export default function UpdateUser({ user, setUser }) {
  const [credentials, setCredentials] = useState({
    email: "",
    id: user._id
  });
  const [error, setError] = useState(" ");

  function handleChange(evt) {
    setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
    setError(" ");
  }

  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      const updateUser = await usersService.updateUser(credentials);
      console.log(credentials)
      setUser(updateUser);
    } catch {
      setError('Cannot Update Account- Try Again');
    }
  }
  return (
    <div>
      <div className="form-container">
        <form autoComplete="off" onSubmit={handleSubmit} >
          <label>Email</label>
          <input type="email" placeholder="Enter new email here..." name="email" value={credentials.email} onChange={handleChange} required />
          <button type="submit">Updated Email</button>
        </form>
      </div>
      <p className="error-message">&nbsp;{error}</p>
    </div>
  );
}