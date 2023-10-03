import UpdateToDoForm from "../../components/UpdateToDoForm/UpdateToDoForm.jsx"

function UpdateTodoPage({ todo, setTodo }) {
  
    return (
      <>
      <h1>Update Todo</h1>
      <UpdateToDoForm todo={todo} setTodo={setTodo} />
      </>
    )
  }
  
  export default UpdateTodoPage