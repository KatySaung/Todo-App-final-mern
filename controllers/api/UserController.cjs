const User = require("../../models/User.cjs")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")

// @controllers,api
// Users
 // async functions: create, login,checkTokin pass to routes
module.exports = {  
    signUp,
    login,
    updateUser,
    deleteUser,
    checkToken,
};

// Create User
// controller function so it accepts parameters req, res
async function signUp(req, res) {
    try {
        const user = await User.create(req.body)
        const token = createJWT(user)
        res.json(token)
    } catch (err) {
        res.status(400).json(err);
    }
}
// Read User Login 
async function login(req, res) {
    try {
        const user = await User.findOne({ email: req.body.email })
        if (!user) throw new Error("User not Found")
        const match = await bcrypt.compare(req.body.password, user.password)
        if (!match) throw new Error();
        res.json(createJWT(user));
    } catch (err) {
        console.log(err)
        res.status(400).json("Bad Credentials")
    }
}

// Update User Account 
async function updateUser(req, res) {
    try {
        const user = await User.findByIdAndUpdate(req.body.id,
        {email: req.body.email},
        { new: true }
        );
        const token = createJWT(user)
        res.json(token)
    } catch (err) {
        res.status(400).json("Bad Credentials")
    }
}

// Delete User Account 
async function deleteUser(req, res) {
    try {
        await User.findOneAndDelete({email:req.body.email});
        res.json ("Account successfully deleted.");
    } catch (err) {
        console.log(err)
        res.status(400).json("Bad Credentials")
    }
}

// checktoken function for user
function checkToken(req, res) {
    console.log(req.user);
    res.json(req.exp)
}

// Set expiration time for JWT
function createJWT(user) {
    return jwt.sign({ user }, process.env.SECRET, { expiresIn: '24h' });
}