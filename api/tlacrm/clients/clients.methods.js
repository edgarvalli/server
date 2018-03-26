const mongo = require("../../../lib/mongo.client")("tlacrm");
const { nextPage, formatDate } = require('../../../lib/func');
const collection = "clients"

module.exports = {

    async fetch(req, res) {
        const page = parseInt(req.params.page);
        const limit = 50;
        const skip =  nextPage(page,limit)
        const sort = { update_date: -1 }

        const clients = await mongo.collection(collection);
        const clientsTotal = await clients.find({}).count();
        const result = await clients.find({}).skip(skip).limit(limit).sort(sort).toArray();
        const pages = Math.ceil(clientsTotal/limit);
        if(pages < page) return res.json({complete: true, data: [], msg: "No hay elementos"})
        res.json({error: false, data: result})
    },

    async add(req,res) {
        const data = req.body.data;
        data.create_date = new Date();
        data.update_date = new Date();
        const clients = await mongo.collection(collection);
        const insert = await clients.insert(data);
        res.json({error: false})
    },

    async update(req,res) {
        const data = req.body.data;
        const _id = mongo.id(data._id);
        data.update_date = new Date();
        delete data._id;
        const clients = await mongo.collection(collection);
        const update = await clients.update({_id}, data);
        res.json({error: false})
    },

    async getOne(req,res) {
        const _id = mongo.id(req.params.id);
        const clients = await mongo.collection(collection);
        const client = await clients.findOne({_id});
        res.json({error: false, data: client});
    },

    async remove(req,res) {
        const _id = mongo.id(req.params.id);
        const clients = await mongo.collection(collection);
        const rm = await clients.remove({_id});
        res.json({error: false})
    },

    async search(req,res) {
        const value = req.params.value;
        const query =  {
            $or: [
                {name: new RegExp(value, 'i')},
                {phone: new RegExp(value, 'i')},
                {cell: new RegExp(value, 'i')},
                {address: new RegExp(value, 'i')}
            ]
        }
        const clients = await mongo.collection(collection);
        const data = await clients.find(query).limit(50).toArray();
        res.json({error: false, data});
    },

    async convertToClient(req, res) {
        const values = req.body.data;
        const _id = mongo.id(values._id);
        delete values._id;
        values.update_date = new Date();
        values.create_date = new Date();
        const clients = await mongo.collection(collection);
        const leads = await mongo.collection("leads");
        const add = await clients.insert(values);
        const rm = await leads.remove({_id});
        res.json({error: false});
    },
}