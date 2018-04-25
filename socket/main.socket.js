const mongo = require("../lib/mongo.client")("tlacrm");

async function childChanged (s) {
    const c = await mongo.collection("bills");
    const leads = await c.find({}).toArray();
    s.emit("bills_changed", leads)
}

module.exports = io => io.on("connection", socket => {

    socket.on("bills_changed",() => childChanged(io))
    socket.on("bills_add", async data => {
        const c = await mongo.collection("bills");
        await c.insert(data);
        childChanged(io)
    })
    socket.on("bills_remove", async id => {
        const c = await mongo.collection("bills");
        await c.remove({_id: mongo.id(id)});
        childChanged(io)
    })

    socket.on("login", () => socket.emit("login-response", "success"))
})