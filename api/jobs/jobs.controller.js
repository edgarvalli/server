const mongo = require("../../lib/mongo.client")("tlacrm");
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
            let subtotal = r.jobs.map( job => parseInt(job.cant) * parseFloat(job.price) ).reduce((a,b) => a + b)
            
            // If the user set tax as true subtotal sum the .16 tax
            if(r.tax) subtotal += subtotal * .16;

            // Sum all the payments
            const payments = r.payments.reduce( (a,b) => parseFloat(a) + parseFloat(b));
            
            // Get the rest of the money
            const total = subtotal - payments;

            // Get weeks passed
            const today = new Date();
            const date = r.create_date;
            let create_date = Math.ceil(Math.floor((today - date) / 86400000) / 7);
            (create_date > 1)
                ? create_date = create_date + ' semanas'
                : create_date = create_date + ' semana' 
            
            // Finish data formated
            data.push({
                name: r.client[0].name,
                cellphone: r.client[0].cellphone,
                jobs,
                _id: r._id,
                total,
                create_date
            })
        });

        res.json({error: false, data})
    },

    async add(req, res) {
        const data = req.body;
        const { user } = req.client;
        data.create_by = user._id;
        data.client_id = mongo.id(data.client_id)
        data.create_date = new Date();
        data.update_date = new Date();
        data.payment_out = false;
        const c = await mongo.collection(collection);
        await c.insert(data);
        res.json({error: false})
    },

    async getOne(req, res) {
        const { id } = req.params;
        const _id = mongo.id(id);
        const c = await mongo.collection(collection);
        const result = await c.findOne({_id});
        if(result === null) return res.json({error: true, msg: "No se encontro registro"})
        // Push all the job name in the result array
        let create_date = result.create_date;
        let day = "0" + create_date.getDate();
        if(day.length >= 3) day = create_date.getDate();
        let month = "0" + (create_date.getMonth() + 1);
        if(month.length >= 3) month = (create_date.getMonth() + 1);
        create_date = `${day}/${month}/${create_date.getFullYear()}`

        // Update date
        let update_date = result.update_date;
        day = "0" + update_date.getDate();
        if(day.length >= 3) day = update_date.getDate();
        month = "0" + (update_date.getMonth() + 1);
        if(month.length >= 3) month = (update_date.getMonth() + 1);
        update_date = `${day}/${month}/${update_date.getFullYear()}`
        result.update_date = update_date;
        result.create_date = create_date;
        res.json({error: false, data: result})
    },

    async addComment(req, res) {
        const {id, comment} = req.body;
        const _id = mongo.id(id);
        const c = await mongo.collection(collection);
        await c.update({_id}, { $push: { comments: comment } });
        const job = await c.findOne({_id});
        res.json({error: false, comments: job.comments});
    },

    async update(req, res) {
        const data = req.body;
        const _id = mongo.id(data.id);
        delete data.id;
        const payments = data.payments.reduce((a,b) => parseFloat(a) + parseFloat(b))
        const jobs = data.jobs.map(job => parseInt(job.cant) * parseFloat(job.price)).reduce((a,b) => a+b);
        const rest = jobs - payments;
        (rest <= 0) ? data.payment_out = true : data.payment_out = false;
        data.update_date = new Date();
        const c = await mongo.collection(collection);
        const up = await c.update({_id}, { $set: data });
        if(up === null) return res.json({error: true, msg:"Hello from the server"})
        res.json({error: false})
    }

}
