const express = require("express");
const router = express.Router( );
const usersCtrl = require("../../controllers/api/Users.cjs");
const ensureLoggedIn = require("../../config/ensureLoggedIn.cjs")


// receive controller user functions
// giving this post route the create function from controller, so not invoking the .create function
// Create new User Account Login
// @route /api/users
// QUESTION: why is Create user a post request? IF a get request there is validator error. B/C it needs token first?
router.post("/",usersCtrl.create);

// Read User Account Login
// @route api/users/login
// POST REQUEST ROUTE GETTING BAD CREDENTIALS in postman
router.post("/login", usersCtrl.login);

// Update User Account Login
// @route api/users/id number
router.put("/:id",usersCtrl.update);

// Delete User Account Login
// @route api/users/id number
router.delete("/:id",usersCtrl.deleteUser);

// Get check-token for user login
router.get("/check-token", ensureLoggedIn, usersCtrl.checkToken);



module.exports = router;