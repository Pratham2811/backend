import dgram from "node:dgram"
import { writeFile } from "node:fs/promises";

const socket=dgram.createSocket("udp4")

socket.on("message",(msg,rinfo)=>{
    writeFile("writtenbyudp.txt",msg);
    console.log(rinfo);
    console.log(msg);
    
    
    
})
socket.on('error',(err)=>{
    console.log(err.stack);
    
})
socket.bind({port:4000},'192.168.43.199',()=>{
    const address=socket.address()
    console.log("server is running on port",address.port);
    
}) 