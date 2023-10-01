import "./todopage.css"
import { useState } from "react"
import * as todosAPI  from "../../utilities/todos-api"

// will throw error,white screen in browser if import todos api from utilities
// ERRORS WITH .text
// Todo page not showing elements

function ToDoPage({todo,setTodo}) {
  const[todos, setTodos] = useState([ ])
  const [showInput, setShowInput] = useState(false);
  const handleClick = ( ) => {
    setShowInput(!showInput);
  };
  const handleDelete = () => {
    props.deleteTodo(todo._id);
  };

  function handleChange(evt) {
    setChecked(evt.target.checked);
   }
  // Ternary, use map to check if there are any todos, if zero todos display no todos else add a todo.
  // a onChange and e.target.value will wait for any changes in in the input field.
  return (
    
 <li>
      <div>
       <h1>TodoPage</h1>
        <button type = "button"onClick={handleClick}>Add Todo!</button>
        <input type="text"placeholder="Enter your todo"onMouseOver={handleClick}
        />
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


// function todo
/*

  async function getTodo() {
    try {
      const showTodo = await getTodo();
      setTodo(showTodo)
    } catch (err) {
      console.log(err)
    }
    useEffect(() => {
      getshowTodo();
    }, [ ]);
  }

*/ 


// return
/*
    <>
    <h1>ToDoPage</h1>
    <ul>{Todo.map((showTodo) => {
        return<li>(showTodo.content.date)</li>
      })}
      
      </ul>
      </>
  )

*/ 