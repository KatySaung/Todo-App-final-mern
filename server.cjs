require("dotenv").config( );
require("./config/database.cjs");
const express = require("express");
const path = require("path");
const favicon = require("serve-favicon");
const logger = require("morgan");

const app = express( );

// Middleware
// The __dirname is saying go to final-project-mern and than go to the dist
// checkToken Middleware.(sets the req.user & req.exp properties on the request object)
// giving app middleware function to fire every single request.
app.use(logger('dev'));
app.use(express.json( ));
app.use(express.static(path.join(__dirname, 'dist')));
app.use(require("./config/checkToken.cjs"));



  // Router setup
  // Backend: API route test
  const users = require("./routes/api/users.cjs");
  app.use('/api/users', users);

const todos = require("./routes/api/todos.cjs");
app.use('/api/todos', todos);

  app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
  });


  const PORT = process.env.PORT || 3001;

  app.listen(PORT, ( ) => {
    console.log(`Express app running on port: ${PORT}`);
  });