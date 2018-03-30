const mongo = require("../../../lib/mongo.client")("tlacrm");
const fs = require("fs");
const path = require("path");

module.exports = {
    
    async changeAvatar(req, res) {
        const image = req.files[0];
        const img = image.originalname.split(".");
        let date = new Date();
        date = `${date.getFullYear()}${date.getMonth()}${date.getDay()}_${date.getHours()}${date.getMinutes()}${date.getSeconds()}`
        const filename = `${req.user.user._id}_${date}.${img[1]}`;
        const oldDest = path.join(__dirname, `../../../${image.path}`)
        const pathProfile = "../../../public/tlacrm/static/img/profiles"
        const newDest = path.join(__dirname, `${pathProfile}/${filename}`)
        if(oldDest) {
            const files = fs.readdirSync(path.join(__dirname, pathProfile));
            files.map(file => {
                if(file.startsWith(req.user.user._id)) {
                    fs.unlinkSync(path.join(__dirname, `${pathProfile}/${file}`));
                }
            })
            const mv = fs.renameSync(oldDest, newDest)
            const _id = mongo.id(req.user.user._id);
            const users = await mongo.collection("users");
            const up = await users.update({_id}, { $set: { avatar: filename }})
            res.status(200).json({error: false, avatar: filename})
        }
    }

}