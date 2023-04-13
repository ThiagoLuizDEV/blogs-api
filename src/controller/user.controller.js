const { createdUser, validateTokenUser } = require('../services/user.service');

const createUserController = async (req, res) => {
    try {
        const { displayName, email, password, image } = req.body;
        const result = await createdUser({ displayName, email, password, image });
        res.status(201).json({ token: result });
    } catch (error) {
        if (error.status) return res.status(error.status).json({ message: error.message });
    }
};

const verifUserToken = async (req, res) => {
    try {
        const { authorization } = req.headers;
        const result = await validateTokenUser(authorization);
        res.status(200).json(result);
    } catch (error) {
        return res.status(401).json({ message: error.message });
    }
};

module.exports = {
    createUserController,
    verifUserToken,
};
