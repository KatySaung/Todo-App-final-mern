// UpdateTodo.jsx
import { useState } from 'react';
import * as todosAPI from "../../utilities/todos-api"

//ERROR Text not defined UPDATETODO NEED HELP 

export default function UpdateToDoForm({ todo, setTodo }) {
  const [credentials, setCredentials] = useState({
   todo: "",
  });
  const [error, setError] = useState(" ");

  function handleChange(evt) {
    setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
    setError(" ");
  }

  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      const updateTodo = await todosAPI.updateTodo(credentials);
      console.log(credentials)
      setUser(updateTodo);
    } catch {
      setError('Cannot Update Todo- Try Again');
    }
  }
  return (
    <div>
      <div className="form-container">
        <form autoComplete="off" onSubmit={handleSubmit} >
          <label>Text</label>
          <input type="text" placeholder="Enter text..." name="text" value={text} onChange={handleChange} required />
          <button type="submit">Update Todo</button>
        </form>
      </div>
      <p className="error-message">&nbsp;{error}</p>
    </div>
  );
}