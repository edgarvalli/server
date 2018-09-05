const mongo = require("../../../lib/mongo.client")("tlacrm");
const db = "leads";

module.exports = io => io.of("/leads-socket").on("connection", socket => {

    console.log("User connected on leads socket");

    socket.on('test', msg => io.emit(msg));
    socket.on('new-lead', lead =>  io.to('/leads-socket').emit(lead) );

    socket.on("disconnect", () => console.log(`User disconnected with id: ${socket.id}`))

})