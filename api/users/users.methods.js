const mongo = require("../../lib/mongo.client")("tlacrm");
const fs = require("fs");
const path = require("path");
const sharp = require('sharp');
const bcrypt = require("bcrypt");
const { createToken } = require('../../lib/func');

const generateUniqueId = size => {
    let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
        retVal = "";
    for (var i = 0, n = charset.length; i < size; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal;
}

module.exports = {
    
    async changeAvatar(req, res) {
        const image = req.files[0];
        if(image === undefined) return res.json({error: false, avatar: null});
        const img = image.originalname.split(".");
        console.log(img[1])
        if(img[1] !== 'png' && img[1] !== 'jpg') return res.json({error: true, msg: 'Formato de imagen no soportado, solo PNG y JPG'})
        
        const filename = `${req.client.user._id}.${img[1]}`;
        const oldDest = path.join(__dirname, `../../${image.path}`)
        const pathProfile = "../../public/tlacrm/images/profiles"
        const newDest = path.join(__dirname, `${pathProfile}/${filename}`)
        if(oldDest) {
            const files = fs.readdirSync(path.join(__dirname, pathProfile));
            files.map(file => {
                if(file.startsWith(req.client.user._id)) {
                    fs.unlinkSync(path.join(__dirname, `${pathProfile}/${file}`));
                }
            })
            fs.renameSync(oldDest, newDest)

            const avatar = filename.split('.').join('_avatar.')
            sharp(newDest)
            .resize(73, 73)
            .toFile('public/tlacrm/images/profiles/' + avatar)

            const _id = mongo.id(req.client.user._id);
            const users = await mongo.collection("users");
            await users.update({_id}, { $set: { avatar: filename }})
            res.status(200).json({error: false, avatar: filename})
        }
    },

    async changeName(req, res) {
        const { id, name } = req.body;
        const c = await mongo.collection('users');
        const _id = mongo.id(id);
        await c.update({_id}, { $set: { name } });
        res.json({error: false})
    },

    async changePassword(req, res) {

        const { newpassword, password, id } = req.body;

        const c = await mongo.collection('users');
        const _id = mongo.id(id);
        const user = await c.findOne({_id});
        bcrypt.compare(password, user.password, (err, sc) => {
            if(err) return res.json({error: true, msg: 'Ocurrio un error con la libreria'})
            if(!sc) return res.json({error: true, msg: "Contraseña incorrecta"})
            bcrypt.genSalt(10, (error, salt) => {
                bcrypt.hash(newpassword, salt, (err, hash) => {
                    c.update({_id}, { $set: { password: hash } });
                    res.json({error: false})
                })
            })
        })
        
    },

    async login(req, res) {
        const { persistent = false, username, password } = req.body;
        const userRequest = username.toLowerCase();
        const users = await mongo.collection("users");
        const user = await users.find({username: userRequest}).toArray();
        
        if(user.length <= 0 || user === undefined) return res.json({error: true, msg:"Usuario no encontrado"})
        
        bcrypt.compare(password, user[0].password, (err, success) => {
            if(err) return res.json({error: true, msg: 'Ocurrio un error con la libreria'})
            if(!success) return res.json({error: true, msg: "Contraseña incorrecta"})
            
            delete user[0].password;

            const skt = generateUniqueId(70);

            const info = {
                user: user[0],
                skt,
                client: req.headers['user-agent']
            }
            let token;

            if(persistent) {
                info.persistent = true
                token = createToken(info, 100, "years")
            } else {
                info.persistent = false;
                token = createToken(info, 1, "days")
            }
            res.json({error: false, user: info.user, token, skt, msg: "Token enviado"})
        })
    },

    async fetchUserInfo(req, res) {
        const id = req.params;
        const c = await mongo.collection('users');
        const _id = mongo.id(id)
        const data = c.findOne({_id}).catch(err => {
            res.json({error: true, error: err})
        });

        res.json({error: false, data});
    }

}