// console.log(new Buffer(4));
//buffers is nodejs 

//deprecited buffer 

// const nodeBuffer= new Buffer(4);
// console.log(nodeBuffer);
//above method give you warning and to avoid it and for secure we use static methods on arrya buffers alloc() from()

const nodeBufferNew= Buffer.alloc(4);
console.log(nodeBufferNew);
  // to connect already created buffer to the node buffer we use form method 
  const arrayBuffer=new ArrayBuffer(4);
//   const node2Buffer= Buffer.alloc(arrayBuffer)//wrong
  const node2Buffer= Buffer.from(arrayBuffer)
  console.log(node2Buffer);
  //typed array to node buffer 
  const uint8array=new Uint8Array(arrayBuffer)
console.log(uint8array);
uint8array[0]=97;
uint8array[1]=98;
uint8array[2]=99;
uint8array[3]=100;
console.log(uint8array);
// const node3Buffer= Buffer.from(uint8array)
console.log(node2Buffer);

//difference b/w alloc and form 

const nodebuffer=Buffer.alloc(4);
const nodebuffer2=Buffer.from([98,99,100,101]);
console.log(node2Buffer.buffer.byteLength,"\n",nodebuffer.buffer.byteLength);
const nodebuffer3=Buffer.allocUnsafe(4);
console.log(nodebuffer3.buffer.byteLength);


//alloc vs allocUnsafe

const safeBuf = Buffer.alloc(10);         // 10 bytes, all zero
const unsafeBuf = Buffer.allocUnsafe(10); // 10 bytes, uninitialized garbage

console.log(safeBuf);   // <Buffer 00 00 00 00 00 00 00 00 00 00>
console.log(unsafeBuf); // <Buffer ab 3f 1c ... random leftover memory>

