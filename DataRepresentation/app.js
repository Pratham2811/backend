const digits1=[2,4,6,5];
let sumsUp=0;
let n=digits1.length
function digitsCalculation(digits){
    let nums=0;
    digits.forEach((digit,index )=> {
        nums+=digit*Math.pow(10,index);
    });
    return nums;
}
console.log(digitsCalculation(digits1));
const hello=0o237
console.log(hello);
//hexadecimal 
const hexa=0x843;
console.log(hexa);

//binary
const binary=0b110;
console.log(binary);

