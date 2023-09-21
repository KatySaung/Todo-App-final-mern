const User = require("../../models/user.cjs")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")


module.exports = {
    // functions are first class citizens, so it can be passed anywhere. This is hoisting, can use a function before it is defined. Below is calling the create function that was defined below in the async function line
    create,
    login,
    checkToken

};
// controller function so it accepts parameters req, res
async function create(req, res) {
    // This res.json is responding to the client with JSON. It is not the same as the res.json in the users-api.js in Utility folder.
    try {
        // Add the user to the database
        const user = await User.create(req.body)
        // token will be a string
        const token = createJWT(user)
        // Yes, we can use res.json to send back just a string
        // The client code needs to take this into consideration
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
        // if we found the email, compare password
        // 1st argument from the credentials that the user typed in
        // 2nd argument whats stored in the database
        const match = await bcrypt.compare(req.body.password, user.password)
        if (!match) throw new Error();

        // const token = createJWT(user) is same as below res.json(createJWT(user))
        res.json(createJWT(user));
    } catch (err) {
        console.log(err)
        res.status(400).json("Bad Credentials")
    }
}

function checkToken(req, res) {
    // req.user will always be there for you when a token is sent.
    // token will be available here because it was already verified
    console.log(req.user);
    // sending the expiration date to the client (frontend)
    res.json(req.exp)
}

/*---------Helper Functions ------*/
// Set expiration time for JWT
function createJWT(user) {
    return jwt.sign({ user }, process.env.SECRET, { expiresIn: '24h' });
}