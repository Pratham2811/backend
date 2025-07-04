//creating the the writable streams 

import fs from "fs"

const writeStream=fs.createWriteStream("file.txt");//to write to a file 
//to send data to http client 
// res.write();

//creating write stream
// console.time()
// const readStream=fs.createReadStream("C:\\Users\\prath\\OneDrive\\Desktop\\Episode 14 - NetflixGPT - The Beginning.mp4",{
//     highWaterMark:1*1024*1024,
// })
// const writeStream2=fs.createWriteStream("stream.mp4",{
//     highWaterMark:1*1024*1024,
// })
// readStream.on('data',(chunk)=>{
//           const value=writeStream2.write(chunk);
          
          
// })
// readStream.on('end',()=>{
//     console.timeEnd()
// })
// const writeStream2=fs.createWriteStream("file.txt",{
//     encoding:"utf-8",
//     highWaterMark:64*1024
// })
//writing data with the write()
// const canWrite=writeStream2.write("Hello world!!");
//if the file already there while writing the file it will wipe out the file and append new incooing data 
//if the file is ot already created then file is newly created anf then streams data chunk by chunk coopied 

// const writeStream3=fs.createWriteStream('streams.mp4');
// const canWriteStream=writeStream3.write("C:\\Users\\prath\\OneDrive\\Desktop\\Episode 14 - NetflixGPT - The Beginning.mp4")
const writeStream4=fs.createWriteStream("file1.txt",{
              highWaterMark:1024*1024*1024
})

console.log(writeStream4.writableHighWaterMark);
writeStream4.write("a")
writeStream4.write("a")
writeStream4.write("a")
writeStream4.write("a")
writeStream4.write("a")
//for good practice we need to close the stream 

//how we close it ]]\\

writeStream4.end();
writeStream4.on('finish',()=>{
    console.log("finished the writting");
})