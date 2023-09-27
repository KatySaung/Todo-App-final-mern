require("dotenv").config( );
const express = require("express");
const path = require("path");
const favicon = require("serve-favicon");
const logger = require("morgan");
const ensureLoggedIn = require("./config/ensureLoggedIn.cjs")
const methodOverride = require("method-override");

// Connect to database

require("./config/database.cjs");

const app = express( );

// Middleware
// logger middleware to log request
app.use(logger('dev'));
// middleware to parse incoming JSON data(this allows express to receive and send JSON data)
// so do not need urlencoded for POST route
app.use(express.json( ));
// Middleware use method for Override
app.use(methodOverride("_method"));

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

  const userRouter = require("./routes/api/users.cjs");
  // Router setup
  // If the request starts with /api it directs the request to the userRouter 
  app.use('/api/users', userRouter);


// catch all, sending to path.join with dirname, dist, index.html is for production only
// app.get('/*', function (req, res) {
//     res.sendFile(path.join(__dirname, 'dist', 'index.html'));
//   });

  const PORT = process.env.PORT || 3001;

  app.listen(PORT, ( ) => {
    console.log(`Express app running on port: ${PORT}`);
  });