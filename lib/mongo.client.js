const mongo = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
const url = "mongodb://localhost:27017"

module.exports = db => {
    return {
        id: id => ObjectID(id),
        async collection(collection) {
            const conn = await mongo.connect(url);
            const set = conn.db(db);
            const c = await set.collection(collection);
            return c;
        }
    }
}

// module.exports = function(db) {
//     return function(collection) {
//         return {

//             dbName: db,

//             url: `mongodb://localhost/${this.dbName}`,
    
//             id: id => ObjectID(id),

//             aggregate({ query = [] }, cb) {
//                 mongodb.connect(this.url, (err, client) => {
//                     const db = client.db(this.dbName);
//                     db.collection(collection)
//                         .aggregate(query).toArray(cb)
//                     client.close();
//                 })
//             },
    
//             find({query,select,limit = 0, skip = 0, sort = {_id: -1}},cb) {
//                 mongodb.connect(this.url, (err,client) => {
//                     const db = client.db(this.dbName)
//                     db.collection(collection)
//                         .find(query,select).limit(limit)
//                         .sort(sort).skip(skip).toArray(cb)
//                     client.close();
//                 })
//             },

//             findAndCount(query = {}, cb) {
//                 mongodb.connect(this.url, (err, client) => {
//                     const db = client.db(this.dbName)
//                     db.collection(collection).find(query).count(cb)
//                     client.close();
//                 })
//             },
    
//             insert(data, cb) {
//                 mongodb.connect(this.url, (err,client) => {
//                     const db = client.db(this.dbName)
//                     db.collection(collection).insert(data,cb)
//                     client.close();
//                 })
//             },
    
//             findOne(query,cb) {
//                 mongodb.connect(this.url, (err,client) => {
//                     const db = client.db(this.dbName)
//                     db.collection(collection).findOne(query,cb)
//                     client.close()
//                 })
//             },
    
//             update(query,data,cb) {
//                 mongodb.connect(this.url, (err,client) => {
//                     const db = client.db(this.dbName)
//                     db.collection(collection).update(query, data,cb)
//                     client.close()
//                 })
//             },
    
//             remove(query,cb) {
//                 mongodb.connect(this.url, (err,client) => {
//                     const db = client.db(this.dbName)
//                     db.collection(collection).remove(query, cb)
//                     client.close()
//                 })
//             },
    
//             count(cb) {
//                 mongodb.connect(this.url, (err, client) => {
//                     const db = client.db(this.dbName)
//                     db.collection(collection).count(cb)
//                     client.close();
//                 })
//             }
    
//         }
//     }
// }