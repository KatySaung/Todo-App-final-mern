const express = require("express");
const router = express.Router( );
const usersCtrl = require("../../controllers/api/UserController.cjs");
const ensureLoggedIn = require("../../config/ensureLoggedIn.cjs")


// CRUD functions user account
// Create new User Account Login route
router.post("/", usersCtrl.signUp)

// To login page
router.post("/login",usersCtrl.login);

// Update User Account Login 
router.put("/", usersCtrl.updateUser)
 
// Delete User Account Login 
router.delete("/",usersCtrl.deleteUser);


// Get check-token for user login
router.get("/check-token", ensureLoggedIn, usersCtrl.checkToken);


module.exports = router;