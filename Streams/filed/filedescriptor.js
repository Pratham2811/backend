import fs from "fs";
import { buffer } from "stream/consumers";
// fs.open("text.txt",(err,fd)=>{
//     console.log(fd);

// })
// fs.open("text2.txt",(err,fd)=>{
//     console.log(fd);

// })

// // starts from 3
// // because 0,2,3 are assigned tp stdin,stdout,stderr

// //reading file using file descriptor
// const fd=fs.openSync("text.txt");
// fs.read(fd,(err,bytesRead,bufferData)=>{
//     console.log(err);
//     console.log(bytesRead);
//     console.log(bufferData);
//     console.log(bufferData.toString());
//     console.log(bufferData.byteLength);

//  })
// //can chage the buffer size as well
// //we can aslo set position from where we can read
// const readBuffer=Buffer.alloc(64)
// const fd1=fs.openSync("app.js");
// fs.read(fd1,{
//     buffer:readBuffer,//size of buffer
//     position:2,//will read abcdef fro  cdef-from 2nd position
//     length:5,//like we have buffer size 10 kb we can read only 5 kb at a time from postion 2
// },(err,bytesRead,bufferData)=>{
//     console.log(err);
//     console.log(bytesRead);
//     console.log(bufferData);
//     console.log(bufferData.toString());
//     console.log(bufferData.byteLength);

// })
// console.log("fd1:",fd1);

//writing file using file descriptor

// const fd2=fs.openSync("text3.txt","w")
// fs.write(fd2,'abcd',(err,bytesWritten,WrittenData)=>{
//     console.log(err);
//     console.log(bytesWritten);
//     console.log(WrittenData);

// })
// // can write  buffer aswell
// const buff=Buffer.from('1234567890')
// fs.write(fd2,buff,(err,bytesWritten,WrittenData)=>{
//     console.log(err);
//     console.log(bytesWritten);
//     console.log(WrittenData);

// })

// now we can write the 1 lakh number faster than streams

// const fd = fs.openSync("text4.txt", "w");

// console.time();

// for (let i = 1; i <= 100000; i++) {
//     fs.writeSync(fd, `${i}\n`);
// }

// fs.closeSync(fd);
// console.timeEnd();

//writing data using the buffer
//  const internalBuffer=Buffer.allocUnsafe(16*1024)

//  const fd=fs.openSync("text4.txt","w")
// let bufferOffset=0;//where are we writting in buffer
// let cycles=0
// function write(str) {
//     let data = str;

//     while (data.length > 0) {
//         const bytesAvailable = internalBuffer.length - bufferOffset;
//         const bytesWritten = internalBuffer.write(data, bufferOffset, bytesAvailable, "utf-8");

//         bufferOffset += bytesWritten;

//         if (bytesWritten < data.length) {
//             // Only part of the data was written
//             data = data.slice(bytesWritten);

//             // Buffer full — flush and reset
//             fs.writeSync(fd, internalBuffer, 0, bufferOffset);
//             bufferOffset = 0;
//             cycles++;
//         } else {
//             // All data written
//             break;
//         }
//     }
// }

// function end() {
//     if (bufferOffset > 0) {
//         fs.writeSync(fd, internalBuffer, 0, bufferOffset); // flush leftover
//     }
//     fs.closeSync(fd); // close the file
// }
// console.time('write')
// let batch = "";

// for (let i = 1; i <= 1000000; i++) {
//   batch += `${i}\n`;

//   if (batch.length >= 8192) {
//     write(batch);
//     batch = "";
//   }
// }

// if (batch.length > 0) {
//   write(batch);
// }
// end();

// console.timeEnd("write")
// console.log(cycles);

const bufferSize = 8; // super small buffer
const internalBuffer = Buffer.allocUnsafe(bufferSize);

const fd = fs.openSync("small-buffer.txt", "w");

let bufferOffset = 0;
let cycles = 0;

function write(str) {
  let data = str;

  while (data.length > 0) {
    const available = internalBuffer.length - bufferOffset;
    const bytesWritten = internalBuffer.write(
      data,
      bufferOffset,
      available,
      "utf-8"
    );

    bufferOffset += bytesWritten;

    if (bytesWritten < data.length) {
      data = data.slice(bytesWritten);

      // buffer full → flush to file
      fs.writeSync(fd, internalBuffer, 0, bufferOffset);
      bufferOffset = 0;
      cycles++;
    } else {
      break;
    }
  }
}

function end() {
  if (bufferOffset > 0) {
    fs.writeSync(fd, internalBuffer, 0, bufferOffset);
  }
  fs.closeSync(fd);
}

console.time("custom-buffer");
write("abcdefghij\n"); // 11 bytes
end();
console.timeEnd("custom-buffer");

console.log("Flush cycles:", cycles);
