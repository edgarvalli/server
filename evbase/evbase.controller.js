const mongo = require('./evbase.mongo');
module.exports = {

    async fetch(req, res) {

        const d = JSON.parse(req.params.data);
        const limit = d.limit || 0;
        const skip = d.skip || 0;
        const sort = d.sort || { _id: -1 };
        const filter = d.filter || {};
        console.log(d);
        const { dbname, collection } = req.headers;
        const db = await mongo(dbname).collection(collection);
        const children = await db.find(filter).sort(sort).limit(limit).skip(skip).toArray();
        res.json({ error: false, data: { children } })

    }

}