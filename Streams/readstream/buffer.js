import fs from "fs";

const stream = fs.createReadStream("chars.txt", {
//   encoding: 'utf-8',
  highWaterMark: 4, // 1KB
});

// console.log('🎯 Target buffer: Fill it up...');

// setTimeout(() => {
//   console.log('🪣 After 5s, buffer size:', stream.readableLength);

// }, 5000);

// {/* 🧨 Plot twist: Since we’re NOT reading the stream, the internal buffer grows like a balloon. If this was a live system, you’d risk a crash 🧯*/ }
// stream.on('readable', () => {
//   console.log('📥 Buffer filled with:', stream.readableLength, 'bytes');

//   const chunk = stream.read();
//   console.log('✅ You just consumed:', chunk.length, 'bytes');
// });

// stream.on("readable",()=>{
//    console.log(stream.read());
   
// })



// const readStream= fs.createReadStream("chars.txt",{
//   highWaterMark:4,
// })

//  readStream.on("readable", () => {

//         console.log(stream.readableLength);

//         console.log(stream.read());

//         console.log(stream.readableLength);

//     });




const readStream = fs.createReadStream('chars.txt', {
  encoding: 'utf-8',
  highWaterMark: 4, // small size to test easily
});

console.log('🎯 Target buffer: Fill it up...');

readStream.on('readable', () => {
  console.log('📥 Buffer filled with:', readStream.readableLength, 'bytes');

  let chunk;
  while ((chunk = readStream.read(1)) !== null) {
    console.log('✅ You just consumed:', chunk.length, 'bytes');
  }

  console.log('🪣 Buffer after read:', readStream.readableLength);
});
