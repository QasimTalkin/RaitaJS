const express = require('express');
const app = express();
app.listen(3001);

// temp data

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
app.set('views', 'MyNodeViews')
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
app.use((req, resp) => {

  resp.status(404).render('404');
  
});