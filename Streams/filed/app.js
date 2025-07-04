import fs, { appendFileSync } from "fs";
//time to write 1lakh number 40 secs approx
console.time();

for (let i = 0; i < 100000; i++) {
  appendFileSync("text.txt", i + "\n");
}

console.timeEnd()

import fs from "fs";

// const writeStream = fs.createWriteStream("text2.txt", {
//   encoding: "utf-8",
// });

// console.time();

// for (let i = 0; i < 100000; i++) {
//   const ok = writeStream.write(i + "\n"); // convert number to string
//   if (!ok) {
//     // if internal buffer is full, wait for drain before writing more
//     await new Promise((resolve) => writeStream.once("drain", resolve));
//   }
// }

// writeStream.end(); // finalize the stream
// console.timeEnd();
