const response= await fetch("http://192.168.0.102:4000")
console.log(response);

response.headers.forEach( (key,header)=> {
    console.log(`key is ${header} : value is ${key}`);
    console.log(`${header} :${key    }`);
    
});

