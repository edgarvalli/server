const router = require('express').Router();

router
    .use("/leads", require('./tlacrm/leads.router'))
    .use("/clients", require('./tlacrm/clients.router'))
    .use("/jobs", require('./tlacrm/jobs.router'))
    .use("/users", require('./tlacrm/users.router'))

module.exports = router;