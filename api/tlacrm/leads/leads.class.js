const mongo = require("../../../lib/mongo.client")("tlacrm");
const { nextPage, formatDate } = require('../../../lib/func');
const db = "leads";

class Lead {

    fetch(req, res) {
        const page = parseInt(req.params.page);
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
            : res.send(data))
        })
    }

    add(req,res) {
        const data = req.body.data;
        data.date = new Date();
        data.update = new Date();
        mongo(db).insert(data, err => err ? console.log(err)
                        : res.json({sc: true}))
    }

    update(req,res) {
        const data = req.body.data;
        const id = mongo(db).id(data._id);
        data.update = new Date();
        delete data._id;
        mongo(db).update({_id:id}, data, err => {
            if(err) return console.log(err);
            res.send({sc: true})
        })
    }

    getOne(req,res) {
        const id = mongo(db).id(req.params.id);
        mongo(db).findOne({_id: id}, (err, data) => {
            // data.date = formatDate(data.date)
            res.send(data)
        })
    }

    remove(req,res) {
        const id = mongo(db).id(req.params.id);
        mongo(db).remove({_id: id}, err => err ? console.log(err) : res.json({sc: true}))
    }

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
        mongo(db).find(querys, (err,data) => res.send(data))
    }

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

module.exports = new Lead();