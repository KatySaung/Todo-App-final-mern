const express = require("express");
const router = express.Router( );
// need to put the extension here .cjs
const usersCtrl = require("../../controllers/api/Users.cjs");
const ensureLoggedIn = require("../../config/ensureLoggedIn.cjs")
// const ctrl = (req, res) => {

// }

// router.get("/blah", ctrl)

// giving this post route the create function which is the controller(will be in controller folder), so not invoking the .create function
// /api/users from server.cjs
// appends this path to the app.use path in the server
router.post("/",usersCtrl.create);

// /api/users/login
router.post("/login", usersCtrl.login);

router.get("/check-token", ensureLoggedIn, usersCtrl.checkToken);



module.exports = router;