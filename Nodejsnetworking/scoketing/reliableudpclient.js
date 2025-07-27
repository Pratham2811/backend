import dgram from "node:dgram";
import { createReadStream } from "node:fs";
import path from "node:path";

const socket = dgram.createSocket('udp4');
const CHUNK_SIZE = 1400;
const targetPort = 3000;
const targetAddress = '192.168.43.199';

const filePath = path.resolve("D:\\Courses\\Algorithm\\MIT algorithm\\1.mp4");

const readStream = createReadStream(filePath, {
    highWaterMark: CHUNK_SIZE,
});

let sequenceNumber = 0;
let sentChunks = new Map();
let awaitingAck = new Set();

function createDatapacket(seq, data) {
    const header = Buffer.alloc(6);
    header.writeUInt16BE(1, 0);      // Type 1: Data packet
    header.writeUInt32BE(seq, 2);    // 4-byte sequence number
    return Buffer.concat([header, data]); // ✅ FIXED
}

function sendChunk(seq, chunk) {
    const packet = createDatapacket(seq, chunk);
    socket.send(packet, targetPort, targetAddress, (err) => {
        if (err) console.log("send error: ", err);
    });
    sentChunks.set(seq, chunk);
    awaitingAck.add(seq);
}

readStream.on('data', (chunk) => {
    sendChunk(sequenceNumber, chunk);
    sequenceNumber++;
});

readStream.on('end', () => {
    const eofPacket = Buffer.alloc(6);
    eofPacket.writeUInt16BE(3, 0);  // Type 3: EOF
    eofPacket.writeUInt32BE(sequenceNumber);
    socket.send(eofPacket, targetPort, targetAddress);
    console.log("EOF sent");
});

socket.on("message", (msg) => {
    const type = msg.readUInt16BE(0);
    const ackseq = msg.readUInt32BE(2);
    if (type === 2) {
        awaitingAck.delete(ackseq);
        sentChunks.delete(ackseq);
    }
});

setInterval(() => {
    for (const seq of awaitingAck) {
        const chunk = sentChunks.get(seq);
        if (chunk) {
            console.log("Resending chunk: ", seq);
            sendChunk(seq, chunk);
        }
    }
}, 500);
