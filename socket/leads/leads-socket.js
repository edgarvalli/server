const mongo = require("../../lib/mongo.client")("tlacrm");
const db = "leads";
const nsp = '/leads-socket';
module.exports = io => io.of(nsp).on("connection", socket => {

    console.log("User connected on leads socket");

    socket.on('test', msg => {
	console.log(msg);
	io.of(nsp).emit('test', msg)
    });
    socket.on('new-lead', lead =>  io.of('/leads-socket').emit('new-lead',lead) );

    socket.on("disconnect", () => console.log(`User disconnected with id: ${socket.id}`))

})
