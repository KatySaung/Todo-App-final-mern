import sendRequest from "../utilities/send-request";
const BASE_URL = '/api/todos';

// NEED TO FIX FUNCTIONS
// @utilities
//Create todo
export function Todo(todoId) {
  return sendRequest(`${BASE_URL}/login/create${todoId}`, 'POST');
}

// Read All todos
// Default Get request
export function FindAllTodos( ) {
  return sendRequest(BASE_URL);
}

// Show a single todo
// Default Get request
export function ShowTodo(id) {
  return sendRequest(`${BASE_URL}/${id}`);
}

//Update todo
export function EditTodoText( editId) {
  return sendRequest(`${BASE_URL}/login/:id/show`, 'PUT', { editId });
}

// Delete todo
export function DeleteTodo( ) {
  return sendRequest(`${BASE_URL}`, 'DELETE');
}

// checkToken
// not sending any data
export function checkToken( ) {
  return sendRequest(`${BASE_URL}/check-token`);
}

