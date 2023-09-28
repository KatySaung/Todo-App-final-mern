const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt")

// @models
// User Log In Schema
// 6 rounds of decrypt is good. Note: the more complex the decryption the easier to hack
const SALT_ROUNDS = 6

const userSchema = new Schema({
    name: { type: String, required: true },
    email: {
        type: String,
        unique: true,
        trim: true,
        lowercase: true,
        required: true
    },
    password: {
        type: String,
        trim: true,
        minLength: 3,
        required: true,
    }
}, {
    timestamps: true,
    toJSON: {
        transform: function (doc, ret) {
            delete ret.password;
            return ret;
        }
    }
});

// hash the password
userSchema.pre('save', async function(next) {
    if (!this.isModified('password')) return next( );
    this.password = await bcrypt.hash(this.password, SALT_ROUNDS);
    return next( );
  });


module.exports = model("User", userSchema);