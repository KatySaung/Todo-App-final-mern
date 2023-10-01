import "./todopage.css"
import { useState } from "react"
import * as todosAPI  from "../../utilities/todos-api"


// HELP: HOW TO USE import todosAPI from utilities??
// HELP: DO I NEED TO setTODO in ToDoPage function?
function ToDoPage({ }) {
  const[todos, setTodos] = useState([ ])
  const [showInput, setShowInput] = useState(false);
  const handleClick = ( ) => {
    setShowInput(!showInput);
  };
  const handleDelete = () => {
    deleteTodo(todos._id);
  };

  function handleChange(evt) {
    setChecked(evt.target.checked);
   }

  // a onChange and e.target.value will wait for any changes in in the input field.
  // added mouseOver event to input field of Todo.

  // HELP: DELETE AND ADD TO DO NOT WORKING, NO TEXTBOX FIELD FOR ADD TO DO
  // HELP: Completed checkbox function to mark a todo, not sure if marking added todo as complete.
  return (
    
 <li>
      <div>
       <h1>Add A Todo</h1>
       <form action="/login" method="POST">
       Title: <input type="text"placeholder="Name of the Todo"onMouseOver={handleClick}
        />
        Task:<textarea rows="4" cols="30" placeholder="Type Your Todo here :)"/><br />
        <button type = "button"onClick={handleClick}>Add Todo!</button>
       </form>
      </div>
      <label>
        Complete:
        <input style={{display:showInput ? "block" :"none"}} type="checkbox" onChange={handleChange} />
      </label>
      <button onClick={handleDelete}>Delete Todo</button>
    </li>
 
);
}
export default ToDoPage

