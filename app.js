const express = require('express');
const lorem = require('@jamen/lorem');

const app = express();
const ContactUs = require('./models/ContactUs')
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const companySchema = new Schema({}, { strict: false });
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}
const DBURI = `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cluster0.bcuol.mongodb.net/sample_training?retryWrites=true&w=majority`
mongoose.connect(DBURI, (err, db) =>{

//start app only after the connection has been established
app.listen(3001);
})
// temp data
console.log("Working in: "+process.env.NODE_ENV);

app.use(express.urlencoded({extended:true})); 
//EJS 
app.set('view engine', 'ejs');

// test mongoose about-q
app.post('/postNew', (req, res)=>{
console.log('aaa')
console.log(req.body);
//middle wwahre to parse data 
  
  let random = Math.floor(Math.random() * 350);
  console.log(req.url)
  const contactUs = new ContactUs(req.body);
  contactUs.save()
  .then(result => {res.redirect('allpost')})
  .catch(err => {console.log(err);})  ;

})

// test mongoose about-q
app.get('/post/:id', (req, res)=>{
  console.log(req.params)
  ContactUs.findById(req.params.id)
    .then(post => {res.render('post', {post})})
    .catch(err => {console.log(err);})  
}) 

// test mongoose about-q
app.get('/allpost', (req, res)=>{
  ContactUs.find().sort({name:1})
    .then(blogs => {res.render('allblogs', {blogs})})
    .catch(err => {console.log(err);})  
}) 
//Home
app.get('/', (req, resp) => {

resp.render('index', {title:'Shinobi'});

});

//About
app.get('/about', (req, resp) => {
const Companies = mongoose.model('Companies', companySchema, 'companies')
  Companies.find().limit(20)
    .then(company => {resp.render('about', {company})})
    .catch(err => {console.log(err);})  
  
});


//About
app.get('/contact', (req, resp) => {

  resp.render('contact');
  
});






//404
app.use((req, resp, next) => {

  resp.status(404).render('404');
  next();
});  
  
  
