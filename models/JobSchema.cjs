const { Schema, model } = require("mongoose")

// @models
// Schema for All Job Posts
const jobSchema = new Schema(
    {
        company: {
            type: String,
            required: true,
        },
        position: {
            type: String,
            required: true,
        },
        salary: {
            type: Number,

        },
        location:{
            type: String,
            required: true,

        },
        contact: [{
            body: String,
        }],

        date: {
            type: Date,
            default: Date.now
        },

        sortOrder: Number
    },
    {
        timestamps: true,
    }
);

module.exports = model("Job", jobSchema);