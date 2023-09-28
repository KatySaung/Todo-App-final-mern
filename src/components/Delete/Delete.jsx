
import { useState } from 'react';
import * as usersService from '../../utilities/users-service';


export default function Delete({ user, setUser }) {
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',

  });
  const [error, setError] = useState('');

  function handleChange(evt) {
    setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
    setError('');
  }
    // handleLogOut 
   const handleLogOut = () => {
    usersService.logOut();
    setUser(null);
  }
  async function handleSubmit(evt) {
    // Prevent form from being submitted to the server
      // payload of the JSON Web Token (JWT)
    evt.preventDefault();
    try {
      await usersService.deleteUser(credentials);
      handleLogOut();
    } catch (err) {
      console.log(err)
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