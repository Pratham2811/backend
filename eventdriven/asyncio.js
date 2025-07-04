// // import fs from "fs/promises"
// import fs from "fs"
// setTimeout(()=>{
//     console.log("hiii");

    
// },0)


// //async IO
// const fileContent= fs.readFileSync("file.txt","utf-8");
// console.log(fileContent);


//Blocking code 
// blocking.js
// const fs = require('fs');

// console.log('Start reading file...');

// const data = fs.readFileSync('file.txt', 'utf8'); // Blocking
// console.log('File content:', data);

// console.log('After reading file');
// nonblocking.js
// const fs = require('fs');

// console.log('Start reading file...');

// fs.readFile('file.txt', 'utf8', (err, data) => {
//   if (err) throw err;
//   console.log('File content:', data);
// });

// console.log('After reading file');


// testBlocking.js
const fs = require('fs');

// setInterval(() => {
//   console.log('⏱ Timer still ticking...');
// }, 1000);

// const data = fs.readFileSync('file.txt', 'utf8'); // Blocking!
// console.log('File content loaded');

// testNonBlocking.js


setInterval(() => {
  console.log('⏱ Timer still ticking...');
}, 1000);

fs.readFile('file.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log('File content loaded');
});
