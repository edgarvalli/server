const router = require('express').Router();
const userController = require('../../controllers/tlacrm/users.controllers');
const { tokenExpiration } = require("../../middleware");
const sendNotification = require('../../scripts/send_notification');

const checkPermission = (req, res, next) => {
    const user = req.client;
    const { modules } = user.profile;
    const module = modules.filter(m => m.key = 'users')[0];
    console.log(module);
    next()
}

router
    .post('/login', userController.login)
    .post("/change-avatar", tokenExpiration, userController.changeAvatar)
    .post('/change-name', tokenExpiration, userController.changeName)
    .post('/change-password', tokenExpiration, userController.changePassword)
    .get('/fetch-user-info/:id', tokenExpiration, userController.fetchUserInfo)
    .get('/fetch', tokenExpiration, userController.fetchUsers)
    .post('/add', tokenExpiration, userController.addUser)
    .post('/reset-password', tokenExpiration, userController.resetPassword)

    .get('/fetch', tokenExpiration, userController.fetch)

    // .get('/m', lead.addNewFields)
    .post('/subscribe', (req, res) => {
        const subscription = req.body;
        console.log(subscription)
        const payload = {
            title: "TlaCrm Notification",
            message: "Tu te has subscripto a las notificaciones",
            icon: 'https://ev-server.ddns.net/tlacrm/images/icons/icon_16x16.png'
        }

        sendNotification(subscription, payload)

        res.json({ error: false })
    })

module.exports = router;