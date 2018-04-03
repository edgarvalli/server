const mongo = require("../lib/mongo.client")("tlacrm");
const bcrypt = require("bcrypt");
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function addUser(u) {
    bcrypt.genSalt(10, function(err, salt) {
        if(err) throw console.log(err)
        bcrypt.hash(u.password, salt, async function(err, hash) {
            if(err) throw console.log(err)
            const user = {
                username: u.username,
                password: hash,
                name: u.name,
                avatar:"default.png",
                create_date: new Date(),
                update_date: new Date()
            }
            const users = await mongo.collection("users");
            const insert = await users.insert(user)
            console.log("User stored")
        }) 
    })
}

rl.question('Nombre del usuario: ', (name) => {
    rl.question("Usuario: ", username => {
        rl.question("Contraseña: ", password => {
            addUser({username, name, password})
            rl.close();
        })
    })

});
