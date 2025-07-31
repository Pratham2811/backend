import { diffieHellman } from "node:crypto";
import { createReadStream, createWriteStream, read, write } from "node:fs";
import { open } from "node:fs/promises";
import net from "node:net";
import { setDefaultHighWaterMark } from "node:stream";

const server = net.createServer( async(socket) => {
 
  socket.write("HTTP/1.1 200 OKAY\n\n");
//   socket.write("Access-Control-Allow-Origin: *\n");
//   socket.write("Access-Control-Expose-Headers:*\n"); 
//   socket.write("Content-Type:application/json; charset=utf-8\n")
//   socket.write("Content-Disposition:attachment; filename=story.mp4\n")

 
//browser will write on socket 
const writeStream=createWriteStream("uploaded.txt")

socket.on("data",(data)=>{
    writeStream.write(data)
    
})
  socket.on("close", () => {
    console.log(socket.remoteAddress, ": Client disconnected");
  });

  socket.on("error", () => {
    console.log("Client Lost");
  });
  console.log("Client Connected", socket.remoteAddress);
  
});

server.listen(4000, "0.0.0.0", () => {
  console.log("Server started on port 4000");
});
