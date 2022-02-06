# SASS - Raita

Build our own CSS library
## What is SASS?

- flexible CSS built in ruby
- functions loop variables and inheritance
- used to build cs

## create and compile to CSS

- start up 
- google fonts 

## Varibles
- can create variable for reuse 
```scss
  //Declaring variables Theme Colors 
  $primary : #7d91ec;
  $secondly : #7deca8; 
  $error : #ee5151


  h1 {
    a {
      color:  $secondary;
    }
  }
```
- can also add other propertied like margin and padding 
- rem: looks at html 'root' font size
```scss
// spacing 
$base-padding: 0.74rem;
$base-margin: 0.75rem;

```

## Partials 

- split code into multiple files 
- file for vars, 
- file for button , color and so on 
```
var.scss // having all the vars 

we import it in main 

@import 'var';
```

## Nesting Rule
```js
//css 
.card .card-title {

}

//scss
.card {
  .card-title {
    
  }
}
```

## Math in Scss

- can use it for variation 
- can use * to multiply 
  `$somsixe*0.75, $somsize*2`
- division : use the math package 
- ***math package*** `@use 'sass:math'`
`border-radius: math.div($base-border-radius, 2);`
- debug sass files
  - we use 

```scss
@debug 'hello';
@debug math.div(4,3);
@debug math.floor(2.5);
```

## maps in scss
- collect  a lot of diff vars and and values as hash of key values 
```scss
  @debug map-get($colors, 'error' );
 @debug map-has-key($colors , 'ss' );
 @debug map-remove($colors, 'black');
@debug map-merge($colors, $colors);
```

## Loops 
- @each 
- running an each loop on collection of colors
```scsss
@each $key, $val in $colors {
    .text-#{$key}{
        color:$val
    }

    .bg-#{$key}{
        background-color: $val;
    }
}
}
```
- @for 

## Conditional
- @if 
- @else 
## parent selectors 
- `&:`

## Mixins (group together bunch of css properties and values )
- group of elevemts with same properties 
- we create mixin for these
- create `@mixin btn($bg-color: #e2e2e2) {  background-color:$bg-color}` decalred with default value 
- use `@include btn($some-value)` or `@include btn;` uses default

## Functions in SASS
- manipulation 
- similar to lighten, darken, mix..
```scss

```



# NODE - Raita

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


## NPM 
  - loadash
  - express 
- Express (easy to routes clean code )
- npm i
```js
const express = require('express');

const app = express();

app.listen(3001);

app.get('/', (req, resp) => {

resp.sendFile('./NodeJsWeb/view/index.html', {root: __dirname});

});

```
- Express 404 -> put at last will be defulted using `use`
`resp.status(404).sendFile('./NodeJsWeb/view/404.html', {root: __dirname});`