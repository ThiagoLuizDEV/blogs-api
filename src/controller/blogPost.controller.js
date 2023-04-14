const { allPost } = require('../services/blogPost.service');

const allBlogPost = async (req, res) => {
    try {
        const { authorization } = req.headers;
        const result = await allPost(authorization);
        return res.status(200).json(result);
    } catch (error) {
        if (error.status) return res.status(error.status).json({ message: error.message });
    }
};

module.exports = {
    allBlogPost,
};
