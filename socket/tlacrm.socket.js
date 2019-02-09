const { mongoClient } = require("../helpers");

module.exports = async (socket) => {
    //const db = await mongoClient("tlacrm").collection(socket.collection).catch(error => console.log(error))
    console.log(socket)
    socket.on("client_typing", data => {
        console.log(data)
    })
}