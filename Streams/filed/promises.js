import { log } from "console";
import fs from "fs/promises"
const fileHandle= await fs.open("text.txt")
// console.log(fileHandle);

console.log(fileHandle.fd);

// const writeStream=fileHandle.createWriteStream("text5.txt",{
//     encoding:"utf-8"
// })
// writeStream.write("hiii")

//open method procvide themethoods to read file and write file as well 

//reading file using file handle using fs promises 
// const fileHandle2=await fs.open("text4.txt");
// const buff=await fileHandle2.read({buffer:Buffer.alloc(64*1024)});
// console.log(buff.bytesRead);
// console.log(fileHandle2.fd);
// //o we can do this as well 
// const{buffer,bytesRead}= await fileHandle.read({buffer:Buffer.alloc(64*1024)})
// console.log(buffer,bytesRead);


///methods on write or read method 

const fileHandle3=await fs.open("text.txt","w+")
const {buffer:writtenBuffer,bytesRead:ReadeadBytes}=await fileHandle3.read({buffer:Buffer.allocUnsafe(10*1024)})
console.log(writtenBuffer,ReadeadBytes);//its renaming because we used the buffer and bytesRead before 

await fileHandle3.write("hhi")


