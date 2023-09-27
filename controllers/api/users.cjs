const User = require("../../models/User.cjs")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")

// @controllers,api
// Users
 // async functions: create, login,checkTokin pass to routes
module.exports = {  
    create,
    login,
    update,
    deleteUser,
    checkToken,
};

// Create User function
// controller function so it accepts parameters req, res
async function create(req, res) {
    try {
        const user = await User.create(req.body)
        const token = createJWT(user)
        res.json(token)
    } catch (err) {
        res.status(400).json(err);
    }
}
// Read User Login Function
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

// Update User Account function
async function update(req, res) {
    try {
        const user = await User.findOneAndUpdate({ _id: req.params.id })
        console.log("User Account successfully updated. ");
        res.status(200).send( )
        if (!user) throw new Error("User not Found")
        const match = await bcrypt.compare(req.body.password, user.password)
        if (!match) throw new Error();
        res.json(createJWT(user));
    } catch (err) {
        console.log(err)
        res.status(400).json("Bad Credentials")
    }
}

// Delete User Account function
async function deleteUser(req, res) {
    try {
        const user = await User.findOneAndDelete({ _id: req.params.id })
        console.log("User Account successfully deleted. ");
        res.status(200).send( )
        if (!user) throw new Error("User not Found")
        const match = await bcrypt.compare(req.body.password, user.password)
        if (!match) throw new Error();
        res.json(createJWT(user));
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