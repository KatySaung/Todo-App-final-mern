const User = require("../../models/User.cjs")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")

// @controllers,api
// Users
 // call create, login,checkTokin async functions defined below
module.exports = {  
    create,
    login,
    checkToken,
};
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

async function login(req, res) {
    try {
        // Query our database to find a user with the email provided
        // Using filter object to find User with the given email
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

function checkToken(req, res) {
    console.log(req.user);
    res.json(req.exp)
}

// Set expiration time for JWT
function createJWT(user) {
    return jwt.sign({ user }, process.env.SECRET, { expiresIn: '24h' });
}