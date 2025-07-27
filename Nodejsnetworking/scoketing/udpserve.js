import dgram from 'node:dgram';
import { createWriteStream } from 'node:fs';

const socket = dgram.createSocket('udp4');
const writeStream = createWriteStream("received.mp4");

let receivedBytes = 0;

socket.on("message", (msg, rinfo) => {
  if (msg.toString() === 'EOF') {
    console.log("✅ File transfer complete.");
    writeStream.end();
    return;
  }

  // Simulate backpressure if needed
  const handleBackpressure=writeStream.write(msg)
  
  
  if(!handleBackpressure){
    
    socket.send('pause',rinfo.port,rinfo.address)
    writeStream.once('drain',()=>{
      socket.send("resume",rinfo.port,rinfo.address)
    })
  }
  
  
});

socket.bind(3000, () => {
  console.log("📡 Listening on port 3000");
});
