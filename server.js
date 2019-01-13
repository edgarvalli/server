const express = require('express');
const app = express();
const multer = require("multer");
const { headers } = require('./helpers/config');
const upload = multer({ dest: "files/" })

module.exports = function () {
    app
        .use(express.urlencoded({ extended: false }))
        .use(express.json())
        .use(headers)
        .use(upload.any())
        .use(express.static("public"))

    return app;
}
