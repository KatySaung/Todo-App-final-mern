const { Schema, model } = require("mongoose")


// Schema for To Do 
const todoSchema = new Schema({
    
        name: {
            type: String,
            required: true,
        },
        text: {
            type: String,
            required: true,
        },
        completed: {
            type: Boolean,
            default: false,
        },
        date: {
            type: Date,
            default: Date.now,
        },
        
        sortOrder: Number
    },
    {
        timestamps: true,
    }

);

module.exports = model("Todo", todoSchema);