const express = require('express');
const controllerUser = require('../controller/user.controller');
const {
    validationName,
    validationEmail,
    validationPassword,
} = require('../middlewares/user.middleware');

const router = express.Router();

router.post(
'/',
validationName,
validationEmail,
validationPassword,
controllerUser.createUserController,
);

module.exports = router;