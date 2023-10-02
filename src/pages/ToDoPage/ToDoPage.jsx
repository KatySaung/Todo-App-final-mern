import { useState } from "react";
import * as todosAPI from "../../utilities/todos-api"

// ToDoPage: Add a todo, Complete checkbox a todo with list, Delete a todo button.
// bring in CRUD functions of todo from TodoForm here
// handle the changes in state of the input,button, checkbox here
function ToDoPage(props) {

  // const [todo, setTodo] = useState({

  // })

  // textbox function
  const [showInput, setShowInput] = useState(false);
  const handleClick = () => {
    setShowInput(!showInput);
    console.log("Text box on ToDoPage")
  };


  // // function for Delete button
  
  const handleDelete = () => {
    props.deleteTodo(props.todo.id);
    console.log("Delete button is clicked")
  };

  // function for Add a todo button(submit todo)
  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log("Submit button is clicked");
  }

  // Button: Add a Todo
  // DO I NEED if statement after button is pressed to edit text and handle change in state? 
  return (
    <li>
      <div>
        <h1>Add Todo</h1>

        <form action="/login" method="POST">
          Title: <input type="text" placeholder="Name of the Todo" onMouseOver={handleClick}
          />
          Task:<textarea rows="4" cols="30" placeholder="Type Your Todo here :)" /><br />
          <label>
            {/* 
            function handleTaskCompleted(evt){
              set
            }
            Is Task Completed:
            <input style={{ display: showInput ? "block" : "none" }} 
            type="checkbox" checked={props.todo.taskCompleted} 
            onChange={handleTaskCompleted} 
            /> */}
          </label>
          Date:<input type="number" />
          <button type="submit" onClick={handleSubmit}
          // if (evt.button ==="clicked") {addTodo(evt)}; <---NEED IF STATEMENT BUTTON EVT?
          >Add Todo!</button>

          {/* Delete a todo. Delete button.Button is now on ToDoListPage */}
          <button onClick={handleDelete}>Delete</button>
        </form>
      </div>
    </li>

  );
}
export default ToDoPage

