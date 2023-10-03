const express = require("express");
const router = express.Router( );
const todosCtrl = require("../../controllers/api/TodoController.cjs");
const ensureLoggedIn = require("../../config/ensureLoggedIn.cjs")
// Do i need to require userController and set to variable const usersCtrl like in routes>api>users.cjs to make sure user is logged in to make these changes or not needed??

// Base_URL=/api/todos (see utilities in src> todos-api)
// Restful routes for CRUD
// Index: Show ALL todos of model
//WORKING
router.get("/show", todosCtrl.findAllTodos)

// removed from line 11: router.get("/show", todosCtrl.findAllTodos)

// Delete: Remove todo from db
// Working
router.delete("/:id/delete", todosCtrl.deleteTodo)
 
// Update: Updates the todo from Edit form
// HELP: NOT WORKING
router.put("/", todosCtrl.editTodoText);

// Create: Creates a new todo from the new form
// WORKING
router.post("/create", todosCtrl.todo)


// Show: Show single todo
// HELP: NOT WORKING
router.get("/:id", todosCtrl.show)



// Get check-token for user login
// User needs to be logged in to access all todos and actions
router.get("/check-token", ensureLoggedIn);


module.exports = router;