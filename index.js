const app = require("./server")();
const PORT = 3080;

// Routes
app.get('/', (_, res) => res.send("Express Working"))
require("./routes")(app);
require('./evbase')(app);

// Socket
const server = require("./socket")(app);

server.listen(PORT, (error) => {
    if (error) return console.error(`Ocurrio un error: ${error}`);
    console.log(`Server running on port ${PORT}`);
})