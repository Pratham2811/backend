// function sum(...nums){
//     return nums.reduce((curr,acc)=>curr+acc,0);
// }

// function product(...nums){
//     return nums.reduce((curr,acc)=>curr*acc);
// }
// module.exports={
//     sum,
//     product
// }
// exports.add=90;

console.log("Hi running");//for  making require fucntion
console.log(send);
// send.a=50

const sum=function(...nums){
    return nums.reduce((curr,acc)=>curr+acc,0);
}
module.exports=sum