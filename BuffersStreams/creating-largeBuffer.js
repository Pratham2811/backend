// const sa=new ArrayBuffer(1.99*1024*1024*1024);
// const view=new DataView(sa);

// for(let i=0;i<view.byteLength;i++){
//     view.setInt8(i,i+1);
// }
// console.log(view);
//setting multiByte data right using the methodu >255
const b=new ArrayBuffer(4);
const view1=new DataView(b);
view1.setInt16(0,260);
console.log(view1.getInt16(0));
