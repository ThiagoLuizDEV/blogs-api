const express = require('express');
const blogPostController = require('../controller/blogPost.controller');

const router = express.Router();

router.get('/', blogPostController.allBlogPost);

module.exports = router;