// Connect to the database
require('dotenv').config( );
const db = require('./config/database.cjs');

// Require the Mongoose models
const User = require('../models/user.cjs');
// const JobPost= require('../models/jobPost');


// Only run crud-helper once.In terminal "node crud-helper.cjs"
// Local variables will come in handy for holding retrieved documents
let user, jobPost;
let users, jobPosts;

// This has a timeout and will automatically close the crud-helper connection after it runs,
// db.close is exported from config> database.cjs.
setTimeout(( ) => {
    db.close( );
}, 5000);
