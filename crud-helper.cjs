// Connect to the database
require('dotenv').config( );
const db = require('./config/database.cjs');

// Require the Mongoose models
const User = require('../models/user.cjs');

// This has a timeout and will automatically close the crud-helper connection after it runs,
// db.close is exported from config> database.cjs.
setTimeout(( ) => {
    db.close( );
}, 5000);
