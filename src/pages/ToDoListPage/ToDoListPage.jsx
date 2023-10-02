import { useState, useEffect } from 'react';
import * as todosAPI from "../../utilities/todos-api"

// ToDoListPage: Show list of all todos in db
// No elements on page. need to define todo
// Is this correct?(refer to OrderHistoryPage in merncafe)
function ToDoListPage() {

    
  // function for Delete button
  const handleDelete = (id) => {
    todosAPI.deleteTodo(id);
    console.log("Delete button is clicked")
  };

    const [todos, setTodos] = useState([]);
    const [newTodos, setNewTodos] = useState(null)
    useEffect(() => {
        async function fetchToDoListPage() {
            try {
                const todos = await todosAPI.findAllTodos()
                setTodos(todos)
                console.log(todos)
            } catch (err) {
                console.log(err)
            }
        }
        fetchToDoListPage()
    }, [])

    // NEED TO Declare handleclick functions for buttons (Defined button function below). (handleClick is in ToDoPage)
    // map over all todos with button functions(delete,edit,add)
    // NEED TO have all todos listed here also.
    return (
        <div className="todolist">
            <h1>Show All Todos</h1>
            {
                todos.map((todo) => {
                    return (
                        <div>
                            <p>
                                {todo.text}
                            </p>
                            <div>
                                {/* Buttons: Edit and Delete */}
                                <button onClick={() => TodoEdit(todo._id)}>Edit</button>
                                <button onClick={() => handleDelete(todo._id)}>Delete</button>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ToDoListPage
