// import fs from "fs/promises"

// const fileHandle= await fs.open('text.txt',"w+")
// const readStream=fileHandle.createReadStream()
// console.log(readStream);
import fs from "fs/promises";


const fileHandle1=await fs.open("text.txt")
const fileHandle2=await fs.open("abcd.txt","w")
const readStream=fileHandle1.createReadStream();
const writeStream=fileHandle2.createWriteStream();
// For using readStream is promises version we need to open the file first in write/read mode

readStream.on("data",(chunk)=>{
    console.log(chunk);
    
    
})
// readStream.pipe(writeStream)
// console.log(readStream);


// const fileHandle1 = await fs.open("text.txt");

// const fileHandle2 = await fs.open("abc.txt", "w+");

// // return a object with methods and properties



// const readStream = fileHandle1.createReadStream();

// // This gives the exact readStream we were using without promises.

// //  And can perform all the event/Methods on it.



// const writeStream = fileHandle2.createWriteStream();

// // This gives the exact writeStream we were using without promises.

// //  And can perform all the event/Methods on it.



// readStream.pipe(writeStream);



// // Close both file handles

// writeStream.on("close", async () => {

//   await fileHandle1.close();

//   await fileHandle2.close();

//   console.log("file Closed")

// });