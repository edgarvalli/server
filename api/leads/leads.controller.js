const mongo = require("../../lib/mongo.client")("tlacrm");
const { nextPage, now } = require("../../lib/func");
const collection = "leads";

module.exports = {

    async fetch(req, res) {
        const page = parseInt(req.params.page);
        const limit = 50;
        const leads = await mongo.collection(collection);
        const data = await leads.find({visited: false}).skip(nextPage(page, limit)).limit(limit).sort({update_date: -1}).toArray();
        const pages = Math.ceil(data.length/limit);
        if(pages < page) return res.send({complete: true, data: [], msg: "No hay elements"})
        res.json({error: false, data, complete: false})
    },

    async add(req,res) {
        const data = req.body;
        const { user } = req.client;
        data.create_by = user._id;
        data.create_date = new Date();
        data.update_date = new Date();
        data.visited = false;
        const leads = await mongo.collection(collection);
        await leads.insert(data);
        res.json({error: false});
    },

    async update(req,res) {
        const data = req.body;
        const _id = mongo.id(data._id);
        data.update_date = new Date();
        data.visited = false;
        delete data._id;
        const leads = await mongo.collection(collection);
        await leads.update({_id}, {$set: data});
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
        await leads.remove({_id});
        res.json({error: false});
    },

    async search(req,res) {
        const { value } = req.params;
        const query =  {
            $or: [
                {name: new RegExp(value, 'i')},
                {phone: new RegExp(value, 'i')},
                {cellphone: new RegExp(value, 'i')},
                {address: new RegExp(value, 'i')}
            ]
        };
        const leads = await mongo.collection(collection);
        const data = await leads.find(query).limit(20).toArray();
        res.json({error: false, data})
    }

}
