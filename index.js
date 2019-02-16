const app = require("./server")();
const PORT = 3080;
const webpush = require('web-push');

const publicVapidKey = "BH54HR9NEeTIQ36JskmMCoKMsM1EseYPAEv7O575VrgJ9xtXW3gh8nVO23PVwNWB8CDUCypLRBGU9jCiXkQVUZY";
const privateVapidKey  = "ZZjM202Zbg5qeyiIapP1s07xSJcGw9Tpbsn6iSkNNC8";

webpush.setVapidDetails('mailto:edgarvalli80@gmail.com', publicVapidKey, privateVapidKey);

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