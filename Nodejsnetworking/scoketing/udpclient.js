import dgram from "node:dgram";
import { createReadStream } from "node:fs";

const socket = dgram.createSocket('udp4');
const filePath = "D:\\Courses\\Algorithm\\MIT algorithm\\1.mp4";

const readStream = createReadStream(filePath, {
  highWaterMark: 1400 // Keep under MTU
});

readStream.on('data', (chunk) => {
  socket.send(chunk, 3000, '192.168.43.199', (err) => {
    if (err) console.error("Send error:", err);
  });
});

readStream.on('end', () => {
  socket.send(Buffer.from("EOF"), 3000, '192.168.43.199');
  console.log("✅ Finished sending file");
});

socket.on("message", (msg) => {
  const command = msg.toString();
  console.log(command);
  
  if (command === 'pause') {
    console.log("⏸️ Backpressure: Pausing stream");
    readStream.pause();
//optional
    // setTimeout(() => {
    //   console.log("▶️ Resuming stream");
    //   readStream.resume();
    // }, 200); // you can increase this if receiver is slow
  }
  if(command==='resume'){
    console.log("Stream Drained : Resuming the stream");
    readStream.resume();
    
  }
});
