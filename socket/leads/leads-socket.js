const nsp = '/leads-socket';
module.exports = io => io.of(nsp).on("connection", socket => {

    console.log("User connected on leads socket");

    const leadController = require('./lead-controller')(io, socket, nsp);
    
    socket.on('test', msg => {
	    console.log(msg);
	    io.of(nsp).emit('test', msg)
    });

    socket.on('new-lead', data => leadController.newLead(data) );

    // Handle disconnect
    socket.on("disconnect", () => console.log(`User disconnected with id: ${socket.id}`))

})
