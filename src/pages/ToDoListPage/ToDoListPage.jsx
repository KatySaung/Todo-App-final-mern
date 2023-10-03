import { useState, useEffect } from 'react';
import * as todosAPI from "../../utilities/todos-api"
import { Link } from 'react-router-dom';

// ToDoListPage: Show list of all todos in db
// function for Delete button
// NEED TRY CATCH FOR DELETE FUNCTION
function ToDoListPage() {
    const handleDelete = (id) => {
        todosAPI.deleteTodo(id);
        console.log("Delete button is clicked")
    };

    const [todos, setTodos] = useState([ ]);
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

// FILTER todos here??
    return (
        <div className="todolist">
            <h1>Show All Todos</h1>
            {
            // if (todo.userId ===  user._id)
                todos.map((todo) => {
                    
                    return (
                        <div>
                            <p>
                                {todo.task}
                                {todo.title}
                            </p>
                            <div>
                                <h2><Link to={`/todo/${todo._id}/edit`}>edit</Link></h2>
                                {/* Button: Delete */}
                                <button onClick={() => handleDelete(todo._id)}>Delete Todo</button>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ToDoListPage
