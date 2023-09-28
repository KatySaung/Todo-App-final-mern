const express = require("express");
const router = express.Router( );
const usersCtrl = require("../../controllers/api/UserController.cjs");
const ensureLoggedIn = require("../../config/ensureLoggedIn.cjs")


// Put API test routes here, before the "catch all" route 
// will see this in path localhost:3001/test route in browser
// CRUD functions for job posts
router.get('/', (req, res) => {
    res.json({message:"Create Job Posts"})
  });
  app.post('/', (req, res) => {
    res.json({message:"Read Job Posts"})
  });
  app.put('/:id', (req, res) => {
    res.json({message:"Update Job Posts"})
  });
  app.delete('/:id', (req, res) => {
    res.json({message:"Delete Job Posts"})
  });

//   module.exports = router;  //ALREADY exporting router for userRoutes??
  