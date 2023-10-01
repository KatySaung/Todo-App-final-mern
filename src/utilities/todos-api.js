import sendRequest from "../utilities/send-request";
const BASE_URL = '/api/todos';

// NEED TO FIX FUNCTIONS
// Backend Routes(need to match routes in server.cjs)
//Create todo
export function Todo(todoId) {
  return sendRequest(`${BASE_URL}/login/create`, 'POST', todoId);
}

// Read All todos
// Default Get request
export function FindAllTodos( ) {
  return sendRequest(`${BASE_URL}/ `, 'GET');
}

// Show a single todo
// Default Get request
export function ShowTodo(id) {
  return sendRequest(`${BASE_URL}/${id}`, 'GET');
}

//Update todo
export function EditTodoText(id, editId) {
  return sendRequest(`${BASE_URL}/login/${id}/update`, 'PUT', editId);
}

// Delete todo
export function DeleteTodo(id) {
  return sendRequest(`${BASE_URL}/${id}/delete`, 'DELETE', id);
}

// checkToken
// not sending any data
export function checkToken( ) {
  return sendRequest(`${BASE_URL}/check-token`);
}

