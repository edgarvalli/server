const mongo = require("../../lib/mongo.client")("tlacrm");
const fs = require("fs");
const path = require("path");
const sharp = require('sharp');

module.exports = {
    
    async changeAvatar(req, res) {
        const image = req.files[0];
        const img = image.originalname.split(".");
        let date = new Date();
        let month = date.getMonth() + 1;
        
        if(month <= 9) {
            month = month.toString();
            month = '0' + month;
        }

        date = `${date.getFullYear()}${month}${date.getDate()}_${date.getHours()}${date.getMinutes()}${date.getSeconds()}`
        const filename = `${req.user.user._id}_${date}.${img[1]}`;
        const oldDest = path.join(__dirname, `../../../${image.path}`)
        const pathProfile = "../../../public/images/profiles"
        const newDest = path.join(__dirname, `${pathProfile}/${filename}`)
        if(oldDest) {
            const files = fs.readdirSync(path.join(__dirname, pathProfile));
            files.map(file => {
                if(file.startsWith(req.user.user._id)) {
                    fs.unlinkSync(path.join(__dirname, `${pathProfile}/${file}`));
                }
            })
            fs.renameSync(oldDest, newDest)

            const avatar = filename.split('.').join('_avatar.')
            sharp(newDest)
            .resize(73, 73)
            .toFile('public/images/profiles/' + avatar)

            const _id = mongo.id(req.extra.user._id);
            const users = await mongo.collection("users");
            await users.update({_id}, { $set: { avatar: filename }})
            res.status(200).json({error: false, avatar: filename})
        }
    }

}