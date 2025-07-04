import fs from "fs"
// const content = await fs.readFile('chars.txt',"utf-8")
// console.log(content);
// console.time()

// const videoFile=await fs.readFile("C:\\Users\\prath\\OneDrive\\Desktop\\Episode 03 - Laying the foundation.mp4")

// await fs.writeFile("reactvid.mp4",videoFile)
// console.timeEnd();

//if you open video in the vs code you system will crash 
//use code load all file data in to ram by loop and will jam the memory 

///how the stream asre used to red the data we will see it 

 const readStream=fs.createReadStream("C:\\Users\\prath\\OneDrive\\Desktop\\Episode 14 - NetflixGPT - The Beginning.mp4",{
            highWaterMark:100*1024*1024//64KB

 });
 let chunkCount=0;
 //read strem provides the events on it for on
 readStream.on("data",(chunk)=>{
     console.log('📦 New chunk received:', chunk.length, 'bytes')
    chunkCount++;
 })
  readStream.on("end",()=>{
     console.log('✅ Finished reading 3GB file!')
    console.log(chunkCount);
    
 })
  readStream.on("error",(err)=>{
       console.error('❌ Error reading file:', err);
    
 })
 //now appending chunks to the file step by step we will is it possible or not 
//  console.time();
 
//  readStream.on('data',(chunk)=>{
//     fs.appendFileSync("reactvid.mp4",chunk);
//     console.log("Written the file ");
    
//  })
//  console.timeEnd();