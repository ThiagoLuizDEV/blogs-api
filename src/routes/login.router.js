const express = require('express');
const controllerLogin = require('../controller/login.controller');
const { loginValidation } = require('../middlewares/authLogin.middleware');

const router = express.Router();

router.post('/', loginValidation, controllerLogin.authenticUserController);

module.exports = router;