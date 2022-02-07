const express = require('express');
const lorem = require('@jamen/lorem');
const app = express();

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const acceptAllSchema = new Schema({}, { strict: false });
const postRoutes = require('./Routes/post');



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

// test mongoose about-
//Home
app.get('/', (req, resp) => {

resp.render('index', {title:'Shinobi'});

});


// Post
app.use('/post', postRoutes);

//About
app.get('/about', (req, resp) => {
const Companies = mongoose.model('Companies', acceptAllSchema, 'companies')
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
  
  
