const express = require('express');
const lorem = require('@jamen/lorem');

const app = express();
const ContactUs = require('./models/ContactUs')
const mongoose = require('mongoose');
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}
const DBURI = `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cluster0.bcuol.mongodb.net/sample_training?retryWrites=true&w=majority`
mongoose.connect(DBURI, () =>{

//start app only after the connection has been established
app.listen(3001);

})
// temp data
console.log("Working in: "+process.env.NODE_ENV);
const blogs = [{
  "title": "Great!",
  "review": "Comedy"
}, {
  "title": "Year of the Comet",
  "review": "Action|Adventure|Comedy|Romance"
}, {
  "title": "Karate-Robo Zaborgar (Denjin Zabôgâ)",
  "review": "Action|Adventure|Comedy|Fantasy"
}, {
  "title": "Ivan the Terrible, Part One (Ivan Groznyy I)",
  "review": "Drama"
}, {
  "title": "Kumail Nanjiani: Beta Male ",
  "review": "Comedy|Documentary"
}, {
  "title": "Attack the Block",
  "review": "Action|Comedy|Sci-Fi"
}, {
  "title": "Forgiven",
  "review": "Drama"
}, {
  "title": "Sexual Dependency (Dependencia sexual)",
  "review": "Drama"
}, {
  "title": "Man from Earth, The",
  "review": "Drama|Sci-Fi"
}, {
  "title": "Batch '81",
  "review": "Drama"
}, {
  "title": "Justice League: The Flashpoint Paradox",
  "review": "Action|Adventure|Animation|Fantasy|Sci-Fi"
}, {
  "title": "Despicable Me",
  "review": "Animation|Children|Comedy|Crime"
}, {
  "title": "Last Hard Men, The",
  "review": "Western"
}];



//EJS 
app.set('view engine', 'ejs');

// test mongoose about-q
app.get('/postNew', (req, res)=>{
  let random = Math.floor(Math.random() * 350);
  console.log(req.url)
  const contactUs = new ContactUs({ 
    name: `Abul Qaism ${Math.floor(Math.random() * 100)}`,
    subject: `${lorem(15)}`,
    body:`${lorem(random)}`
  });
  contactUs.save()
  .then(result => {res.send(result)})
  .catch(err => {console.log(err);})  ;
})

// test mongoose about-q
app.get('/findPost', (req, res)=>{
  console.log(req.url)
  ContactUs.findById('62002456f5ed2c552e8ffd2d')
    .then(result => {res.send(result)})
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

  resp.render('about', {blogs});
  
});


//About
app.get('/contact', (req, resp) => {

  resp.render('contact', {blogs});
  
});

//404
app.use((req, resp, next) => {

  resp.status(404).render('404');
  next();
});  
  
  
