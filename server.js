const express = require('express');
const app = express();
const multer = require("multer");

/***************** Express setup ******************************/

// const https = require("https").Server(options, app);
const http = require("http").Server(app);
const bodyParser = require('body-parser');
const upload = multer({ dest: "files/" })
const PORT = 3080;
// const PORTSSL = 3443;

const { headers } = require('./helpers/config');
app
    .use(bodyParser.urlencoded({ extended: false }))
    .use(bodyParser.json())
    .use(headers)
    .use(upload.any())
    .use(express.static("public"))
    .get('/', (req, res) => res.send("Express Working"))

/***************** Express setup end ***************************/


/***************** WebServices *********************************/

app.use('/ws/series/', require('./routes/series.route'));
app.use("/api/tlacrm/", require('./routes/tlacrm.router'))


http.listen(PORT, err => err ? console.log(err)
    : console.log("Server running on port " + PORT));
// https.listen(PORTSSL, err => err ? console.log(err)
//                 : console.log("Server running on port secure " + PORTSSL));
