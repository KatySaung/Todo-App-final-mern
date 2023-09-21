// users-service.js
// the form data is collecting the userdata
// this will get the token and put in localstorage(backend)
// below with asterisk is importing everything from users-api.js
import * as usersAPI from "./users-api"

export async function signUp (userData) {
    // Delegate the network request code to the users-api.js API module
    // which will ultimately return a JSON Web Token (JWT)
    // delegating the AJAX request. We are expecting a token to come back from this function
    // This is the frontend receiving the response from the backend(token) and persist(Step 3)
  const token = await usersAPI.signUp(userData);
  
  // Persisting the token here in localstorage, using key value pairs of token.
localStorage.setItem("token", token)

// Baby step by returning whatever is sent back by the server
  return getUser( );

}
export async function login (credentials){
  const token = await usersAPI.login(credentials);



  // Persist the token
  localStorage.setItem("token", token)

  return getUser( )
}

export function getToken( ){
  // getItem returns null if there's no string
  const token = localStorage.getItem("token");

  if (!token) return null;

  // we decode this with atob so it will be a stringified object, so next need to parse it back to an object.
  const payload = JSON.parse(atob(token.split('.')[1]));

  // A JWT's exp is expressed in seconds, not milliseconds, so convert
if (payload.exp < Date.now( ) / 1000 ) {
  localStorage.removeItem("token");
  return null;
  }
  return token;
}

export function getUser ( ){
  const token = getToken( ) //either returns the token if exists and valid or return null
//const payload = JSON.parse(atob(token.split(" . ") [1]))

  return token ? JSON.parse(atob(token.split('.')[1])).user : null;
}

export function logOut( ){
  localStorage.removeItem("token");
}

// checkToken is returning the response from backendUser in users-api.js
export function checkToken() {
  // Just so that you don't forget how to use .then
  return usersAPI.checkToken()
    // checkToken returns a string, but let's
    // make it a Date object for more flexibility
    .then(dateStr => new Date(dateStr)
    );
}