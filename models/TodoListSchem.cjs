const { Schema, model } = require("mongoose")


const todoListSchema = new Schema({
    items: [{
      type: { type: String, enum: ["job", "todo"]},
      content: {
        
      }
    }]
  })

  module.exports = model("TodoList", todoSchema);