// config/ensureLoggedIn.js

module.exports = function(req, res, next) {
    // This is for any protected route.
    // Status code of 401 is Unauthorized, it gets sent to json as unauthorized and gets sent to next
    // Can use it within any router module with routes that need to ensure that there's a logged in user.
    if (!req.user) return res.status(401).json('Unauthorized');
    // A okay
    next( );
  };