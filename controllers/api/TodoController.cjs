const Todo = require("../../models/Todo.cjs")


// Controller: Backend CRUD functions for todos
// include date and time search for todos here and schema?

module.exports = {
    todo,
    show,
    findAllTodos,  //findTodo route not working in postman tests
    editTodoText,
    deleteTodo,
};

// Create todo
// (see todo ROUTE(POST): Create)
// WORKING
// STOPPED WORKING received postman error "msg": "E11000 duplicate key error collection: todo-app.todos index: content_1 dup key: { content: null }"
async function todo(req, res) {
    try {
        // if statement
        const todo = await Todo.create(req.body);
        res.json(todo);
    } catch (err) {
        res.status(400).json({ msg: err.message });
    }
}

// Read function for ALL todos 
// (see todo ROUTE(GET): Index(Show All) )
// WORKING
async function findAllTodos(req, res) {
    try {
        const todo = await Todo.find().sort("date").populate("text").exec();
        todo.sort((a, b) => a.date.sortOrder - b.date.sortOrder);
        res.status(200).json(todo);
    } catch (err) {
        res.status(400).json({ msg: err.message });
    }
}

// Read function for a single todo 
// (see todo ROUTE(GET): New,Edit,Show by :id )
// NOT WORKING!!! HELP
async function show(req, res) {
    try {
        const todo = await Todo.findById(req.params.id);
        res.status(200).json(todo);
    } catch (err) {
        res.status(400).json({ msg: err.message });
    }
}

// Update function for todo 
// (see todo ROUTE(PUT): Update )
//HELP!!!: NOT WORKING IF set await= to const todo and res.json(todo)
// WORKING on postman not with update button (HELP: need to display on page search todo to find todo and use update function, update button not updating from db)
async function editTodoText(req, res) {
    try {
        await Todo.findByIdAndUpdate(req.params.id, req.body, { new: true});
        res.status(200).json("updated success");
    } catch (err) {
        res.status(400).json({ msg: err.message })
    }
}

// Delete function for todo 
// (see todo ROUTE(DELETE): Delete)
// HELP!!!: NOT WORKING IF set await= to const todo and res.json(todo)
// WORKING on postman not with delete button (HELP: need to display on page search todo find todo and use delete function, delete button not deleting from db)
async function deleteTodo(req, res) {
    try {
      await Todo.findByIdAndDelete(req.params.id);
        res.status(200).json("Delete Success");
    } catch (err) {
        console.log(err)
        res.status(400).json({ msg: err.message })
    }
}
