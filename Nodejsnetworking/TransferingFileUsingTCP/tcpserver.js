import { error } from "node:console";
import { createReadStream, createWriteStream } from "node:fs";
import net from "node:net"
import path from "node:path";

const server=net.createServer((socket)=>{
    console.log("client Connected Sucessfully");
    //   socket.write("Message from server that you connected")
      const writeStream=createWriteStream("output.mp4")


      //uploading file to client

    //  const filePath=path.resolve("D:\\Courses\\Algorithm\\MIT algorithm\\2.mp4")
    //   const readStream=createReadStream(filePath)
    //   readStream.pipe(socket);
    //   readStream.on('end',()=>{
    //     console.log("File uploaded By server To client");
        
    //   })
    // //   //uploaded by client and save on output.txt

      socket.pipe(writeStream);
      socket.on("end",()=>{
        socket.write("File Transferred Sucessfully")
     })
    //   socket.on("data",(chunk)=>{
    //     console.log("Data from client");
        
        
    //   })
    socket.on("error",(error)=>{
        console.log("CLient Lost Withou Ack: ",error.message);
        
    })
})

server.listen({port:4000},()=>{
    const address=server.address();
    console.log(`server is listening on port :${address.port}`);
    
})
server.on('listening',()=>{
    console.log("Listening");
    
})
server.on('close',()=>{
    console.log("Client closed ");
    
})
server.on("error",(error)=>{
    console.log("client Lost without ack:");
    
})

