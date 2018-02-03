const express = require('express');
const router = express.Router();
const jobClass = require('./jobs.methods');

router.use( (req,res,next) => {
    next();
})

router
    .post('/add', jobClass.add)

module.exports = router;

