// const names = "Qasinow";
// const { copyFileSync } = require('fs');
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

//file system node.js
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
// fs.mkdir('./docs2', (err)=>{console.log(err.code)});
// fs.rmdir('./docs2', (err)=>{console.log(err)})

// if(fs.existsSync('./docs')) {
//   fs.rmdir('./docs', ()=>{console.log('docs deleted')})
// } else {
//   fs.mkdir('./docs', ()=>{console.log('docs created')})
// }

// let count = 0;
// let cont = 'Abul   '
// let cont2 = 'Qasim   '
// while(count<25){
//   if(count%2==0)
//   {
//     cont = cont.concat(cont)
//   } else {
//     cont = cont.concat(cont2)
//   }
//   count++;
// }


// fs.writeFile('./docs/fila.md', cont, ()=>{console.log('file was written')})

// const readStream = fs.createReadStream('./docs/fila.md');
// const writeStream = fs.createWriteStream('./docs/newFila.md');

// readStream.on('data', (chunk)=>{
//   console.log('new Stuff')
//   console.log(chunk.toString())
  
//   writeStream.write("\n Brah new chhunk\n \n \n \n\n\n\n\n\n\n\n")
  

//   writeStream.write(chunk)
  
// })

// readStream.pipe(writeStream);
