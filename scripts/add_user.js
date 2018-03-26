const mongo = require("../lib/mongo.client")("tlacrm");
const bcrypt = require("bcrypt");

bcrypt.genSalt(10, function(err, salt) {
    if(err) throw console.log(err)
    bcrypt.hash("Xero_070489", salt, async function(err, hash) {
        if(err) throw console.log(err)
        const user = {
            username: "evalli",
            password: hash,
            name: "Edgar Eduardo Valli Muñoz",
            create_date: new Date(),
            update_date: new Date()
        }
        const users = await mongo.collection("users");
        const insert = await users.insert(user)
        console.log("User stored")
    }) 
})
