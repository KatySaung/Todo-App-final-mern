const { Schema, model } = require("mongoose")

// @models
// Schema for All Job Posts
const todoSchema = new Schema(
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

module.exports = model("Todo", todoSchema);