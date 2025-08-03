import { createReadStream } from "fs";
import { readFile } from "fs/promises";
import http from "http"
import path from "path";

const server=http.createServer( async (request,response)=>{
    
    request.on("data",(chunk)=>{
        console.log(chunk.toString());
        
    })
    console.log(request.url);
    console.log(request.method);

// if(request.url=="/"){
//     //  const readStream=createReadStream("index.html")
//     //  readStream.on("data",(chunk)=>{
//     //     response.write(chunk)
//     //  })
//     const fileContent= await readFile("./index.html")
//     response.end(fileContent)

  
// }else if(request.url==="/about.html"){
//     //      const readStream=createReadStream("about.html")
//     //   readStream.on("data",(chunk)=>{
//     //     response.write(chunk)
//     // })
//     // readStream.on("end",()=>{
//     //     response.end()
//     // })
//      const fileContent= await readFile("./about.html")
//     response.end(fileContent)
// }

if(request.url==='/'){
    const readStream=createReadStream("public/index.html")
    readStream.pipe(response)
}else{
    console.log(request.url);
    
    const readStream=createReadStream(`public/${request.url}`)
    readStream.pipe(response)
    readStream.on("error",(error)=>{
        console.log(error);
        response.end("Not Found")
    })
}
   
    // response.setHeader("Content-Type","text/html")
    // response.setHeader("Content-Disposition","attachment","filename=Story.mp4")
  
})

server.listen(80,()=>{
    const address=server.address()
    console.log(`server is running on: ${address.port}`);
    
})