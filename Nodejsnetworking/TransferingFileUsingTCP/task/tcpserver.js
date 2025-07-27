import { Socket } from "node:dgram";
import { createReadStream, createWriteStream } from "node:fs";
import net from "node:net";
let clientId=0;
const clients=[]
const server=net.createServer((Socket)=>{
    console.log("Client connected");
    clientId++;
    Socket.id=clientId;
    clients.push(Socket);

    

    Socket.on("error",(error)=>{
        console.log("Client Disconnected withou Ack: ",error.message);
        
    })
    //writing the uploaded fule from the clients 
let hasRecivedFile= false;
Socket.on('data',()=>{
    if(!hasRecivedFile){
           const WriteStream=createWriteStream("output.mp4");
    Socket.pipe(WriteStream)
    Socket.on("end",()=>{
    console.log("File downloaded from client succesfully");
        hasRecivedFile=true;
    })
    }
})
 

    //sending file back to the clients upload from server
    clients.forEach((client)=>{
        if(client!==Socket){
              const readStream=createReadStream("output.mp4")
              readStream.pipe(Socket);
              readStream.on("end",()=>{
               console.log("File sent to clients sucessfully");
        
    })
        }
    })
  
})

server.listen({port:4000},()=>{
    const address=server.address();
    console.log(`client Is listening on port ${address.port } at ${address.address}`)
    
})