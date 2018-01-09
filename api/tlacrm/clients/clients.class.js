const mongo = require('../../../mongo.client')('clients');
const { nextPage, formatDate } = require('../../../func');

class Client {

    fetch(req, res) {
        const page = parseInt(req.params.page);
        const limit = parseInt(req.params.limit)
        const querys = {
            skip: nextPage(page,limit),
            limit
        }

        mongo.count((err, total) => {
            if (err) throw console.log(err)
            const pages = Math.ceil(total/limit);
            if(pages < page) return res.send({complete: true})
            mongo.find(querys, (err,data) => err ? console.log(err)
            : res.send(data))
        })
    }

    add(req,res) {
        const data = req.body.data;
        data.date = new Date();
        data.update = new Date();
        data.jobs = [{}];
        mongo.insert(data, err => err ? console.log(err)
                        : res.send('success'))
    }

    update(req,res) {
        const data = req.body.data;
        const id = mongo.id(data._id);
        data.update = new Date();
        delete data._id;
        mongo.update({_id:id}, data, err => {
            if(err) return console.log(err);
            res.send({sc: true})
        })
    }

    getOne(req,res) {
        const id = mongo.id(req.params.id);
        mongo.findOne({_id: id}, (err, data) => {
            res.send(data)
        })
    }

    remove(req,res) {
        const id = mongo.id(req.params.id);
        mongo.remove({_id: id}, err => err ? console.log(err) : res.send('success'))
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
        mongo.find(querys, (err,data) => res.send(data))
    }

    addNewFields(req,res) {
        mongo.find({}, (err, leads) => {
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

module.exports = new Client();