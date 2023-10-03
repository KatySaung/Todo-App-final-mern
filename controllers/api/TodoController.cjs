const Todo = require("../../models/Todo.cjs")


// Controller: Backend CRUD functions for todos
// include date and time search for todos here and schema?
// get todo data from db and send back
module.exports = {
    todo,
    show,
    findAllTodos,  
    editTodoText,
    deleteTodo,
};

// Create todo
// (see todo ROUTE(POST): Create)
// WORKING
async function todo(req, res) {
    try {
        console.log(req.body)
        //add a new key to this req the body object
        const todo = await Todo.create(req.body);
        res.json(todo);
    } catch (err) {
    //     res.status(400).json({ msg: err.message });
    console.log(err)
    }
}

// Read function for ALL todos 
// (see todo ROUTE(GET): Index(Show All) )
// WORKING
async function findAllTodos(req, res) {
    try {
        const todo = await Todo.find({ })
        // .sort("date").populate("text").exec();
        // todo.sort((a, b) => a.date.sortOrder - b.date.sortOrder);
        console.log("show", todo)
        res.status(200).json(todo);
    } catch (err) {
        res.status(400).json({ msg: err.message });
    }
}

// Read function for a single todo 
// (see todo ROUTE(GET): New,Edit,Show by :id )
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
async function editTodoText(req, res) {
    try {
        await Todo.findByIdAndUpdate(req.body.id, {task: req.body.todo}, { new: true});
        res.status(200).json("updated success");
    } catch (err) {
        res.status(400).json({ msg: err.message })
    }
}

// Delete function for todo 
// (see todo ROUTE(DELETE): Delete)
async function deleteTodo(req, res) {
    try {
      await Todo.findByIdAndDelete(req.params.id);
        res.status(200).json("Delete Success");
    } catch (err) {
        console.log(err)
        res.status(400).json({ msg: err.message })
    }
}
