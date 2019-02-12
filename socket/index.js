const mongo = require('../helpers/mongo.client')('tlacrm');
const collection = 'budgets';

module.exports = app => {
    const http = require("http").Server(app);
    const io = require("socket.io")(http);

    io.of("/tlacrm").on("connection", socket => {

        console.log('User connected')
        const { room } = socket.handshake.query;
        socket.join(room);

        socket.on("add_child", data => {
            console.log(data)
        })

        socket.on('client_typing', (data) => {
            socket.broadcast.to(room).emit('client_typing', data);
        })

        socket.broadcast.on('client_stop_typing', (data) => {
            socket.broadcast.to(room).emit('client_stop_typing', data);
        })

        socket.on('add_commnet', async (data) => {
            try {
                const _id = mongo.id(data.id);

                const budget = data.budget;
                budget.updateDate = new Date();

                const db = await mongo.collection(collection);
                await db.updateOne({ _id }, { $set: budget });

                budget._id = data.id;
                socket.emit('add_comment', budget)

            } catch (message) {
                console.log(message)
            }
        })
    })


    return http;
}