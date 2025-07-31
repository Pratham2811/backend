import { diffieHellman } from "node:crypto";
import { createReadStream, read } from "node:fs";
import { open } from "node:fs/promises";
import net from "node:net";
import { setDefaultHighWaterMark } from "node:stream";

const server = net.createServer( async(socket) => {
 const fileHandle= await open("numbers.txt")
  const readStream=  fileHandle.createReadStream({
    highWaterMark:60,
  });
  const stat= await fileHandle.stat()
  const{size}=await fileHandle.stat()
  socket.write("HTTP/1.1 200 OKAY\n");
  socket.write("Access-Control-Allow-Origin: *\n");
  socket.write("Access-Control-Expose-Headers:*\n"); 
  socket.write("Content-Type:application/json; charset=utf-8\n")
  socket.write("Content-Disposition:attachment; filename=story.mp4\n")
  socket.write("\n\n")
  // socket.write(`Content-Length:7`)
//  setTimeout(()=>{
//    socket.write("\n\n");
//  },2000)
//  setTimeout(()=>{
//     socket.end(`{"name":"prathamesh"}`)
//  },4000)
readStream.on("pause",()=>{
  console.log("Paused by browser ");
})
readStream.on("resume",()=>{
  console.log("resume by browser ");
})
readStream.on("data",(chunk)=>{
  socket.write(chunk)
  readStream.pause()
  setTimeout(()=>{
     readStream.resume()
  },10)
})
  readStream.on("end", () => {
    console.log("File ended");
    socket.end()
  });

  socket.on("data", (chunk) => {

  });

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
