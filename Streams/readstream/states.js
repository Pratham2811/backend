import fs, { read } from "fs"

const readStream=fs.createReadStream("chars.txt",{
    encoding:'utf-8',
    highWaterMark:4,

}
)

readStream.on('data',(chunk)=>{
    console.log(chunk);
    fs.appendFileSync("abcd.txt",chunk);
    readStream.pause()
console.log(readStream.isPaused());
  
setTimeout(()=>{
    readStream.resume()
},2000)
})
readStream.on('end',()=>{
console.log(readStream.readableEnded);
})
console.log(readStream.readableFlowing);


readStream.on("resume",()=>{
    console.log("Stream is resumed ");

    
})
readStream.on("pause",()=>{
    console.log("Stream is Paused");
    
    
})