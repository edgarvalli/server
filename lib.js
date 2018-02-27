const mongodb = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;

module.exports = database => new Promise((resolve, reject) => {
    mongodb.connect("mongodb://localhost/tlacrm", (err, client) => {
        const db = client.db("tlacrm");
        resolve(db.collection("leads"))
        client.close();
    })
})