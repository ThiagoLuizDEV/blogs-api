const { Category } = require('../models');
const { validateToken } = require('../utils/auth');

const categoryCreated = async (name, authorization) => {
    validateToken(authorization);
    const createCategory = Category.create({ name });
    return createCategory;
};

module.exports = {
    categoryCreated,
};