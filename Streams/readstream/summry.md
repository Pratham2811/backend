🎞️ STREAMBENDING: The Luc Saga
🧪 Mission: Master Readable Streams in Node.js
🔰 1. The Idea of Streams

    A stream is like a water pipe — data flows through it chunk by chunk instead of loading the whole file at once.

✅ Why it's powerful?

    Saves memory

    Handles big files

    Controls flow (pause/resume)

    Piping makes connections easy

💧 2. Creating a Readable Stream

import fs from "fs";

const readStream = fs.createReadStream("bigfile.txt", {
  encoding: "utf-8",
  highWaterMark: 64 * 1024, // 64 KB buffer
});

✅ highWaterMark: Max internal buffer size
🔍 3. Reading the Stream

You can consume the stream in 2 modes:
➤ Flowing Mode (automatic):

readStream.on("data", chunk => {
  console.log("📦 Received chunk:", chunk.length);
});

➡️ Emits 'data' events non-stop
➡️ Ends with 'end' event
➡️ Can pause/resume
➤ Paused Mode (manual control):

readStream.on("readable", () => {
  let chunk;
  while ((chunk = readStream.read()) !== null) {
    console.log("Manually read:", chunk.length);
  }
});

➡️ Use .read() only when ready
➡️ Helpful in backpressure or batching
⚙️ 4. Controlling the Stream
Method	Action
.pause()	Stop flowing temporarily
.resume()	Resume flowing
.pipe(dest)	Send data directly elsewhere
.unpipe()	Stop piping
.destroy()	Kill stream early
📦 5. Watching Internal Buffer

This is your stream stomach 🪣
Property	Meaning
.readableLength	Current buffer size (bytes)
.readableHighWaterMark	Max buffer size allowed
.readableFlowing	Is stream in flowing mode?
.readableEnded	Is stream finished?
⚡ 6. Real-life Use Case: Copy with Backpressure

const writeStream = fs.createWriteStream("copy.txt");

readStream.on("data", (chunk) => {
  const canWrite = writeStream.write(chunk);
  if (!canWrite) {
    readStream.pause();
  }
});

writeStream.on("drain", () => {
  readStream.resume();
});

✅ Ensures no overflow — smart memory management!
🎨 7. Progress Bar (For Fun + Tracking)

let total = 0;

readStream.on("data", chunk => {
  total += chunk.length;
  const bar = "█".repeat(total / 1024) + "░".repeat(10 - total / 1024);
  console.clear();
  console.log(`[${bar}] ${total} bytes`);
});

🧠 Final Brain Map (Your Permanent Tattoo 🧠🖋️)

[Readable Stream]
     |
     |-- createReadStream(file, {highWaterMark})
     |
     |-- 'data' (auto read)     --> flowing mode
     |-- 'readable' + .read()   --> paused mode
     |
     |-- .pause(), .resume(), .pipe()
     |
     |-- .readableLength, .readableFlowing, .readableEnded
     |
     |-- use backpressure via writeStream.write() + .pause()
     |
     --> Use for files, audio, video, network, etc.

🔥 You’ve MASTERED:

    The full lifecycle of readable streams

    Manual vs automatic reading

    Internal buffer behavior

    Real-life flow control (backpressure)

    Debugging & progress visualization

    Stream = performance + control