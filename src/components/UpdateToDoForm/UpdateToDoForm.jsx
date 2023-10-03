// UpdateTodo.jsx
import { useState } from 'react';
import * as todosAPI from "../../utilities/todos-api"


export default function UpdateToDoForm({ todo }) {
  const [credentials, setCredentials] = useState({
  todo: "",
  id: todo._id,
  });
  const [error, setError] = useState(" ");

  function handleChange(evt) {
    setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
    setError(" ");
  }

  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
    console.log("submitted")
      const updateTodo = await todosAPI.EditTodoText(credentials);
    } catch (err) {
      console.log(err)
      setError('Cannot Update Todo- Try Again');

    }
  }
  return (
    <div>
      <div className="form-container">
        <form autoComplete="off" onSubmit={handleSubmit} >
          <label>Text</label>
          <input type="text" placeholder="Enter text..." name="todo" value={credentials.todo} onChange={handleChange} required />
          <button type="submit">Update Todo</button>
        </form>
      </div>
      <p className="error-message">&nbsp;{error}</p>
    </div>
  );
}