require("dotenv").config( );
const express = require("express");
const path = require("path");
const favicon = require("serve-favicon");
const logger = require("morgan");
const ensureLoggedIn = require("./config/ensureLoggedIn.cjs")

// Connect to database
// require the file is running and bringing in the file at the same time.
require("./config/database.cjs");

const app = express( );

// Middleware
// logger middleware to log request
app.use(logger('dev'));
// middleware to parse incoming JSON data(this allows express to receive and send JSON data)
// don't need form submission's here so do not need express.urlencoded(), because we will use AXIOS or Fetch
app.use(express.json( ));

// created path here /api/users for the api user.cjs. Can name this path anything like api/users/whatever
// const userController = require("./routers/api/user.cjs")
// app.use("/api/users", userRouter);

// Configure both serve-favicon & static middleware
// to serve from the production 'build' folder
// https://www.favicon.cc/
// app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
// below the express.static is making build folder a static asset, changed build to 'dist'.
// The __dirname is saying go to final-project-mern and than go to the dist
app.use(express.static(path.join(__dirname, 'dist')));

// checkToken Middleware.(sets the req.user & req.exp properties on the request object)
// giving app middleware function to fire every single request.
app.use(require("./config/checkToken.cjs"));


// Put API routes here, before the "catch all" route for production code in server localhost:3001
// will see this in path localhost:3001/test route in browser
app.get('/api/test', (req, res) => {
  res.send('You just hit a API route');
});

// TEST REDIRECT from Login route. QUESTION: IS 2nd CATCH ALL HERE OK?
// app.get("/*", (req, res) => {
//   res.redirect("/api/test");
// });


  const userRouter = require("./routes/api/users.cjs");
  // Router setup
  // If the request starts with /api it directs the request to the userRouter 
  app.use('/api/users', userRouter);

// The following "catch all" route (note the *) is necessary
// to return the index.html on all non-AJAX requests
// This below code is a catch all, sending to path.join with dirname, dist, index.html is for production only
app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
  });



  const PORT = process.env.PORT || 3001;

  app.listen(PORT, ( ) => {
    console.log(`Express app running on port: ${PORT}`);
  });