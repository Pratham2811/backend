const uint8array=new Uint8Array(8)
// console.log(uint8array);
uint8array[0]=0x50;
uint8array[1]=0x50
uint8array[2]=0x55;
uint8array[3]=0x50;
uint8array[4]=0x50;
uint8array[5]=0x55;
uint8array[6]=0x50;
uint8array[7]=0x50;


// const decoder =new TextDecoder("UTF-8");
// console.log(decoder.decode(uint8array)
// );
import fs from "fs/promises"
fs.writeFile("writingdisk.txt",uint8array)
