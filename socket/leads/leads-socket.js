const leadController = require('./leads-controller');
const jwt = require('jwt-simple');
const { secret } = require('../../lib/func');
const nsp = '/leads-socket';
module.exports = io => {

    const _io = io.of(nsp).use((socket, next) => {
        const { token, skt } = socket.request._query;
        if(!token){
            console.log('No token provided');
            console.log(token);
            socket.disconnect();
            return null;
        }
        const decodeToken = jwt.decode(token, secret);
        if(!decodeToken) {
            console.log('Error to decoded your token');
            console.log(token)
            socket.disconnect();
        }
        if(decodeToken.skt === skt) {
            socket.user = decodeToken;
            next();
        }
    });

    _io.on("connection", socket => {

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
