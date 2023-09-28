require("dotenv"). config( );
require("./database.cjs");


// @config
// seed file Job Posts
// check if default date with date.now is included in post
const JobPost = require("./models/JobPost.cjs")

(async function () {
    await JobPost.deleteMany({});
    const jobPosts = await JobPost.create([
     {
        company: "Best Coders Inc",
        position: "Entry Level Coder",
        salary: 80000.00,
        location: "Full Remote",
        contact:[
            "Nicest HR, full benefits. Immediate Hire.",   
        ],
    },

    ]);

    console.log(items);
  
    process.exit();
  })();

