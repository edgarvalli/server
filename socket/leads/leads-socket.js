const leadController = require('./leads-controller');
const jwt = require('jwt-simple');
const { secret } = require('../../lib/func');
const nsp = '/leads-socket';
module.exports = io => io.of(nsp).on("connection", socket => {

    //const { token, skt } = socket.handshake.headers.query;
    console.log(socket.handshake.query)
    // if(!token) return socket.disconnect();
    // const decodeToken = jwt.decode(token, secret);
    // if(decodeToken !== skt) return socket.disconnect();
    // socket.user = decodeToken;
    // console.log(socket.user)

    console.log("User connected on leads socket ID: " + socket.id);
    
    socket.on('test', msg => {
        console.log(msg);
        io.of(nsp).emit('test', msg)
    });

    socket.on('new-lead', data => leadController(io,socket).newLead(data))

    // Handle disconnect
    socket.on("disconnect", () => console.log(`User disconnected with id: ${socket.id}`))

})
