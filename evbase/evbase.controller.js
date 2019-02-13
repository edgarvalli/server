const mongo = require('./evbase.mongo');
module.exports = {

    async fetch(req, res) {

        const d = JSON.parse(req.params.data);
        const limit = d.limit || 0;
        const skip = d.skip || 0;
        const sort = d.sort || {};
        const filter = d.filter || { _id: -1 };
        const { dbname, collection } = req.headers;
        const db = await mongo(dbname).collection(collection);
        const children = await db.find(filter).limit(limit).skip(skip).sort(sort).toArray();
        res.json({ error: false, data: { children } })

    }

}