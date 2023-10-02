import sendRequest from "../utilities/send-request";
const BASE_URL = '/api/todos';


// Backend Routes(need to match routes in server.cjs)
//Create todo
export function Todo(todoId) {
  return sendRequest(`${BASE_URL}/create`, 'POST', todoId);
}

// Read All todos
// Default Get request
export function findAllTodos( ) {
  return sendRequest(`${BASE_URL}/show`, 'GET');
}

// Show a single todo
// Default Get request
export function ShowTodo(id) {
  return sendRequest(`${BASE_URL}/${id}`, 'GET');
}

//Update todo
export function EditTodoText(id, editId) {
  return sendRequest(`${BASE_URL}/${id}/update`, 'PUT', editId);
}

// Delete todo
export function deleteTodo(id) {
  return sendRequest(`${BASE_URL}/${id}/delete`, 'DELETE');
}

// checkToken
// not sending any data
export function checkToken( ) {
  return sendRequest(`${BASE_URL}/check-token`);
}

