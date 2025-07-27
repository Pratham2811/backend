import { error } from "node:console";
import { createReadStream, createWriteStream } from "node:fs";
import net from "node:net"
const client =net.createConnection({port:4000,host:'192.168.47.87'},()=>{
    console.log("Connectd to the server ");
    
})

client.on("error",(error)=>{
    console.log(`server Lost: ${error}`);
    
})
// client.on("data",(chunk)=>{
// console.log(chunk.toString());

    
//  })
process.stdin.on("data",(input)=>{
    const inputString=input.toString(); //input comes with addition of next line from the termional
     console.log(inputString);
     console.dir(inputString)//checks if anything comes added with the string or not 
    //and to avoid it always trim the string aslways when input is coming from the terminal
    //or use console.log(JSON.stringify(inputString))//output: send\n

 if(inputString.trim()==='send'){//trimmed the input if don trimmed condition will not stisfiy
       const readStream= createReadStream("D:\\Courses\\Algorithm\\MIT algorithm\\1.mp4");
       console.log(inputString);
       
      readStream.pipe(client);
       
        readStream.on("end",()=>{
        console.log("reading File is ended");
        
       })
     } else{
       console.log(inputString);
       
     }
    
})




//uploading file on server
//   const readStream= createReadStream("D:\\Courses\\Algorithm\\MIT algorithm\\1.mp4");
//     //    console.log(inputString);
       
//        readStream.pipe(client);
       
//        readStream.on("end",()=>{
//         console.log("reading File is ended");
//        })





       //Downlaoding file from server now using write stream

    //    const writeStream=createWriteStream("downloadfromServer.mp4")
    //    client.pipe(writeStream)
    //    client.on("end",()=>{
    //     console.log("File Downlaoded successfully");

        
    //    })




// //second method to write the data or downlaod 
// const writeStream=createWriteStream("C:\\Users\\prath\\OneDrive\\Desktop\\downloadfrom.mp4")
// client.on('data',(chunk)=>{

//     writeStream.write(chunk)
    
// })