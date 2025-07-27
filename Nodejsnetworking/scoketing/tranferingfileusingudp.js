import dgram from "node:dgram"
import { createReadStream, ReadStream } from "node:fs";
import { readFile } from "node:fs/promises";
 const socket=dgram.createSocket('udp4');

 const content=createReadStream("D:\\Courses\\Algorithm\\MIT algorithm\\1.mp4",{
   highWaterMark:1400,
 });
 content.on('data',(chunk)=>{

 socket.send(chunk,4000,"192.168.43.199")
 })

content.on("end",()=>{
   socket.send(Buffer.from("EOF"),4000,"192.168.43.199")
})
 socket.on('message',(msg,rinfo)=>{
   
    console.log(msg.toString());
    console.log(rinfo);
    
    
 })