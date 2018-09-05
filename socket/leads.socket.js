const mongo = require("../../lib/mongo.client")("tlacrm");
const { nextPage, formatDate } = require("../../lib/func");
const db = "leads";

module.exports = io => io.of("/leads").on("connection", socket => {

    console.log("User connected on leads socket")

    socket.on("fetch", page => {
        const limit = 50;
        const querys = {
            skip: nextPage(page,limit),
            limit,
            sort: { update: -1 }
        }

        mongo(db).count((err, total) => {
            if (err) throw console.log(err)
            const pages = Math.ceil(total/limit);
            if(pages < page) return res.send({complete: true})
            mongo(db).find(querys, (err,data) => err ? console.log(err)
            : socket.emit("fetch-response", data))
        })
    
    })

    socket.on("add", data => {
        data.date = new Date();
        data.update = new Date();
        mongo(db).insert(data, err => err ? console.log(err)
            : socket.emit("add-response",{sc: true}))
    })

    socket.on("remove", _id => {
        const id = mongo(db).id(_id);
        mongo(db).remove({_id: id}, err => err ? console.log(err) 
            : socket.emit("remove-response",{sc: true}))
    })

    socket.on("findone", id => {
        const _id = mongo(db).id(id);
        mongo(db).findOne({_id}, (err, data) => socket.emit("one-response", data))
    })

    socket.on("update", data => {
        const id = mongo(db).id(data._id);
        data.update = new Date();
        delete data._id;
        mongo(db).update({_id:id}, data, err => {
            if(err) return console.log(err);
            socket.emit("update-response",{sc: true})
        })
    })

    socket.on("search", ({value, page}) => {
        
        const limit = 50;
        const querys = {
            query: {
                $or: [
                    {name: new RegExp(value, 'i')},
                    {phone: new RegExp(value, 'i')},
                    {cell: new RegExp(value, 'i')},
                    {address: new RegExp(value, 'i')}
                ]
            },
            skip: nextPage(page,limit),
            limit,
            sort: { update: -1 }
        }

        mongo(db).count((err, total) => {
            if (err) throw console.log(err)
            const pages = Math.ceil(total/limit);
            if(pages < page) return res.send({complete: true})
            mongo(db).find(querys, (err,data) => err ? console.log(err)
            : socket.emit("fetch-response", data))
        })
    })

    socket.on("disconnect", () => console.log(`User disconnected with id: ${socket.id}`))

})