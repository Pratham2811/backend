const response= await fetch("http://10.19.195.87:4000")
console.log(response);

// response.headers.forEach( (key,header)=> {
//     console.log(`key is ${header} : value is ${key}`);
//     console.log(`${header} :${key    }`);
    
// });
const decoder=new TextDecoder();
for await (const chunk of response.body){
    document.write(decoder.decode(chunk))
    
}


