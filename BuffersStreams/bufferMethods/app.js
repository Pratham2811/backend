const buffer1=Buffer.alloc(4);
buffer1[0]=97;
buffer1[1]=98;
buffer1[3]=100;
buffer1[2]=99;
console.log(buffer1.toString());//converts buffer to the valid charchter 
const buffer2=Buffer.from("Hello world","utf-8");
console.log(buffer2.toString("utf-16le"));

//propeer understanding 
//1st method tostring() 
const utf8Buf = Buffer.from("Hello", "utf8");
const utf16Buf = Buffer.from("Hello", "utf16le");

console.log("UTF-8 → UTF-8:", utf8Buf.toString("utf8"));          // ✅ Hello
console.log("UTF-8 → UTF-16LE:", utf8Buf.toString("utf16le"));    // ❌ Garbage

console.log("UTF-16LE → UTF-16LE:", utf16Buf.toString("utf16le")); // ✅ Hello
console.log("UTF-16LE → UTF-8:", utf16Buf.toString("utf8"));       // ⚠️ Looks fine but wrong

const nodeBuffer=Buffer.alloc(8);
nodeBuffer[0]=97;
nodeBuffer[7]=98;
import fs from "fs/promises"
fs.writeFile("writingBuffer1.txt",nodeBuffer);

const nodeBuffer1=Buffer.from("Hello","utf-16le");
fs.writeFile("writingBuffer2.txt",nodeBuffer1,"utf-8")

//toJSON
const buffer6=Buffer.from('abc')
console.log(buffer6.toJSON());
//slice
const  buffer7=Buffer.from("Hello World!!!");
console.log(buffer7.slice(1,5).toString())

//copy method 
const buffer8=Buffer.alloc(4);
buffer8.copy(buffer6,0,0,5)
console.log(buffer8.toString());
console.log(buffer7.includes('Hello World'));



