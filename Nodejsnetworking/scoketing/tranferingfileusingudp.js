import dgram from "node:dgram"
import { createReadStream } from "node:fs";
import { readFile } from "node:fs/promises";
 const socket=dgram.createSocket('udp4');

 const content=createReadStream("text.txt",{
    highWaterMark:1000,
 });
 content.on('data',(chunk)={

 })


 socket.send(content,4000,"192.168.43.199",()=>{
    console.log("msg sent succesfully yes");
    
 })
 socket.on('message',(msg,rinfo)=>{
    
    console.log(msg);
    console.log(rinfo);
    
    
 })