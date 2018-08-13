const mongo = require("../../../lib/mongo.client")("tlacrm");
const { nextPage, now } = require("../../../lib/func");
const collection = "leads";

module.exports = {

    async fetch(req, res) {
        console.log("works");
        const page = parseInt(req.params.page);
        const limit = 50;
        const leads = await mongo.collection(collection);
        const data = await leads.find({visited: false}).skip(nextPage(page, limit)).limit(limit).sort({update_date: -1}).toArray();
        const pages = Math.ceil(data.length/limit);
        if(pages < page) return res.send({complete: true, data: [], msg: "No hay elements"})
        res.json({error: false, data, complete: false})
    },

    async add(req,res) {
        const data = req.body.data;
        data.create_date = new Date();
        data.update_date = new Date();
        const leads = await mongo.collection(collection);
        const insert = await leads.insert(data);
        res.json({error: false});
    },

    async update(req,res) {
        const {data} = req.body;
        const _id = mongo.id(data._id);
        data.update_date = new Date();
        delete data._id;
        const leads = await mongo.collection(collection);
        const up = await leads.update({_id}, {$set: data});
        res.json({error: false})
    },

    async getOne(req,res) {
        const _id = mongo.id(req.params.id);
        const leads = await mongo.collection(collection);
        const lead = await leads.findOne({_id});
        res.json({error: false , data: lead});
    },

    async remove(req,res) {
        const _id = mongo.id(req.params.id);
        const leads = await mongo.collection(collection);
        const rm = await leads.remove({_id});
        res.json({error: false});
    },

    async search(req,res) {
        const { value } = req.params;
        const query =  {
            $or: [
                {name: new RegExp(value, 'i')},
                {phone: new RegExp(value, 'i')},
                {cell: new RegExp(value, 'i')},
                {address: new RegExp(value, 'i')}
            ]
        };
        const leads = await mongo.collection(collection);
        const data = await leads.find(query).limit(20).toArray();
        res.json({error: false, data})
    }

}
