const leadController = require('./lead-controller');
const nsp = '/leads-socket';
module.exports = io => io.of(nsp).on("connection", socket => {

    console.log("User connected on leads socket ID: " + socket.id);
    
    socket.on('test', msg => {
	    console.log(msg);
	    io.of(nsp).emit('test', msg)
    });

    socket.on('new-lead', data => leadController(socket).newLead(data))

    // Handle disconnect
    socket.on("disconnect", () => console.log(`User disconnected with id: ${socket.id}`))

})
