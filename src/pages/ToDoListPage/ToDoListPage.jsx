import { useState, useEffect } from 'react';
import * as todosAPI from "../../utilities/todos-api"
import { Link } from 'react-router-dom';
import UpdateToDoForm from '../../components/UpdateToDoForm/UpdateToDoForm.jsx';


// ToDoListPage: Show list of all todos in db
// REMOVED DELETE BUTTON AND EDIT BUTTON FROM SHOW PAGE. NEED DELETE AND UPDATE FUNCTION FOR TODOs
// NEED TRY CATCH FOR DELETE FUNCTION
// ERROR: Each child in list should have unique "key" prop-Check line 29 fetch request
// HELP: CHECKBOX NOT WORKING
export default function ToDoListPage() {
    // const handleDelete = (id) => {
    //     todosAPI.deleteTodo(id);
    //     console.log("Delete button is clicked")
    // };

    const [todos, setTodos] = useState([]);
    const [newTodos, setNewTodos] = useState(null)
    useEffect(() => {
        async function fetchToDoListPage() {
            try {
                const todos = await todosAPI.findAllTodos({})
                //const todos = await todosAPI.findAllTodos( )
                setTodos(todos)
                console.log(todos)
            } catch (err) {
                console.log(err)
            }
        }
        fetchToDoListPage()
    }, [])

    // map over all todos with button functions(delete,edit,add)

    // FILTER todos here??
    // HELP: ALL USERS SHARING SAME TODO!!
    // HELP: checkbox not working and still E1100 duplicate key error.
    return (
            <div className="todolist">
                <h1>Show All Todos</h1>
                {todos.map((todo, index) => (
                    <p key={index}>
                        {todo.title}:
                        {todo.task}
                        <input type="checkbox" />
                    </p>
                ))}
            </div>
       
    )

}
