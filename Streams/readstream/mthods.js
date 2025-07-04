// import fs from "fs"
// const readStream=fs.createReadStream("chars.txt",{
//     highWaterMark:4,
// })

// let countChunk=0;
// readStream.on('data',(chunk)=>{
//     console.log(chunk);
    
//     console.log("Is stream flowing?", readStream.readableFlowing);
// })
// readStream.on('readable', () => {
//   let chunk;
//   console.log("Buffer size right now:", readStream.readableLength);
       
//   while ((chunk = readStream.read()) !== null) {
//     countChunk++;

//     console.log('Got chunk:', chunk);
//    console.log("Buffer size right now:", readStream.readableLength);
//   }
// });
// readStream.on("end",()=>{
//     console.log(countChunk);
// })
 

// console.log("HighWaterMark:", readStream.readableHighWaterMark);
import fs from 'fs';

const readStream = fs.createReadStream('chars.txt', {
  highWaterMark: 4, // 1 KB
  encoding: 'utf-8'
});

readStream.on('data', (chunk) => {
  console.log('📦 Got:', chunk.length, 'bytes');
  
  if (!readStream.readableFlowing) {
    console.log('⏸️ Stream is paused');
  }
});

readStream.on('end', () => {
  console.log('✅ Done reading. Stream ended:', readStream.readableEnded);
});
