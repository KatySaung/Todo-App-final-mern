const Todo= require("../../models/Todo.cjs")


// Controller: CRUD functions for todos
// include date and time search for todos here and schema?

module.exports = {  
    todo,
    show,
    findAllTodos,  //findTodo route not working in postman tests
    editTodoText,
    deleteTodo,
};

// Create todo
// (see todo ROUTE: Create)
// WORKING
async function todo(req, res) {
    try {
        const todo = await Todo.create({text: "text"});
        res.json(todo);
    } catch (err) {
        res.status(400).json({ msg: err.message });
    }
}

// Read function for ALL todos 
// (see todo ROUTE: Index(Show All) )
// WORKING
async function findAllTodos(req, res) {
    try {
        const todo = await Todo.find( ).sort("date").populate("text").exec();
        todo.sort((a, b) => a.date.sortOrder - b.date.sortOrder);
        res.status(200).json(todo);
    } catch (err) {
        res.status(400).json({ msg: err.message });
    }
}

// Read function for a single todo 
// (see todo ROUTE: New,Edit,Show by :id )
// @get route: NOT WORKING!!! HELP
async function show(req, res) {
    try {
        const todo = await Todo.findById(req.params._id)
        res.status(200).json(todo);
    } catch (err) {
        res.status(400).json({ msg: err.message });
    }
}

// Update function for todo 
// (see todo ROUTE: Update )
async function editTodoText(req, res) {
    try {
        const todo = await Todo.findByIdAndUpdate(req.body._id,
        {content: req.body.content},
        { new: true }
        );
        res.json (todo);
    } catch (err) {
        res.status(400).json({ msg: err.message })
    }
}

// Delete function for todo 
// (see todo ROUTE: Delete)
async function deleteTodo(req, res) {
    try {
        await Todo.findOneAndDelete({content:req.body.content});
        res.json ("Todo successfully deleted.");
    } catch (err) {
        console.log(err)
        res.status(400).json({ msg: err.message })
    }
}
