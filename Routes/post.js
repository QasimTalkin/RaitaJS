const express = require('express');
const router = express.Router();
const PostController = require('../controller/PostController')

  // test mongoose about-q
  router.get('/:id', PostController.post_details) 
  
  // test mongoose about-q
  router.get('/', PostController.all_post) 
  
  module.exports = router; 