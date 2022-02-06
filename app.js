const express = require('express');

const app = express();

app.listen(3001);

//Home
app.get('/', (req, resp) => {

resp.sendFile('./NodeJsWeb/view/index.html', {root: __dirname});

});

//About
app.get('/about', (req, resp) => {

  resp.sendFile('./NodeJsWeb/view/about.html', {root: __dirname});
  
  });
  
//404
app.use((req, resp) => {

  resp.status(404).sendFile('./NodeJsWeb/view/404.html', {root: __dirname});
  
  });