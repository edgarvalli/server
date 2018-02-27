const mongo = require("../../../lib/mongo.client")("tlacrm");
const { nextPage, now } = require("../../../lib/func");
const db = "leads";

module.exports = {

    fetch(req, res) {
        const page = parseInt(req.params.page);
        const limit = 50;
        const querys = {
            query: { visited: false },
            skip: nextPage(page,limit),
            limit,
            sort: { update_date: -1 }
        }
        mongo(db).count((err, total) => {
            if (err) throw console.log(err)
            const pages = Math.ceil(total/limit);
            if(pages < page) return res.send({complete: true})
            mongo(db).find(querys, (err,data) => err ? console.log(err)
            : res.send({data, complete: false}))
        })
    },

    add(req,res) {
        const data = req.body.data;
        const today = { date: now().date, time: now().time };
        data.create_date = today;
        data.update_date = today;
        mongo(db).insert(data, err => err ? res.json({error: true, msg: "Error al agregar prospecto"})
                        : res.json({error: false}))
    },

    update(req,res) {
        const data = req.body.data;
        const id = mongo(db).id(data._id);
        const today = { date: now().date, time: now().time };
        data.update_date = today;
        delete data._id;
        mongo(db).update({_id:id}, data, err => {
            err ? res.json({error: true, msg: "Error al actualizar"})
                : res.json({error: false})
        })
    },

    getOne(req,res) {
        const id = mongo(db).id(req.params.id);
        mongo(db).findOne({_id: id}, (err, data) => {
            // data.date = formatDate(data.date)
            if(err) res.json({error: true, msg: "Error al buscar uno"})
            res.send({error: false, data})
        })
    },

    remove(req,res) {
        const id = mongo(db).id(req.params.id);
        mongo(db).remove({_id: id}, err => err ? res.json({error: true, msg: "Error al eliminar"})
            : res.json({error: false}))
    },

    search(req,res) {
        const value = req.params.value;
        const querys = {
            query: {
                $or: [
                    {name: new RegExp(value, 'i')},
                    {phone: new RegExp(value, 'i')},
                    {cell: new RegExp(value, 'i')},
                    {address: new RegExp(value, 'i')}
                ]
            },
            limit: 20
        }
        mongo(db).find(querys, (err,data) => err ? res.send([err]) : res.send(data))
    },

    addNewFields(req,res) {
        mongo(db).find({}, (err, leads) => {
            leads.map( lead => {
                lead.create_date = new Date()
                lead.visited = false
                const id = mongo.id(lead._id)
                mongo.update({_id: id}, lead, err => console.log('updated'))
            })
            res.send("works")
        })
    },

}