const router = require('express').Router();
const userController = require('../../controllers/tlacrm/users.controllers');
const { tokenExpiration } = require("../../middleware");

router
    .post('/login', userController.login)
    .post("/change-avatar", tokenExpiration, userController.changeAvatar)
    .post('/change-name', tokenExpiration, userController.changeName)
    .post('/change-password', tokenExpiration, userController.changePassword)
    .get('/fetch-user-info/:id', tokenExpiration, userController.fetchUserInfo)
    .get('/fetch', tokenExpiration, userController.fetchUsers)
    .post('/add', tokenExpiration, userController.addUser)
    .post('/reset-password', tokenExpiration, userController.resetPassword)
    // .get('/m', lead.addNewFields)

module.exports = router;