const mongo = require("../../../lib/mongo.client")("tlacrm");
const collection = "jobs";

module.exports = {

    async fetch(req, res) {
        const c = await mongo.collection(collection);
        const result = await c.aggregate([
            { $lookup: {
                    from: "clients",
                    localField: "client_id",
                    foreignField: "_id",
                    as: "client"
                }
            }, { $limit: 50 }, { $match: { payment_out: false } },{ $sort: { update_date: -1 } }
        ]).toArray();

        // Format the result for only necesary fields
        
        // Define array of objects
        const data = [];

        // get all the objects in result
        result.forEach(r => {

            // define jobs array
            const jobs = [];

            // Push all the job name in the result array
            r.jobs.forEach(j => jobs.push(j.name))

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
                jobs,
                _id: r._id,
                total
            })
        })

        res.json({error: false, data})
    },

    async add(req, res) {
        const { data } = req.body;
        data.client_id = mongo.id(data.client_id)
        data.create_date = new Date();
        data.update_date = new Date();
        data.payment_out = false;
        const c = await mongo.collection(collection);
        const add = await c.insert(data);
        res.json({error: false})
    },

    async getOne(req, res) {
        const { id } = req.params;
        const _id = mongo.id(id);
        const c = await mongo.collection(collection);
        const result = await c.findOne({_id});
        if(result === null) return res.json({error: true, msg: "No se encontro registro"})
        res.json({error: false, data: result})
    },

    async update(req, res) {
        const { data } = req.body;
        const _id = mongo.id(data.id);
        delete data.id;
        const payments = data.payments.reduce((a,b) => parseFloat(a) + parseFloat(b))
        const jobs = data.jobs.map(job => parseInt(job.cant) * parseFloat(job.cost)).reduce((a,b) => a+b);
        const rest = jobs - payments;
        (rest <= 0) ? data.payment_out = true : data.payment_out = false
        data.update_date = new Date();
        const c = await mongo.collection(collection);
        const up = await c.update({_id}, { $set: data });
        if(up === null) return res.json({error: true, msg:"Hello from the server"})
        res.json({error: false})
    }

}
