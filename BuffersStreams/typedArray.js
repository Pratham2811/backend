const a =new Int8Array(4)
// console.log(a);
const ba=new ArrayBuffer(4);
const b=new Uint8Array(ba);
// console.log(b);
const uint16arry=new Uint16Array(ba);
// console.log(uint16arry);
const uint32arry=new Uint32Array(ba);

console.log(b,"\n",uint16arry,"\n",uint32arry);
//we also dont need to create buffer while creating typed array arraybuffer will crete automaticallly

const unit8array=new Uint8Array([0,0x59,0o34,21])
console.log(unit8array);
const normaArrat=[ba]
console.log(normaArrat);
