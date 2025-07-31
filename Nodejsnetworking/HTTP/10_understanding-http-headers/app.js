import { diffieHellman } from "node:crypto";
import { createReadStream, read } from "node:fs";
import { open } from "node:fs/promises";
import net from "node:net";

const server = net.createServer( async(socket) => {
 const fileHandle=await open("D:\\Fullstack\\Backend\\Nodejsnetworking\\HTTP\\creatingmyown\\Algorithm.mp4")
  const readStream=fileHandle.createReadStream({
    highWaterMark:60,
  });
  const stat= await fileHandle.stat()//we get propties from stat it throws an object 
  const{size}=await fileHandle.stat()

    console.log(size);
  

  socket.write("HTTP/1.1 200 OKAY\n");
  socket.write("Access-Control-Allow-Origin: *\n");//for fetch request
  socket.write("Access-Control-Expose-Headers: Hello, name\n");//for someone who wants to acess the headers 
  // socket.write("Content-Type:application/pdf; charset=utf-8\n")
  socket.write("Content-Disposition:attachment; filename=story.mp4\n")
  socket.write(`Content-Length:${size}`)
  socket.write("\n\n");

  // socket.end();
  // const readStream = createReadStream("num.txt");
  // const readStream = createReadStream("river.webp");
  // const readStream = createReadStream("numbers.txt");
  // const readStream = createReadStream(
  //   "C:\\Users\\anura\\OneDrive\\Desktop\\4k-video.MP4"
  // );

  //creating readstream using open ( from fs promises)
  //control speed of transmitting the data 
//  readStream.on("data",(data)=>{
//        socket.write(data)
//        readStream.pause();
//        setTimeout(()=>{
//         readStream.resume();
//        },50)
//  })
readStream.on("pause",()=>{
  console.log("Paused by browser ");
  
})
readStream.on("resume",()=>{
  console.log("resume by browser ");

})
  readStream.pipe(socket);
  readStream.on("end", () => {
    console.log("File ended");
  });

  socket.on("data", (chunk) => {
    // console.log(chunk.toString());
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
