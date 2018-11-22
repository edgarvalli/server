const express = require('express');
const app = express();
const multer = require("multer");

/***************** Express setup ******************************/

// const https = require("https").Server(options, app);
const http = require("http").Server(app);
const io = require("socket.io")(http);
const bodyParser = require('body-parser');
const upload = multer({dest: "files/"})
const PORT = 3080;
// const PORTSSL = 3443;

const headers = require('./lib/headers');
app
    .use(bodyParser.urlencoded({ extended: false }))
    .use(bodyParser.json())
    .use(headers)
    .use(upload.any())
    .use(express.static("public"))
    .get('/', (req,res) => res.send("Express Working"))

/***************** Express setup end ***************************/

/***************** SOCKET **********************************/

require('./socket/leads/leads-socket')(io);
io.on('connection', socket => socket.on('notify', msg => console.log(msg)))


/***************** WebServices *********************************/

app.use('/ws/series/',require('./webservices/series/series.route'));
app.use("/ws/tlacrm/", require("./webservices/tlacrm/tlacrm.router"))


http.listen(PORT , err => err ? console.log(err)
		: console.log("Server running on port " + PORT));
// https.listen(PORTSSL, err => err ? console.log(err)
//                 : console.log("Server running on port secure " + PORTSSL));
