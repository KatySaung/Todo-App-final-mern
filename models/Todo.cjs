const { Schema, model } = require("mongoose")

// Schema for Todo data
// store and retrieve data from db and use to require into other components
const todoSchema = new Schema({
    text: {
        type: String,
        required: true,
    },
    task: {
        type: String,
        required: true,
    },
    taskCompleted: {
        type: Boolean,
        default: false,
    },
    date: {
        type: Date,
        default: Date.now,
    },
    // {
    //      timestamps: true
    // }, 
})

module.exports = model("Todo", todoSchema);