const leadController = require('./leads-controller');
const nsp = '/leads-socket';
module.exports = io => {

    const ioAuth = io.of(nsp).use((s, next) => {
        console.log(s.request._query);
        next();
    });

    ioAuth.on("connection", socket => {

        console.log("User connected on leads socket ID: " + socket.id);
        
        socket.on('test', msg => {
            console.log(msg);
            io.of(nsp).emit('test', msg)
        });
    
        socket.on('new-lead', data => leadController(io,socket).newLead(data))
    
        // Handle disconnect
        socket.on("disconnect", () => console.log(`User disconnected with id: ${socket.id}`))
    
    })    

}
