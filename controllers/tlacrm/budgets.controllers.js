const mongo = require('../../helpers/mongo.client')("tlacrm");
const collection = "budgets";

module.exports = {

    async fetch(_, res) {
        try {
            const db = await mongo.collection(collection);
            const budgets = await db.find().toArray();
            res.json({ error: false, data: { budgets } })
        } catch (message) {
            res.json({ error: true, message })
        }
    },

    async add(req, res) {
        const data = req.body;
        data.createDate = new Date();
        data.updateDate = new Date();
        data.visited = false;
        data.createBy = req.client._id

        const db = await mongo.collection(collection);
        const budget = await db.insertOne(data);
        res.json({ error: false, data: { budget } })
    },

    async update(req, res) {
        try {

            const data = req.body;
            const _id = mongo.id(data.id);

            const budget = data.budget;
            budget.updateDate = new Date();

            const db = await mongo.collection(collection);
            const _budget = await db.updateOne({ _id }, { $set: budget });

            res.json({ error: false, data: { budget: _budget } })

        } catch (message) {
            res.json({ error: true, message })
        }
    },

    async remove(req, res) {
        try {
            const db = await mongo.collection(collection);
            const _id = mongo.id(req.params.id);
            await db.remove({ _id });
            res.json({ error: false })
        } catch (message) {
            res.json({ error: true, message })
        }
    },

    async getOne(req, res) {
        try {
            const _id = mongo.id(req.params.id)
            const db = await mongo.collection(collection);
            const budget = await db.findOne({ _id });
            res.json({ error: false, data: { budget } })
        } catch (message) {
            res.json({ error: true, message })
        }
    },

    async search(req, res) {
        try {
            const val = req.params.value;
            const db = await mongo.collection(collection);
            const query = {
                $or: [
                    { clientName: new RegExp(val, 'i') }
                ]
            }

            const budgets = await db.find(query).sort({ clientName: 1 }).toArray();
            res.json({ error: false, data: { budgets } });
        } catch (message) {
            res.json({ error: true, message })
        }
    },

    async uploadFiles(req, res) {
        console.log(req.file)
        res.json({error: false})
    }

}