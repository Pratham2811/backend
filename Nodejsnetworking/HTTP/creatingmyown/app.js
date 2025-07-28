
import { createReadStream } from "node:fs";
import net from "node:net"

const server=net.createServer((Socket)=>{
    console.log("client Connected");
    Socket.write("HTTP/1\n\n")//thoruoght this we can send text from server to broweser and this text is readable on browser 


    Socket.on("data",(data)=>{
        console.log(data.toString());
        
    })
    const readStream=createReadStream("numbers.txt")
    readStream.pipe(Socket);
    readStream.on("end",()=>{
        console.log("File ended Reading");
        
    });
    readStream.on("error",(error)=>{
        console.log(error);
        
    })
    Socket.on("error",(error)=>{
        console.log(`Error While on Socket: ${error}` );
        
    })

    

})

server.listen(4000,()=>{
    console.log("Server is listening on port 4000");
    
})