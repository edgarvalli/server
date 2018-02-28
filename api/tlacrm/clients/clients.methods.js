const mongo = require("../../../lib/mongo.client")("tlacrm");
const { nextPage, formatDate } = require('../../../lib/func');
const db = "clients"

module.exports = {

    fetch(req, res) {
        const page = parseInt(req.params.page);
        const limit = 50;
        const querys = {
            skip: nextPage(page,limit),
            limit,
            sort: { update_date: -1 }
        }

        mongo(db).count((err, total) => {
            if (err) throw console.log(err)
            const pages = Math.ceil(total/limit);
            if(pages < page) return res.send({complete: true, data: [], msg: "No hay elementos"})
            mongo(db).find(querys, (err,data) => {
                if(err) {
                    res.json({error: true, msg: err})
                } else {
                    if(data) {
                        res.json({error: false, data})
                    } else {
                        res.json({error: false, data: []})
                    }
                }
            })
        })
    },

    add(req,res) {
        const data = req.body.data;
        data.create_date = new Date();
        data.update_date = new Date();
        mongo(db).insert(data, err => err ? res.json({error: true, msg: "Ocurrio un error al guardar los datos"})
            : res.json({error: false, msg:"success"}))
    },

    update(req,res) {
        const data = req.body.data;
        const id = mongo(db).id(data._id);
        data.update_date = new Date();
        delete data._id;
        mongo(db).update({_id:id}, data, err => {
            if(err) return console.log(err);
            res.send({sc: true})
        })
    },

    getOne(req,res) {
        const id = mongo(db).id(req.params.id);
        mongo(db).findOne({_id: id}, (err, data) => {
            res.send({error: false, data})
        })
    },

    remove(req,res) {
        const id = mongo(db).id(req.params.id);
        mongo(db).remove({_id: id}, err => err ? res.json({error: true, msg: "Ocurrio un error al eliminar", msgError: err})
            : res.json({error: false, msg: "Registro eliminado"}))
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
            limit: 50
        }
        mongo(db).find(querys, (err,data) => res.send(data))
    },

    convertToClient(req, res) {
        const { id, values } = req.body.data;
        values.update_date = new Date();
        values.create_date = new Date();
        mongo(db).insert(values, err => {
            if(err) {
                res.json({error: true, msg: "Error al convertir prospecto a cliente"})
            } else {
                const _id =  mongo().id(id);
                mongo("leads").remove({_id}, err => res.json({error: false}))
            }
        })
    },

    addNewFields(req,res) {
        mongo(db).find({}, (err, leads) => {
            leads.map( lead => {
                lead.date = new Date()
                lead.visited = false
                const id = mongo.id(lead._id)
                mongo.update({_id: id}, lead, err => console.log('updated'))
            })
            res.send("works")
        })
    }

}