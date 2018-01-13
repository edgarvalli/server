const fs = require("fs");
const express = require('express');
const app = express();

const options = {
    key: fs.readFileSync("certificates/ev-server.key"),
    cert: fs.readFileSync("certificates/ev-server.crt"),
    ca: fs.readFileSync("certificates/ev-server.csr"),
};

const https = require("https").Server(options, app);
const http = require("http").Server(app);
const bodyParser = require('body-parser');

const PORT = 3080
const PORTSSL = 3443;

app.use(require("express-session")({
    secret:"Kimberly&Ximena1117",
    saveUninitialized: false,
    resave: false
}))

/***************** API HTTP **********************************/
const headers = require('./lib/headers');
const leadRouter = require('./api/tlacrm/leads/leads.route');
const clientRouter = require('./api/tlacrm/clients/clients.route');
const authRouter = require('./api/tlacrm/auth/auth.route');
const jobRouter = require('./api/tlacrm/jobs/jobs.route');

app
    .use(bodyParser.urlencoded({ extended: false }))
    .use(bodyParser.json())
    .use(headers)
    .get('/', (req,res) => res.send("Express Working"))
    .get('/socket', (req,res) => res.sendFile( __dirname + "/index.html"))
    .use('/api/tlacrm/leads', leadRouter)
    .use('/api/tlacrm/clients', clientRouter)
    .use('/api/tlacrm/auth', authRouter)
    .use('/api/tlacrm/jobs',jobRouter)
/****************** API HTTP END *****************************/

/***********************START SOCKET *************************/
const io = require("socket.io")(https);

io.of("/leads").use((socket, next) => {
    console.log("This middleware is for leads");
    next();
})

io.use((socket, next) => {
    console.log("This middleware is for All");
    next();
})

require("./socket/main.socket")(io)
require("./socket/tlacrm/leads.socket")(io);

/********************* SOCKET END ****************************/

http.listen(PORT , err => err ? console.log(err)
		: console.log("Server running on port " + PORT));
https.listen(PORTSSL, err => err ? console.log(err)
                : console.log("Server running on port secure " + PORTSSL));
