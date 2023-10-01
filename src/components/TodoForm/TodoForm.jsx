import { useState, useEffect } from 'react';



// TodoForm: CRUD FUNCTIONS with useEffect for todos page.
// Use effect to load tasks on pages with buttons



// do i need to create file in utilities services and import it her like signup form??
// component to display user todos
// handle submit and handlechanges
// create a new todo

//  Create the state variable and setter function by calling/invoking the useState function. The argument given to the useState func. is the starting value of the state.
const [todos, setTodos] = useState([]);
  
useEffect(() => {
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos && savedTodos !== "undefined" && savedTodos !== "null") {
      setTodos(JSON.parse(savedTodos));
    }
  }, []);

  // the handler function for adding a todo, to the todo state
  // handleAddTodo
  const addTodo = (evt) => {
    const newTodo = {
        text: evt.target.value,
        id: Date.now(),
        completed: false,
      };

  //Create a new array to avoid the pass by reference error and put our newly created todo at the beginning of the new array
      // set our state to the new modified todo array
        // reset the input field back to nothing.
  const newTodosArr = [newTodo, ...todos];
  localStorage.setItem("todos", JSON.stringify(newTodosArr))
  setTodos(newTodosArr);
  evt.target.value = '';
};

  // Create handler function for updating the completed property of the specifc todo object
  // Making a copy of the todos state, to aviod pass by reference error
      // finding the index based on the ID passed into this function
    // that is the todo you want to update
       // change the completed property to the opposite of what is is.
       // set the state of the newly modified todos array.
const completeTodo = (id, e) => {
    const todosCopy = [...todos];
    const indexOfTodo = todosCopy.findIndex((i) => i.id === id);
    todosCopy[indexOfTodo].completed = !todosCopy[indexOfTodo].completed;
    setTodos(todosCopy);
};

const editTodoText = (id, evt) => {
    const todosCopy = [...todos];
    const indexOfTodo = todosCopy.findIndex((i) => i.id === id);
    todosCopy[indexOfTodo].text = evt.target.value;

    localStorage.setItem("todos", JSON.stringify(todosCopy))

    setTodos(todosCopy);
    evt.target.value = '';
  };


  const deleteTodo = (id) => {
    const todosCopy = [...todos];
    const indexOfTodo = todosCopy.findIndex((i) => i.id === id);
    todosCopy.splice(indexOfTodo, 1);

    localStorage.setItem("todos", JSON.stringify(todosCopy))

    setTodos(todosCopy);
  };

function TodoForm() {
    return (
        <div>
            <TodoList
                todos={todos}
                addTodo={addTodo}
                completeTodo={completeTodo}
                editTodoText={editTodoText}
                deleteTodo={deleteTodo}
            />
        </div>
    )
}



export default TodoForm