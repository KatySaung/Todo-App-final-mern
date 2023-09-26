import { getToken } from "./users-service";



export default async function sendRequest(url, method = 'GET', payload = null) {
  // when first created this async function was in utilities>users-api.js
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