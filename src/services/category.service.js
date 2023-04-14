const { Category } = require('../models');
const { validateToken } = require('../utils/auth');

const categoryCreated = async (name, authorization) => {
    validateToken(authorization);
    const createCategory = Category.create({ name });
    return createCategory;
};

const findAllCategory = async (authorization) => {
    validateToken(authorization);
    const result = await Category.findAll({
        attributes: ['id', 'name'],
    });
    return result;
};

module.exports = {
    categoryCreated,
    findAllCategory,
};