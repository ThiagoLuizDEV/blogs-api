const { User } = require('../models');
const { generateToken, validateToken } = require('../utils/auth');

const createdUser = async ({ displayName, email, password, image }) => {
    const findEmail = await User.findOne({ where: { email } });
    const error = new Error('User already registered');
    error.status = 409;
    if (findEmail) throw error;
    const createUser = await User.create({ displayName, email, password, image });
    const result = generateToken(createUser.dataValues);
    return result;
};

const validateTokenUser = async (token) => {
    validateToken(token);
    const result = User.findAll({
        attributes: { exclude: ['password'] },
    });
    return result;
};

module.exports = {
    createdUser,
    validateTokenUser,
};