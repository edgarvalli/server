const leadController = require('./leads-controller');
const jwt = require('jwt-simple');
const { secret } = require('../../lib/func');
const nsp = '/leads-socket';
module.exports = io => io.of(nsp).on("connection", socket => {
    // Part of socket authentication

    // Get token and skt from client
    const { token, skt } = socket.handshake.query;
    // Check if token exits
    if(!token) return socket.disconnect();
    // Decoded token
    const decodeToken = jwt.decode(token, secret);
    //Check if secret key token is the same as the token
    if(decodeToken.user.skt !== skt) return socket.disconnect();
    // Set user information in user
    socket.user = decodeToken.user.user;
    console.log(socket.user);
    
    socket.on('test', msg => {
        console.log(msg);
        io.of(nsp).emit('test', msg)
    });

    socket.on('new-lead', data => leadController(io,socket).newLead(data))

    // Handle disconnect
    socket.on("disconnect", () => console.log(`User disconnected with id: ${socket.id}`))

})
