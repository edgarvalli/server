module.exports = app => {
    const http = require("http").Server(app);
    const io = require("socket.io")(http);

    io.of("/tlacrm").on("connection", socket => {
        console.log('User connected')
        socket.on("add_child", data => {
            console.log(data)
        })
    })


    return http;
}