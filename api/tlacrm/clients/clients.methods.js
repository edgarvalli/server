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

    async getLastTenClients() {
        const c = await mongo.collection(collection);
        const clients = await c.find({}).limit(10).sort({_id: -1}).toArray();
        if(clients.length === 0) return res.json({error: true, msg: "No hay registros"});
        res.json({error: false, data: clients});
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

    async getJobs(req, res) {
        const { id } = req.params;
        const _id = mongo.id(id);
        const c = await mongo.collection("jobs");
        const result = await c.aggregate([
            { $lookup: {
                    from: "clients",
                    localField: "client_id",
                    foreignField: "_id",
                    as: "client"
                }
            },{$match: {client_id: _id} }, { $sort: { create_date: -1 } }
        ]).toArray();

        // Format the result for only necesary fields
        
        // Define array of objects
        const data = [];

        // get all the objects in result
        result.forEach(r => {

            // define jobs array
            const jobs = [];

            // Push all the job name in the result array
            let date = r.update_date;
            let day = "0" + date.getDate();
            if(day.length >= 3) day = date.getDate();
            let month = "0" + (date.getMonth() + 1);
            if(month.length >= 3) month = (date.getMonth() + 1);
            date = `${day}/${month}/${date.getFullYear()}`

            // define subtotal and get all objects and sum all
            let subtotal = r.jobs.map( job => parseInt(job.cant) * parseFloat(job.cost) ).reduce((a,b) => a + b)
            
            // If the user set tax as true subtotal sum the .16 tax
            if(r.tax) subtotal += subtotal * .16;

            // Sum all the payments
            const payments = r.payments.reduce( (a,b) => parseFloat(a) + parseFloat(b));
            
            // Get the rest of the money
            const total = subtotal - payments;
            
            // Finish data formated
            data.push({
                name: r.client[0].name,
                cell: r.client[0].cellphone,
                date,
                _id: r._id,
                total
            })
        })

        res.json({error: false, data})
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