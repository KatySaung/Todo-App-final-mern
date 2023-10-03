import { useState, useEffect } from 'react';
import ToDoPage from '../../pages/ToDoPage/ToDoPage.jsx';


// TodoForm: CRUD FUNCTIONS with useEffect for todos page.
// Use effect to load tasks on pages with buttons
// component to display user todos
// handle submit and handlechanges
// create a new todo

function TodoForm() {
  const [todos, setTodos] = useState([ ]);
 

  //Handler function to Create a new todo.
  const addTodo = (evt) => {
    const newTodo = {
      text: evt.target.value,
      id: Date.now(),
      completed: false,
    };

    //Create a new array with a new todo at beginning of array
    // Clear input field
    const newTodosArr = [newTodo, ...todos];
    localStorage.setItem("todos", JSON.stringify(newTodosArr))
    setTodos(newTodosArr);
    evt.target.value = '';
  };

  // Handler function for a completed todo. 
  // update complete property of todo object with object id and the state of todos array
  const completeTodo = (id, evt) => {
    const todosCopy = [...todos];
    const indexOfTodo = todosCopy.findIndex((i) => i.id === id);
    todosCopy[indexOfTodo].completed = !todosCopy[indexOfTodo].completed;
    setTodos(todosCopy);
  };

  // Handler function to edit a todo.
  const editTodoText = (id, evt) => {
    const todosCopy = [...todos];
    const indexOfTodo = todosCopy.findIndex(( i ) => i.id === id);
    todosCopy[indexOfTodo].text = evt.target.value;

    localStorage.setItem("todos", JSON.stringify(todosCopy))

    setTodos(todosCopy);
    evt.target.value = '';
  };

// Function to delete a todo
  const deleteTodo = (id) => {
    const todosCopy = [...todos];
    const indexOfTodo = todosCopy.findIndex(( i ) => i.id === id);
    todosCopy.splice(indexOfTodo, 1);

    localStorage.setItem("todos", JSON.stringify(todosCopy))

    setTodos(todosCopy);
  };

  return (
    <div>
      <h1>New To Do Form</h1>
        
    </div>
  )

}


export default TodoForm