// const fs =require("fs")
// //console.log(fs);
// const index=fs.readFileSync("./index.js",'utf-8')
// console.log(index);
//we dont hve to use the above method because it block the maiin thread which is not good practice 
//so we use the method readFile() fro fs/promise so it will perform better 

import { readFile } from "node:fs/promises";
//import fs from "fs"
console.time()
let count = 0;
 const timer=setInterval(() => {
  console.log(count++);
  if(count==80){
    clearInterval(timer);
    console.timeEnd();
  }
}, 50);
//const reading =await fs.readFileSync("./text.txt","utf-8");
const reading =await readFile("./text.txt","utf-8");
console.log("File Reading is done now ✅");

console.log("End");





