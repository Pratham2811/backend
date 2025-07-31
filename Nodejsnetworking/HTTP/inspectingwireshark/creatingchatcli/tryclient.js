import { Socket } from "node:dgram";
import path from "node:path";
import {  createReadStream, createWriteStream, statSync } from "node:fs";
import net from "node:net"
const HOST='192.168.165.87'
const PORT=4000;

const client=net.createConnection({port:PORT,host:HOST},()=>{
    console.log("Clinet connected to server");



})
client.on("data",(data)=>{




      const dataHandler=(data)=>{
    const message=data.toString()
     console.log(message);
     
   }
    if(data.toString().startsWith("FILE:")){
        const parts=data.toString().split(":")
        const fileName=parts[1]
        const fileSize=parseInt(parts[2],10)
        let receivedBytes=0;
        client.removeAllListeners("data",dataHandler)
        const writeStream=createWriteStream(`recivedfromClient_${fileName}`)
        client.on("data",(data)=>{
            writeStream.write(data)
        receivedBytes+=data.length
         if(receivedBytes>=fileSize){
            writeStream.end(()=>{
                console.log("File saved sent by client");
                client.on("data",dataHandler)
                
            })
        }
        })
       
    }else{
        console.log(data.toString());
        
    }


    
})

//for the text file 
// client.on("data",(data)=>{
//     const message=data.toString().trim()
// if(message.startsWith('FILE:')){
//     const [meta,...fileContent]=message.split('\n');
//     const fileName=meta.split(":")[1];
//     const fileData=fileContent.join("\n")
//      const savePath = path.join("C:\\Users\\prath\\OneDrive\\Desktop", `received_${fileName}`);
//     const writeStream = createWriteStream(savePath);
//     writeStream.write(fileData, () => {
//       console.log(`Received and saved file: ${fileName}`);
//     });
    
// }else{
//     console.log(message);
    
// }
    
    

    
// })
// client.on("error",(error)=>{
//     console.log("Error on client: ",error.message);
// })
// client.on("close",()=>{ 
//     console.log("Client connection closed");
// })

process.stdin.on("data",(input)=>{
    const inputString=input.toString().trim()
   
    if(inputString==="/send"){
         const filePath="D:\\Courses\\Algorithm\\MIT algorithm\\3.mp4"
 const filename=path.basename(filePath)//gives us th basename of file like here = 3.mp4
 const fileSize=statSync(filePath).size

 //sending header to server
 const header=`FILE:${filename}:${fileSize}`
 client.write(header)
 const readStream=createReadStream(filePath);
readStream.pipe(client)
readStream.on('end',()=>{
    console.log("File stream finished sending");
    
})

    }else{
        client.write(inputString)
    }
})