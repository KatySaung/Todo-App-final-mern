const Job = require('../../models/jobPost.cjs');

// @controllers,api
// Jobs

module.exports = {
  index,
  show,
};

// Index All Job Postings
// Show User To Do List Jobs added,created
// MISSING REPLACE ORDER in controller>api and CATEGORY in models>category(OR REMOVE BOTH)
async function index(req, res) {
  try {
    const jobs = await Job.find({}).sort('name').populate('category').exec();
    // re-sort based upon the sortOrder of the categories
    jobs.sort((a, b) => a.category.sortOrder - b.category.sortOrder);
    res.status(200).json(jobs);
  } catch (e) {
    res.status(400).json({ msg: e.message });
  }
}

async function show(req, res) {
  try {
    const job = await Item.findById(req.params.id);
    res.status(200).json(job);
  } catch (e) {
    res.status(400).json({ msg: e.message });
  }
}