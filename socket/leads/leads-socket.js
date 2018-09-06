const leadController = require('./leads-controller');
const jwt = require('jwt-simple');
const { secret } = require('../../lib/func');
const nsp = '/leads-socket';
module.exports = io => io.of(nsp).on("connection", socket => {

    const { token, skt } = socket.handshake.query;
    console.log('Authentication in procress ...');
    
    if(!token) return socket.disconnect();
    console.log('Your token existing authentication conitune ...')
    
    const decodeToken = jwt.decode(token, secret);
    console.log('Your token could be decoded');
    console.log(decodeToken.skt + ' = ', skt)
    if(decodeToken.skt !== skt) return socket.disconnect();
    console.log('your secret key is no the same');

    socket.user = decodeToken;
    console.log(socket.user)

    console.log("User connected on leads socket ID: " + socket.id);
    
    socket.on('test', msg => {
        console.log(msg);
        io.of(nsp).emit('test', msg)
    });

    socket.on('new-lead', data => leadController(io,socket).newLead(data))

    // Handle disconnect
    socket.on("disconnect", () => console.log(`User disconnected with id: ${socket.id}`))

})
