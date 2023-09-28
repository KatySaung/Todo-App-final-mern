const express = require("express");
const router = express.Router( );
const jobsCtrl = require("../../controllers/api/JobController.cjs")



// Put API test routes here, before the "catch all" route 
// will see this in path localhost:3001/test route in browser
// CRUD functions for job posts
router.get('/', (req, res) => {
    res.json({message:"Create Job Posts"})
  });
router.post('/', (req, res) => {
    res.json({message:"Read Job Posts"})
  });
 router.put('/:id', (req, res) => {
    res.json({message:"Update Job Posts"})
  });
 router.delete('/:id', (req, res) => {
    res.json({message:"Delete Job Posts"})
  });

  module.exports = router;  
  