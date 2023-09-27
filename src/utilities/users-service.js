// users-service.js
// the form data is collecting the userdata
// this will get the token and put in localstorage(backend)
// below with asterisk is importing everything from users-api.js
import * as usersAPI from "./users-api"

export async function signUp (userData) {
  const token = await usersAPI.signUp(userData);
localStorage.setItem("token", token)
  return getUser( );

}
export async function login (credentials){
  const token = await usersAPI.login(credentials);
  localStorage.setItem("token", token)
  return getUser( )
}

// @utilities>users-service.js
// Update User Login

export async function update (credentials){
  const token = await usersAPI.update(credentials);
  localStorage.setItem("token", token)
  return getUser( )
}

// @utilities>users-service.js
// Delete User Login
export async function deleteUser (credentials){
  await usersAPI.deleteUser(credentials);
}

// @utilities>users-services
// getToken
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

export function getUser ( ){
  const token = getToken( ) 
  return token ? JSON.parse(atob(token.split('.')[1])).user : null;
}

export function logOut( ){
  localStorage.removeItem("token");
}

// checkToken is returning the response from backendUser in users-api.js
export function checkToken() {
  return usersAPI.checkToken()
    .then(dateStr => new Date(dateStr)
    );
}