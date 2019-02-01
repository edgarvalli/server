const router = require('express').Router();

router
    .use("/leads", require('./leads.router'))
    .use("/clients", require('./clients.router'))
    .use("/jobs", require('./jobs.router'))
    .use("/users", require('./users.router'))

module.exports = router;