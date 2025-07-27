import { Socket } from "node:dgram";
import { createReadStream, createWriteStream } from "node:fs";
import net from "node:net"

const client=net.createConnection({port:4000,host:"192.168.173.87"},()=>{
    console.log("client Connected to server");
    
})
//accepting noremal data 
// client.on('data',(chunk)=>{
//     console.log(chunk.toString());
    
// })

client.on("error",(error)=>{
    console.log("Server Lost: ",error.message);
    
})



//uploading from client
process.stdin.on('data',(input)=>{
    const inputString=input.toString().trim();
    if(inputString==='send'){
        const readStream=createReadStream( "D:\\Courses\\Algorithm\\MIT algorithm\\1.mp4")
        readStream.pipe(client);
        readStream.on("end",()=>{
            console.log("file uploaded successfully");
            
        })
    }
})

//downaloding file uploaded by server


const writeStream=createWriteStream("downladedFromServer.mp4")
client.pipe(writeStream);
client.on('end',()=>{
    console.log("File Downloaded Successfully from server");
    
})