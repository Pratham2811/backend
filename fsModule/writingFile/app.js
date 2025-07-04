// import fs from "fs/promises"

// //fs.writeFile("./file1.txt","This file is not existed created by fs module writeFIle module if this filw aslo existed then conetent is written ")
// fs.writeFile("./file1.txt","You replaced you  ")//this will replace content is exiziting file whatever content is  how much big fie is doesnt matter
// fs.appendFile("file1.txt"," Yoo THis Content is appended fffffffffffffffffffffffffffff");

//reading and writting file

import { readFile, writeFile,appendFile } from "fs/promises";

const fileConetnt = await readFile(
  "C:\\Users\\prath\\OneDrive\\Desktop\\file1.txt",
  "utf-8"
);
//console.log(fileConetnt);

writeFile("./file.txt", fileConetnt);

//reading image and taking ti dekstop
const imageContent = await readFile("./dev.png");
console.log(imageContent);
await writeFile("C:\\Users\\prath\\OneDrive\\Desktop\\dev.png", imageContent);

//how can we write error to the file

try {
  const bufferContent = await readFile("./dev.jpg");
  writeFile("./image.png", bufferContent);
} catch (err) {
  appendFile(
    "error.log",
    `\n\n\n${new Date().toLocaleTimeString()}\n${err.message}\n${err.stack}`
  );
  console.log(err);
}
