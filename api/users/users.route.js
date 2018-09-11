const express = require('express');
const router = express.Router();
const users = require('./users.methods');
const { isAuth } = require('../../lib/func');

router
    .post('/login', users.login)
    .post("/change-avatar", isAuth, users.changeAvatar)
    .post('/change-name', isAuth, users.changeName)
    .post('/change-password', isAuth, users.changePassword)
    .get('/fetch-user-info', isAuth, users.fetchUserInfo)
    // .get('/m', lead.addNewFields)

module.exports = router;