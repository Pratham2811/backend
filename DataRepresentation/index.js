import { readFile } from "fs/promises";

const contentBuffer = await readFile("./text.txt");
console.log("File content as string:");
console.log(contentBuffer.toString());

function convertBuff(buffer) {
    console.log("Byte-wise content:");
    for (const byte of buffer) {
        console.log(`Decimal: ${byte} | Hex: ${byte.toString(16)} | Binary: ${byte.toString(2).padStart(8, "0")}`);
    }
}

//convertBuff(contentBuffer);
