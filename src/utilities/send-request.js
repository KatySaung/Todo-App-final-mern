import { getToken } from "./users-service";


export default async function sendRequest(url, method = 'GET', payload = null) {
     const options = { method };
    if (payload) {
      options.headers = { 'Content-Type': 'application/json' };
      options.body = JSON.stringify(payload);
    }
  
    // if statement to ensure header exists
    const token = getToken()
    if (token) {
      options.headers = options.headers || {}
      options.headers.Authorization = `Bearer ${token}`;
    }
    const backendResponse = await fetch(url, options);
    // res.ok will be false if the status code set to 4xx in the controller action
    if (backendResponse.ok) return backendResponse.json();
    throw new Error('Bad Request');
  
  }