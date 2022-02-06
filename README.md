# NODE

## 1)

- NODE compilations ->  js -> c++ -> assemble -> machaine
- chek version `node -v`
- `code .`
- `node fileNameWithoutExtension`

## 2)  

- function `let i = () => {}`
- the global object, same as window object in js
  - represents a global context in node file
  - `__dirname` absolute parth of current folder path
  - `__filename` path with file name

## 3)

- file and modules
- `require(./filename`
- cant usue the file unless its manylly exported
- `module.exports = 'qasim`
- to import multiple diffrent things
  - export as object
- Import destructuring

## 4

- built in module os
  - `const os = require('os'); console.log(os.platform());`
- file system and

## 5)

- Async code that fires a function upon completion (call aback)
- file system

  ```js
  const fs = require('fs');

  // read the file

  fs.readFile('./docs/file.md', (err, data) => {
      if (err) {
          console.log(err);
      }
      console.log(data);
  });
  ```

- right and wrong location
- buffer use `toString()`

- WRITE file
  - write and create a file
   `fs.writeFile('./docs/fila.md', 'data', ()=>{console.log('file was written')});`
- make directory
  - `fs.mkdir('./docs2', (err)=>{console.log(err.code)});`
-deleting files
  `fs.rmd('./docs2', (err)=>{console.log(err)})`
  -folder
  `fs.rmdir('./docs2', (err)=>{console.log(err)})`
  - exists
`console.log(fs.existsSync('./docs'))`
`

```js
if(fs.existsSync('./docs')) {
  fs.rmdir('./docs', ()=>{console.log('docs deleted')})
} else {
  fs.mkdir('./docs', ()=>{console.log('docs created')})
}
```

## 6-trems

- lettle bits of data at a time
  - REad strems
  - write Strems

```js
const readStream = fs.createReadStream('./docs/fila.md');
const writeStream = fs.createWriteStream('./docs/newFila.md');

readStream.on('data', (chunk)=>{
  console.log('new Stuff')
  console.log(chunk.toString())
  
  writeStream.write("\n Brah new chhunk\n \n \n \n\n\n\n\n\n\n\n")
  

  writeStream.write(chunk)
  
})

readStream.pipe(writeStream);

```

## creat server

- require http 
- takes in call back to perform when is hit
- taking in req and resp args 
- server .liten 
  - listens for req on port  

```js
const http = require('http');
const server = http.createServer((req, res)=> {

  console.log('Server HIT. \n')
  console.log(req.url, req.method)
  // Set header 
  //res.write('cool cool ');
  res.setHeader('Content-Type', 'text/html')
  res.write(`<h1> ${req.url} </h1> \n <h2>  ${res.hasHeader('content-type')} </h2>`);
  res.end();

});

server.listen(3001, ()=>{
  console.log('Server Starting')
});

```

## html page to browsers
```js
const http = require('http');
const fs = require('fs');
let fileData = ''
  const server = http.createServer((req, res)=> {
    res.setHeader('Content-Type', 'text/html')
    if (req.url == '/'){
      fs.readFile('./web/view/index.html', (err, data)=> {
        res.end(data)
       })
    } else 
    
    {
      res.end(`<h1> Bar Request: ${req.url}</h1>`)
    }
  });
  server.listen(3001, ()=>{
    console.log('Server Starting')
  });
```

- redirect to 
`res.setHeader('location of the web page', 'loc.html'); resp.end`


- NPM 