const mongo = require('../../helpers/mongo.client')("tlacrm");
const collection = "jobs";

module.exports = {

    async fetch(req, res) {
        const c = await mongo.collection(collection);
        const result = await c.aggregate([
            {
                $lookup: {
                    from: "clients",
                    localField: "client_id",
                    foreignField: "_id",
                    as: "client"
                }
            }, { $limit: 50 }, { $match: { payment_out: false } }, { $sort: { update_date: -1 } }
        ]).toArray();

        // Format the result for only necesary fields

        const data = result.map(item => {
            // Get weeks passed
            const today = new Date();
            const date = item.create_date;
            let create_date = Math.ceil(Math.floor((today - date) / 86400000) / 7);
            (create_date > 1)
                ? create_date = create_date + ' semanas'
                : create_date = create_date + ' semana'

            item.create_date = create_date;
            item.client = item.client[0]
            return item;
        })



        res.json({ error: false, data })
    },

    async add(req, res) {
        const { data } = req.body;
        const { user } = req.client;
        data.job.create_by = user._id;
        data.job.client_id = mongo.id(data.client_id);
        data.job.payments = JSON.parse(data.job.payments);
        data.job.create_date = new Date();
        data.job.update_date = new Date();
        data.job.payments[0].create_date = new Date();
        data.job.payment_out = false;
        data.job.jobs = JSON.parse(data.job.jobs);
        const c = await mongo.collection(collection);
        await c.insertOne(data);
        res.json({ error: false })
    },

    async getOne(req, res) {
        const { id } = req.params;
        const _id = mongo.id(id);
        const c = await mongo.collection(collection);
        const result = await c.findOne({ _id });
        if (result === null) return res.json({ error: true, msg: "No se encontro registro" })
        // Push all the job name in the result array
        let create_date = result.create_date;
        let day = "0" + create_date.getDate();
        if (day.length >= 3) day = create_date.getDate();
        let month = "0" + (create_date.getMonth() + 1);
        if (month.length >= 3) month = (create_date.getMonth() + 1);
        create_date = `${day}/${month}/${create_date.getFullYear()}`

        // Update date
        let update_date = result.update_date;
        day = "0" + update_date.getDate();
        if (day.length >= 3) day = update_date.getDate();
        month = "0" + (update_date.getMonth() + 1);
        if (month.length >= 3) month = (update_date.getMonth() + 1);
        update_date = `${day}/${month}/${update_date.getFullYear()}`
        result.update_date = update_date;
        result.create_date = create_date;
        res.json({ error: false, data: result })
    },

    async getAllJobsFromId(req, res) {
        const id = req.params.id;
        const _id = mongo.id(id);
        const db = await mongo.collection("jobs");
        const result = await db.find({ client_id: _id }).toArray();
        // Format the result for only necesary fields

        const data = result.map(item => {
            // Get weeks passed
            const today = new Date();
            const date = item.create_date;
            let create_date = Math.ceil(Math.floor((today - date) / 86400000) / 7);
            (create_date > 1)
                ? create_date = create_date + ' semanas'
                : create_date = create_date + ' semana'

            item.create_date = create_date;
            return item;
        })

        res.json({ error: false, data });

    },

    async addComment(req, res) {
        const { id, data } = req.body;
        data.date = new Date();
        const _id = mongo.id(id);
        const c = await mongo.collection(collection);
        await c.updateOne({ _id }, { $push: { comments: data } });
        const job = await c.findOne({ _id });
        res.json({ error: false, comments: job.comments });
    },

    async update(req, res) {
        const { data } = req.body;
        const _id = mongo.id(data.job._id);
        delete data.job._id;
        data.job.client_id = mongo.id(data.job.client_id);
        const rest = parseFloat(data.job.total) - parseFloat(data.job.anticipo);
        (rest <= 0) ? data.job.payment_out = true : data.job.payment_out = false;
        data.job.update_date = new Date();
        const c = await mongo.collection(collection);
        c.updateOne({ _id }, { $set: data.job }).catch(error => res.json({ error: true, msg: error }))
        res.json({ error: false })
    }

}
