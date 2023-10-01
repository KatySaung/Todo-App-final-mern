const Todo= require("../../models/Todo.cjs")


// Controller: CRUD functions for todos
// include date and time search for todos here and schema?

module.exports = {  
    todo,
    showTodo,
    findAllTodos,  //findTodo route not working in postman tests
    completeTodo, //Help:what api route for completeTodo??
    editTodoText,
    deleteTodo,
};

// Create todo
// (see todo ROUTE: Create)
// NOT WORKING
async function todo(req, res) {
    try {
        const todo = await Todo.create(req.body)
        res.json ("Todo successfully created.");
    } catch (err) {
        res.status(400).json(err);
    }
}

// Read function for ALL todos 
// (see todo ROUTE: Index(Show All) )
// @get route: NOT WORKING!!! HELP
async function findAllTodos(req, res) {
    try {
        const todo = await Todo.find({ })
        if (!todo) throw new Error("Todo not Found")
        const match = await Todo.compare(req.body.content)
        if (!match) throw new Error("No matching Todo's stored. Please create a new Todo");
        res.json ("Todo successfully located.");
    } catch (err) {
        console.log(err)
        res.status(400).json("Bad Credentials")
    }
}

// Read function for a single todo 
// (see todo ROUTE: New,Edit,Show by :id )
// @get route: NOT WORKING!!! HELP
async function showTodo(req, res) {
    try {
        const todo = await Todo.findById({ content: req.params.content})
        if (!todo) throw new Error("Todo not Found")
        const match = await Todo.compare(req.params.id, todo.content)
        if (!match) throw new Error("No matching Todo's stored. Please create a new Todo");
        res.json ("Todo successfully located.");
    } catch (err) {
        console.log(err)
        res.status(400).json("Bad Credentials")
    }
}

// Complete todo is BOOLEAN. NEED HELP??
// IS ANOTHER FUNCTION NEEDED FOR COMPLETE TODO?
// Do I NEED A ROUTE in routes>api>todos
async function completeTodo(req, res) {
    try {
        await Todo.findOne({content:req.params.id});
        res.json ("Todo successfully completed.");
    } catch (err) {
        console.log(err)
        res.status(400).json("Bad Credentials")
    }
}


// Update function for todo 
// (see todo ROUTE: Update )
async function editTodoText(req, res) {
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

// Delete function for todo 
// (see todo ROUTE: Delete)
async function deleteTodo(req, res) {
    try {
        await Todo.findOneAndDelete({content:req.body.content});
        res.json ("Todo successfully deleted.");
    } catch (err) {
        console.log(err)
        res.status(400).json("Bad Credentials")
    }
}
