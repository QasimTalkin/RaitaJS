# NODE

## 1)
-  NODE compilations ->  js -> c++ -> assemble -> machaine
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
  - `mkdir`
  - 