const mongo = require('../../helpers/mongo.client')("tlacrm");
const fs = require("fs");
const path = require("path");
const bcrypt = require("bcrypt");
const { generateToken } = require('../../helpers/handletoken');

module.exports = {

    async changeAvatar(req, res) {
        const image = req.files[0];
        if (image === undefined) return res.json({ error: false, avatar: null });
        const img = image.originalname.split(".");
        if (img[1] !== 'png' && img[1] !== 'jpg') return res.json({ error: true, message: 'Formato de imagen no soportado, solo PNG y JPG' })

        const filename = `${req.client.user._id}.png`;
        const oldDest = path.join(__dirname, `../../${image.path}`)
        const pathProfile = "../../public/tlacrm/images/profiles"
        const newDest = path.join(__dirname, `${pathProfile}/${filename}`)
        if (oldDest) {
            const files = fs.readdirSync(path.join(__dirname, pathProfile));
            files.map(file => {
                if (file.startsWith(req.client.user._id)) {
                    fs.unlinkSync(path.join(__dirname, `${pathProfile}/${file}`));
                }
            })

            // Move the image from the upload path
            fs.renameSync(oldDest, newDest)

            // Create an avatar picture from the last
            const avatar = `${req.client.user._id}_avatar.png`;

            const _id = mongo.id(req.client.user._id);
            const users = await mongo.collection("users");
            await users.update({ _id }, { $set: { avatar: filename } })
            res.status(200).json({ error: false, avatar: filename })
        }
    },

    async changeName(req, res) {
        const { id, name } = req.body;
        const c = await mongo.collection('users');
        const _id = mongo.id(id);
        await c.update({ _id }, { $set: { name } });
        res.json({ error: false })
    },

    async changePassword(req, res) {

        const { password, id } = req.body;

        const c = await mongo.collection('users');
        const _id = mongo.id(id);
        bcrypt.genSalt(10, (error, salt) => {
            bcrypt.hash(password, salt, (err, hash) => {
                c.update({ _id }, { $set: { password: hash } });
                res.json({ error: false })
            })
        })

    },

    async login(req, res) {
        const { username, password } = req.body;
        const userRequest = username.toLowerCase();
        const users = await mongo.collection("users");
        const user = await users.find({ username: userRequest }).toArray();

        if (user.length <= 0 || user === undefined) return res.json({ error: true, message: "Usuario no encontrado" })

        bcrypt.compare(password, user[0].password, async (err, success) => {
            if (err) return res.json({ error: true, message: 'Ocurrio un error con la libreria' })
            if (!success) return res.json({ error: true, message: "Contraseña incorrecta" })

            delete user[0].password;

            const db = await mongo.collection('profiles');
            const profile = await db.findOne({ _id: mongo.id(user[0].profile) });
            user[0].profile = profile;

            const token = generateToken(user[0]);
            res.json({ error: false, user: user[0], token, message: "Token enviado" })
        })
    },

    async fetchUserInfo(req, res) {
        const id = req.params;
        const c = await mongo.collection('users');
        const _id = mongo.id(id)
        const user = c.findOne({ _id }).catch(err => {
            res.json({ error: true, error: err })
        });

        delete data.password;

        res.json({ error: false, data: { user } });
    },

    async fetch(_, res) {
        const db = await mongo.collection('users');
        const users = await db.find().toArray();
        res.json({error: false, data: { users }})
    },
    async fetchUsers(req, res) {
        const users = await mongo.collection('users');
        const allUsers = await users.find().sort({ create_date: -1 }).toArray();
        res.json({ error: false, data: { users: allUsers } })
    },

    async addUser(req, res) {
        const data = req.body;
        const users = await mongo.collection('users');
        if (data.username === '' || data.password === '') return res.json({ error: true, message: 'No ingreso usuario o contraseña' });
        const salt = bcrypt.genSaltSync(10);
        const password = bcrypt.hashSync(data.password, salt);
        await users.insert({ username: data.username, password, name: data.name, avatar: 'default.png' }).catch(err => res.json({ error: true, message: err }));
        res.json({ error: false })
    },

    async resetPassword(req, res) {
        const { id, password } = req.body;
        const _id = mongo.id(id);
        const salt = bcrypt.genSaltSync(10);
        const _password = bcrypt.hashSync(password, salt);
        const users = await mongo.collection('users');
        await users.update({ _id }, { $set: { password: _password } });
        res.json({ error: false })
    }

}
