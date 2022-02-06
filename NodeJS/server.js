const http = require('http');
const fs = require('fs');


const server = http.createServer((req, res)=> {
  let viewPath = './web/view/'
  switch (req.url){
    case '/' :
      viewPath += 'index.html';
      break;
    case '/about' :
      viewPath += 'about.html';
      break;
    default:
      viewPath += '404.html';
      break;
  }
  
  
  res.setHeader('Content-Type', 'text/html')
  fs.readFile(viewPath, (err, data)=> {
      res.end(data)
  })


});
server.listen(3001, ()=>{
  console.log('Server Starting')
});