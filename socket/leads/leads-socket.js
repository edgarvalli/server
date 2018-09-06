const leadController = require('./leads-controller');
const jwt = require('jwt-simple');
const { secret } = require('../../lib/func');
const nsp = '/leads-socket';
module.exports = io => {

    const ioAuth = io.of(nsp).use((s, next) => {
        const { token } = s.request._query;
        console.log(token);
        const u = jwt.decode(toekn, secret);
        if(u) {
            console.log(u)
            next();
        } else {
            console.error('User no allow!!!')
            s.disconnect();
        }
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
