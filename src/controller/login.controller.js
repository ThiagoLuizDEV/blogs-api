const { authenticUser } = require('../services/login.service');

const authenticUserController = async (req, res) => {
    try {
    const { email, password } = req.body;
    const result = await authenticUser(email, password);
    
    res.status(200).json({ token: result });
    } catch (error) {
        if (error.status) return res.status(error.status).json({ message: error.message });
    }
};

module.exports = {
    authenticUserController,
};