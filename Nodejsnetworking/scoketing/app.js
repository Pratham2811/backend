import dgram from "node:dgram"
import { createWriteStream } from "node:fs";
import { writeFile } from "node:fs/promises";

const socket=dgram.createSocket("udp4")
     const writeStream=createWriteStream("writtenbystream2.txt")
socket.on("message",(msg,rinfo)=>{
    if(msg.toString()=='EOF'){
         socket.send("Chunk Recived succesfully on server",rinfo.port,rinfo.address)
    }else{writeStream.write(msg)}
    

    
   
    
})
socket.on('error',(err)=>{
    console.log(err.stack);
    
})
socket.bind({port:4000},'localhost',()=>{
    const address=socket.address()
    console.log("server is running on port: ",address.port);
    
}) 
