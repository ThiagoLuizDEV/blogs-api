const { User } = require('../models');
const { generateToken } = require('../utils/auth');

const authenticUser = async (email, password) => {
    const user = await User.findOne({
        where: { email, password },
    });
    const error = new Error('Invalid fields');
    error.status = 400;
    if (!user) throw error;

    const token = generateToken(user.dataValues);
    return token;
};

module.exports = {
    authenticUser,
};