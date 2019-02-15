const mongo = require('./evbase.mongo');
module.exports = {

    async fetch(req, res) {

        const { limit, skip } = req.params;
        const { dbname, collection } = req.headers;
        const db = await mongo(dbname).collection(collection);
        const children = await db.find().limit(limit || 50).skip(skip || 0).toArray();
        res.json({ error: false, data: { children } })

    }

}