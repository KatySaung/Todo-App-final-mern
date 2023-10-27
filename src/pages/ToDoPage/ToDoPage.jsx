import { useState, useEffect } from "react";
import * as todosAPI from "../../utilities/todos-api"

// ToDoPage: Add to with completed checkbox
function ToDoPage({ user }) {
  const [error, setError] = useState('');
  const [todo, setTodo] = useState('');
  const [credentials, setCredentials] = useState({
    title: "",
    task: "",
    taskCompleted: false,
    // date: "",

  });

  // textbox function
  const [showInput, setShowInput] = useState(false);
  const handleClick = () => {
    setShowInput(!showInput);
    console.log("Text box on ToDoPage")
  };

  // function for Add a todo button
  // Update function for adding todo
  // HELP:::Still not rendering or clearing from page after a todo is added. Will stay on same Add Todo page.
  async function handleSubmit(evt) {
    evt.preventDefault();
    setTodo([...todo, { textarea: todo}]);
    try {
      const createTodo = await todosAPI.Todo(credentials)
    } catch (err) {
      setError('Cannot Create Todo- Try Again');
    }
  }
 
  function handleChange(evt) {
    setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
    setError('');
  }

  return (
   
      <div>
        <h1>Add Todo</h1>
        <form onSubmit={handleSubmit}>
          <label>Title:</label>
          <input type="text" placeholder="Name of the Todo" name="title" value={credentials.title} onChange={handleChange} required />
          <label>Task:</label>
          <textarea rows="4" cols="30" placeholder="Type Your Todo here :)" name="task" value={credentials.task} onChange={handleChange} required /><br />
          <button onClick={handleSubmit}>Add Todo!</button>
        </form>
      </div>
  );
}
export default ToDoPage

