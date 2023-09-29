const { Schema, model } = require("mongoose")


// Schema for To Do 
const todosSchema = new Schema(
    {
        content: {
            type: String,
            required: true,
        },
        date: {
            type: Date,
            default: Date.now,
        },
    
    sortOrder: Number
},
        {
            timestamps: true,
        },
);

module.exports = model("Todos", todosSchema);