const express = require("express");
const app = express();
const cors = require("cors");

module.exports = function() {
  app
    .use(express.urlencoded({ extended: false, limit: '5mb' }))
    .use(express.json({ limit: '5mb' }))
    .use(cors())
    .use(express.static("public"));

  require("./api")(app);

  app.get("/image-profile/:id",(req, res) => {
    res.sendFile(`${__dirname}/files/profiles/${req.params.id}.png`)
  })

  app.get('/send-file-client', (_, res) => {
    console.log(__dirname)
      setTimeout(() => res.sendFile(__dirname + '/wordpress.zip'), 5000)
  })

  return app;
};
