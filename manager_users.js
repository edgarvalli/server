const bcrypt = require("bcrypt");
const readline = require("readline");
const mongo = require("./lib/mongo.client")("tlacrm");
const { now } = require("./lib/func");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question("Display name?: ", name => {
    rl.question("Username?: ", user => {
        rl.question("Password?: ", pass => {
            bcrypt.genSalt(10, (error, salt) => {
                bcrypt.hash(pass, salt, (error, hash)=> {
                    const today = { date: now().date, time: now().time };
                    const userInfo = {
                        name,
                        username: user.toLocaleLowerCase(),
                        password: hash,
                        create_date: today
                    }
                    mongo("users").insert(userInfo, err => {
                        err ? console.log(err) : console.log("User saved")
                        rl.close();
                    })
                })
            })
        })
    })
})
