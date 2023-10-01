const express = require("express");
const router = express.Router( );
const todosCtrl = require("../../controllers/api/TodoController.cjs");
const ensureLoggedIn = require("../../config/ensureLoggedIn.cjs")
// Do i need to require userController and set to variable const usersCtrl like in routes>api>users.cjs to make sure user is logged in to make these changes or not needed??

// Test:  /api/todos,
// INDUCES: 7 restful routes for CRUD
// Index: Show ALL todos of model
// HELP: GET ROUTES NOT WORKING
router.get("/login/index", todosCtrl.findAllTodos)

// New: Show form to create a new todo
// HELP: NOT WORKING 
router.get("/login/new", todosCtrl.showTodo);

// Delete: Remove todo from db
// Working
router.delete("/login/:id/delete", todosCtrl.deleteTodo)
 
// Update: Updates the todo from Edit form
// Working
router.put("/login/:id/update", todosCtrl.editTodoText);

// Create: Creates a new todo from the new form
// Working
router.post("/login/create", todosCtrl.todo)

// Edit: Show form to update a todo
// HELP: NOT WORKING
router.get("/login/:id/edit", todosCtrl.showTodo);

// Show: Show a todo
// HELP: NOT WORKING
router.get("/login/:id/show", todosCtrl.showTodo)



// Get check-token for user login
// User needs to be logged in to access all todos and actions
// DO I NEED usersCtrl.checkToken in below like on link22 in routes>api>users.cjs???
router.get("/check-token", ensureLoggedIn);


module.exports = router;