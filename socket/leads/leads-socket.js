const leadController = require('./leads-controller');
const { socketAuthentication } = require('../../lib/func');
const nsp = '/leads-socket';
module.exports = io => io.of(nsp).on("connection", socket => {
    
    socketAuthentication(socket);
    
    socket.on('test', msg => {
        console.log(msg);
        io.of(nsp).emit('test', msg)
    });

    socket.on('new-lead', data => leadController(io,socket).newLead(data))

    // Handle disconnect
    socket.on("disconnect", () => console.log(`User disconnected with id: ${socket.id}`))

})
