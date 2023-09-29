const { Schema, model } = require("mongoose")


const todoListSchema = new Schema({
    items: [{
      type: { type: String, enum: ["todo"]},
      content: {
        
      }
    }]
  })

  module.exports = model("TodoList", todoSchema);