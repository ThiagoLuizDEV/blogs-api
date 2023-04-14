const { BlogPost, User, Category } = require('../models');
const { validateToken } = require('../utils/auth');

const allPost = async (authorization) => {
    validateToken(authorization);
    const result = await BlogPost.findAll({
        include: [
            { model: User, as: 'user', attributes: ['id', 'displayName', 'email', 'image'] },
            { model: Category, as: 'categories', attributes: ['id', 'name'] },
        ],
    });
    return result;
};

module.exports = {
    allPost,
};