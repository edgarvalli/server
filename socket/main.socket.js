const mongo = require("../lib/mongo.client")("tlacrm");

module.exports = io => io.on("connection", socket => {
    console.log("User connected with id: " + socket.id)

    socket.on("fetch", () => {
        mongo("leads").find({}, (err, leads) => {
            socket.emit("recived-data", leads)
        })
    })

    socket.on("login", () => socket.emit("login-response", "success"))
})