import dgram from "node:dgram"
import { createReadStream } from "node:fs";
import { readFile } from "node:fs/promises";
 const socket=dgram.createSocket('udp4');

 const content=createReadStream("text.txt",{
    highWaterMark:1000,
 });
 content.on('data',(chunk)=>{

 socket.send(chunk,4000,"192.168.47.87",()=>{
    console.log("chunk sent succesfully yes: ",chunk.toString());
    
 })
 })


 socket.on('message',(msg,rinfo)=>{
   
    console.log(msg.toString());
    console.log(rinfo);
    
    
 })