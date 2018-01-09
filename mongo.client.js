const mongodb = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;

module.exports = (collection) => {
	const querys = {

        url: 'mongodb://localhost/',

        dbName: "tlacrm",

		id: id => ObjectID(id),
        
        find: function({query,select,limit = 0, skip = 0, sort = {_id: -1}},cb){
			mongodb.connect(this.url, (err,client) => {
                const db = client.db(this.dbName)
                db.collection(collection)
                    .find(query,select).limit(limit)
                    .sort(sort).skip(skip).toArray(cb)
                client.close();
			})
        },
        
		insert: function(data,cb) {
            mongodb.connect(this.url, (err,client) => {
                const db = client.db(this.dbName)
                db.collection(collection).insert(data,cb)
                client.close();
            })
        },

        findOne: function(query,cb) {
            mongodb.connect(this.url, (err,client) => {
                const db = client.db(this.dbName)
                db.collection(collection).findOne(query,cb)
                client.close()
            })
        },

		update: function(query,data,cb) {
            mongodb.connect(this.url, (err,client) => {
                const db = client.db(this.dbName)
                db.collection(collection).update(query, data,cb)
                client.close()
            })
        },

		remove: function(query,cb) {
            mongodb.connect(this.url, (err,client) => {
                const db = client.db(this.dbName)
                db.collection(collection).remove(query, cb)
                client.close()
            })
        },

        count: function(cb) {
            mongodb.connect(this.url, (err, client) => {
                const db = client.db(this.dbName)
                db.collection(collection).count(cb)
                client.close();
            })
        }
	}

    return querys;
}