//CURD
const PostNew = require('../models/ContactUs');

const all_post = (req, res)=>{
  PostNew.find().sort({name:1})
    .then(blogs => {res.render('allblogs', {blogs})})
    .catch(err => {console.log(err);})  
};

const post_details = (req, res)=>{
  console.log(req.params)
  PostNew.findById(req.params.id)
    .then(post => {res.render('post', {post})})
    .catch(err => {console.log(err);})  
};
module.exports = {
  all_post,
  post_details
}