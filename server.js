const fs = require("fs");
const express = require('express');
const app = express();

/***************** Express setup ******************************/

const options = {
    key: fs.readFileSync("certificates/ev-server.key"),
    cert: fs.readFileSync("certificates/ev-server.crt"),
    ca: fs.readFileSync("certificates/ev-server.csr"),
};

const https = require("https").Server(options, app);
const http = require("http").Server(app);
const bodyParser = require('body-parser');

const PORT = 3080;
const PORTSSL = 3443;

const headers = require('./lib/headers');
app
    .use(bodyParser.urlencoded({ extended: false }))
    .use(bodyParser.json())
    .use(headers)
    .get('/', (req,res) => res.send("Express Working"))

/***************** Express setup end ***************************/

/*---------------------------------------------------------------------------*/

/***************** API HTTP **********************************/

require("./api/tlacrm/index")(app);

/****************** API HTTP END *****************************/


const mongo = require("./lib");

app.get("/mongo", (req,res) => {
    mongo()
    .then(db => db.find({}).toArray((err, data) => {
        console.log(data)
        res.json({error: true, msg: err, data})
    }))
})

http.listen(PORT , err => err ? console.log(err)
		: console.log("Server running on port " + PORT));
https.listen(PORTSSL, err => err ? console.log(err)
                : console.log("Server running on port secure " + PORTSSL));
