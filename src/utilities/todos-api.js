import sendRequest from "../utilities/send-request"
const BASE_URL = '/api/todos';

// NEED TO FIX FUNCTIONS
// @utilities
//Create todo
export function Todo(newtodo) {
  return sendRequest(BASE_URL, 'POST', newtodo);
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
export function EditTodoText( ) {
  return sendRequest(`${BASE_URL}`, 'PUT');
}

// Delete todo
export function DeleteTodo( ) {
  return sendRequest(`${BASE_URL}`, 'DELETE');
}

// checkToken
// not sending any data
export function checkToken( ) {
  return sendRequest(`${BASE_URL}/check-token`)
}


