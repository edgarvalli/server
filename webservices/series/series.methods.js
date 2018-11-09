const mongo = require('../../lib/mongo.client')('own_series');

module.exports = {
    async getSeries(req, res) {
        const db = await mongo.collection('series');
        const series = await db.find({release: true}).toArray();
        res.json({error: false, data: { series } })
    }
}