require("dotenv").config( );
require("./config/database.cjs");
const express = require("express");
const path = require("path");
const favicon = require("serve-favicon");
const logger = require("morgan");
const ensureLoggedIn= require("./config/ensureLoggedIn.cjs")

const app = express( );

// Middleware
// The __dirname is saying go to final-project-mern and than go to the dist
// checkToken Middleware.(sets the req.user & req.exp properties on the request object)
// giving app middleware function to fire every single request.
app.use(logger('dev'));
app.use(express.json( ));
app.use(express.static(path.join(__dirname, 'dist')));
app.use(require("./config/checkToken.cjs"));



  // Backend Router setup 
  // (see: Utilities> todos-api)
  const users = require("./routes/api/users.cjs");
  app.use('/api/users', users);


 // ensureLoggedIn makes all  /todo routes protected by login
//  const todos = require("./routes/api/todos.cjs");
// put back line 32, after testing.
// app.use('/api/todos', ensureLoggedIn, require("./routes/api/todos.cjs"))
app.use('/api/todos', require("./routes/api/todos.cjs"))


// catch all
  app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
  });


  const PORT = process.env.PORT || 3001;

  app.listen(PORT, ( ) => {
    console.log(`Express app running on port: ${PORT}`);
  });