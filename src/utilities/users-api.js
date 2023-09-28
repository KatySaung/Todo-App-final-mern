import { getToken } from "./users-service";

const BASE_URL = '/api/users';

// @utilities
// Create User
export function createUser(userData) {
  return sendRequest(`${BASE_URL}`, 'POST', userData);
}

//  User Login
// credentials is sent back to the user request
export function login(credentials) {
  return sendRequest(`${BASE_URL}/login`, 'POST', credentials);
}
// User Update
// credentials is sent back to the user request
export function updateUser(credentials) {
  return sendRequest(`${BASE_URL}`, 'PUT', credentials);
}
// User Delete
// credentials is sent back to the user request
export function deleteUser(credentials) {
  return sendRequest(`${BASE_URL}`, 'DELETE', credentials);
}

// checkToken
// not sending any data
export function checkToken() {
  return sendRequest(`${BASE_URL}/check-token`)
}


/*--- Helper Functions ---*/

async function sendRequest(url, method = 'GET', payload = null) {
  const options = { method };
  if (payload) {
    options.headers = { 'Content-Type': 'application/json' };
    options.body = JSON.stringify(payload);
  }

  // if statement to ensure header exists
  const token = getToken()
  if (token) {
    options.headers = options.headers || { }
    options.headers.Authorization = `Bearer ${token}`;
  }
  const backendResponse = await fetch(url, options);
  // res.ok will be false if the status code set to 4xx in the controller action
  if (backendResponse.ok) return backendResponse.json();
  throw new Error('Bad Request');

}
