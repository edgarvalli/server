const m = require("mongodb");
const mongo = m.MongoClient;
const url = "mongodb://localhost:27017";
const db = "tlacrm";

module.exports = async function(req, res) {
    const conn = await mongo.connect(url);
    const set = conn.db(db)
    const leadsC = await set.collection("leads");
    const jobsC = await set.collection("jobs")
    const leads = await leadsC.find({visited: false}).count();
    const jobs = await jobsC.find({payment_out: false}).count()
    res.json({error: false, data: { leads, jobs } });
}