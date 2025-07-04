 import { Buffer, constants } from "buffer";
import fs from "fs/promises"
// // Buffer.poolSize = 10000;

// // Condition for allocUnsafe to use Buffer Pool
// // BufferSize < Buffer.poolSize >>> 1

// // const a = Buffer.alloc(4294967296);
// // const z = Buffer.alloc(4);

// // const b = Buffer.allocUnsafe(4095);
// // const c = Buffer.allocUnsafe(4095);

// const a = Buffer.allocUnsafe(4)
// const b = Buffer.allocUnsafeSlow(4)

// console.log(a.buffer.byteLength);
// console.log(b.buffer.byteLength);

// const d = Buffer.from('a'.repeat(constants.MAX_STRING_LENGTH));
// // const string = d.toString()

// const joinBuffer = Buffer.concat([a, z]);

// // b[2] = 97;
// // c[0] = 101;

// // console.log(a.byteLength);
// // console.log(b.byteLength);
// // console.log("***************");
// // console.log(a.buffer.byteLength);
// // console.log(b.buffer.byteLength);
// // console.log(b.buffer === c.buffer);
// console.log("End");

console.log("pool size",Buffer.poolSize);

const buf1=Buffer.from([97,99,98,100]);
console.log(buf1.buffer.byteLength);//show thr 8192
const buf2=Buffer.alloc(4);
console.log(buf2.buffer.byteLength);

const buf3 = Buffer.allocUnsafe(4);
console.log('buf3.buffer.byteLength:', buf3.buffer.byteLength);

// const fs = require('fs');

// const stream = fs.createReadStream('bigfile.txt', {
//   highWaterMark: 1024, // Each chunk is 1 KB
// });

// stream.on('data', (chunk) => {
//   console.log('Chunk size:', chunk.length);
//   console.log('Underlying byteLength:', chunk.buffer.byteLength); // Often 8192
// });


const buffer1=Buffer.alloc(4);
const buffer2=Buffer.allocUnsafe(4);
const buffer3=Buffer.allocUnsafe(8)
// console.log('buffer3.buffer.byteLength:', buffer3.buffer.byteLength);
// console.log('buffer2.buffer.byteLength:', buffer2.buffer.byteLength);
// console.log(buffer3.buffer===buffer2.buffer);

buffer2[2]=97
buffer3[5]=98
// console.log(buffer2)
// console.log(buffer3)

//conacting the two buffers 

const a=Buffer.alloc(4);
const b=Buffer.alloc(4);
const joinBuffer=Buffer.concat([a,b]);
console.log(joinBuffer);

// import { constants } from "buffer";
import { buffer } from "stream/consumers";
// const d=Buffer.from("a".repeat(constants.MAX_STRING_LENGTH))
// // console.log(d.toString());
// console.log('Buffer length:', d.length); // Should be MAX_STRING_LENGTH
const fast=Buffer.allocUnsafe();
const slow=Buffer.allocUnsafeSlow();