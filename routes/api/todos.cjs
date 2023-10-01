const express = require("express");
const router = express.Router( );
const todosCtrl = require("../../controllers/api/TodoController.cjs");
const ensureLoggedIn = require("../../config/ensureLoggedIn.cjs")
// Do i need to require userController and set to variable const usersCtrl like in routes>api>users.cjs to make sure user is logged in to make these changes or not needed??

// Test:  /api/todos (see utilities in src> todos-api)
// INDUCES: 7 restful routes for CRUD
// Index: Show ALL todos of model
//WORKING
router.get("/", todosCtrl.findAllTodos)

// New: Show form to create a new todo
// HELP: NOT WORKING 
router.get("/login/new", todosCtrl.show);

// Delete: Remove todo from db
// Working
router.delete("/:id/delete", todosCtrl.deleteTodo)
 
// Update: Updates the todo from Edit form
// HELP: NOT WORKING
router.put("/login/:id/update", todosCtrl.editTodoText);

// Create: Creates a new todo from the new form
// WORKING
router.post("/login/create", todosCtrl.todo)

// Edit: Show form to update a todo
// HELP: NOT WORKING
router.get("/login/:id/edit", todosCtrl.show);

// Show: Show a todo
// HELP: NOT WORKING
router.get("/:id", todosCtrl.show)



// Get check-token for user login
// User needs to be logged in to access all todos and actions
// DO I NEED usersCtrl.checkToken in below like on link22 in routes>api>users.cjs???
router.get("/check-token", ensureLoggedIn);


module.exports = router;