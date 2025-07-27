import dgram from "node:dgram";
import { createWriteStream } from "node:fs";
import path from "node:path";

const socket = dgram.createSocket("udp4");
const filePath = path.resolve("output.mp4");
const writeStream = createWriteStream(filePath);

const receivedChunks = new Map(); // Map<seq, Buffer>
let expectedSeq = 0;

function sendAck(seq, rinfo) {
  const ack = Buffer.alloc(6);
  ack.writeUInt16BE(2, 0); // Type = 2 = ACK
  ack.writeUInt32BE(seq, 2);
  socket.send(ack, rinfo.port, rinfo.address);
}

socket.on("message", (msg, rinfo) => {
  const type = msg.readUInt16BE(0);
  const seq = msg.readUInt32BE(2);
  const data = msg.subarray(6);

  if (type === 1) { // DATA
    sendAck(seq, rinfo);
    if (!receivedChunks.has(seq)) {
      receivedChunks.set(seq, data);
    }

    while (receivedChunks.has(expectedSeq)) {
      writeStream.write(receivedChunks.get(expectedSeq));
      receivedChunks.delete(expectedSeq);
      expectedSeq++;
    }

  } else if (type === 3) { // EOF
    console.log("EOF received. Closing file.");
    writeStream.end();
  }
});

socket.bind(3000, () => {
  console.log(" Receiver listening on port 3000");
});
