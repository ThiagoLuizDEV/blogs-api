const express = require('express');
const controllerCategory = require('../controller/category.controller');
const { validationNameCategory } = require('../middlewares/category.middlaware');

const router = express.Router();

router.post('/', validationNameCategory, controllerCategory.createCategoryController);

module.exports = router;