const names = "Qasinow";
const { copyFileSync } = require('fs');
// console.log(names);

// const hi = () => {

//     console.log(`${names}`)
// }

// hi();

// console.log(global)

// global.setTimeout(()=> {console.log("qascxim")}, 433);


// const int = setInterval(() => {
//    console.log(Date.now()); 
// }, 200);

// console.log(__dirname);
// console.log(__filename);

// const myFile = require('./myNodefile');
// console.log(myFile.yourPeeps);

// const { myPeeps } = require('./myNodeFile')

// console.log(yourPeeps)

// const os = require('os');

// console.log(os.platform());


const fs = require('fs');

// read the file

// fs.readFile('./docsa/file.md', (err, data) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log(data.toString());
// });
// console.log('qasim b4')


// fs.writeFile('./docs/fila.md', 'data', ()=>{console.log('file was written')});

fs.mkdir('./docs2', (err)=>{console.log(err.code)});