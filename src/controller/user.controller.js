const { createdUser } = require('../services/user.service');

const createUserController = async (req, res) => {
    try {
        const { displayName, email, password, image } = req.body;
        const result = await createdUser({ displayName, email, password, image });
        res.status(201).json({ token: result });
    } catch (error) {
        if (error.status) return res.status(error.status).json({ message: error.message });
    }
};

module.exports = {
    createUserController,
};
