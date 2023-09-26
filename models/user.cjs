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

// How to hash the password
// checking if user doc running function is modified, if not modified than to next.
// .hash is a promise so needed to await it, and encrypted (encrypted data salt) it with the SALT_ROUNDS
userSchema.pre('save', async function(next) {
    // 'this' is the user doc
    if (!this.isModified('password')) return next( );
    // update the password with the computed hash
    this.password = await bcrypt.hash(this.password, SALT_ROUNDS);
    return next( );
  });


module.exports = model("User", userSchema);