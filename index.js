const app = require("./server")();
const PORT = 3080;
const webpush = require('web-push');

const publicVapidKey = process.env.PUBLIC_VAPID_KEY;
const privateVapidKey  = process.env.PRIVATE_VAPID_KEY;

webpush.setVapidDetails('edgarvalli80@gmail.com', publicVapidKey, privateVapidKey);

// Routes
app.get('/', (_, res) => res.send("Express Working"))
require("./routes")(app, webpush);
require('./evbase')(app);

// Socket
const server = require("./socket")(app);

server.listen(PORT, (error) => {
    if (error) return console.error(`Ocurrio un error: ${error}`);
    console.log(`Server running on port ${PORT}`);
})