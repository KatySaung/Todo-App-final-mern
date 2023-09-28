require("dotenv").config( );
require("./config/database.cjs");
const express = require("express");
const path = require("path");
const favicon = require("serve-favicon");
const logger = require("morgan");
const ensureLoggedIn = require("./config/ensureLoggedIn.cjs")
const methodOverride = require("method-override");

const app = express( );

// Middleware
// The __dirname is saying go to final-project-mern and than go to the dist
// checkToken Middleware.(sets the req.user & req.exp properties on the request object)
// giving app middleware function to fire every single request.
app.use(logger('dev'));
app.use(express.json( ));
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, 'dist')));
app.use(require("./config/checkToken.cjs"));



  // Router setup
  const userRouter = require("./routes/api/userRoutes.cjs");
  app.use('/api/users', userRouter);

  

  const PORT = process.env.PORT || 3001;

  app.listen(PORT, ( ) => {
    console.log(`Express app running on port: ${PORT}`);
  });