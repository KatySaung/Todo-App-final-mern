// config/checkToken.cjs
// Backend checkToke
const jwt = require('jsonwebtoken');

// Middleware runs between request and response.
// After Middleware runs, the controller will run next. Controller runs AFTER Middleware. 
// Next is the next step that is in line, sometimes next will be a few more middlewares before the controller.
module.exports = function(req, res, next) {
  // Check for the token being sent in a header or as a query parameter
//   req.get is getting the value of the authorization in the header
  let token = req.get('Authorization') || req.query.token;
  if (token) {
    // Remove the 'Bearer ' if it was included in the token header
    // Below empty space needs to be there to grab the token in ('Bearer ',")
    token = token.replace('Bearer ', '');
    // Check if token is valid and not expired
    // if error below, something is wrong with token 
    jwt.verify(token, process.env.SECRET, function(err, decoded) {
      // If valid token, decoded will be the token's entire payload
      // If invalid token, err will be set to null.
    //   If no error than token will go to else block
    //  this code is same as below if statement with err req.user = err ? null : decoded.user;  
    if (err) {
        req.user = null
    } else {
        // decoded user === the user in the token's payload
        req.user = decoded.user
    }
      // If your app cares... (optional)
    //   here reassigning the expiration property, creating a date instance
    // date the token expired set to seconds
      req.exp = err ? null : new Date(decoded.exp * 1000);  
      return next();
    });
  } else {
    // No token was sent
    // req.user is creating a user property. set it to null.
    req.user = null;
    return next( );
  }
};