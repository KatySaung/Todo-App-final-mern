const Todo= require("../../models/TodoSchema.cjs")

// controller for todos
// const todo
// include date and time search for todos here and schema?

module.exports = {  
    todos,
    addTodo,
    completeTodo,
    editTodoText,
    deleteTodo,
};

// CRUD functionality
// Create todo
async function todos(req, res) {
    try {
        const todo = await todos.create(req.body)
        res.json ("Todo successfully created.");
    } catch (err) {
        res.status(400).json(err);
    }
}


// Read todo 
// Locate todo 
async function addTodo(req, res) {
    try {
        const todo = await addTodo.findOne({ content: req.body.content })
        if (!todo) throw new Error("Todo not Found")
        const match = await addTodo.compare(req.body.content, todo.content)
        if (!match) throw new Error("No matching Todo's stored. Please create a new Todo");
        res.json ("Todo successfully located.");
    } catch (err) {
        console.log(err)
        res.status(400).json("Bad Credentials")
    }
}


// Update todo
async function updateTodo(req, res) {
    try {
        const todo = await Todo.findByIdAndUpdate(req.body.id,
        {content: req.body.content},
        { new: true }
        );
        res.json ("Todo successfully updated.");
    } catch (err) {
        res.status(400).json("Bad Credentials")
    }
}


// Delete todo
async function deleteTodo(req, res) {
    try {
        await Todo.findOneAndDelete({content:req.body.content});
        res.json ("Todo successfully deleted.");
    } catch (err) {
        console.log(err)
        res.status(400).json("Bad Credentials")
    }
}
