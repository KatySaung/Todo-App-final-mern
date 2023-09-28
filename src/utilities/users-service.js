import * as usersAPI from "./users-api"


// users-service.js
//Create User function
export async function createUser (userData) {
  const token = await usersAPI.createUser(userData);
localStorage.setItem("token", token)
  return getUser( );
}

// Login function
export async function login (credentials){
  const token = await usersAPI.login(credentials);
  localStorage.setItem("token", token)
  return getUser( )
}

// @utilities>users-service.js
// Update User Login
export async function updateUser (credentials){
  const token = await usersAPI.updateUser (credentials);
  localStorage.setItem("token", token)
  return getUser( )
}

// @utilities>users-service.js
// Delete User Login
export async function deleteUser (credentials){
  await usersAPI.deleteUser(credentials);
}

// @utilities>users-services
// getToken function
export function getToken( ){
  const token = localStorage.getItem("token");
  if (!token) return null;
  const payload = JSON.parse(atob(token.split('.')[1]));
  // A JWT's exp is expressed in seconds, not milliseconds, so convert
if (payload.exp < Date.now( ) / 1000 ) {
  localStorage.removeItem("token");
  return null;
  }
  return token;
}

// getUser function
export function getUser ( ){
  const token = getToken( ) 
  return token ? JSON.parse(atob(token.split('.')[1])).user : null;
}

export function logOut( ){
  localStorage.removeItem("token");
}

// checkToken function is returning the response from backendUser in users-api.js
export function checkToken() {
  return usersAPI.checkToken()
    .then(dateStr => new Date(dateStr)
    );
}