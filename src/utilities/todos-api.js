import sendRequest from "../utilities/send-request";
const BASE_URL = '/api/todos';


// Backend Routes(need to match routes in server.cjs)
//Create todo
export function Todo(todo) {
  return sendRequest(`${BASE_URL}/create`, 'POST', todo);
}

// Read All todos
// Default Get request
export function findAllTodos( ) {
  return sendRequest(`${BASE_URL}/show`, 'GET');
}

// removed from line 15: return sendRequest(`${BASE_URL}/show`, 'GET');

// Show a single todo
// Default Get request
export function ShowTodo(id) {
  return sendRequest(`${BASE_URL}/${id}`, 'GET');
}

//Update todo
export function EditTodoText(todo) {
  return sendRequest(`${BASE_URL}`, 'PUT', todo);
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

