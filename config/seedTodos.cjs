require("dotenv").config( );
require("./database.cjs");
const Todos = require("../models/Todos.cjs");
const seedData = require("./seedData.json")


async function seed( ) {
    await Todos.deleteMany({ });
    const todos = await Todos.create(seedData);
    console.log(todos);
    process.exit();
}
seed( );


