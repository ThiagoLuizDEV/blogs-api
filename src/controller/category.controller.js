const { categoryCreated, findAllCategory } = require('../services/category.service');

const createCategoryController = async (req, res) => {
    try {
        const { authorization } = req.headers;
        const { name } = req.body;
        const result = await categoryCreated(name, authorization);
        return res.status(201).json(result);
    } catch (error) {
        if (error.status) return res.status(error.status).json({ message: error.message });
    }
};

const allCategory = async (req, res) => {
    try {
        const { authorization } = req.headers;
        const result = await findAllCategory(authorization);
        return res.status(200).json(result);
    } catch (error) {
        if (error.status) return res.status(error.status).json({ message: error.message });
    }
};

module.exports = {
    createCategoryController,
    allCategory,
};