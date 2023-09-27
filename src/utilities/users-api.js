import { getToken } from "./users-service";


const BASE_URL = '/api/users';

// @utilities
// Export Create User
export function signUp(userData) {
  return sendRequest(BASE_URL, 'POST', userData);
}

// Export Function User Login
// credentials is sent back to the user request
export function login(credentials) {
  return sendRequest(`${BASE_URL}/login`, 'POST', credentials);
}
// Export Function User Update
// credentials is sent back to the user request
export function update(credentials) {
  return sendRequest(`${BASE_URL}`, 'PUT', credentials);
}
// Export Function User Delete
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
  // Fetch accepts an options object as the 2nd argument
  // used to include a data payload, set headers, etc.
  // Payload is stringified into the request body
  // fetch global function https://developer.mozilla.org/en-US/docs/Web/API/fetch
  // Authorization is part of headers, so that is why it is not part of the below with fetch.
  const options = { method };
  if (payload) {
    options.headers = { 'Content-Type': 'application/json' };
    options.body = JSON.stringify(payload);
  }

  // if statement to ensure header exists
  const token = getToken()
  if (token) {
    options.headers = options.headers || {}

    // Add token to an Authorization header
    // JWT sent to server with AJAX request
    // Prefacing with 'Bearer' is recommended in the HTTP specification
    // TOKEN HAS TO BE SENT LIKE BELOW WITH THE SPACE BEFORE BEARER
    options.headers.Authorization = `Bearer ${token}`;
  }
  const backendResponse = await fetch(url, options);
  // res.ok will be false if the status code set to 4xx in the controller action
  if (backendResponse.ok) return backendResponse.json();
  throw new Error('Bad Request');

}


















/*---------Below is the same as above code but it is not following DRY----------*/
// // users-api.js
// // already created the proxy in vite.config.js so the path already goes to 'http://localhost:3001',
// // we are already inside the try/catch from SignUpForm.jsx, so here only calling a function with a function.
// const BASE_URL = "/api/users"

// export async function signUp(userData) {
//   // Fetch uses an options object as a second arg to make requests
//   // other than basic GET requests, include data, headers, etc.
//   //   here sending the user the user data
//   const backendResponse = await fetch(BASE_URL, {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     // Fetch requires data payloads to be stringified
//     // and assigned to a body property on the options object
//     // we need to use the stringify method on the argument userData
//     body: JSON.stringify(userData)
//   })

//   // the return res.json is giving back the token. The controllers api(users.cjs) sending from backend to the here the frontend (utilities users-api.js)
//   // function is a LIFO with a stack
//   if (backendResponse.ok) {
//     return backendResponse.json();
//   } else {
//     throw new Error("Invalid Sign Up");
//   }
// }


// export async function login(credentials) {
//   // Fetch uses an options object as a second arg to make requests
//   // other than basic GET requests, include data, headers, etc.
//   const backendResponse = await fetch(`${BASE_URL}/login`, {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     // Fetch requires data payloads to be stringified
//     // and assigned to a body property on the options object
//     body: JSON.stringify(credentials),
//   });

//   if (backendResponse.ok) {
//     return backendResponse.json();
//   } else {
//     throw new Error('Invalid Login');
//   }
// }